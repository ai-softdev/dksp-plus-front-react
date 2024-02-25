import React from 'react';
import {forwardRef} from "react";
import {motion} from "framer-motion";

const MainInput = forwardRef(({placeholder, type, ...props}, ref) => {
    return (
        <input
            ref={ref}
            className={'w-full border border-gainsboro py-[20px] px-[30px] focus:outline-butterscotch'}
            type={type}
            placeholder={placeholder}
        />
    );
});

export default MainInput;
export const MotionMainInput = motion(MainInput)