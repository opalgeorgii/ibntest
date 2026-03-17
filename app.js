const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gifts', giftRoutes);
app.use('/api/search', searchRoutes); // <-- This line serves /api/search

const PORT = process.env.PORT || 3060;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
