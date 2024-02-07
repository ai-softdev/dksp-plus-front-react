import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProjectCard from "../../ui/ProjectCard.jsx";
const Slider = () => {
    const splideOptions = {
            cloneStatus: true,
            perPage: 4,
            arrows: true,
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
                }
            }
    }
    const slideList = [
        {
            src: '/image/gallery/1.webp',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании'
        },
        {
            src: '/image/gallery/1.webp',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании'
        },
        {
            src: '/image/gallery/1.webp',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании'
        },
        {
            src: '/image/gallery/1.webp',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании'
        },
        {
            src: '/image/gallery/1.webp',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании'
        }
    ]

    return (
        <div>
            <Splide options={splideOptions}>
                {slideList.map((slide, index) => (
                    <SplideSlide>
                        <ProjectCard
                            src={slide.src}
                            title={slide.title}
                            subtitle={slide.subtitle}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Slider;