import React from 'react';
import ProjectCard from "../../components/ui/ProjectCard.jsx";

const ProjectsList = () => {
    const slideList = [
        {
            src: '/image/gallery/1.jpg',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании.'
        },
        {
            src: '/image/gallery/1.jpg',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании.'
        },
        {
            src: '/image/gallery/1.jpg',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании.'
        },
        {
            src: '/image/gallery/1.jpg',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании.'
        },
        {
            src: '/image/gallery/1.jpg',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании.'
        },
        {
            src: '/image/gallery/1.jpg',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании.'
        },
        {
            src: '/image/gallery/1.jpg',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании.'
        },
        {
            src: '/image/gallery/1.jpg',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании.'
        },
        {
            src: '/image/gallery/1.jpg',
            title: 'Стратегическое планирование',
            subtitle: 'Разработка стратегии роста и диверсификации для компании.'
        },
    ]
    return (
        <div className={'py-28'}>
            <div className="container grid grid-cols-3 gap-8">
                {slideList.map((slide, index) => (
                    <ProjectCard
                        className={'border border-gainsboro p-5 !bg-white hover:shadow-gainsboro hover:-translate-y-2 transition-all ease-in-out duration-300'}
                        src={slide.src}
                        title={slide.title}
                        subtitle={slide.subtitle}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;