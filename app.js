const express = require('express');
const cors = require('cors');

const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3060;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', giftRoutes);
app.use('/api', searchRoutes); // ✅ required for /api/search
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
