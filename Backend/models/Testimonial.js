
const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String }, // e.g., 'Homeowner', 'Business Owner'
    message: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 },
    image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', TestimonialSchema);
