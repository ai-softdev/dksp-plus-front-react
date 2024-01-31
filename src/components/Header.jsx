import React, {useEffect, useRef, useState} from 'react';
import SocialItem from "./header/UI/SocialItem.jsx";
import HeaderRouters from "./header/HeaderRouters.jsx";
import i18n from "../locales/i18n.js";
import {CSSTransition} from "react-transition-group";

const Header = () => {
    const [showLanguage, setShowLanguage] = useState(false)
    const languageRef = useRef(null);

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

    return (
        <header className={'relative z-[100] pb-8 pt-4 container flex flex-col gap-8 items-center'}>
            <div className={'w-full flex items-center justify-between'}>
                <div className={'flex items-center gap-3 text-xl text-cloudburst'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="48" viewBox="0 0 44 48" fill="none">
                        <path d="M39.0644 29.848L44 29.848L44 25.75L29.733 25.75C29.4735 30.0021 25.9028 33.376 21.5381 33.376C17.1734 33.376 13.6027 30.0021 13.3432 25.75L-1.71502e-05 25.75L-1.75084e-05 29.848L4.07406 29.848C4.29203 30.6902 4.57747 31.517 4.92001 32.3284C5.30925 33.2425 5.77116 34.1155 6.30572 34.9423L2.74025 38.4703L8.35573 44.0268L11.9264 40.4937C12.7516 41.0124 13.6235 41.4643 14.5317 41.8443C15.5541 42.2705 16.6077 42.6043 17.682 42.8354L17.682 47.75L25.6329 47.75L25.6329 42.7943C26.645 42.5633 27.6362 42.2449 28.6015 41.8443C29.5773 41.4386 30.5062 40.9507 31.3833 40.3859L34.8917 43.8574L40.5124 38.2957L36.9469 34.7677C37.4348 33.9923 37.8552 33.1758 38.2184 32.3284C38.561 31.517 38.8464 30.6902 39.0644 29.848Z" fill="#1C2752"/>
                        <path d="M36.9436 7.92054V16.1955C36.9436 16.7571 36.4796 17.2127 35.9078 17.2127H35.1741C34.6022 17.2127 34.1383 16.7571 34.1383 16.1955V5.76968C32.0127 4.38169 29.6282 3.34334 27.0711 2.75V17.1067C27.0711 17.6683 26.6071 18.1239 26.0353 18.1239H17.9431C17.3712 18.1239 16.9073 17.6683 16.9073 17.1067V2.75C14.3825 3.34334 11.998 4.39228 9.87248 5.76968V16.1955C9.87248 16.7571 9.40853 17.2127 8.83668 17.2127H8.10299C7.53114 17.2127 7.06718 16.7571 7.06718 16.1955V7.92054C2.72977 11.862 0 17.4881 0 23.75H44C44.0108 17.4881 41.2918 11.862 36.9436 7.92054Z" fill="#FFB342"/>
                        <path d="M25 15.3936C25 15.8671 24.653 16.25 24.2164 16.25H19.7836C19.3582 16.25 19 15.8671 19 15.3936V1.10642C19 0.632871 19.347 0.25 19.7836 0.25H24.2164C24.6418 0.25 25 0.632871 25 1.10642V15.3936Z" fill="#FFB342"/>
                    </svg>
                    <span className={'font-black'}>
                        DKSP PLUS
                    </span>
                </div>
                <div className={'flex items-center gap-10'}>
                    <SocialItem
                        svg={<svg xmlns="http://www.w3.org/2000/svg" width="69" height="65" viewBox="0 0 69 68" fill="none">
                            <circle cx="34.7949" cy="34" r="34" fill="#FFB342"/>
                            <path d="M45.2949 24H24.2949C22.9142 24 21.7949 25.1193 21.7949 26.5V41.5C21.7949 42.8807 22.9142 44 24.2949 44H45.2949C46.6756 44 47.7949 42.8807 47.7949 41.5V26.5C47.7949 25.1193 46.6756 24 45.2949 24Z" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M25.7949 28L34.7949 35L43.7949 28" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>}
                        link={'mailto:Info@Example.com'}
                        title={'Mail Us!'}
                        subtitle={'Info@Example.com'}
                    />
                    <SocialItem
                        svg={<svg xmlns="http://www.w3.org/2000/svg" width="69" height="68" viewBox="0 0 69 68" fill="none">
                            <circle cx="34.7949" cy="34" r="34" fill="#FFB342"/>
                            <path d="M48.0458 40.8062C47.1296 39.8832 44.9107 38.5361 43.8342 37.9933C42.4322 37.2871 42.3168 37.2294 41.2149 38.0481C40.4799 38.5944 39.9912 39.0824 39.131 38.899C38.2708 38.7155 36.4015 37.6811 34.7647 36.0497C33.128 34.4182 32.0335 32.4948 31.8495 31.6376C31.6654 30.7803 32.1616 30.2974 32.7028 29.5607C33.4655 28.5223 33.4078 28.3492 32.7558 26.9474C32.2475 25.857 30.8612 23.6591 29.9346 22.7476C28.9434 21.7686 28.9434 21.9416 28.3048 22.207C27.7848 22.4258 27.286 22.6917 26.8145 23.0014C25.8914 23.6146 25.3791 24.124 25.0208 24.8896C24.6626 25.6551 24.5016 27.4499 26.3518 30.8109C28.2021 34.1719 29.5002 35.8905 32.187 38.5696C34.8738 41.2487 36.9398 42.6892 39.96 44.383C43.6963 46.4754 45.1294 46.0675 45.8973 45.7098C46.6652 45.3522 47.177 44.8445 47.7914 43.9215C48.1019 43.4508 48.3685 42.9526 48.5876 42.4331C48.8535 41.7967 49.0266 41.7967 48.0458 40.8062Z" stroke="#1C2752" strokeWidth="2" strokeMiterlimit="10"/>
                        </svg>}
                        link={'tel:+9989999999999'}
                        title={'Call Us!'}
                        subtitle={'+9989 99 999-99-99'}
                    />
                    <div className={'relative'} ref={languageRef}>
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
            <HeaderRouters/>
        </header>
    );
};

export default Header;