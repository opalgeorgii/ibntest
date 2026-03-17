const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let dbInstance = null;

async function connectToDatabase() {
    if (!dbInstance) {
        await client.connect(); // required line
        console.log("Connected to MongoDB");
        dbInstance = client.db('giftsdb');
    }
    return dbInstance;
}

module.exports = connectToDatabase;
