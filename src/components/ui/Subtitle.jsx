import React from 'react';

const Subtitle = ({svg, content, className, ...props}) => {
    const combinedClasses = `flex items-center gap-3 bg-whitesmoke px-4 py-2 w-fit ${className}`

    return (
        <div className={combinedClasses}>
            {svg}
            <p className={'font-bold'}>
                {content}
            </p>
        </div>
    );
};

export default Subtitle;