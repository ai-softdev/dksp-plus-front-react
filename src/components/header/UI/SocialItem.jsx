import React from 'react';

const SocialItem = ({svg, title, subtitle, link, ...props}) => {
    return (
        <a
            href={link}
            className={'flex items-center gap-3'}
        >
            {svg}
            <div className={'flex flex-col'}>
                <span className={'font-[800] text-cloudburst'}>
                    {title}
                </span>
                <span className={'text-mediumgray'}>
                    {subtitle}
                </span>
            </div>
        </a>
    );
};

export default SocialItem;