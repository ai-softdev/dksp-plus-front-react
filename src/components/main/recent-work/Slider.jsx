import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
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
            src: '/image/gallery/1.jpg',
            title: 'Interior/Exterior Services',
            subtitle: 'Electric, Instalation'
        },
        {
            src: '/image/gallery/2.jpg',
            title: 'Interior/Exterior Services',
            subtitle: 'Electric, Instalation'
        },
        {
            src: '/image/gallery/3.jpg',
            title: 'Interior/Exterior Services',
            subtitle: 'Electric, Instalation'
        },
        {
            src: '/image/gallery/4.jpg',
            title: 'Interior/Exterior Services',
            subtitle: 'Electric, Instalation'
        },
        {
            src: '/image/gallery/1.jpg',
            title: 'Interior/Exterior Services',
            subtitle: 'Electric, Instalation'
        }
    ]

    return (
        <div>
            <Splide options={splideOptions}>
                {slideList.map((slide, index) => (
                    <SplideSlide>
                        <div className={'bg-whitesmoke p-3 text-center'}>
                            <img src={slide.src} alt="gallery"/>
                            <p className={'font-[800] text-cloudburst pt-4'}>
                                {slide.title}
                            </p>
                            <span className={'text-mediumgray text-sm'}>
                                {slide.subtitle}
                            </span>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Slider;