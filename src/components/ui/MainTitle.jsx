import React from 'react';
import {useTranslation} from "react-i18next";
import i18n from "../../locales/i18n.js";
import {forwardRef} from "react";
import {motion} from "framer-motion";

const MainTitle = forwardRef(({content, className, ...props}, ref) => {
    const {t, i18n} = useTranslation()
    const combinedClasses = `font-[800] text-[45px] text-cloudburst ${className}`
    return (
        <h3 ref={ref} className={combinedClasses}>
            {t(content)}
        </h3>
    );
});

export default MainTitle;
export const MotionMainTitle = motion(MainTitle);