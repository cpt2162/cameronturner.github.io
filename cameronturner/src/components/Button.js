import React from 'react';
import './Button.css'; // Optional: Add styles for your button

const Button = (props) => {
    return (
        <button className={props.type} onClick={props.onClick}>
            {props.label}
        </button>
    );
};


export default Button;