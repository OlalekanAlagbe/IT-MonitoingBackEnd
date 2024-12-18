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
        const collection = database.collection("servermemoryusages");

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
const memoryData = [
    {
        "timestamp": "2025-01-20 10:00:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 44.1,
        "free_memory": 19.9,
        "memory_usage_percent": 68.91
    },
    {
        "timestamp": "2025-01-20 10:05:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 35.6,
        "free_memory": 28.4,
        "memory_usage_percent": 55.62
    },
    {
        "timestamp": "2025-01-20 10:10:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 46.6,
        "free_memory": 17.4,
        "memory_usage_percent": 72.81
    },
    {
        "timestamp": "2025-01-20 10:15:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 39.5,
        "free_memory": 24.5,
        "memory_usage_percent": 61.72
    },
    {
        "timestamp": "2025-01-20 10:20:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 44.1,
        "free_memory": 19.9,
        "memory_usage_percent": 68.91
    },
    {
        "timestamp": "2025-01-20 10:25:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 48.0,
        "free_memory": 16.0,
        "memory_usage_percent": 75.0
    },
    {
        "timestamp": "2025-01-20 10:30:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 47.0,
        "free_memory": 17.0,
        "memory_usage_percent": 73.44
    },
    {
        "timestamp": "2025-01-20 10:35:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 36.1,
        "free_memory": 27.9,
        "memory_usage_percent": 56.41
    },
    {
        "timestamp": "2025-01-20 10:40:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 37.6,
        "free_memory": 26.4,
        "memory_usage_percent": 58.75
    },
    {
        "timestamp": "2025-01-20 10:45:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 43.7,
        "free_memory": 20.3,
        "memory_usage_percent": 68.28
    },
    {
        "timestamp": "2025-01-20 10:50:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 39.3,
        "free_memory": 24.7,
        "memory_usage_percent": 61.41
    },
    {
        "timestamp": "2025-01-20 10:55:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 36.8,
        "free_memory": 27.2,
        "memory_usage_percent": 57.5
    },
    {
        "timestamp": "2025-01-20 11:00:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 44.6,
        "free_memory": 19.4,
        "memory_usage_percent": 69.69
    },
    {
        "timestamp": "2025-01-20 11:05:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 46.2,
        "free_memory": 17.8,
        "memory_usage_percent": 72.19
    },
    {
        "timestamp": "2025-01-20 11:10:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 38.1,
        "free_memory": 25.9,
        "memory_usage_percent": 59.53
    },
    {
        "timestamp": "2025-01-20 11:15:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 43.9,
        "free_memory": 20.1,
        "memory_usage_percent": 68.59
    },
    {
        "timestamp": "2025-01-20 11:20:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 33.9,
        "free_memory": 30.1,
        "memory_usage_percent": 52.97
    },
    {
        "timestamp": "2025-01-20 11:25:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 42.8,
        "free_memory": 21.2,
        "memory_usage_percent": 66.88
    },
    {
        "timestamp": "2025-01-20 11:30:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 45.2,
        "free_memory": 18.8,
        "memory_usage_percent": 70.62
    },
    {
        "timestamp": "2025-01-20 11:35:00",
        "server": "server-1",
        "total_memory": 64,
        "used_memory": 47.2,
        "free_memory": 16.8,
        "memory_usage_percent": 73.75
    },
    {
        "timestamp": "2025-01-20 10:00:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 40.4,
        "free_memory": 23.6,
        "memory_usage_percent": 63.12
    },
    {
        "timestamp": "2025-01-20 10:05:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 42.0,
        "free_memory": 22.0,
        "memory_usage_percent": 65.62
    },
    {
        "timestamp": "2025-01-20 10:10:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 36.4,
        "free_memory": 27.6,
        "memory_usage_percent": 56.88
    },
    {
        "timestamp": "2025-01-20 10:15:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 33.9,
        "free_memory": 30.1,
        "memory_usage_percent": 52.97
    },
    {
        "timestamp": "2025-01-20 10:20:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 45.0,
        "free_memory": 19.0,
        "memory_usage_percent": 70.31
    },
    {
        "timestamp": "2025-01-20 10:25:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 38.1,
        "free_memory": 25.9,
        "memory_usage_percent": 59.53
    },
    {
        "timestamp": "2025-01-20 10:30:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 34.9,
        "free_memory": 29.1,
        "memory_usage_percent": 54.53
    },
    {
        "timestamp": "2025-01-20 10:35:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 43.9,
        "free_memory": 20.1,
        "memory_usage_percent": 68.59
    },
    {
        "timestamp": "2025-01-20 10:40:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 32.5,
        "free_memory": 31.5,
        "memory_usage_percent": 50.78
    },
    {
        "timestamp": "2025-01-20 10:45:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 32.4,
        "free_memory": 31.6,
        "memory_usage_percent": 50.62
    },
    {
        "timestamp": "2025-01-20 10:50:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 48.0,
        "free_memory": 16.0,
        "memory_usage_percent": 75.0
    },
    {
        "timestamp": "2025-01-20 10:55:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 45.3,
        "free_memory": 18.7,
        "memory_usage_percent": 70.78
    },
    {
        "timestamp": "2025-01-20 11:00:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 45.9,
        "free_memory": 18.1,
        "memory_usage_percent": 71.72
    },
    {
        "timestamp": "2025-01-20 11:05:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 47.7,
        "free_memory": 16.3,
        "memory_usage_percent": 74.53
    },
    {
        "timestamp": "2025-01-20 11:10:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 38.4,
        "free_memory": 25.6,
        "memory_usage_percent": 60.0
    },
    {
        "timestamp": "2025-01-20 11:15:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 44.4,
        "free_memory": 19.6,
        "memory_usage_percent": 69.38
    },
    {
        "timestamp": "2025-01-20 11:20:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 41.0,
        "free_memory": 23.0,
        "memory_usage_percent": 64.06
    },
    {
        "timestamp": "2025-01-20 11:25:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 40.3,
        "free_memory": 23.7,
        "memory_usage_percent": 62.97
    },
    {
        "timestamp": "2025-01-20 11:30:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 43.6,
        "free_memory": 20.4,
        "memory_usage_percent": 68.12
    },
    {
        "timestamp": "2025-01-20 11:35:00",
        "server": "server-2",
        "total_memory": 64,
        "used_memory": 42.0,
        "free_memory": 22.0,
        "memory_usage_percent": 65.62
    },
    {
        "timestamp": "2025-01-20 10:00:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 44.7,
        "free_memory": 19.3,
        "memory_usage_percent": 69.84
    },
    {
        "timestamp": "2025-01-20 10:05:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 33.8,
        "free_memory": 30.2,
        "memory_usage_percent": 52.81
    },
    {
        "timestamp": "2025-01-20 10:10:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 47.5,
        "free_memory": 16.5,
        "memory_usage_percent": 74.22
    },
    {
        "timestamp": "2025-01-20 10:15:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 37.5,
        "free_memory": 26.5,
        "memory_usage_percent": 58.59
    },
    {
        "timestamp": "2025-01-20 10:20:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 32.8,
        "free_memory": 31.2,
        "memory_usage_percent": 51.25
    },
    {
        "timestamp": "2025-01-20 10:25:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 41.5,
        "free_memory": 22.5,
        "memory_usage_percent": 64.84
    },
    {
        "timestamp": "2025-01-20 10:30:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 39.8,
        "free_memory": 24.2,
        "memory_usage_percent": 62.19
    },
    {
        "timestamp": "2025-01-20 10:35:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 45.1,
        "free_memory": 18.9,
        "memory_usage_percent": 70.47
    },
    {
        "timestamp": "2025-01-20 10:40:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 46.5,
        "free_memory": 17.5,
        "memory_usage_percent": 72.66
    },
    {
        "timestamp": "2025-01-20 10:45:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 37.6,
        "free_memory": 26.4,
        "memory_usage_percent": 58.75
    },
    {
        "timestamp": "2025-01-20 10:50:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 43.1,
        "free_memory": 20.9,
        "memory_usage_percent": 67.34
    },
    {
        "timestamp": "2025-01-20 10:55:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 44.5,
        "free_memory": 19.5,
        "memory_usage_percent": 69.53
    },
    {
        "timestamp": "2025-01-20 11:00:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 32.6,
        "free_memory": 31.4,
        "memory_usage_percent": 50.94
    },
    {
        "timestamp": "2025-01-20 11:05:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 41.3,
        "free_memory": 22.7,
        "memory_usage_percent": 64.53
    },
    {
        "timestamp": "2025-01-20 11:10:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 33.9,
        "free_memory": 30.1,
        "memory_usage_percent": 52.97
    },
    {
        "timestamp": "2025-01-20 11:15:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 32.4,
        "free_memory": 31.6,
        "memory_usage_percent": 50.62
    },
    {
        "timestamp": "2025-01-20 11:20:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 39.2,
        "free_memory": 24.8,
        "memory_usage_percent": 61.25
    },
    {
        "timestamp": "2025-01-20 11:25:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 38.8,
        "free_memory": 25.2,
        "memory_usage_percent": 60.62
    },
    {
        "timestamp": "2025-01-20 11:30:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 39.2,
        "free_memory": 24.8,
        "memory_usage_percent": 61.25
    },
    {
        "timestamp": "2025-01-20 11:35:00",
        "server": "server-3",
        "total_memory": 64,
        "used_memory": 42.8,
        "free_memory": 21.2,
        "memory_usage_percent": 66.88
    },
    {
        "timestamp": "2025-01-20 10:00:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.8,
        "free_memory": 3.2,
        "memory_usage_percent": 60.0
    },
    {
        "timestamp": "2025-01-20 10:05:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 5.8,
        "free_memory": 2.2,
        "memory_usage_percent": 72.5
    },
    {
        "timestamp": "2025-01-20 10:10:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.9,
        "free_memory": 3.1,
        "memory_usage_percent": 61.25
    },
    {
        "timestamp": "2025-01-20 10:15:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 5.3,
        "free_memory": 2.7,
        "memory_usage_percent": 66.25
    },
    {
        "timestamp": "2025-01-20 10:20:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.3,
        "free_memory": 3.7,
        "memory_usage_percent": 53.75
    },
    {
        "timestamp": "2025-01-20 10:25:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.9,
        "free_memory": 3.1,
        "memory_usage_percent": 61.25
    },
    {
        "timestamp": "2025-01-20 10:30:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.5,
        "free_memory": 3.5,
        "memory_usage_percent": 56.25
    },
    {
        "timestamp": "2025-01-20 10:35:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.8,
        "free_memory": 3.2,
        "memory_usage_percent": 60.0
    },
    {
        "timestamp": "2025-01-20 10:40:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.2,
        "free_memory": 3.8,
        "memory_usage_percent": 52.5
    },
    {
        "timestamp": "2025-01-20 10:45:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.5,
        "free_memory": 3.5,
        "memory_usage_percent": 56.25
    },
    {
        "timestamp": "2025-01-20 10:50:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.3,
        "free_memory": 3.7,
        "memory_usage_percent": 53.75
    },
    {
        "timestamp": "2025-01-20 10:55:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 5.1,
        "free_memory": 2.9,
        "memory_usage_percent": 63.75
    },
    {
        "timestamp": "2025-01-20 11:00:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.1,
        "free_memory": 3.9,
        "memory_usage_percent": 51.25
    },
    {
        "timestamp": "2025-01-20 11:05:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.3,
        "free_memory": 3.7,
        "memory_usage_percent": 53.75
    },
    {
        "timestamp": "2025-01-20 11:10:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.3,
        "free_memory": 3.7,
        "memory_usage_percent": 53.75
    },
    {
        "timestamp": "2025-01-20 11:15:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 5.8,
        "free_memory": 2.2,
        "memory_usage_percent": 72.5
    },
    {
        "timestamp": "2025-01-20 11:20:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.1,
        "free_memory": 3.9,
        "memory_usage_percent": 51.25
    },
    {
        "timestamp": "2025-01-20 11:25:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.4,
        "free_memory": 3.6,
        "memory_usage_percent": 55.0
    },
    {
        "timestamp": "2025-01-20 11:30:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 4.4,
        "free_memory": 3.6,
        "memory_usage_percent": 55.0
    },
    {
        "timestamp": "2025-01-20 11:35:00",
        "server": "server-4",
        "total_memory": 8,
        "used_memory": 6.0,
        "free_memory": 2.0,
        "memory_usage_percent": 75.0
    },
    {
        "timestamp": "2025-01-20 10:00:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 35.7,
        "free_memory": 28.3,
        "memory_usage_percent": 55.78
    },
    {
        "timestamp": "2025-01-20 10:05:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 37.6,
        "free_memory": 26.4,
        "memory_usage_percent": 58.75
    },
    {
        "timestamp": "2025-01-20 10:10:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 34.8,
        "free_memory": 29.2,
        "memory_usage_percent": 54.37
    },
    {
        "timestamp": "2025-01-20 10:15:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 40.1,
        "free_memory": 23.9,
        "memory_usage_percent": 62.66
    },
    {
        "timestamp": "2025-01-20 10:20:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 43.9,
        "free_memory": 20.1,
        "memory_usage_percent": 68.59
    },
    {
        "timestamp": "2025-01-20 10:25:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 42.9,
        "free_memory": 21.1,
        "memory_usage_percent": 67.03
    },
    {
        "timestamp": "2025-01-20 10:30:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 37.4,
        "free_memory": 26.6,
        "memory_usage_percent": 58.44
    },
    {
        "timestamp": "2025-01-20 10:35:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 43.7,
        "free_memory": 20.3,
        "memory_usage_percent": 68.28
    },
    {
        "timestamp": "2025-01-20 10:40:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 46.4,
        "free_memory": 17.6,
        "memory_usage_percent": 72.5
    },
    {
        "timestamp": "2025-01-20 10:45:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 43.1,
        "free_memory": 20.9,
        "memory_usage_percent": 67.34
    },
    {
        "timestamp": "2025-01-20 10:50:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 38.3,
        "free_memory": 25.7,
        "memory_usage_percent": 59.84
    },
    {
        "timestamp": "2025-01-20 10:55:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 37.7,
        "free_memory": 26.3,
        "memory_usage_percent": 58.91
    },
    {
        "timestamp": "2025-01-20 11:00:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 41.1,
        "free_memory": 22.9,
        "memory_usage_percent": 64.22
    },
    {
        "timestamp": "2025-01-20 11:05:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 45.0,
        "free_memory": 19.0,
        "memory_usage_percent": 70.31
    },
    {
        "timestamp": "2025-01-20 11:10:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 32.5,
        "free_memory": 31.5,
        "memory_usage_percent": 50.78
    },
    {
        "timestamp": "2025-01-20 11:15:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 47.5,
        "free_memory": 16.5,
        "memory_usage_percent": 74.22
    },
    {
        "timestamp": "2025-01-20 11:20:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 42.8,
        "free_memory": 21.2,
        "memory_usage_percent": 66.88
    },
    {
        "timestamp": "2025-01-20 11:25:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 43.9,
        "free_memory": 20.1,
        "memory_usage_percent": 68.59
    },
    {
        "timestamp": "2025-01-20 11:30:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 32.9,
        "free_memory": 31.1,
        "memory_usage_percent": 51.41
    },
    {
        "timestamp": "2025-01-20 11:35:00",
        "server": "server-5",
        "total_memory": 64,
        "used_memory": 34.4,
        "free_memory": 29.6,
        "memory_usage_percent": 53.75
    }
  ]

saveDataToMongoDB(memoryData);
