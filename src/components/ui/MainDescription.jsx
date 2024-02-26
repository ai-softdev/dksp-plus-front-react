import React from 'react';
import {forwardRef} from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const MainDescription = forwardRef(({content, className, ...props}, ref) => {
    const combinedClasses = `text-mediumgray text-lg ${className}`
    const {t, i18n} = useTranslation()

    return (
        <p ref={ref} className={combinedClasses} dangerouslySetInnerHTML={{__html: t(content)}}/>
    );
});

export default MainDescription;
export const MotionMainDescription = motion(MainDescription);