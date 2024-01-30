import React from 'react';
import MainButton from "../ui/MainButton.jsx";

const PriceSlide = ({price, services, popular, ...props}) => {
    return (
        <div className={'p-10 bg-white hover:shadow-2xl transition-all ease-in-out duration-300'}>
            <div className={'flex justify-between items-center pb-4 mb-4 border-b border-gainsboro'}>
                <div>
                    <p className={'font-black text-cloudburst text-lg'}>
                        Basic Plan
                    </p>
                    <span className={'font-[800] text-3xl'}>
                        {Number(price).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}
                    </span>
                </div>
                <div className={'flex flex-col items-center gap-2'}>
                    {popular && <span className={'py-1 px-3 bg-butterscotch uppercase'}>
                        Popular
                    </span>}
                    <span className={'text-mediumgray'}>
                        Per Visit Charge
                    </span>
                </div>
            </div>
            <div className={'flex flex-col gap-3 my-10'}>
                {
                    services.map((item, index) => (
                        <div className={'flex items-center gap-3'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M17.9561 9.47803C17.9561 4.79745 14.1586 1 9.47803 1C4.79745 1 1 4.79745 1 9.47803C1 14.1586 4.79745 17.9561 9.47803 17.9561C14.1586 17.9561 17.9561 14.1586 17.9561 9.47803Z" stroke="#FFB342" strokeWidth="1.5" strokeMiterlimit="10"/>
                                <path d="M13.717 5.94531L7.78242 13.0103L5.23901 10.1843" stroke="#FFB342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className={'text-mediumgray'}>
                                {item}
                            </p>
                        </div>
                    ))
                }
            </div>
            <MainButton
                className={`w-full ${popular ? 'bg-white border border-butterscotch' : ''}`}
                content={'Buy Now'}
            />
        </div>
    );
};

export default PriceSlide;