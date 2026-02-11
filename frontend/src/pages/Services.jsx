import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Services.css';
import { servicesData } from '../data/servicesData';
import { FaHammer, FaDraftingCompass, FaBuilding, FaTools, FaHome, FaCouch } from 'react-icons/fa';

const Services = () => {
    // Helper to map DB icons or titles to React Icons consistently
    const getIcon = (title) => {
        if (title.includes('Residential')) return <FaHome />;
        if (title.includes('Commercial')) return <FaBuilding />;
        if (title.includes('Project')) return <FaTools />;
        if (title.includes('Architecture')) return <FaDraftingCompass />;
        if (title.includes('Interior')) return <FaCouch />;
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
                    {servicesData.map((service) => (
                        <Link to={`/service/${service.id}`} className="service-card-link" key={service.id} style={{ textDecoration: 'none' }}>
                            <div className="service-card-full">
                                <div>
                                    <div className="service-icon">
                                        {getIcon(service.title)}
                                    </div>
                                    <h2>{service.title}</h2>
                                    <p>{service.shortDescription}</p>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
