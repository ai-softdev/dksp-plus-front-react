import React from 'react';

const ChooseReason = ({title, subtitle, ...props}) => {
    return (
        <div className={'flex gap-3 max-w-[500px]'}>
            <div className={'w-[32px] h-[32px]'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="#FF7B47"/>
                    <path d="M23 11L13.9 22L10 17.875" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div>
                <p className={'text-cloudburst font-bold'}>
                    {title}
                </p>
                <span className={'block text-mediumgray'}>
                    {subtitle}
                </span>
            </div>
        </div>
    );
};

export default ChooseReason;