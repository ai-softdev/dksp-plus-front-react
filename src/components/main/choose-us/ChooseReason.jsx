import React from 'react';

const ChooseReason = ({title, subtitle, ...props}) => {
    return (
        <div className={'flex gap-3 max-w-[500px]'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#FFB342"/>
                <path d="M23 11L13.9 22L10 17.875" stroke="#1C2752" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
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