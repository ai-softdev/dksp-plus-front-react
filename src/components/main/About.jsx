import React, {useEffect, useRef, useState} from 'react';
import Subtitle, {MSubtitle} from "../ui/Subtitle.jsx";
import MainTitle, {MotionMainTitle} from "../ui/MainTitle.jsx";
import MainDescription, {MotionMainDescription} from "../ui/MainDescription.jsx";
import AnimatedNumbers from "react-animated-numbers";
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import {textLeftAnimation, textRightAnimation} from "../../utils/consts.js";
import {useTranslation} from "react-i18next";
import {ReactTyped} from "react-typed";
import AnimatedNumber from "animated-number-react";

const About = () => {
    const {t, i18n} = useTranslation()
    const aboutList = [
        t('Partnership with major global corporations'),
        t('Many successful projects'),
        t('International recognition'),
        t('Expanding the geographical presence')
    ]
    const [languageChanged, setLanguageChanged] = useState('ru');

    useEffect(() => {
        setLanguageChanged(i18n.language)
        console.log(i18n.language)
    }, [i18n.language]);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            id={'about'}
            className={'container grid grid-cols-2 gap-10 !py-36 items-center max_lg:block'}
        >
            <motion.div variants={textLeftAnimation} custom={1} className={'bg-butterscotch rounded-lg max_lg:hidden'}>
                <img className={'-translate-x-2 -translate-y-2 rounded-lg'} src="/image/about.webp" alt="about"/>
            </motion.div>
            <div>
                <MSubtitle
                    variants={textRightAnimation} custom={1}
                    className={'mb-2 max_lg:mx-auto'}
                    svg={<img className={'w-[30px] h-[30px]'} src="./image/logo-small-orange.png" alt="logo"/>}
                    content={'Welcome to DKSP PLUS'}
                />
                <MotionMainTitle
                    className={'max_lg:text-center'}
                    variants={textRightAnimation} custom={1}
                    content={'Creating Your Future together'}
                />
                <motion.div variants={textLeftAnimation} custom={1} className={'hidden bg-butterscotch rounded-lg max_lg:block my-10 w-6/12 mx-auto max_sm:w-full'}>
                    <img className={'-translate-x-2 -translate-y-2 rounded-lg'} src="/image/about.webp" alt="about"/>
                </motion.div>
                <MotionMainDescription
                    variants={textRightAnimation} custom={2}
                    className={'mt-4'}
                    content={`We specialize in helping your business reach new heights and successfully overcome the challenges of the modern market. Our team of experts is ready to offer you innovative strategies and solutions that will help your company achieve sustainable growth and prosperity. Trust us, and together we will create your bright and successful future!`}
                />
                <motion.div
                    variants={textRightAnimation}
                    custom={3}
                    className={'mt-8 flex items-center gap-10 max_xl:flex-col'}
                >
                    <div className={'flex flex-col items-center gap-3 bg-whitesmoke w-[200px] p-8'}>
                        <span className={'font-black text-5xl text-butterscotch'}>
                            35
                        </span>
                        {/*<AnimatedNumbers*/}
                        {/*    includeComma*/}
                        {/*    transitions={(index) => ({*/}
                        {/*        type: "spring",*/}
                        {/*        duration: index + 0.3,*/}
                        {/*    })}*/}
                        {/*    animateToNumber={35}*/}
                        {/*    fontStyle={{*/}
                        {/*        fontSize: 60,*/}
                        {/*        fontWeight: 800,*/}
                        {/*        color: "#FF7B47",*/}
                        {/*    }}*/}
                        {/*    className={'w-[100px] items-center justify-center'}*/}
                        {/*/>*/}
                        <p className={'w-[150px] h-[50px] text-xl text-center font-black text-cloudburst'}>
                            <ReactTyped
                                strings={[
                                    t('Years of experience'),
                                    t('Years of success'),
                                    t('Years of work'),
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </p>
                    </div>
                    <div className={'flex flex-col gap-3'}>
                        {aboutList.map((item, index) => (
                            <p
                                key={index}
                                className={'text-mediumgray'}
                            >
                                - {item}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;