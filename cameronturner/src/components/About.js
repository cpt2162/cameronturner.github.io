import React from 'react';
import './About.css'; // Import a CSS file for styling
import me from '../assets/me.JPG'; // Import the image

const About = () => {
    return (
        <div className="about-container">
            <img 
                src={me}
                alt="Headshot of Cameron Turner" 
                className="headshot"
            />
            <p className="about-blurb">
                Hi, I'm Cameron Turner! I'm a passionate developer with a love for creating
                innovative and user-friendly web applications. Welcome to my portfolio!
            </p>
        </div>
    );
};

export default About;