import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
const ClientsSlider = ({className, ...props}) => {
    const splideOptions = {
        type: 'loop',
        cloneStatus: true,
        rewind: true,
        perPage: 4,
        arrows: false,
        pagination: false,
        easing: 'linear',
        autoplay: true,
        perMove: 1,
        gap: 10,
        speed: 300,
    }
    const slideList = [
        '/image/clients/1.png',
        '/image/clients/2.png',
        '/image/clients/3.png',
        '/image/clients/4.png',
    ]

    return (
        <div className={className}>
            <Splide
                className={'!p-0 mt-5'}
                options={splideOptions}
            >
                {slideList.map((slide, index) => (
                    <SplideSlide key={index}>
                        <img src={slide} className={'black-and-white'} alt=""/>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default ClientsSlider;