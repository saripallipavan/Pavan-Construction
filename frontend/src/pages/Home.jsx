import React from 'react';
import Services from './Services';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import './Home.css';

const Home = () => {
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
