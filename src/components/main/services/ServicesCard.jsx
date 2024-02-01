import React from 'react';
import './ServicesCard.css'

const ServicesCard = ({svg, title, description, ...props}) => {
    return (
        <div className={'bg-butterscotch'}>
            <div className={'relative min-h-[400px] h-full services-card bg-cloudburst px-[36px] py-[47px] hover:shadow-2xl transition-all ease-in-out duration-300'}>
                <img className={'w-[48px] h-[48px]'} src={svg} alt="services"/>
                <p className={'text-butterscotch mt-3 font-bold'}>
                    {title}
                </p>
                <span className={'block text-greyGoose mt-3'}>
                    {description}
                </span>
                <button className={'absolute bottom-10 text-whitesmoke'}>
                    Читать больше
                </button>
            </div>
        </div>
    );
};

export default ServicesCard;