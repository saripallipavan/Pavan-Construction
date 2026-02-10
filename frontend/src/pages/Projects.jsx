
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('/api/projects');
                setProjects(res.data);
            } catch (err) {
                console.error(err);
                if (projects.length === 0) {
                    setProjects([
                        { _id: '1', title: 'Luxury Villa', location: 'Hyderabad', description: 'A 4BHK luxury villa with modern amenities.', images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'] },
                        { _id: '2', title: 'Corporate Office', location: 'Bangalore', description: 'Review of the new tech park construction.', images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'] },
                        { _id: '3', title: 'Apartment Complex', location: 'Vizag', description: 'High-rise residential complex.', images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'] }
                    ]);
                }
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="projects-page">
            <div className="projects-hero">
                <div className="projects-overlay"></div>
                <div className="projects-hero-content">
                    <h1>Our Portfolio</h1>
                    <p>Showcasing Our Finest Work</p>
                </div>
            </div>

            <div className="projects-container">
                {/* <h1>Our Projects</h1> Removed duplicate header */}
                <div className="projects-grid">
                    {projects.map(project => (
                        <div className="project-item" key={project._id}>
                            <div className="project-img-container">
                                {project.images && project.images[0] ? (
                                    <img src={project.images[0]} alt={project.title} />
                                ) : (
                                    <div className="placeholder-img">No Image</div>
                                )}
                            </div>
                            <div className="project-details">
                                <h2>{project.title}</h2>
                                <p className="location">{project.location}</p>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
