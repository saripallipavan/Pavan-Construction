
const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// Get all enquiries
router.get('/', async (req, res) => {
    try {
        const enquiries = await Enquiry.find().sort({ date: -1 });
        res.json(enquiries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create an enquiry
router.post('/', async (req, res) => {
    const enquiry = new Enquiry({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message
    });

    try {
        const newEnquiry = await enquiry.save();
        res.status(201).json(newEnquiry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
