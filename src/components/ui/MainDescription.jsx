import React from 'react';

const MainDescription = ({content, className, ...props}) => {
    const combinedClasses = `text-mediumgray text-lg ${className}`

    return (
        <p className={combinedClasses} dangerouslySetInnerHTML={{__html: content}}/>
    );
};

export default MainDescription;