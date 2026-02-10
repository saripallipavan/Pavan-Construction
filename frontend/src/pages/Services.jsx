import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Services.css';
import { FaHammer, FaDraftingCompass, FaBuilding, FaPaintRoller, FaHome, FaTasks, FaCouch } from 'react-icons/fa';

const Services = () => {
    const [services, setServices] = useState([]);
    const location = useLocation();

    useEffect(() => {
        // Fetch services from backend
        const fetchServices = async () => {
            try {
                const res = await axios.get('/api/services');
                setServices(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchServices();
    }, []);

    // Scroll to section based on hash
    useEffect(() => {
        if (location.hash && services.length > 0) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location, services]);

    // Helper to generate IDs
    const slugify = (text) => {
        if (!text) return '';
        return text.toLowerCase().split(' ').join('-'); // Simple slug: 'Residential Construction' -> 'residential-construction'
    };

    // Helper to map DB icons or titles to React Icons
    const getIcon = (title, iconName) => {
        // If iconName matches a known Fa icon string (from seed), return it
        // Otherwise default to title-based mapping

        if (iconName === 'FaHome' || title.includes('Residential')) return <FaHome />;
        if (iconName === 'FaBuilding' || title.includes('Commercial')) return <FaBuilding />;
        if (iconName === 'FaTasks' || title.includes('Project')) return <FaTasks />;
        if (iconName === 'FaDraftingCompass' || title.includes('Architecture')) return <FaDraftingCompass />;
        if (iconName === 'FaCouch' || title.includes('Interior')) return <FaCouch />;

        return <FaHammer />;
    };

    return (
        <div className="services-page">
            <div className="services-hero">
                <div className="services-overlay"></div>
                <div className="services-hero-content">
                    <h1>Our Services</h1>
                    <p>Building Trust, Delivering Excellence</p>
                </div>
            </div>

            <div className="services-container">
                <div className="services-grid">
                    {services.map(service => {
                        // Determine ID based on known categories to match Navbar links
                        // Navbar links: #residential, #commercial, #project-management, #architecture, #interiors
                        let id = slugify(service.title);
                        if (service.title.includes('Residential')) id = 'residential';
                        if (service.title.includes('Commercial')) id = 'commercial';
                        if (service.title.includes('Project')) id = 'project-management';
                        if (service.title.includes('Architecture')) id = 'architecture';
                        if (service.title.includes('Interior')) id = 'interiors';

                        return (
                            <div className="service-card-full" key={service._id} id={id}>
                                <div className="service-icon">
                                    {getIcon(service.title, service.icon)}
                                </div>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
