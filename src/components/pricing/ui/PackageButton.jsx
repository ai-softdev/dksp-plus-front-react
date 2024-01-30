import React from 'react';

const PackageButton = ({content, active, onClicked, ...props}) => {
    return (
        <button
            className={`border border-butterscotch w-[200px] py-3 font-bold transition-all ease-in-out duration-300 ${active ? '!bg-butterscotch' : '!bg-white'}`}
            onClick={onClicked}
        >
            {content}
        </button>
    );
};

export default PackageButton;