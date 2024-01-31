import React from 'react';
import './SocialItem.css'
import i18n from "../../../locales/i18n.js";

const SocialItem = ({svg, title, subtitle, link, ...props}) => {
    return (
        <a
            href={link}
            className={'social-link flex items-center gap-3'}
        >
            <div className={'social-svg rounded-full bg-butterscotch transition-all ease-in-out duration-300'}>
                {svg}
            </div>
            <div className={'flex flex-col'}>
                <span className={`social-name transition-all ease-in-out duration-300 ${props.isFooter ? 'text-whitesmoke font-[800]' : 'font-[800] text-cloudburst'}`}>
                    {i18n.t(title)}
                </span>
                <span className={props.isFooter ? 'text-whitesmoke font-[200]' : 'text-mediumgray'}>
                    {subtitle}
                </span>
            </div>
        </a>
    );
};

export default SocialItem;