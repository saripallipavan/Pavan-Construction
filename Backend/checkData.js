require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Service = require('./models/Service');
const Testimonial = require('./models/Testimonial');
const Admin = require('./models/Admin');

const check = async () => {
    try {
        console.log('Starting check data script...');
        console.log('URI:', process.env.MONGO_URI ? 'Defined' : 'Undefined');
        await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
        console.log('Connected to DB');
        const pCount = await Project.countDocuments();
        const sCount = await Service.countDocuments();
        const tCount = await Testimonial.countDocuments();
        const aCount = await Admin.countDocuments();

        console.log(`Projects: ${pCount}`);
        console.log(`Services: ${sCount}`);
        console.log(`Testimonials: ${tCount}`);
        console.log(`Admins: ${aCount}`);

    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    }
};

check();
