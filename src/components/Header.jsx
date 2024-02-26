import React, {useEffect, useRef, useState} from 'react';
import SocialItem from "./header/UI/SocialItem.jsx";
import HeaderRouters from "./header/HeaderRouters.jsx";
import i18n from "../locales/i18n.js";
import {CSSTransition} from "react-transition-group";
import {motion } from "framer-motion";

const Header = () => {
    const [showLanguage, setShowLanguage] = useState(false)
    const languageRef = useRef(null);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

    function changeShowLanguage() {
        setShowLanguage(!showLanguage);
    }
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguage(!showLanguage);
    }

    useEffect(() => {
        const handleDocumentClick = (event) => {
            console.log('clicked!', languageRef)
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setShowLanguage(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            // Проверяем, проскроллили ли выше высоты первой секции
            const section1Height = document.getElementById('intro').offsetHeight;
            const headerHeight = document.getElementById('header').offsetHeight;
            if (window.pageYOffset > section1Height) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }

            if(window.pageYOffset > headerHeight){
                setIsHeaderScrolled(true)
            } else {
                setIsHeaderScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Очистка слушателя событий при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.header
            id={'header'}
            className={`${isHeaderFixed ? 'bg-opacity-50' : ''}  w-full top-0 left-0 right-0 bg-white z-[100] py-3 flex flex-col gap-8 items-center transition-all ease-in-out duration-300 px-10 max_sm:px-0`}
            initial={{ position: 'absolute', top: 0, left: 0, right: 0, y: 0 }}
            animate={{ position: isHeaderScrolled ? isHeaderFixed ? 'fixed' : 'absolute' : 'absolute', y: isHeaderScrolled ? isHeaderFixed ? 0 : -100 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
            <div className={'container w-full flex items-center justify-between'}>
                <div className={'flex items-center gap-3 text-xl text-cloudburst'}>
                    <img className={'w-[210px] h-[60px] max_sm:w-[200px] max_sm:h-[60px]'} src="/image/logo-light-long.png" alt="logo"/>
                </div>
                <div className={'flex items-center gap-10'}>
                    {/*<SocialItem*/}
                    {/*    svg={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 69 68" fill="none">*/}
                    {/*        <circle cx="34.7949" cy="34" r="34" fill="#FF7B47"/>*/}
                    {/*        <path d="M45.2949 24H24.2949C22.9142 24 21.7949 25.1193 21.7949 26.5V41.5C21.7949 42.8807 22.9142 44 24.2949 44H45.2949C46.6756 44 47.7949 42.8807 47.7949 41.5V26.5C47.7949 25.1193 46.6756 24 45.2949 24Z" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>*/}
                    {/*        <path d="M25.7949 28L34.7949 35L43.7949 28" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>*/}
                    {/*    </svg>}*/}
                    {/*    link={'mailto:Info@Example.com'}*/}
                    {/*    title={'Mail Us!'}*/}
                    {/*    subtitle={'Info@Example.com'}*/}
                    {/*/>*/}
                    {/*<SocialItem*/}
                    {/*    svg={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 69 68" fill="none">*/}
                    {/*        <circle cx="34.7949" cy="34" r="34" fill="#FF7B47"/>*/}
                    {/*        <path d="M48.0458 40.8062C47.1296 39.8832 44.9107 38.5361 43.8342 37.9933C42.4322 37.2871 42.3168 37.2294 41.2149 38.0481C40.4799 38.5944 39.9912 39.0824 39.131 38.899C38.2708 38.7155 36.4015 37.6811 34.7647 36.0497C33.128 34.4182 32.0335 32.4948 31.8495 31.6376C31.6654 30.7803 32.1616 30.2974 32.7028 29.5607C33.4655 28.5223 33.4078 28.3492 32.7558 26.9474C32.2475 25.857 30.8612 23.6591 29.9346 22.7476C28.9434 21.7686 28.9434 21.9416 28.3048 22.207C27.7848 22.4258 27.286 22.6917 26.8145 23.0014C25.8914 23.6146 25.3791 24.124 25.0208 24.8896C24.6626 25.6551 24.5016 27.4499 26.3518 30.8109C28.2021 34.1719 29.5002 35.8905 32.187 38.5696C34.8738 41.2487 36.9398 42.6892 39.96 44.383C43.6963 46.4754 45.1294 46.0675 45.8973 45.7098C46.6652 45.3522 47.177 44.8445 47.7914 43.9215C48.1019 43.4508 48.3685 42.9526 48.5876 42.4331C48.8535 41.7967 49.0266 41.7967 48.0458 40.8062Z" stroke="#1C2752" strokeWidth="2" strokeMiterlimit="10"/>*/}
                    {/*    </svg>}*/}
                    {/*    link={'tel:+9989999999999'}*/}
                    {/*    title={'Call Us!'}*/}
                    {/*    subtitle={'+9989 99 999-99-99'}*/}
                    {/*/>*/}
                    <div className={'relative'} ref={languageRef}>
                        <motion.button
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg
                                onClick={changeShowLanguage}
                                className={`cursor-pointer rounded-full hover:shadow-butterscotch transition-all ease-in-out duration-300 ${showLanguage ? 'rotate-180 shadow-butterscotch' : ''}`}
                                width="30px"
                                height="30px"
                                viewBox="0 0 24 24"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-labelledby="languageIconTitle"
                                stroke="#000000"
                                strokeWidth="1"
                                strokeLinecap="square"
                                strokeLinejoin="miter"
                                fill="none"
                                color="#000000">
                                <circle cx="12" cy="12" r="10"/>
                                <path strokeLinecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"/> <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/>
                            </svg>
                        </motion.button>

                        <CSSTransition
                            in={showLanguage}
                            timeout={300}
                            classNames="left-fade"
                            unmountOnExit
                            onEnter={() => setShowLanguage(true)}
                            onExited={() => setShowLanguage(false)}
                        >
                            <div className={'bg-white absolute top-8 right-5 p-3 px-5 rounded-lg w-[170px] flex flex-col gap-2 shadow-gainsboro'}>
                                <button
                                    className={`flex gap-2 items-center ${i18n.language === 'en' ? '' : 'opacity-60'}`}
                                    onClick={() => changeLanguage('en')}
                                >
                                    <img className={'w-[22px] h-[22px]'} src="./svg/uk.svg" alt=""/>
                                    <span className={'font-bold'}>
                                        {i18n.t('English')}
                                    </span>
                                </button>
                                <button
                                    className={`flex gap-2 items-center ${i18n.language === 'ru' ? '' : 'opacity-60'}`}
                                    onClick={() => changeLanguage('ru')}
                                >
                                    <svg width="22" height="23" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
                                        <path d="M19.378 13.4782C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60505 19.378 6.52173H0.621992C0.220039 7.60505 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621992 13.4782L10 14.3478L19.378 13.4782Z" fill="#0052B4"/>
                                        <path d="M10 20C14.2997 20 17.9651 17.2863 19.378 13.4783H0.622009C2.03494 17.2863 5.70037 20 10 20Z" fill="#D80027"/>
                                    </svg>
                                    <span className={'font-bold'}>
                                        {i18n.t('Russian')}
                                    </span>
                                </button>
                                <button
                                    className={`flex gap-2 items-center ${i18n.language === 'uz' ? '' : 'opacity-60'}`}
                                    onClick={() => changeLanguage('uz')}
                                >
                                    <svg width="22px" height="22px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet">
                                        <path d="M32 2C19.3 2 8.5 9.9 4.1 21h55.8C55.5 9.9 44.7 2 32 2z" fill="#42ade2">
                                        </path>
                                        <path d="M32 62c12.7 0 23.5-7.9 27.9-19H4.1C8.5 54.1 19.3 62 32 62z" fill="#83bf4f">
                                        </path>
                                        <path d="M62 32c0-3.1-.5-6.2-1.4-9H3.4C2.5 25.8 2 28.9 2 32s.5 6.2 1.4 9h57.2c.9-2.8 1.4-5.9 1.4-9" fill="#ffffff">
                                        </path>
                                        <g fill="#c94747">
                                            <path d="M59.9 21c.1.3.3.7.4 1c.1.3.2.7.3 1">
                                            </path>
                                            <path d="M60.3 22c-.1-.3-.3-.7-.4-1H4.1c-.1.3-.3.7-.4 1c-.1.3-.2.7-.3 1h57.2c-.1-.3-.2-.7-.3-1">
                                            </path>
                                            <path d="M3.7 42c.1.3.3.7.4 1h55.8c.1-.3.3-.7.4-1c.1-.3.2-.7.3-1H3.4c.1.3.2.7.3 1">
                                            </path>
                                        </g>
                                        <g fill="#ffffff">
                                            <path d="M20.4 17.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3c.6 0 1.1.1 1.6.3c-.8-.6-1.9-1-3-1c-2.8 0-5 2.2-5 5s2.2 5 5 5c1.1 0 2.2-.4 3-1c-.5.2-1 .3-1.6.3">
                                            </path>
                                            <path d="M24.7 15.2l.4 1.1h1.1l-.9.6l.3 1.1l-.9-.7l-.9.7l.4-1.1l-.9-.6h1.1z">
                                            </path>
                                            <path d="M29 15.2l.3 1.1h1.2l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z">
                                            </path>
                                            <path d="M33.3 15.2l.3 1.1h1.1l-.9.6l.4 1.1l-.9-.7l-1 .7l.4-1.1l-.9-.6h1.1z">
                                            </path>
                                            <path d="M37.5 15.2l.4 1.1H39l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.2z">
                                            </path>
                                            <path d="M41.8 15.2l.3 1.1h1.2l-1 .6l.4 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z">
                                            </path>
                                            <path d="M29 11.6l.3 1.1h1.2l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z">
                                            </path>
                                            <path d="M33.3 11.6l.3 1.1h1.1l-.9.6l.4 1.1l-.9-.7l-1 .7l.4-1.1l-.9-.6h1.1z">
                                            </path>
                                            <path d="M37.5 11.6l.4 1.1H39l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.2z">
                                            </path>
                                            <path d="M41.8 11.6l.3 1.1h1.2l-1 .6l.4 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z">
                                            </path>
                                            <path d="M33.3 8l.3 1.1h1.1l-.9.6l.4 1.1l-.9-.7l-1 .7l.4-1.1l-.9-.6h1.1z">
                                            </path>
                                            <path d="M37.5 8l.4 1.1H39l-.9.6l.3 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.2z">
                                            </path>
                                            <path d="M41.8 8l.3 1.1h1.2l-1 .6l.4 1.1l-.9-.7l-.9.7l.3-1.1l-.9-.6h1.1z">
                                            </path>
                                        </g>
                                    </svg>
                                    <span className={'font-bold'}>
                                        {i18n.t('Uzbek')}
                                    </span>
                                </button>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
            {/*<HeaderRouters/>*/}
        </motion.header>
    );
};

export default Header;