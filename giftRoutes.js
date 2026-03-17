const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// GET all gifts -> /api/gifts
router.get('/gifts', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');

        const gifts = await collection.find({}).toArray();
        res.json(gifts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch gifts' });
    }
});

// GET gift by ID -> /api/gifts/:id
router.get('/gifts/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');

        const gift = await collection.findOne({ id: parseInt(req.params.id) });

        if (!gift) {
            return res.status(404).json({ error: 'Gift not found' });
        }

        res.json(gift);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch gift' });
    }
});

module.exports = router;
