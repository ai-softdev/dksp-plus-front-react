import React from 'react';

const MainInput = ({placeholder, type, ...props}) => {
    return (
        <input
            className={'w-full border border-gainsboro py-[20px] px-[30px] focus:outline-butterscotch'}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default MainInput;