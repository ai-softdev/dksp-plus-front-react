import React from 'react';
import {forwardRef} from "react";
import {motion} from "framer-motion";

const MainButton = forwardRef(({content, className, ...props}, ref) => {
    const combinedClasses = `bg-butterscotch py-4 font-bold hover:shadow-butterscotch hover:rounded-2xl transition-all ease-in-out duration-300 ${className}`
    return (
        <button
            ref={ref}
            className={combinedClasses}
        >
            {content}
        </button>
    );
});

export default MainButton;
export const MotionMainButton = motion(MainButton)