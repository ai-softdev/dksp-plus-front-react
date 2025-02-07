import React from 'react';
import Subtitle from "../../components/ui/Subtitle.jsx";
import MainTitle from "../../components/ui/MainTitle.jsx";
import MainDescription from "../../components/ui/MainDescription.jsx";
import PriceSlider from "../../components/pricing/PriceSlider.jsx";

const PriceList = () => {
    return (
        <div className={'bg-whitesmoke py-20'}>
            <div className="container">
                <div className={'flex items-center justify-between'}>
                    <div>
                        <Subtitle
                            className={'!bg-white'}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M18.9392 10.5224V20.8374C18.9392 21.1319 18.8812 21.4235 18.7685 21.6955C18.6558 21.9676 18.4906 22.2148 18.2824 22.423C18.0742 22.6312 17.827 22.7964 17.5549 22.9091C17.2828 23.0218 16.9913 23.0798 16.6968 23.0798H3.2424C2.64768 23.0798 2.07731 22.8435 1.65678 22.423C1.23625 22.0025 1 21.4321 1 20.8374V7.38302C1 6.7883 1.23625 6.21794 1.65678 5.79741C2.07731 5.37688 2.64768 5.14063 3.2424 5.14062H12.6313" stroke="#FF7B47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22.9258 1.22288C22.8415 1.13024 22.7392 1.05564 22.6253 1.00362C22.5113 0.951592 22.388 0.923212 22.2627 0.920191C22.1375 0.917171 22.0129 0.939573 21.8966 0.986045C21.7802 1.03252 21.6745 1.10209 21.5858 1.19057L20.872 1.9009C20.7855 1.98747 20.7369 2.10484 20.7369 2.22722C20.7369 2.3496 20.7855 2.46697 20.872 2.55354L21.5264 3.20674C21.5693 3.24984 21.6203 3.28403 21.6764 3.30737C21.7326 3.3307 21.7928 3.34271 21.8536 3.34271C21.9144 3.34271 21.9746 3.3307 22.0308 3.30737C22.0869 3.28403 22.1379 3.24984 22.1808 3.20674L22.8768 2.5143C23.2288 2.16288 23.2617 1.59046 22.9258 1.22288ZM19.4287 3.3435L9.01119 13.7417C8.94803 13.8046 8.90212 13.8827 8.87789 13.9685L8.39602 15.4036C8.38448 15.4426 8.38366 15.4839 8.39366 15.5233C8.40365 15.5626 8.42409 15.5986 8.45281 15.6273C8.48153 15.656 8.51747 15.6764 8.55684 15.6864C8.59621 15.6964 8.63754 15.6956 8.67649 15.6841L10.1105 15.2022C10.1963 15.178 10.2744 15.1321 10.3373 15.0689L20.7364 4.65107C20.8326 4.55384 20.8865 4.42259 20.8865 4.28581C20.8865 4.14903 20.8326 4.01777 20.7364 3.92054L20.1622 3.3435C20.0648 3.24642 19.9329 3.19191 19.7954 3.19191C19.6579 3.19191 19.526 3.24642 19.4287 3.3435Z" fill="#FF7B47"/>
                            </svg>}
                            content={'Цены'}
                        />
                        <MainTitle
                            className={'w-[577px] mt-5'}
                            content={'Подробная информация о наших ценах и услугах'}
                        />
                    </div>
                    <MainDescription
                        className={'w-[579px]'}
                        content={'Здесь вы найдете подробную информацию о ценах и пакетах услуг, которые мы предлагаем. Изучите наши тарифы и найдите оптимальное решение, соответствующее вашим бизнес-задачам и бюджету.'}
                    />
                </div>
                <div className={'mt-10'}>
                    <PriceSlider/>
                </div>
                <div className={'flex justify-between'}>
                    <div className={'flex gap-3'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="16" fill="#FF7B47"/>
                            <path d="M23 11L13.9 22L10 17.875" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                            <MainTitle
                                className={'text-sm'}
                                content={'Доступная цена'}
                            />
                            <MainDescription
                                className={'text-sm w-[510px]'}
                                content={'Мы стремимся сделать наши услуги доступными для всех, не жертвуя при этом качеством.'}
                            />
                        </div>
                    </div>
                    <div className={'flex gap-3'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="16" fill="#FF7B47"/>
                            <path d="M23 11L13.9 22L10 17.875" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                            <MainTitle
                                className={'text-sm'}
                                content={'Фиксированный план'}
                            />
                            <MainDescription
                                className={'text-sm w-[510px]'}
                                content={'Изучите нашу гибкую систему тарифов и обретите надежность в ваших планах.'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceList;