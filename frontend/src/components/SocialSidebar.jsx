
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './SocialSidebar.css';

const SocialSidebar = () => {
    return (
        <div className="social-sidebar">
            <div className="quote-tab">
                <span>QUOTE</span>
            </div>
            <a href="#" className="social-icon facebook"><FaFacebookF /></a>
            <a href="#" className="social-icon twitter"><FaTwitter /></a>
            <a href="#" className="social-icon instagram"><FaInstagram /></a>
            <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
        </div>
    );
};

export default SocialSidebar;
