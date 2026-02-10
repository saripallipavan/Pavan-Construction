
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Pavan Constructions - Building Dreams, One Brick at a Time.
                </p>
                <div className="footer-contact">
                    <p>Phone: +91 98765 43210</p>
                    <p>Email: info@pavanconstructions.com</p>
                    <p>Address: 123 Construction Ave, City, Country</p>
                </div>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Pavan Constructions
                        </Link>
                    </div>
                    <small className="website-rights">Pavan Constructions © 2024</small>
                </div>
            </section>
        </div>
    );
};


export default Footer;
