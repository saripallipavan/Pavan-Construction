
const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Admin Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // In a real app, use bcrypt to compare hashed passwords
        const admin = await Admin.findOne({ username });
        if (!admin || admin.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, admin: { id: admin._id, username: admin.username } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create Admin (One-time setup or protected route)
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = new Admin({ username, password });
        await admin.save();
        res.status(201).json({ message: 'Admin created' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
