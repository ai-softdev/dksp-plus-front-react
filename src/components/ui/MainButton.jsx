import React from 'react';

const MainButton = ({content, className, ...props}) => {
    const combinedClasses = `bg-butterscotch py-4 font-bold hover:shadow-butterscotch hover:rounded-2xl transition-all ease-in-out duration-300 ${className}`
    return (
        <button className={combinedClasses}>
            {content}
        </button>
    );
};

export default MainButton;