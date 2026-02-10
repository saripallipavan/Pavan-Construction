
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    images: [{ type: String }], // Array of image URLs
    category: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
