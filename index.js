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

// Server Memory Usage Schema
const serverMemoryUsageSchema = new mongoose.Schema({
  timestamp: { type: String, required: true },
  server: { type: String, required: true },
  total_memory: { type: Number, required: true },
  used_memory: { type: Number, required: true },
  free_memory: { type: Number, required: true },
  memory_usage_percent: { type: Number, required: true }
});

const ServerMemoryUsage = mongoose.model('ServerMemoryUsage', serverMemoryUsageSchema);

// Define the schema for your server health data
const serverHealthSchema = new mongoose.Schema({
  timestamp: String,
  serverName: String,
  cpuUsage: Number,
  diskUsage: Number,
  memoryUsage: Number,
});

// Create the model
const ServerHealth = mongoose.model('ServerHealth', serverHealthSchema);

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
    const token = jwt.sign({ _id: user._id }, 'your_jwt_secret');
    res.send({ token });
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
});

// Create new user endpoint (admin only)
app.post('/api/users', auth, async (req, res) => {
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

// Get all server memory usage data
app.get('/api/server-memory-usage', async (req, res) => {
  try {
    const data = await ServerMemoryUsage.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch server memory usage data' });
  }
});

// Define an endpoint to retrieve data
app.get('/api/server-health', async (req, res) => {
  try {
    // Fetch data from the database
    const data = await ServerHealth.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching server health data:', error);
    res.status(500).json({ message: 'Failed to fetch data' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});