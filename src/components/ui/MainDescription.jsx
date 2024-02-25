import React from 'react';
import {forwardRef} from "react";
import {motion} from "framer-motion";

const MainDescription = forwardRef(({content, className, ...props}, ref) => {
    const combinedClasses = `text-mediumgray text-lg ${className}`

    return (
        <p ref={ref} className={combinedClasses} dangerouslySetInnerHTML={{__html: content}}/>
    );
});

export default MainDescription;
export const MotionMainDescription = motion(MainDescription);