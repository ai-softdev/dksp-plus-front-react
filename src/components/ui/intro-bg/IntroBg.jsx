import React from 'react';
import './IntroBg.css'

const IntroBg = ({background, ...props}) => {
    const divStyle = {
        backgroundImage: background,
    };
    return (
        <div className={`intro-bg absolute -top-5 -left-5 -right-5 -bottom-5 z-[0] blur-sm bg-center`} style={divStyle}>

        </div>
    );
};

export default IntroBg;