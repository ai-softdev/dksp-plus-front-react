import React from 'react';
import './ChooseUs.css'
import Subtitle, {MSubtitle} from "../../ui/Subtitle.jsx";
import MainTitle, {MotionMainTitle} from "../../ui/MainTitle.jsx";
import MainDescription, {MotionMainDescription} from "../../ui/MainDescription.jsx";
import ChooseResult, {MChooseResult} from "./ChooseResult.jsx";
import ChooseReason, {MChooseReason} from "./ChooseReason.jsx";
import {motion} from "framer-motion";
import {textLeftAnimation, textRightAnimation, textTopAnimation} from "../../../utils/consts.js";
import {useTranslation} from "react-i18next";

const ChooseUs = () => {
    const {t, i18n} = useTranslation()
    const chooseResultList = [
        {
            number: '3956',
            content: 'Projects completed'
        },
        {
            number: '851',
            content:'Employees'
        },
        {
            number: '265',
            content: 'Business partners'
        },
        {
            number: '854',
            content: 'Satisfied customers'
        }
    ]
    const chooseReasonList = [
        {
            title: 'Professionalism and trust',
            subtitle: 'We build long-term relationships with our clients based on professionalism, trust and transparency. Your success is our priority'
        },
        {
            title: 'Individual approach',
            subtitle: 'We approach each client in a unique way, understanding their unique needs, goals and challenges'
        },
        {
            title: 'In-depth analysis and expertise',
            subtitle: 'We base our recommendations and strategies on an extensive analysis of the market, trends and your current situation'
        }
    ]
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className={'flex items-center justify-center gap-[70px] max_xl:flex-col max_xl:py-20'}
        >
            <div className={'w-6/12 relative max_xl:order-2 max_xl:w-full'}>
                <img className={'w-full h-full max_xl:h-[400px] max_xl:object-cover'} src="/image/choose-us.webp" alt="choose-us"/>
                <div className={'absolute top-32 left-32 right-32 bottom-32 max_2xl:left-20 max_2xl:right-20 max_2xl:top-20 max_2xl:bottom-20 max_big:left-10 max_big:right-10 max_big:top-10 max_big:bottom-10 flex items-center justify-center gap-3 flex-col choose-block max_sm:right-0 max_sm:top-0 max_sm:left-0 max_sm:bottom-0'}>
                    {chooseResultList.map((item, index) => (
                        <MChooseResult
                            key={index}
                            variants={textLeftAnimation}
                            custom={index +1}
                            className={'w-[400px] max_sm:w-[95%]'}
                            number={item.number}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
            <div className={'w-6/12 max_xl:w-full max_xl:container max_xl:px-5 max_xl:flex max_xl:items-center max_xl:justify-center max_xl:flex-col'}>
                <MSubtitle
                    variants={textRightAnimation}
                    custom={1}
                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M18.9392 10.5226V20.8376C18.9392 21.1321 18.8812 21.4237 18.7685 21.6958C18.6558 21.9678 18.4906 22.215 18.2824 22.4233C18.0742 22.6315 17.827 22.7967 17.5549 22.9093C17.2828 23.022 16.9913 23.08 16.6968 23.08H3.2424C2.64768 23.08 2.07731 22.8438 1.65678 22.4233C1.23625 22.0027 1 21.4324 1 20.8376V7.38327C1 6.78855 1.23625 6.21818 1.65678 5.79765C2.07731 5.37712 2.64768 5.14087 3.2424 5.14087H12.6313" stroke="#FF7B47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22.9258 1.22301C22.8415 1.13036 22.7392 1.05577 22.6253 1.00374C22.5113 0.951714 22.388 0.923334 22.2627 0.920313C22.1375 0.917293 22.0129 0.939696 21.8966 0.986168C21.7802 1.03264 21.6745 1.10222 21.5858 1.19069L20.872 1.90103C20.7855 1.98759 20.7369 2.10496 20.7369 2.22734C20.7369 2.34972 20.7855 2.46709 20.872 2.55366L21.5264 3.20687C21.5693 3.24996 21.6203 3.28416 21.6764 3.30749C21.7326 3.33082 21.7928 3.34283 21.8536 3.34283C21.9144 3.34283 21.9746 3.33082 22.0308 3.30749C22.0869 3.28416 22.1379 3.24996 22.1808 3.20687L22.8768 2.51442C23.2288 2.163 23.2617 1.59058 22.9258 1.22301ZM19.4287 3.34362L9.01119 13.7419C8.94803 13.8048 8.90212 13.8829 8.87789 13.9686L8.39602 15.4037C8.38448 15.4427 8.38366 15.484 8.39366 15.5234C8.40365 15.5627 8.42409 15.5987 8.45281 15.6274C8.48153 15.6561 8.51747 15.6766 8.55684 15.6865C8.59621 15.6965 8.63754 15.6957 8.67649 15.6842L10.1105 15.2023C10.1963 15.1781 10.2744 15.1322 10.3373 15.0691L20.7364 4.65119C20.8326 4.55396 20.8865 4.42271 20.8865 4.28593C20.8865 4.14915 20.8326 4.01789 20.7364 3.92066L20.1622 3.34362C20.0648 3.24655 19.9329 3.19203 19.7954 3.19203C19.6579 3.19203 19.526 3.24655 19.4287 3.34362Z" fill="#FF7B47"/>
                    </svg>}
                    content={'Why us specifically'}
                />
                <MotionMainTitle
                    variants={textRightAnimation}
                    custom={2}
                    className={'max-w-[600px] mt-5 max_xl:max-w-full'}
                    content={'Why our company is the best choice for consulting'}
                />
                <MotionMainDescription
                    variants={textRightAnimation}
                    custom={3}
                    className={'max-w-[640px] mt-5 max_xl:max-w-full'}
                    content={'By choosing us, you choose a partner who is ready to help you overcome business challenges and reach new heights. Entrust your strategic development to us, and we will make your success our priority'}
                />
                <div className={'mt-10 flex flex-col gap-8'}>
                    {chooseReasonList.map((item, index) => (
                        <MChooseReason
                            variants={textRightAnimation}
                            custom={index +1}
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ChooseUs;