import React from 'react';
import './IntroBg.css'

const IntroBg = ({background, ...props}) => {
    return (
        <div className={`intro-bg absolute -top-5 -left-5 -right-5 -bottom-5 z-[0] ${background} blur-md`}>

        </div>
    );
};

export default IntroBg;