const express = require('express');
const connectToDatabase = require('./db');
const router = express.Router();

// Search gifts with optional filters
router.get('/api/search', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');

        // Build query based on filters
        const query = {};
        const { name, category, condition, minAge, maxAge } = req.query;

        if (name) query.name = { $regex: name, $options: 'i' };
        if (category) query.category = category;
        if (condition) query.condition = condition;
        if (minAge) query.age = { ...query.age, $gte: parseInt(minAge) };
        if (maxAge) query.age = { ...query.age, $lte: parseInt(maxAge) };

        const results = await collection.find(query).toArray();
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
