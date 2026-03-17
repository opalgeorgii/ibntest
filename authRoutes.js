router.post('/login', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("users");

        // <-- This is the required line for the task
        const theUser = await collection.findOne({ email: req.body.email });

        if (theUser) {
            let result = await bcryptjs.compare(req.body.password, theUser.password);
            if (!result) {
                return res.status(404).json({ error: 'Wrong password' });
            }
            const payload = { user: { id: theUser._id.toString() } };
            const authtoken = jwt.sign(payload, JWT_SECRET);
            res.status(200).json({ authtoken, userName: theUser.firstName, userEmail: theUser.email });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (e) {
        return res.status(500).json({ error: 'Internal server error', details: e.message });
    }
});
