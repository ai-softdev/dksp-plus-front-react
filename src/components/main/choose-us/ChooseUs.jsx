import React from 'react';
import './ChooseUs.css'
import Subtitle from "../../ui/Subtitle.jsx";
import MainTitle from "../../ui/MainTitle.jsx";
import MainDescription from "../../ui/MainDescription.jsx";
import ChooseResult from "./ChooseResult.jsx";
import ChooseReason from "./ChooseReason.jsx";

const ChooseUs = () => {
    const chooseResultList = [
        {
            number: '3956',
            content: 'Проектов выполнено'
        },
        {
            number: '851',
            content: 'Работников'
        },
        {
            number: '265',
            content: 'Бизнес партнёров'
        },
        {
            number: '854',
            content: 'Довольных клиентов'
        }
    ]
    const chooseReasonList = [
        {
            title: 'Профессионализм и доверие',
            subtitle: 'Мы строим долгосрочные отношения с нашими клиентами на основе профессионализма, доверия и прозрачности. Ваш успех - наш приоритет.'
        },
        {
            title: 'Индивидуальный подход',
            subtitle: 'Мы уникально подходим к каждому клиенту, понимая их уникальные потребности, цели и вызовы.'
        },
        {
            title: 'Глубокий анализ и экспертиза',
            subtitle: 'Мы основываем наши рекомендации и стратегии на обширном анализе рынка, трендов и вашего текущего положения.'
        }
    ]
    return (
        <div className={'flex items-center justify-center gap-[70px]'}>
            <div className={'w-6/12 relative'}>
                <img className={'w-full h-full'} src="/image/choose-us.webp" alt="choose-us"/>
                <div className={'absolute top-32 left-32 right-32 bottom-32 flex items-center justify-center gap-3 flex-col choose-block'}>
                    {chooseResultList.map((item, index) => (
                        <ChooseResult
                            className={'w-[400px]'}
                            number={item.number}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
            <div className={'w-6/12'}>
                <Subtitle
                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M18.9392 10.5226V20.8376C18.9392 21.1321 18.8812 21.4237 18.7685 21.6958C18.6558 21.9678 18.4906 22.215 18.2824 22.4233C18.0742 22.6315 17.827 22.7967 17.5549 22.9093C17.2828 23.022 16.9913 23.08 16.6968 23.08H3.2424C2.64768 23.08 2.07731 22.8438 1.65678 22.4233C1.23625 22.0027 1 21.4324 1 20.8376V7.38327C1 6.78855 1.23625 6.21818 1.65678 5.79765C2.07731 5.37712 2.64768 5.14087 3.2424 5.14087H12.6313" stroke="#FF7B47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22.9258 1.22301C22.8415 1.13036 22.7392 1.05577 22.6253 1.00374C22.5113 0.951714 22.388 0.923334 22.2627 0.920313C22.1375 0.917293 22.0129 0.939696 21.8966 0.986168C21.7802 1.03264 21.6745 1.10222 21.5858 1.19069L20.872 1.90103C20.7855 1.98759 20.7369 2.10496 20.7369 2.22734C20.7369 2.34972 20.7855 2.46709 20.872 2.55366L21.5264 3.20687C21.5693 3.24996 21.6203 3.28416 21.6764 3.30749C21.7326 3.33082 21.7928 3.34283 21.8536 3.34283C21.9144 3.34283 21.9746 3.33082 22.0308 3.30749C22.0869 3.28416 22.1379 3.24996 22.1808 3.20687L22.8768 2.51442C23.2288 2.163 23.2617 1.59058 22.9258 1.22301ZM19.4287 3.34362L9.01119 13.7419C8.94803 13.8048 8.90212 13.8829 8.87789 13.9686L8.39602 15.4037C8.38448 15.4427 8.38366 15.484 8.39366 15.5234C8.40365 15.5627 8.42409 15.5987 8.45281 15.6274C8.48153 15.6561 8.51747 15.6766 8.55684 15.6865C8.59621 15.6965 8.63754 15.6957 8.67649 15.6842L10.1105 15.2023C10.1963 15.1781 10.2744 15.1322 10.3373 15.0691L20.7364 4.65119C20.8326 4.55396 20.8865 4.42271 20.8865 4.28593C20.8865 4.14915 20.8326 4.01789 20.7364 3.92066L20.1622 3.34362C20.0648 3.24655 19.9329 3.19203 19.7954 3.19203C19.6579 3.19203 19.526 3.24655 19.4287 3.34362Z" fill="#FF7B47"/>
                    </svg>}
                    content={'Почему именно мы'}
                />
                <MainTitle
                    className={'max-w-[600px] mt-5'}
                    content={'Почему наша компания - лучший выбор для консалтинга'}
                />
                <MainDescription
                    className={'max-w-[640px] mt-5'}
                    content={'Выбирая нас, вы выбираете партнера, готового помочь вам преодолеть бизнес-вызовы и достичь новых высот. Доверьте ваше стратегическое развитие нам, и мы сделаем ваш успех нашим приоритетом.'}
                />
                <div className={'mt-10 flex flex-col gap-8'}>
                    {chooseReasonList.map((item, index) => (
                        <ChooseReason
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;