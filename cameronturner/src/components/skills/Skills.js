import React from 'react';
import './Skills.css'; // Optional: Add styles for the component
import SkillCard from './SkillsCard'; // Assuming you have a SkillCard component

const Skills = () => {
    return (
        <div className="skills-container">
            <SkillCard title="Languages" items={['JavaScript', 'Python', 'Java']} />
            <SkillCard title="Frameworks" items={['React', 'Angular', 'Vue']} />
            <SkillCard title="Tools" items={['Git', 'Webpack', 'Docker']} />
        </div>
    );
};

export default Skills;