import React from 'react';
import {forwardRef} from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const MainTextarea = forwardRef(({...props}, ref) => {
    const {t, i18n} = useTranslation()
    return (
        <textarea
            ref={ref}
            className={'resize-none w-full border border-gainsboro py-[20px] px-[30px] h-[131px] focus:outline-butterscotch'}
            cols="30"
            rows="10"
            placeholder={t('Description')}
        ></textarea>
    );
});

export default MainTextarea;
export const MotionMainTextArea = motion(MainTextarea)