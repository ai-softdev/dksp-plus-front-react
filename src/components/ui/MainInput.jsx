import React from 'react';
import {forwardRef} from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const MainInput = forwardRef(({placeholder, type, ...props}, ref) => {
    const {t, i18n} = useTranslation()
    return (
        <input
            ref={ref}
            className={'w-full border border-gainsboro py-[20px] px-[30px] focus:outline-butterscotch'}
            type={type}
            placeholder={t(placeholder)}
        />
    );
});

export default MainInput;
export const MotionMainInput = motion(MainInput)