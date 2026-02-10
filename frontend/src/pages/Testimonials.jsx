
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await axios.get('/api/testimonials');
                setTestimonials(res.data);
            } catch (err) {
                if (testimonials.length === 0) {
                    setTestimonials([
                        { _id: '1', name: 'John Doe', role: 'Homeowner', message: 'Excellent work on our new home! High quality and on time.', rating: 5 },
                        { _id: '2', name: 'Jane Smith', role: 'Architect', message: 'Professional team that understands design intricacies.', rating: 5 },
                        { _id: '3', name: 'Robert Brown', role: 'Business Owner', message: 'Renovated our office space beautifully. Highly recommended.', rating: 4 }
                    ]);
                }
            }
        };
        fetchTestimonials();
    }, []);

    return (
        <div className="testimonials-container">
            <h1>Client Testimonials</h1>
            <div className="testimonials-grid">
                {testimonials.map(item => (
                    <div className="testimonial-card" key={item._id}>
                        <p className="message">"{item.message}"</p>
                        <div className="author">
                            <h4>{item.name}</h4>
                            <span>{item.role}</span>
                        </div>
                        <div className="rating">
                            {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
