
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
