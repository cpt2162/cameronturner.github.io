import React from 'react';
import './Hero.css'; // Import a CSS file for styling

const Hero = () => {


    return (
        <div className="hero">
            <div className='hero-overlay'>
                <h1 className="hero-title">Cameron Turner</h1>
                <h3 className="hero-subtitle">Full Stack Developer</h3>
            </div>
        </div>
    );
};

export default Hero;