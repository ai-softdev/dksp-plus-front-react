import React from 'react';

const MainTextarea = () => {
    return (
        <textarea
            className={'resize-none w-full border border-gainsboro py-[20px] px-[30px] h-[131px] focus:outline-butterscotch'} cols="30" rows="10" placeholder={'Описание'}></textarea>
    );
};

export default MainTextarea;