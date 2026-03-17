const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectToDatabase = require('../models/db');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("users");

    const theUser = await collection.findOne({ email: req.body.email }); // <-- required line
    if (theUser) {
      const match = await bcryptjs.compare(req.body.password, theUser.password);
      if (!match) {
        return res.status(404).json({ error: "Wrong password" });
      }

      const payload = { user: { id: theUser._id.toString() } };
      const authtoken = jwt.sign(payload, JWT_SECRET);

      res.status(200).json({ authtoken, userName: theUser.firstName, userEmail: theUser.email });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (e) {
    return res.status(500).json({ error: "Internal server error", details: e.message });
  }
});

module.exports = router;
