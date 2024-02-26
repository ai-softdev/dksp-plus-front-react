import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {forwardRef} from "react";
import {motion} from "framer-motion";

const ClientsSlider = forwardRef(({className, ...props}, ref) => {
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
        breakpoints: {
            1230: {
                perPage: 4,
            },
            940: {
                perPage: 3,
            },
            730: {
                perPage: 2,
            },
            530: {
                perPage: 1,
            }
        }
    }
    const slideList = [
        '/image/clients/1.png',
        '/image/clients/2.png',
        '/image/clients/3.png',
        '/image/clients/4.png',
    ]

    return (
        <div
            ref={ref}
            className={className}
        >
            <Splide
                className={'!p-0 mt-5'}
                options={splideOptions}
            >
                {slideList.map((slide, index) => (
                    <SplideSlide key={index}>
                        <img src={slide} className={'black-and-white mx-auto'} alt=""/>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
});

export default ClientsSlider;
export const MClientSlider = motion(ClientsSlider)