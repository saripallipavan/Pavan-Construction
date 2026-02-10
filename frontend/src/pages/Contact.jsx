
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/enquiries', formData);
            alert('Your enquiry has been sent!');
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            alert('Error sending enquiry. Please try again.');
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <div className="contact-overlay"></div>
                <div className="contact-hero-content">
                    <h1>Contact Us</h1>
                </div>
            </div>

            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <p>We are here to answer any questions you may have about our services.</p>
                        <p><strong>Phone:</strong> +91 98765 43210</p>
                        <p><strong>Email:</strong> info@pavanconstructions.com</p>
                        <p><strong>Address:</strong> 123 Construction Ave, City, Country</p>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
