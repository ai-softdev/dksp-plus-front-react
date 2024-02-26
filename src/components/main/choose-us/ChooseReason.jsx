import React from 'react';
import {forwardRef} from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const ChooseReason = forwardRef(({title, subtitle, ...props}, ref) => {
    const {t, i18n} = useTranslation()
    return (
        <div
            ref={ref}
            className={'flex gap-3 max-w-[500px] max_sm:max-w-full'}
        >
            <div
                className={'w-[32px] h-[32px]'}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="#FF7B47"/>
                    <path d="M23 11L13.9 22L10 17.875" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div>
                <p className={'text-cloudburst font-bold'}>
                    {t(title)}
                </p>
                <span className={'block text-mediumgray'}>
                    {t(subtitle)}
                </span>
            </div>
        </div>
    );
});

export default ChooseReason;
export const MChooseReason = motion(ChooseReason)