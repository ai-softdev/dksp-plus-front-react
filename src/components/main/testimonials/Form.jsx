import React from 'react';
import Subtitle from "../../ui/Subtitle.jsx";
import MainTitle from "../../ui/MainTitle.jsx";
import MainInput, {MotionMainInput} from "../../ui/MainInput.jsx";
import MainTextarea, {MotionMainTextArea} from "../../ui/MainTextarea.jsx";
import MainButton, {MotionMainButton} from "../../ui/MainButton.jsx";
import {motion} from "framer-motion";
import {textLeftAnimation, textRightAnimation, textTopAnimation} from "../../../utils/consts.js";

const Form = ({className, ...props}) => {
    const combinedClasses = `${className}`
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submiiiit')
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className={combinedClasses}
        >
            <form
                action="#"
                onSubmit={handleSubmit}
                className={'bg-whitesmoke px-[58px] py-[68px] flex flex-col gap-5'}
            >
                <MotionMainInput
                    variants={textLeftAnimation}
                    custom={2}
                    placeholder={'Ваше имя'}
                    type={'text'}
                />
                <MotionMainInput
                    variants={textRightAnimation}
                    custom={3}
                    placeholder={'Email'}
                    type={'mail'}
                />
                <MotionMainInput
                    variants={textLeftAnimation}
                    custom={4}
                    placeholder={'Телефон'}
                    type={'number'}
                />
                <MotionMainInput
                    variants={textRightAnimation}
                    custom={5}
                    placeholder={'Дата'}
                    type={'date'}
                />
                <MotionMainTextArea
                    variants={textLeftAnimation}
                    custom={6}
                />
                <MotionMainButton
                    variants={textRightAnimation}
                    custom={6}
                    content={'Подтвердить'}
                />
            </form>
        </motion.div>
    );
};

export default Form;