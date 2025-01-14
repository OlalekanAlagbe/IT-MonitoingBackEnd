import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://alagbeolalekan1000:alagbeolalekan11@cluster0.glzvad7.mongodb.net/it_health_monitor');

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  role: String,
  lastLogin: Date
});

const User = mongoose.model('User', userSchema);


const ForgotPasswordSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  status: { type: String, enum: ['pending', 'treated'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const ForgotPassword = mongoose.model('ForgotPassword', ForgotPasswordSchema);

// Create default admin user
async function createDefaultAdmin() {
  try {
    const adminExists = await User.findOne({ email: 'alagbeolalekan1000@gmail.com' });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('lekan', 10);
      await User.create({
        email: 'alagbeolalekan1000@gmail.com',
        password: hashedPassword,
        name: 'Admin',
        role: 'admin'
      });
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
}

// createDefaultAdmin();

// Authentication middleware
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = await User.findOne({ _id: decoded._id });
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ error: 'Invalid credentials' });
    }
    user.lastLogin = new Date();
    await user.save();
    const token = jwt.sign({ _id: user._id }, 'your_jwt_secret',{ expiresIn: '1h' });
    res.send({ token });
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
});

// Create new user endpoint (admin only)
app.post('/api/create-users', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).send({ error: 'Only admins can create users' });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      ...req.body,
      password: hashedPassword
    });
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
});


// Fetch user data
app.get('/api/user', async (req, res) => {
  try {
    // Get the token from the Authorization header
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).send({ error: 'Please authenticate.' });
    }

    // Verify the token
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = await User.findOne({ _id: decoded._id });

    if (!user) {
      return res.status(404).send({ error: 'User not found.' });
    }

    // Return user data (excluding sensitive information like password)
    res.send({
      email: user.email,
      name: user.name,
      role: user.role
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Handle specific JWT errors
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).send({ error: 'Invalid token.' });
    }
    res.status(500).send({ error: 'Server error.' });
  }
});

// Change password
app.post('/api/user/change-password', async (req, res) => {
  try {
    // Get the token from the Authorization header
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).send({ error: 'Please authenticate.' });
    }

    // Verify the token
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = await User.findOne({ _id: decoded._id });

    if (!user) {
      return res.status(404).send({ error: 'User not found.' });
    }

    // Validate old password
    const { oldPassword, newPassword } = req.body;
    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordMatch) {
      return res.status(400).send({ error: 'Old password is incorrect.' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.send({ message: 'Password changed successfully.' });
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).send({ error: 'Server error.' });
  }
});


// Endpoint to handle form submission
app.post('/api/forgot-password', async (req, res) => {
  try {
    const { name, email, subject } = req.body;

    // Validate input
    if (!name || !email || !subject) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to database
    const newRequest = new ForgotPassword({ name, email, subject });
    await newRequest.save();

    res.status(201).json({ message: 'Request submitted successfully' });
  } catch (error) {
    console.error('Error submitting request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to fetch all change password request
app.get('/api/forgot-password', async (req, res) => {
  try {
    // Fetch all requests from the database
    const requests = await ForgotPassword.find().sort({ createdAt: -1 }); // Sort by latest first
    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to reset user password (admin only)
app.post('/api/reset-password', auth, async (req, res) => {
  try {
    // Ensure only admins can reset passwords
    if (req.user.role !== 'admin') {
      return res.status(403).send({ error: 'Only admins can reset passwords' });
    }

    const { email, newPassword, requestId } = req.body;

    // Find the request
    const request = await ForgotPassword.findById(requestId);
    if (!request) {
      return res.status(404).send({ error: 'Request not found' });
    }

    // Check if the request is already treated
    if (request.status === 'treated') {
      return res.status(400).send({ error: 'This request has already been treated' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    // Update the request status to "treated"
    request.status = 'treated';
    await request.save();

    res.status(200).send({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});












































// // Server Memory Usage Schema
// const serverMemoryUsageSchema = new mongoose.Schema({
  //   timestamp: { type: String, required: true },
  //   server: { type: String, required: true },
  //   total_memory: { type: Number, required: true },
//   used_memory: { type: Number, required: true },
//   free_memory: { type: Number, required: true },
//   memory_usage_percent: { type: Number, required: true }
// });

// const ServerMemoryUsage = mongoose.model('ServerMemoryUsage', serverMemoryUsageSchema);

// // Define the schema for your server health data
// const serverHealthSchema = new mongoose.Schema({
  //   timestamp: String,
  //   serverName: String,
  //   cpuUsage: Number,
  //   diskUsage: Number,
  //   memoryUsage: Number,
  // });

  // // Create the model
  // const ServerHealth = mongoose.model('ServerHealth', serverHealthSchema);
  
  // // Schema for server response time and downtime data
  // const serveDataResponseTimeUpTimeSchema = new mongoose.Schema({
    //   timestamp: String,
    //   serverName: String,
    //         network_response_time: Number,
    //         uptime: Number,
//         status: String
// });

// const ServeDataResponseTimeUpTime = mongoose.model('ServeDataResponseTimeUpTime', serveDataResponseTimeUpTimeSchema);









// // Get all server memory usage data
// app.get('/api/server-memory-usage', async (req, res) => {
//   try {
//     const data = await ServerMemoryUsage.find();
//     res.status(200).send(data);
//   } catch (error) {
//     res.status(500).send({ error: 'Failed to fetch server memory usage data' });
//   }
// });

// // Define an endpoint to retrieve data
// app.get('/api/server-health', async (req, res) => {
//   try {
//     // Fetch data from the database
//     const data = await ServerHealth.find();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Error fetching server health data:', error);
//     res.status(500).json({ message: 'Failed to fetch data' });
//   }
// });

// // Endpoint to fetch all server response time and uptime data
// app.get('/api/serve-health-responsetime-uptime', async (req, res) => {
//   try {
//     const data = await ServeDataResponseTimeUpTime.find();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch server response time and up data', error: error.message });
//   }
// });