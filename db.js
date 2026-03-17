const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const DB_NAME = 'giftsdb';

let client;
let db;

async function connectToDatabase() {
    if (db) return db;

    client = new MongoClient(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await client.connect(); // Required line for the task
    db = client.db(DB_NAME);
    console.log(`Connected to database: ${DB_NAME}`);
    return db;
}

module.exports = connectToDatabase;
