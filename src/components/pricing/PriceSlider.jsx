import React from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import ProjectCard from "../ui/ProjectCard.jsx";
import PriceSlide from "./PriceSlide.jsx";

const PriceSlider = () => {
    const splideOptions = {
        cloneStatus: true,
        perPage: 3,
        arrows: true,
        pagination: false,
        easing: 'linear',
        autoplay: true,
        perMove: 1,
        gap: 20,
        speed: 300,
        breakpoints: {
            730: {
                perPage: 2,
            }
        }
    }
    const slideList = [
        {
            plan: 'Basic Plan',
            price: '599',
            popular: false,
            services: [
                'Electrical Service',
                'Distribution Power Systemss',
                'High & Medium Voltages',
                'Industrial Control Systems',
                'Switch Installation',
                'Generator Installations',
                'Innovative Construction'
            ]
        },
        {
            plan: 'Basic Plan',
            price: '699',
            popular: true,
            services: [
                'Electrical Service',
                'Distribution Power Systemss',
                'High & Medium Voltages',
                'Industrial Control Systems',
                'Switch Installation',
                'Generator Installations',
                'Innovative Construction'
            ]
        },
        {
            plan: 'Basic Plan',
            price: '799',
            popular: false,
            services: [
                'Electrical Service',
                'Distribution Power Systemss',
                'High & Medium Voltages',
                'Industrial Control Systems',
                'Switch Installation',
                'Generator Installations',
                'Innovative Construction'
            ]
        },
        {
            plan: 'Basic Plan',
            price: '899',
            popular: false,
            services: [
                'Electrical Service',
                'Distribution Power Systemss',
                'High & Medium Voltages',
                'Industrial Control Systems',
                'Switch Installation',
                'Generator Installations',
                'Innovative Construction'
            ]
        }
    ]

    return (
        <div>
            <Splide options={splideOptions}>
                {slideList.map((slide, index) => (
                    <SplideSlide>
                        <PriceSlide
                            price={slide.price}
                            popular={slide.popular}
                            services={slide.services}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default PriceSlider;