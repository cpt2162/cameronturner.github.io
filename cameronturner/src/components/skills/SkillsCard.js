import React from 'react';
import PropTypes from 'prop-types';
import './SkillsCard.css'; // Optional: Add styles here or inline

const SkillsCard = (props) => {
    return (
        <div className="skills-card">
            <h2 className="card-title">{props.title}</h2>
            <ul>
                {props.items.map((item, index) => (
                    <li key={index} className='list-item'>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default SkillsCard;