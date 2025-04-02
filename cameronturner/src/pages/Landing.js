import React from 'react';
import './Landing.css';
import Navbar from '../components/Navbar'; 
import Button from '../components/Button';
import About from '../components/About';
import Skills from '../components/skills/Skills';

const Landing = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <div className='title-container'>
                <h1>Cameron Turner</h1>
                <Button type="secondary" label="About Me" onClick={() => window.location.href = '#projects'} />
            </div>
            <About />      
            <Skills />
        </div>
    );
};

export default Landing;