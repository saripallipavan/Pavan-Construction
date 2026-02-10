require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Service = require('./models/Service');
const Testimonial = require('./models/Testimonial');
const Admin = require('./models/Admin');
const fs = require('fs');

const log = (msg) => {
    fs.appendFileSync('status.txt', msg + '\n');
};

const check = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const pCount = await Project.countDocuments();
        const sCount = await Service.countDocuments();

        log(`Projects: ${pCount}`);
        log(`Services: ${sCount}`);

        if (pCount > 0 && sCount > 0) {
            log('Database populated successfully.');
        } else {
            log('Database seems empty.');
        }

    } catch (err) {
        log('Error checking database: ' + err.message);
    } finally {
        mongoose.connection.close();
    }
};

check();
