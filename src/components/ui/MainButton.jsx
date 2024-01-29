import React from 'react';

const MainButton = ({content, ...props}) => {
    return (
        <button className={'bg-butterscotch py-3 font-bold'}>
            {content}
        </button>
    );
};

export default MainButton;