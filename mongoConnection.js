const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; // Connection URL
const client = new MongoClient(uri);

async function connectToMongo() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        
        // You can perform operations here
        const db = client.db("yourDatabaseName"); // Replace with your database name
        // Example: const collection = db.collection("yourCollectionName");

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        // Uncomment the line below if you want to close the connection after the first operation
        // await client.close();
    }
}

// Run the connection function
connectToMongo().catch(console.dir);

