import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServiceDetail.css';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

const ServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        const foundService = servicesData.find(s => s.id === id);
        setService(foundService);
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="service-detail-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Service not found</h2>
                <Link to="/services" className="back-btn" style={{ marginLeft: '10px' }}>Go Back</Link>
            </div>
        );
    }

    return (
        <div className="service-detail-container">
            <div className="service-detail-hero" style={{ backgroundImage: `url(${service.image})` }}>
                <div className="service-detail-overlay"></div>
                <h1 className="service-detail-title">{service.title}</h1>
            </div>

            <div className="service-detail-content">
                <Link to="/services" className="back-btn"><FaArrowLeft style={{ marginRight: '5px' }} /> Back to Services</Link>

                <div className="service-full-description">
                    <p>{service.fullDescription}</p>
                </div>

                <div className="service-features-section">
                    <h3>Key Features & Benefits</h3>
                    <div className="detail-features-list">
                        {service.features.map((feature, index) => (
                            <div className="detail-feature-item" key={index}>
                                <FaCheckCircle className="detail-check-icon" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="service-gallery">
                    <h3>Project Gallery</h3>
                    <div className="gallery-grid">
                        {service.gallery && service.gallery.map((imgUrl, index) => (
                            <img key={index} src={imgUrl} alt={`${service.title} Project ${index + 1}`} className="gallery-img" />
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link to="/contact" className="service-cta-btn" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>
                        Request a Quote for {service.title}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
