import React from 'react';
import {useTranslation} from "react-i18next";
import i18n from "../../locales/i18n.js";

const MainTitle = ({content, className, ...props}) => {
    const combinedClasses = `font-[800] text-[45px] text-cloudburst ${className}`
    return (
        <h3 className={combinedClasses}>
            {i18n.t(content)}
        </h3>
    );
};

export default MainTitle;