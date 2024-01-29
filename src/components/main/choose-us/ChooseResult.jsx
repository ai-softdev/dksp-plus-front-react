import React from 'react';

const ChooseResult = ({className, number, content, ...props}) => {
    const combinedClasses = `flex ${className}`

    return (
        <div className={combinedClasses}>
            <div className={'bg-butterscotch p-3 font-black text-cloudburst w-[96px] text-center'}>
                {number}
            </div>
            <div className={'w-full border border-whitesmoke p-3 text-whitesmoke'}>
                {content}
            </div>
        </div>
    );
};

export default ChooseResult;