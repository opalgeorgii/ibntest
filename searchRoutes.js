const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// SEARCH endpoint -> /api/search
router.get('/search', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');

        const { name, category, condition, age_years } = req.query;

        let query = {};

        // Filter by name
        if (name) {
            query.name = { $regex: name, $options: 'i' };
        }

        // ✅ Filter by category (IMPORTANT for this question)
        if (category) {
            query.category = category;
        }

        // Filter by condition
        if (condition) {
            query.condition = condition;
        }

        // Filter by age
        if (age_years) {
            query.age_years = { $lte: parseInt(age_years) };
        }

        const results = await collection.find(query).toArray();
        res.json(results);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Search failed' });
    }
});

module.exports = router;
