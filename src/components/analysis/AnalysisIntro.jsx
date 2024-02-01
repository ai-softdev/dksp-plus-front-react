import React from 'react';
import IntroBg from "../ui/intro-bg/IntroBg.jsx";
import MainTitle from "../ui/MainTitle.jsx";
import {useTranslation} from "react-i18next";

const AnalysisIntro = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className={'relative py-36 overflow-hidden'}>
            <IntroBg
                background={`url('./image/analysis.jpg')`}
            />
            <div className="container">
                <MainTitle
                    className={'relative text-whitesmoke z-10 text-center'}
                    content={'Market analysis'}
                />
            </div>
        </div>
    );
};

export default AnalysisIntro;