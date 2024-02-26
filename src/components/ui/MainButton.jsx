import React from 'react';
import {forwardRef} from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const MainButton = forwardRef(({content, className, ...props}, ref) => {
    const combinedClasses = `bg-butterscotch py-4 font-bold hover:shadow-butterscotch hover:rounded-2xl transition-all ease-in-out duration-300 ${className}`
    const {t, i18n} = useTranslation()
    return (
        <button
            ref={ref}
            className={combinedClasses}
        >
            {t(content)}
        </button>
    );
});

export default MainButton;
export const MotionMainButton = motion(MainButton)