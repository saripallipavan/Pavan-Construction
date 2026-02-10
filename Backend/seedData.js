require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Service = require('./models/Service');
const Testimonial = require('./models/Testimonial');
const Admin = require('./models/Admin');
const Enquiry = require('./models/Enquiry');

const connectDB = async () => {
    try {
        console.log('Attempting to connect to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected for Seeding');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

const seedData = async () => {
    await connectDB();

    try {
        // Clear existing data
        await Project.deleteMany({});
        await Service.deleteMany({});
        await Testimonial.deleteMany({});
        await Admin.deleteMany({});
        console.log('Data Cleared');

        // Sample Projects
        const projects = [
            {
                title: 'Modern Villa',
                description: 'A luxurious modern villa with state-of-the-art amenities.',
                location: 'Hyderabad, India',
                images: ['https://images.unsplash.com/photo-1600596542815-24b5d3a0b5f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
                category: 'Residential',
            },
            {
                title: 'Corporate Office Complex',
                description: 'A 10-story office building with eco-friendly design.',
                location: 'Bangalore, India',
                images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
                category: 'Commercial',
            },
            {
                title: 'Sunset Apartments',
                description: 'Affordable luxury apartments with a sunset view.',
                location: 'Vizag, India',
                images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
                category: 'Residential',
            }
        ];

        // Sample Services
        // Sample Services
        const services = [
            {
                title: 'Residential Construction',
                description: 'Building dream homes with precision, quality materials, and timely delivery.',
                icon: 'FaHome',
            },
            {
                title: 'Commercial Construction',
                description: 'Delivering robust infrastructure, office spaces, and commercial complexes.',
                icon: 'FaBuilding',
            },
            {
                title: 'Project Management',
                description: 'Expert oversight ensuring your project stays on time and within budget.',
                icon: 'FaTasks',
            },
            {
                title: 'Architecture & Structure',
                description: 'Innovative architectural designs and structural engineering solutions.',
                icon: 'FaDraftingCompass',
            },
            {
                title: 'Interiors & Smart Home',
                description: 'Modern interior designing and smart home automation integration.',
                icon: 'FaCouch',
            }
        ];

        // Sample Testimonials
        const testimonials = [
            {
                name: 'Ram Kumar',
                role: 'Homeowner',
                message: 'Pavan Construction built our dream home exactly as we imagined. Highly recommended!',
                rating: 5,
                image: 'https://randomuser.me/api/portraits/men/1.jpg',
            },
            {
                name: 'Sita Reddy',
                role: 'Business Owner',
                message: 'Professional team and timely delivery. Very satisfied with their work on our office.',
                rating: 4,
                image: 'https://randomuser.me/api/portraits/women/2.jpg',
            },
            {
                name: 'John Doe',
                role: 'Architect',
                message: 'Great collaboration and attention to detail by the construction team.',
                rating: 5,
                image: 'https://randomuser.me/api/portraits/men/3.jpg',
            }
        ];

        // Admin User
        const admin = {
            username: 'admin',
            password: 'password123', // In a real app, hash this!
        };

        await Project.insertMany(projects);
        await Service.insertMany(services);
        await Testimonial.insertMany(testimonials);
        await Admin.create(admin);

        console.log('Database Seeded Successfully');
    } catch (err) {
        console.error('Error seeding data:', err);
    } finally {
        if (mongoose.connection.readyState !== 0) {
            mongoose.connection.close();
        }
        console.log('Connection closed');
    }
};

seedData();
