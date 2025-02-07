import React from 'react';
import Subtitle, {MSubtitle} from "../../ui/Subtitle.jsx";
import MainTitle from "../../ui/MainTitle.jsx";
import MainDescription, {MotionMainDescription} from "../../ui/MainDescription.jsx";
import './Banner.css'
import AnimatedNumbers from "react-animated-numbers";
import {motion} from "framer-motion";
import {textLeftAnimation, textRightAnimation, textTopAnimation} from "../../../utils/consts.js";
import {useTranslation} from "react-i18next";

const Banner = () => {
    const {t, i18n} = useTranslation()
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className={'bg-butterscotch p-10 max_sm:px-3'}
        >
            <MSubtitle
                variants={textTopAnimation}
                custom={1}
                svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.9392 9.69828V20.0133C18.9392 20.3078 18.8812 20.5994 18.7685 20.8714C18.6558 21.1435 18.4906 21.3907 18.2824 21.5989C18.0742 21.8071 17.827 21.9723 17.5549 22.085C17.2828 22.1977 16.9913 22.2557 16.6968 22.2557H3.2424C2.64768 22.2557 2.07731 22.0194 1.65678 21.5989C1.23625 21.1784 1 20.608 1 20.0133V6.55892C1 5.9642 1.23625 5.39384 1.65678 4.97331C2.07731 4.55278 2.64768 4.31653 3.2424 4.31653H12.6313" stroke="#FF7B47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22.9258 0.398665C22.8415 0.306017 22.7392 0.231426 22.6253 0.1794C22.5113 0.127373 22.388 0.0989929 22.2627 0.0959725C22.1375 0.0929522 22.0129 0.115355 21.8966 0.161827C21.7802 0.208299 21.6745 0.277875 21.5858 0.366351L20.872 1.07669C20.7855 1.16325 20.7369 1.28062 20.7369 1.403C20.7369 1.52538 20.7855 1.64275 20.872 1.72932L21.5264 2.38252C21.5693 2.42562 21.6203 2.45982 21.6764 2.48315C21.7326 2.50648 21.7928 2.51849 21.8536 2.51849C21.9144 2.51849 21.9746 2.50648 22.0308 2.48315C22.0869 2.45982 22.1379 2.42562 22.1808 2.38252L22.8768 1.69008C23.2288 1.33866 23.2617 0.766239 22.9258 0.398665ZM19.4287 2.51928L9.01119 12.9175C8.94803 12.9804 8.90212 13.0585 8.87789 13.1443L8.39602 14.5794C8.38448 14.6183 8.38366 14.6597 8.39366 14.699C8.40365 14.7384 8.42409 14.7743 8.45281 14.8031C8.48153 14.8318 8.51747 14.8522 8.55684 14.8622C8.59621 14.8722 8.63754 14.8714 8.67649 14.8598L10.1105 14.378C10.1963 14.3538 10.2744 14.3079 10.3373 14.2447L20.7364 3.82685C20.8326 3.72962 20.8865 3.59837 20.8865 3.46159C20.8865 3.32481 20.8326 3.19355 20.7364 3.09632L20.1622 2.51928C20.0648 2.4222 19.9329 2.36769 19.7954 2.36769C19.6579 2.36769 19.526 2.4222 19.4287 2.51928Z" fill="#FF7B47"/>
                </svg>}
                content={'Any other questions?'}
            />
            <motion.p
                variants={textLeftAnimation}
                custom={2}
                className={'!text-3xl mt-5 flex text-cloudburst font-[800] max_sm:flex max_sm:flex-col max_sm:text-center max_sm:!text-2xl'}
            >
                {/*<AnimatedNumbers*/}
                {/*    includeComma*/}
                {/*    transitions={(index) => ({*/}
                {/*        type: "spring",*/}
                {/*        duration: index + 0.3,*/}
                {/*    })}*/}
                {/*    animateToNumber={99.9}*/}
                {/*    fontStyle={{*/}
                {/*        fontSize: 30,*/}
                {/*        fontWeight: 800,*/}
                {/*        color: "#1C2752",*/}
                {/*    }}*/}
                {/*    className={'w-[63px]'}*/}
                {/*/>*/}
                <b className={'mr-3 max_sm:mx-auto'}>99.9%</b>
                {t('Customer Satisfaction')}
            </motion.p>
            <MotionMainDescription
                variants={textRightAnimation}
                custom={3}
                className={'!text-cloudburst !text-lg font-bold mt-2'}
                content={'If you have any questions or need help, please contact our team or call us:'}
            />
            {/*<a*/}
            {/*    href={'tel:+998999999999'}*/}
            {/*    className={'banner-link flex items-center gap-3 font-bold text-whitesmoke mt-4 hover:text-cloudburst w-fit transition-all ease-in-out duration-300'}*/}
            {/*>*/}
            {/*    <svg className={'fill-white transition-all ease-in-out duration-300'} xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="none">*/}
            {/*        <circle cx="21" cy="21.6757" r="21" fill="white"/>*/}
            {/*        <path d="M30.407 27.3475C29.6817 26.5783 27.925 25.4558 27.0727 25.0034C25.9629 24.4149 25.8715 24.3669 24.9991 25.049C24.4172 25.5043 24.0304 25.911 23.3494 25.7581C22.6684 25.6053 21.1885 24.7433 19.8928 23.3837C18.597 22.0242 17.7305 20.4214 17.5848 19.707C17.4391 18.9926 17.8319 18.5902 18.2604 17.9763C18.8642 17.1109 18.8185 16.9667 18.3024 15.7985C17.9 14.8899 16.8024 13.0582 16.0689 12.2986C15.2842 11.4828 15.2842 11.627 14.7786 11.8482C14.367 12.0305 13.9721 12.252 13.5989 12.5102C12.8681 13.0212 12.4625 13.4457 12.1788 14.0836C11.8952 14.7216 11.7678 16.2172 13.2326 19.0181C14.6973 21.8189 15.725 23.251 17.852 25.4836C19.9791 27.7162 21.6147 28.9167 24.0057 30.3281C26.9636 32.0718 28.0981 31.7319 28.7061 31.4339C29.314 31.1358 29.7191 30.7127 30.2055 29.9435C30.4514 29.5514 30.6624 29.1362 30.8358 28.7032C31.0464 28.1729 31.1834 28.1729 30.407 27.3475Z" stroke="#1C2752" stroke-width="1.5" stroke-miterlimit="10"/>*/}
            {/*    </svg>*/}
            {/*    <p className={'text-2xl'}>*/}
            {/*        (99) 999 99 99*/}
            {/*    </p>*/}
            {/*</a>*/}
        </motion.div>
    );
};

export default Banner;