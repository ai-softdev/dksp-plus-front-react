import React from 'react';

const MainTextarea = () => {
    return (
        <textarea className={'resize-none w-full border border-gainsboro py-[20px] px-[30px] focus:outline-0'} cols="30" rows="10" placeholder={'Service Description'}></textarea>
    );
};

export default MainTextarea;