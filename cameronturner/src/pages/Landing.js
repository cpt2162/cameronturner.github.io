import React from 'react';
import './Landing.css';
import Navbar from '../components/Navbar'; 
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/skills/Skills';

const Landing = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <Hero />
            <About />
            <Skills />
        </div>
    );
};

export default Landing;