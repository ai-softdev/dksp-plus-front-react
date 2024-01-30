import React from 'react';

const ProjectCard = ({src, title, subtitle, className, ...props}) => {
    const combinedClasses = `bg-whitesmoke p-3 text-center ${className}`
    return (
        <div className={combinedClasses}>
            <img src={src} alt="gallery"/>
            <p className={'font-[800] text-cloudburst pt-4'}>
                {title}
            </p>
            <span className={'text-mediumgray text-sm'}>
                {subtitle}
            </span>
        </div>
    );
};

export default ProjectCard;