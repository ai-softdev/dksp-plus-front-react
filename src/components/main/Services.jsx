import React from 'react';
import Subtitle, {MSubtitle} from "../ui/Subtitle.jsx";
import MainTitle, {MotionMainTitle} from "../ui/MainTitle.jsx";
import MainDescription, {MotionMainDescription} from "../ui/MainDescription.jsx";
import ServicesCard, {MServicesCard} from "./services/ServicesCard.jsx";
import {textLeftAnimation, textRightAnimation, textTopAnimation} from "../../utils/consts.js";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const Services = () => {
    const {t, i18n} = useTranslation()
    const servicesList = [
        {
            svg: '/image/services/1.svg',
            title: t('Strategic Development Consulting'),
            description: t('We develop and implement strategies aimed at sustainable growth and competitiveness of your business')
        },
        {
            svg: '/image/services/2.svg',
            title: t('Project management'),
            description: t('We offer professional management of your projects, ensuring their successful completion within budget and deadlines')
        },
        {
            svg: '/image/services/3.svg',
            title: t('Business analysis and process optimization'),
            description: t('Our team will analyze your business, identify bottlenecks and offer optimal solutions to increase efficiency and productivity')
        },
        {
            svg: '/image/services/4.svg',
            title: t('Development of business strategies and models'),
            description: t('We will help you create and implement innovative business strategies and models that match your goals and ambitions')
        },
        {
            svg: '/image/services/5.svg',
            title: t('Technological consulting'),
            description: t('Our experts will provide advice on the implementation and use of advanced technologies to optimize your business')
        },
        {
            svg: '/image/services/6.svg',
            title: t('Financial planning and analysis'),
            description: t('We will help you develop financial strategies, analyze investments and make the right financial decisions for your business')
        }
    ]

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className={'bg-whitesmoke'}
        >
            <div className={'container !py-20'}>
                <MSubtitle
                    variants={textTopAnimation}
                    custom={1}
                    className={'!bg-white mx-auto'}
                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M18 9.1V18.875C18 19.1541 17.945 19.4304 17.8382 19.6882C17.7315 19.946 17.5749 20.1803 17.3776 20.3776C17.1803 20.5749 16.946 20.7315 16.6882 20.8382C16.4304 20.945 16.1541 21 15.875 21H3.125C2.56141 21 2.02091 20.7761 1.6224 20.3776C1.22388 19.9791 1 19.4386 1 18.875V6.125C1 5.56141 1.22388 5.02091 1.6224 4.6224C2.02091 4.22388 2.56141 4 3.125 4H12.0224" stroke="#FF7B47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21.7779 0.287101C21.698 0.199303 21.6011 0.128617 21.4931 0.0793146C21.3851 0.0300123 21.2682 0.00311756 21.1496 0.000255307C21.0309 -0.00260694 20.9128 0.0186228 20.8026 0.0626618C20.6923 0.106701 20.5921 0.172635 20.5081 0.256479L19.8316 0.929625C19.7496 1.01166 19.7036 1.12288 19.7036 1.23886C19.7036 1.35483 19.7496 1.46606 19.8316 1.54809L20.4518 2.1671C20.4924 2.20794 20.5407 2.24034 20.5939 2.26246C20.6472 2.28457 20.7042 2.29595 20.7618 2.29595C20.8195 2.29595 20.8765 2.28457 20.9297 2.26246C20.9829 2.24034 21.0313 2.20794 21.0719 2.1671L21.7314 1.5109C22.065 1.17789 22.0962 0.635431 21.7779 0.287101ZM18.4639 2.2967L8.59178 12.1506C8.53193 12.2102 8.48842 12.2842 8.46545 12.3655L8.00882 13.7254C7.99788 13.7623 7.9971 13.8015 8.00657 13.8388C8.01605 13.8761 8.03541 13.9102 8.06263 13.9374C8.08985 13.9646 8.12391 13.984 8.16121 13.9934C8.19852 14.0029 8.23769 14.0021 8.2746 13.9912L9.63357 13.5346C9.71486 13.5116 9.78888 13.4681 9.84849 13.4083L19.7031 3.53581C19.7943 3.44367 19.8454 3.31929 19.8454 3.18967C19.8454 3.06005 19.7943 2.93567 19.7031 2.84353L19.159 2.2967C19.0667 2.2047 18.9417 2.15304 18.8114 2.15304C18.6811 2.15304 18.5562 2.2047 18.4639 2.2967Z" fill="#FF7B47"/>
                    </svg>}
                    content={'Our services'}
                />
                <MotionMainTitle
                    variants={textTopAnimation}
                    custom={2}
                    className={'text-center'}
                    content={'Our services'}
                />
                <MotionMainDescription
                    variants={textTopAnimation}
                    custom={3}
                    className={'w-[680px] text-center mx-auto mt-5 max_lg:w-full'}
                    content={'We offer a variety of services focused on achieving your business goals. We specialize in consulting, strategic planning, project management, business model development and much more'}
                />
                <div className={'grid grid-cols-3 grid-rows-2 gap-4 mt-10 max_lg:grid-cols-2 max_sm:grid-cols-1'}>
                    {servicesList.map((item, index) => (
                        <MServicesCard
                            variants={textLeftAnimation}
                            custom={index +1}
                            key={index}
                            svg={item.svg}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Services;