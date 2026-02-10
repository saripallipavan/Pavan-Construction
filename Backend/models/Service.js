
const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String }, // Icon class or URL
}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema);
