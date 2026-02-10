require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/enquiries', require('./routes/enquiryRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
