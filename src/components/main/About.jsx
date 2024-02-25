import React, {useRef} from 'react';
import Subtitle, {MSubtitle} from "../ui/Subtitle.jsx";
import MainTitle, {MotionMainTitle} from "../ui/MainTitle.jsx";
import MainDescription, {MotionMainDescription} from "../ui/MainDescription.jsx";
import AnimatedNumbers from "react-animated-numbers";
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import {textLeftAnimation, textRightAnimation} from "../../utils/consts.js";

const About = () => {
    const aboutList = [
        'Партнерство с крупными мировыми корпорациями',
        'Множество успешных проектов',
        'Международное признание',
        'Расширение географического присутствия'
    ]

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            id={'about'}
            className={'container grid grid-cols-2 gap-10 py-36 items-center'}
        >
            <motion.div variants={textLeftAnimation} custom={1} className={'bg-butterscotch rounded-lg'}>
                <img className={'-translate-x-2 -translate-y-2 rounded-lg'} src="/image/about.webp" alt="about"/>
            </motion.div>
            <div>
                <MSubtitle
                    variants={textRightAnimation} custom={1}
                    className={'mb-2'}
                    svg={<img className={'w-[30px] h-[30px]'} src="./image/logo-small-orange.png" alt="logo"/>}
                    content={'Добро пожаловать в DKSP PLUS'}
                />
                <MotionMainTitle
                    variants={textRightAnimation} custom={1}
                    content={'Создаем Ваше Будущее вместе'}
                />
                <MotionMainDescription
                    variants={textRightAnimation} custom={2}
                    className={'mt-4'}
                    content={`Мы специализируемся на помощи вашему бизнесу в достижении новых высот и успешном преодолении вызовов современного рынка. Наша команда экспертов готова предложить вам инновационные стратегии и решения, которые помогут вашему предприятию добиться устойчивого роста и процветания. Доверьтесь нам, и вместе мы создадим ваше яркое и успешное будущее!`}
                />
                <motion.div
                    variants={textRightAnimation}
                    custom={3}
                    className={'mt-8 flex items-center gap-10'}
                >
                    <div className={'flex flex-col items-center gap-3 bg-whitesmoke w-[200px] p-8'}>
                        <AnimatedNumbers
                            includeComma
                            transitions={(index) => ({
                                type: "spring",
                                duration: index + 0.3,
                            })}
                            animateToNumber={35}
                            fontStyle={{
                                fontSize: 60,
                                fontWeight: 800,
                                color: "#FF7B47",
                            }}
                            className={'w-[100px] items-center justify-center'}
                        />
                        <p className={'w-[100px] h-[50px] text-xl text-center font-black text-cloudburst'}>
                            <TypeAnimation
                                sequence={[
                                    'Лет опыта',
                                    1000,
                                    'Лет успеха',
                                    2000,
                                    'Лет работы',
                                    1000
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
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