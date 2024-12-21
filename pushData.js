import { MongoClient } from 'mongodb';

// MongoDB connection URL
const uri = "mongodb+srv://alagbeolalekan1000:alagbeolalekan11@cluster0.glzvad7.mongodb.net/it_health_monitor";

// Function to save data to MongoDB
async function saveDataToMongoDB(data) {
    // Create a new MongoClient
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Access the database and collection
        const database = client.db("it_health_monitor");
        const collection = database.collection("serverhealths");

        // Insert the data into the collection
        const result = await collection.insertMany(data);

        console.log(`${result.insertedCount} documents inserted successfully!`);
    } catch (error) {
        console.error("Error inserting documents: ", error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Example usage
const data = [
    {
      "timestamp": "2024-06-17 10:30:00",
      "serverName": "Server-1",
      "cpuUsage": 53,
      "diskUsage": 63,
      "memoryUsage": 73
    },
    {
      "timestamp": "2024-06-17 10:30:00",
      "serverName": "Server-2",
      "cpuUsage": 57,
      "diskUsage": 67,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 10:30:00",
      "serverName": "Server-3",
      "cpuUsage": 55,
      "diskUsage": 65,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 10:30:00",
      "serverName": "Server-4",
      "cpuUsage": 54,
      "diskUsage": 64,
      "memoryUsage": 74
    },
    {
      "timestamp": "2024-06-17 10:30:00",
      "serverName": "Server-5",
      "cpuUsage": 52,
      "diskUsage": 62,
      "memoryUsage": 72
    },
    {
      "timestamp": "2024-06-17 10:35:00",
      "serverName": "Server-1",
      "cpuUsage": 58,
      "diskUsage": 67,
      "memoryUsage": 76
    },
    {
      "timestamp": "2024-06-17 10:35:00",
      "serverName": "Server-2",
      "cpuUsage": 62,
      "diskUsage": 71,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 10:35:00",
      "serverName": "Server-3",
      "cpuUsage": 60,
      "diskUsage": 69,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 10:35:00",
      "serverName": "Server-4",
      "cpuUsage": 59,
      "diskUsage": 68,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 10:35:00",
      "serverName": "Server-5",
      "cpuUsage": 57,
      "diskUsage": 66,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 10:40:00",
      "serverName": "Server-1",
      "cpuUsage": 63,
      "diskUsage": 71,
      "memoryUsage": 79
    },
    {
      "timestamp": "2024-06-17 10:40:00",
      "serverName": "Server-2",
      "cpuUsage": 67,
      "diskUsage": 75,
      "memoryUsage": 83
    },
    {
      "timestamp": "2024-06-17 10:40:00",
      "serverName": "Server-3",
      "cpuUsage": 65,
      "diskUsage": 73,
      "memoryUsage": 81
    },
    {
      "timestamp": "2024-06-17 10:40:00",
      "serverName": "Server-4",
      "cpuUsage": 64,
      "diskUsage": 72,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 10:40:00",
      "serverName": "Server-5",
      "cpuUsage": 62,
      "diskUsage": 70,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 10:45:00",
      "serverName": "Server-1",
      "cpuUsage": 68,
      "diskUsage": 75,
      "memoryUsage": 73
    },
    {
      "timestamp": "2024-06-17 10:45:00",
      "serverName": "Server-2",
      "cpuUsage": 72,
      "diskUsage": 79,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 10:45:00",
      "serverName": "Server-3",
      "cpuUsage": 70,
      "diskUsage": 77,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 10:45:00",
      "serverName": "Server-4",
      "cpuUsage": 69,
      "diskUsage": 76,
      "memoryUsage": 74
    },
    {
      "timestamp": "2024-06-17 10:45:00",
      "serverName": "Server-5",
      "cpuUsage": 67,
      "diskUsage": 74,
      "memoryUsage": 72
    },
    {
      "timestamp": "2024-06-17 10:50:00",
      "serverName": "Server-1",
      "cpuUsage": 73,
      "diskUsage": 63,
      "memoryUsage": 76
    },
    {
      "timestamp": "2024-06-17 10:50:00",
      "serverName": "Server-2",
      "cpuUsage": 77,
      "diskUsage": 67,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 10:50:00",
      "serverName": "Server-3",
      "cpuUsage": 75,
      "diskUsage": 65,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 10:50:00",
      "serverName": "Server-4",
      "cpuUsage": 74,
      "diskUsage": 64,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 10:50:00",
      "serverName": "Server-5",
      "cpuUsage": 72,
      "diskUsage": 62,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 10:55:00",
      "serverName": "Server-1",
      "cpuUsage": 53,
      "diskUsage": 67,
      "memoryUsage": 79
    },
    {
      "timestamp": "2024-06-17 10:55:00",
      "serverName": "Server-2",
      "cpuUsage": 57,
      "diskUsage": 71,
      "memoryUsage": 83
    },
    {
      "timestamp": "2024-06-17 10:55:00",
      "serverName": "Server-3",
      "cpuUsage": 55,
      "diskUsage": 69,
      "memoryUsage": 81
    },
    {
      "timestamp": "2024-06-17 10:55:00",
      "serverName": "Server-4",
      "cpuUsage": 54,
      "diskUsage": 68,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 10:55:00",
      "serverName": "Server-5",
      "cpuUsage": 52,
      "diskUsage": 66,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 11:00:00",
      "serverName": "Server-1",
      "cpuUsage": 58,
      "diskUsage": 71,
      "memoryUsage": 73
    },
    {
      "timestamp": "2024-06-17 11:00:00",
      "serverName": "Server-2",
      "cpuUsage": 62,
      "diskUsage": 75,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 11:00:00",
      "serverName": "Server-3",
      "cpuUsage": 60,
      "diskUsage": 73,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 11:00:00",
      "serverName": "Server-4",
      "cpuUsage": 59,
      "diskUsage": 72,
      "memoryUsage": 74
    },
    {
      "timestamp": "2024-06-17 11:00:00",
      "serverName": "Server-5",
      "cpuUsage": 57,
      "diskUsage": 70,
      "memoryUsage": 72
    },
    {
      "timestamp": "2024-06-17 11:05:00",
      "serverName": "Server-1",
      "cpuUsage": 63,
      "diskUsage": 75,
      "memoryUsage": 76
    },
    {
      "timestamp": "2024-06-17 11:05:00",
      "serverName": "Server-2",
      "cpuUsage": 67,
      "diskUsage": 79,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 11:05:00",
      "serverName": "Server-3",
      "cpuUsage": 65,
      "diskUsage": 77,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 11:05:00",
      "serverName": "Server-4",
      "cpuUsage": 64,
      "diskUsage": 76,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 11:05:00",
      "serverName": "Server-5",
      "cpuUsage": 62,
      "diskUsage": 74,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 11:10:00",
      "serverName": "Server-1",
      "cpuUsage": 68,
      "diskUsage": 63,
      "memoryUsage": 79
    },
    {
      "timestamp": "2024-06-17 11:10:00",
      "serverName": "Server-2",
      "cpuUsage": 72,
      "diskUsage": 67,
      "memoryUsage": 83
    },
    {
      "timestamp": "2024-06-17 11:10:00",
      "serverName": "Server-3",
      "cpuUsage": 70,
      "diskUsage": 65,
      "memoryUsage": 81
    },
    {
      "timestamp": "2024-06-17 11:10:00",
      "serverName": "Server-4",
      "cpuUsage": 69,
      "diskUsage": 64,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 11:10:00",
      "serverName": "Server-5",
      "cpuUsage": 67,
      "diskUsage": 62,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 11:15:00",
      "serverName": "Server-1",
      "cpuUsage": 73,
      "diskUsage": 67,
      "memoryUsage": 73
    },
    {
      "timestamp": "2024-06-17 11:15:00",
      "serverName": "Server-2",
      "cpuUsage": 77,
      "diskUsage": 71,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 11:15:00",
      "serverName": "Server-3",
      "cpuUsage": 75,
      "diskUsage": 69,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 11:15:00",
      "serverName": "Server-4",
      "cpuUsage": 74,
      "diskUsage": 68,
      "memoryUsage": 74
    },
    {
      "timestamp": "2024-06-17 11:15:00",
      "serverName": "Server-5",
      "cpuUsage": 72,
      "diskUsage": 66,
      "memoryUsage": 72
    },
    {
      "timestamp": "2024-06-17 11:20:00",
      "serverName": "Server-1",
      "cpuUsage": 53,
      "diskUsage": 71,
      "memoryUsage": 76
    },
    {
      "timestamp": "2024-06-17 11:20:00",
      "serverName": "Server-2",
      "cpuUsage": 57,
      "diskUsage": 75,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 11:20:00",
      "serverName": "Server-3",
      "cpuUsage": 55,
      "diskUsage": 73,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 11:20:00",
      "serverName": "Server-4",
      "cpuUsage": 54,
      "diskUsage": 72,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 11:20:00",
      "serverName": "Server-5",
      "cpuUsage": 52,
      "diskUsage": 70,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 11:25:00",
      "serverName": "Server-1",
      "cpuUsage": 58,
      "diskUsage": 75,
      "memoryUsage": 79
    },
    {
      "timestamp": "2024-06-17 11:25:00",
      "serverName": "Server-2",
      "cpuUsage": 62,
      "diskUsage": 79,
      "memoryUsage": 83
    },
    {
      "timestamp": "2024-06-17 11:25:00",
      "serverName": "Server-3",
      "cpuUsage": 60,
      "diskUsage": 77,
      "memoryUsage": 81
    },
    {
      "timestamp": "2024-06-17 11:25:00",
      "serverName": "Server-4",
      "cpuUsage": 59,
      "diskUsage": 76,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 11:25:00",
      "serverName": "Server-5",
      "cpuUsage": 57,
      "diskUsage": 74,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 11:30:00",
      "serverName": "Server-1",
      "cpuUsage": 63,
      "diskUsage": 63,
      "memoryUsage": 73
    },
    {
      "timestamp": "2024-06-17 11:30:00",
      "serverName": "Server-2",
      "cpuUsage": 67,
      "diskUsage": 67,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 11:30:00",
      "serverName": "Server-3",
      "cpuUsage": 65,
      "diskUsage": 65,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 11:30:00",
      "serverName": "Server-4",
      "cpuUsage": 64,
      "diskUsage": 64,
      "memoryUsage": 74
    },
    {
      "timestamp": "2024-06-17 11:30:00",
      "serverName": "Server-5",
      "cpuUsage": 62,
      "diskUsage": 62,
      "memoryUsage": 72
    },
    {
      "timestamp": "2024-06-17 11:35:00",
      "serverName": "Server-1",
      "cpuUsage": 68,
      "diskUsage": 67,
      "memoryUsage": 76
    },
    {
      "timestamp": "2024-06-17 11:35:00",
      "serverName": "Server-2",
      "cpuUsage": 72,
      "diskUsage": 71,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 11:35:00",
      "serverName": "Server-3",
      "cpuUsage": 70,
      "diskUsage": 69,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 11:35:00",
      "serverName": "Server-4",
      "cpuUsage": 69,
      "diskUsage": 68,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 11:35:00",
      "serverName": "Server-5",
      "cpuUsage": 67,
      "diskUsage": 66,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 11:40:00",
      "serverName": "Server-1",
      "cpuUsage": 73,
      "diskUsage": 71,
      "memoryUsage": 79
    },
    {
      "timestamp": "2024-06-17 11:40:00",
      "serverName": "Server-2",
      "cpuUsage": 77,
      "diskUsage": 75,
      "memoryUsage": 83
    },
    {
      "timestamp": "2024-06-17 11:40:00",
      "serverName": "Server-3",
      "cpuUsage": 75,
      "diskUsage": 73,
      "memoryUsage": 81
    },
    {
      "timestamp": "2024-06-17 11:40:00",
      "serverName": "Server-4",
      "cpuUsage": 74,
      "diskUsage": 72,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 11:40:00",
      "serverName": "Server-5",
      "cpuUsage": 72,
      "diskUsage": 70,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 11:45:00",
      "serverName": "Server-1",
      "cpuUsage": 53,
      "diskUsage": 75,
      "memoryUsage": 73
    },
    {
      "timestamp": "2024-06-17 11:45:00",
      "serverName": "Server-2",
      "cpuUsage": 57,
      "diskUsage": 79,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 11:45:00",
      "serverName": "Server-3",
      "cpuUsage": 55,
      "diskUsage": 77,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 11:45:00",
      "serverName": "Server-4",
      "cpuUsage": 54,
      "diskUsage": 76,
      "memoryUsage": 74
    },
    {
      "timestamp": "2024-06-17 11:45:00",
      "serverName": "Server-5",
      "cpuUsage": 52,
      "diskUsage": 74,
      "memoryUsage": 72
    },
    {
      "timestamp": "2024-06-17 11:50:00",
      "serverName": "Server-1",
      "cpuUsage": 58,
      "diskUsage": 63,
      "memoryUsage": 76
    },
    {
      "timestamp": "2024-06-17 11:50:00",
      "serverName": "Server-2",
      "cpuUsage": 62,
      "diskUsage": 67,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 11:50:00",
      "serverName": "Server-3",
      "cpuUsage": 60,
      "diskUsage": 65,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 11:50:00",
      "serverName": "Server-4",
      "cpuUsage": 59,
      "diskUsage": 64,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 11:50:00",
      "serverName": "Server-5",
      "cpuUsage": 57,
      "diskUsage": 62,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 11:55:00",
      "serverName": "Server-1",
      "cpuUsage": 63,
      "diskUsage": 67,
      "memoryUsage": 79
    },
    {
      "timestamp": "2024-06-17 11:55:00",
      "serverName": "Server-2",
      "cpuUsage": 67,
      "diskUsage": 71,
      "memoryUsage": 83
    },
    {
      "timestamp": "2024-06-17 11:55:00",
      "serverName": "Server-3",
      "cpuUsage": 65,
      "diskUsage": 69,
      "memoryUsage": 81
    },
    {
      "timestamp": "2024-06-17 11:55:00",
      "serverName": "Server-4",
      "cpuUsage": 64,
      "diskUsage": 68,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 11:55:00",
      "serverName": "Server-5",
      "cpuUsage": 62,
      "diskUsage": 66,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 12:00:00",
      "serverName": "Server-1",
      "cpuUsage": 68,
      "diskUsage": 71,
      "memoryUsage": 73
    },
    {
      "timestamp": "2024-06-17 12:00:00",
      "serverName": "Server-2",
      "cpuUsage": 72,
      "diskUsage": 75,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 12:00:00",
      "serverName": "Server-3",
      "cpuUsage": 70,
      "diskUsage": 73,
      "memoryUsage": 75
    },
    {
      "timestamp": "2024-06-17 12:00:00",
      "serverName": "Server-4",
      "cpuUsage": 69,
      "diskUsage": 72,
      "memoryUsage": 74
    },
    {
      "timestamp": "2024-06-17 12:00:00",
      "serverName": "Server-5",
      "cpuUsage": 67,
      "diskUsage": 70,
      "memoryUsage": 72
    },
    {
      "timestamp": "2024-06-17 12:05:00",
      "serverName": "Server-1",
      "cpuUsage": 73,
      "diskUsage": 75,
      "memoryUsage": 76
    },
    {
      "timestamp": "2024-06-17 12:05:00",
      "serverName": "Server-2",
      "cpuUsage": 77,
      "diskUsage": 79,
      "memoryUsage": 80
    },
    {
      "timestamp": "2024-06-17 12:05:00",
      "serverName": "Server-3",
      "cpuUsage": 75,
      "diskUsage": 77,
      "memoryUsage": 78
    },
    {
      "timestamp": "2024-06-17 12:05:00",
      "serverName": "Server-4",
      "cpuUsage": 74,
      "diskUsage": 76,
      "memoryUsage": 77
    },
    {
      "timestamp": "2024-06-17 12:05:00",
      "serverName": "Server-5",
      "cpuUsage": 72,
      "diskUsage": 74,
      "memoryUsage": 75
    }
  ];

saveDataToMongoDB(data);
