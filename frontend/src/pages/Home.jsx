
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaHome } from 'react-icons/fa';
import Services from './Services';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Home = () => {
    const [services, setServices] = useState([]);
    const [projects, setProjects] = useState([]);
    const [consultationForm, setConsultationForm] = useState({
        name: '',
        mobile: '',
        email: '',
        location: 'India',
        city: 'Chennai'
    });

    useEffect(() => {
        setServices([
            { _id: '1', title: 'Residential Construction', description: 'Building dream homes with quality materials.' },
            { _id: '2', title: 'Renovations', description: 'Upgrading existing spaces with modern designs.' },
            { _id: '3', title: 'Commercial projects', description: 'Reliable construction for business needs.' }
        ]);
        setProjects([
            { _id: '1', title: 'Modern Villa', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
            { _id: '2', title: 'Office Complex', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }
        ]);
    }, []);

    const handleFormChange = (e) => {
        setConsultationForm({ ...consultationForm, [e.target.name]: e.target.value });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/enquiries', consultationForm); // Reusing enquiry endpoint for now
            alert('Consultation request sent!');
        } catch (error) {
            alert('Error sending request.');
        }
    }

    return (
        <div className="home-container">
            <div className='hero-section'>
                <div className="hero-video-container">
                    <div className="hero-animated-bg"></div>
                </div>
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <div className="hero-text-container">
                        <h1 className="hero-title">Making a <span className="script-text">Difference</span></h1>
                        <div className="build-action">
                            <span className="build-text">WHAT DO YOU WANT TO BUILD?</span>
                            <span className="arrow-icon">➔</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Consolidated Sections */}
            <Services />
            <Projects />
            <About />
            <Contact />
        </div>
    );
}

export default Home;
