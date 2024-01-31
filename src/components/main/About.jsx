import React from 'react';
import Subtitle from "../ui/Subtitle.jsx";
import MainTitle from "../ui/MainTitle.jsx";
import MainDescription from "../ui/MainDescription.jsx";
import AnimatedNumbers from "react-animated-numbers";

const About = () => {
    const aboutList = [
        'Sed varius ipsum lacus',
        'Pulvinar tortor dignissim sit amet',
        'Quisque tristique diam quis placerat',
        'Aliquam id ante suscipi fringilla'
    ]

    return (
        <div className={'container grid grid-cols-2 gap-10 py-28 items-center'}>
            <div className={'bg-butterscotch rounded-lg'}>
                <img className={'-translate-x-2 -translate-y-2 rounded-lg'} src="/image/about.jpg" alt="about"/>
            </div>
            <div>
                <Subtitle
                    className={'mb-2'}
                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
                        <path d="M19.9579 15.9077L22.4795 15.9077L22.4795 13.8141L15.1906 13.8141C15.058 15.9864 13.2338 17.7102 11.0039 17.7102C8.77396 17.7102 6.94974 15.9864 6.81716 13.8141L0.000193625 13.8141L0.000193442 15.9077L2.08161 15.9077C2.19297 16.338 2.3388 16.7604 2.5138 17.1749C2.71266 17.6419 2.94865 18.088 3.22175 18.5104L1.40018 20.3128L4.26909 23.1516L6.09331 21.3465C6.51489 21.6115 6.96034 21.8424 7.42435 22.0365C7.9467 22.2543 8.48495 22.4248 9.03381 22.5429L9.03381 25.0537L13.0959 25.0537L13.0959 22.5219C13.6129 22.4038 14.1194 22.2412 14.6125 22.0365C15.111 21.8293 15.5856 21.58 16.0337 21.2914L17.8261 23.065L20.6977 20.2236L18.8761 18.4212C19.1254 18.025 19.3401 17.6078 19.5257 17.1749C19.7007 16.7604 19.8466 16.338 19.9579 15.9077Z" fill="#FFB342"/>
                        <path d="M18.8742 4.70507V8.93269C18.8742 9.21959 18.6372 9.45235 18.345 9.45235H17.9702C17.678 9.45235 17.441 9.21959 17.441 8.93269V3.60621C16.3551 2.89709 15.1368 2.36661 13.8304 2.06348V9.39822C13.8304 9.68511 13.5934 9.91787 13.3012 9.91787H9.167C8.87485 9.91787 8.63782 9.68511 8.63782 9.39822V2.06348C7.34793 2.36661 6.12971 2.90251 5.04378 3.60621V8.93269C5.04378 9.21959 4.80675 9.45235 4.5146 9.45235H4.13976C3.8476 9.45235 3.61057 9.21959 3.61057 8.93269V4.70507C1.39462 6.71874 0 9.59309 0 12.7922H22.4793C22.4848 9.59309 21.0957 6.71874 18.8742 4.70507Z" fill="#FFB342"/>
                        <path d="M12.7724 8.52288C12.7724 8.76481 12.5951 8.96042 12.3721 8.96042H10.1074C9.89004 8.96042 9.70703 8.76481 9.70703 8.52288V1.22367C9.70703 0.981739 9.88432 0.786133 10.1074 0.786133H12.3721C12.5894 0.786133 12.7724 0.981739 12.7724 1.22367V8.52288Z" fill="#FFB342"/>
                    </svg>}
                    content={'Welcome to DKSP PLUS'}
                />
                <MainTitle
                    content={'We Provide Your Future'}
                />
                <MainDescription
                    className={'mt-4'}
                    content={`Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada. <br><br> In pulvinar viverra diam, nec rutrum mauris maximus non. Aenean sed quam tristique, facilisis est ac, interdum velit.`}
                />
                <div className={'mt-8 flex items-center gap-10'}>
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
                                color: "#FFB342",
                            }}
                        />
                        <p className={'w-[100px] text-xl text-center font-black text-cloudburst'}>
                            Years Of Experiance
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
                </div>
            </div>
        </div>
    );
};

export default About;