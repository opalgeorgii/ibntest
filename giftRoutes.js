const express = require('express');
const connectToDatabase = require('./db');
const router = express.Router();

// GET all gifts
router.get('/api/gifts', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');
        const gifts = await collection.find({}).toArray();
        res.json(gifts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

// GET a single gift by ID
router.get('/api/gifts/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');
        const gift = await collection.findOne({ _id: require('mongodb').ObjectId(req.params.id) });
        if (!gift) return res.status(404).json({ error: 'Gift not found' });
        res.json(gift);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
