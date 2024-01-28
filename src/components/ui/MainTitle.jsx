import React from 'react';

const MainTitle = ({content, className, ...props}) => {
    const combinedClasses = `font-[800] text-[45px] text-cloudburst ${className}`
    return (
        <h3 className={combinedClasses}>
            {content}
        </h3>
    );
};

export default MainTitle;