
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="about-overlay"></div>
                <div className="about-hero-content">
                    <h1>Who We Are</h1>
                </div>
            </div>

            <div className="about-container">
                <div className="about-content">
                    {/* <h1>About Us</h1> Removed duplicate */}
                    <p>
                        Pavan Constructions is a premier construction company dedicated to building high-quality,
                        sustainable, and innovative structures. With years of experience in the industry,
                        we specialize in residential, commercial, and industrial projects.
                    </p>
                    <p>
                        Our mission is to deliver excellence in every project we undertake, ensuring client satisfaction
                        through transparent communication, timely delivery, and superior craftsmanship.
                    </p>
                    <div className="about-values">
                        <div className="value-card">
                            <h3>Quality</h3>
                            <p>We never compromise on the quality of materials or workmanship.</p>
                        </div>
                        <div className="value-card">
                            <h3>Integrity</h3>
                            <p>We build with honesty and maintain high ethical standards.</p>
                        </div>
                        <div className="value-card">
                            <h3>Sustainability</h3>
                            <p>We are committed to eco-friendly construction practices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
