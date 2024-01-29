import React, {useRef, useState, useEffect} from 'react';
import Subtitle from "../../ui/Subtitle.jsx";
import MainTitle from "../../ui/MainTitle.jsx";
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Customers = () => {
    const splideRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0)

    const handlePrev = () => {
        if (splideRef.current) {
            splideRef.current.go('-');
        }
    };

    const handleNext = () => {
        if (splideRef.current) {
            splideRef.current.go('+');
        }
    };

    const splideOptions = {
        cloneStatus: true,
        rewind: false,
        perPage: 1,
        arrows: false,
        pagination: false,
        easing: 'linear',
        autoplay: true,
        perMove: 1,
        gap: 10,
        speed: 300,
    }
    const slideList = [
        {
            src: '/image/cutomers/1.jpg',
            name: 'Nancy luther',
            city: 'NewYork',
            quote: 'Pellentesque vehicula eros neque, maximus mattis est sagittis facilisi.”In sed pretium metus”. Ppretium id urna sit amet tincidunt. Lorem ipsum dolor sit amet,tristique. Duis cursus,in elementum tristique'
        },
        {
            src: '/image/cutomers/1.jpg',
            name: 'Nancy luther',
            city: 'NewYork',
            quote: 'Pellentesque vehicula eros neque, maximus mattis est sagittis facilisi.”In sed pretium metus”. Ppretium id urna sit amet tincidunt. Lorem ipsum dolor sit amet,tristique. Duis cursus,in elementum tristique'
        },
        {
            src: '/image/cutomers/1.jpg',
            name: 'Nancy luther',
            city: 'NewYork',
            quote: 'Pellentesque vehicula eros neque, maximus mattis est sagittis facilisi.”In sed pretium metus”. Ppretium id urna sit amet tincidunt. Lorem ipsum dolor sit amet,tristique. Duis cursus,in elementum tristique'
        },
        {
            src: '/image/cutomers/1.jpg',
            name: 'Nancy luther',
            city: 'NewYork',
            quote: 'Pellentesque vehicula eros neque, maximus mattis est sagittis facilisi.”In sed pretium metus”. Ppretium id urna sit amet tincidunt. Lorem ipsum dolor sit amet,tristique. Duis cursus,in elementum tristique'
        }
    ]

    useEffect(() => {
        splideRef?.current?.splide?.on('moved', () => {
            const currentIndex = splideRef?.current?.splide.index
            const slideLength = splideRef?.current?.splide.length
            setActiveIndex(currentIndex)
        })
    })

    return (
       <div className={'relative'}>
               <Subtitle
                   svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                       <path d="M18.9392 10.5226V20.8376C18.9392 21.1321 18.8812 21.4237 18.7685 21.6957C18.6558 21.9678 18.4906 22.215 18.2824 22.4232C18.0742 22.6314 17.827 22.7966 17.5549 22.9093C17.2828 23.022 16.9913 23.08 16.6968 23.08H3.2424C2.64768 23.08 2.07731 22.8437 1.65678 22.4232C1.23625 22.0027 1 21.4323 1 20.8376V7.3832C1 6.78848 1.23625 6.21812 1.65678 5.79759C2.07731 5.37706 2.64768 5.14081 3.2424 5.14081H12.6313" stroke="#FFB342" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <path d="M22.9258 1.22295C22.8415 1.1303 22.7392 1.05571 22.6253 1.00368C22.5113 0.951653 22.388 0.923273 22.2627 0.920252C22.1375 0.917232 22.0129 0.939635 21.8966 0.986106C21.7802 1.03258 21.6745 1.10215 21.5858 1.19063L20.872 1.90097C20.7855 1.98753 20.7369 2.1049 20.7369 2.22728C20.7369 2.34966 20.7855 2.46703 20.872 2.5536L21.5264 3.2068C21.5693 3.2499 21.6203 3.2841 21.6764 3.30743C21.7326 3.33076 21.7928 3.34277 21.8536 3.34277C21.9144 3.34277 21.9746 3.33076 22.0308 3.30743C22.0869 3.2841 22.1379 3.2499 22.1808 3.2068L22.8768 2.51436C23.2288 2.16294 23.2617 1.59052 22.9258 1.22295ZM19.4287 3.34356L9.01119 13.7418C8.94803 13.8047 8.90212 13.8828 8.87789 13.9686L8.39602 15.4037C8.38448 15.4426 8.38366 15.4839 8.39366 15.5233C8.40365 15.5627 8.42409 15.5986 8.45281 15.6273C8.48153 15.6561 8.51747 15.6765 8.55684 15.6865C8.59621 15.6965 8.63754 15.6957 8.67649 15.6841L10.1105 15.2023C10.1963 15.1781 10.2744 15.1322 10.3373 15.069L20.7364 4.65113C20.8326 4.5539 20.8865 4.42265 20.8865 4.28587C20.8865 4.14909 20.8326 4.01783 20.7364 3.9206L20.1622 3.34356C20.0648 3.24648 19.9329 3.19197 19.7954 3.19197C19.6579 3.19197 19.526 3.24648 19.4287 3.34356Z" fill="#FFB342"/>
                   </svg>}
                   content={'Testimonial'}
               />
               <MainTitle
                    className={'!text-[35px] mt-3'}
                    content={'Customers Says'}
               />
               <Splide
                   className={'!p-0 mt-5'}
                   options={splideOptions}
                   ref={splideRef}
               >
                   {slideList.map((slide, index) => (
                       <SplideSlide key={index}>
                           <div className={'p-5 border border-gainsboro pb-28'}>
                               <div className={'flex justify-between border-b pb-5'}>
                                   <div className={'flex items-center gap-3'}>
                                       <img src="/image/customers/1.png" alt="customers"/>
                                       <div>
                                           <p className={'text-cloudburst font-bold'}>
                                               Nancy luther
                                           </p>
                                           <span className={'text-mediumgray'}>
                                    NewYork
                                </span>
                                       </div>
                                   </div>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56" fill="none">
                                       <circle cx="27.5" cy="28" r="27.5" fill="#FFB342"/>
                                       <path d="M35.2188 20.584C34.0664 21.0723 33.0605 21.8145 32.2012 22.8105C31.3418 23.8066 30.8242 24.8223 30.6484 25.8574C30.5508 26.4043 30.502 26.873 30.502 27.2637C30.502 27.7129 30.5508 28.084 30.6484 28.377C31.5664 27.4199 32.7285 26.9414 34.1348 26.9414C35.541 26.9414 36.6836 27.3516 37.5625 28.1719C38.4414 28.9922 38.8809 30.125 38.8809 31.5703C38.8809 32.9375 38.4121 34.0508 37.4746 34.9102C36.5566 35.7695 35.3848 36.1992 33.959 36.1992C32.0059 36.1992 30.5801 35.4961 29.6816 34.0898C29.2715 33.4844 28.9492 32.7422 28.7148 31.8633C28.4805 30.9648 28.3633 30.0469 28.3633 29.1094C28.3633 27.0586 28.8906 25.1836 29.9453 23.4844C31 21.7852 32.5723 20.457 34.6621 19.5L35.2188 20.584ZM22.8555 20.584C21.7031 21.0723 20.6973 21.8145 19.8379 22.8105C18.9785 23.8066 18.4609 24.8223 18.2852 25.8574C18.1875 26.4043 18.1387 26.873 18.1387 27.2637C18.1387 27.7129 18.1875 28.084 18.2852 28.377C19.2031 27.4199 20.3652 26.9414 21.7715 26.9414C23.1777 26.9414 24.3203 27.3516 25.1992 28.1719C26.0781 28.9922 26.5176 30.125 26.5176 31.5703C26.5176 32.9375 26.0488 34.0508 25.1113 34.9102C24.1934 35.7695 23.0215 36.1992 21.5957 36.1992C19.6426 36.1992 18.2168 35.4961 17.3184 34.0898C16.9082 33.4844 16.5859 32.7422 16.3516 31.8633C16.1172 30.9648 16 30.0469 16 29.1094C16 27.0586 16.5273 25.1836 17.582 23.4844C18.6367 21.7852 20.209 20.457 22.2988 19.5L22.8555 20.584Z" fill="#1C2752"/>
                                   </svg>
                               </div>
                               <blockquote className={'italic text-mediumgray text-lg mt-4'}>
                                   Pellentesque vehicula eros neque, maximus mattis est sagittis facilisi. <b className={'text-cloudburst'}>”In sed pretium metus”.</b> Ppretium id urna sit amet tincidunt. Lorem ipsum dolor sit amet,tristique. Duis cursus,in elementum tristique
                               </blockquote>
                           </div>
                       </SplideSlide>
                   ))}
               </Splide>
               <div className={'absolute bottom-5 left-5 flex items-center gap-3'}>
                   <button
                       onClick={handlePrev}
                       disabled={activeIndex === 0}
                       className={`w-[50px] h-[50px] rounded-full transition-all ease-in-out duration-300 ${activeIndex === 0 ? 'bg-gainsboro' : 'bg-butterscotch hover:shadow-butterscotch'}`}
                   >
                       <svg className={'m-auto rotate-180'} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"/>
                       </svg>
                   </button>
                   <button
                       onClick={handleNext}
                       disabled={activeIndex === slideList.length-1}
                       className={`w-[50px] h-[50px] rounded-full transition-all ease-in-out duration-300 ${activeIndex === slideList.length-1 ? 'bg-gainsboro' : 'bg-butterscotch hover:shadow-butterscotch'}`}
                   >
                       <svg className={'m-auto'} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"/>
                       </svg>
                   </button>
               </div>
           </div>
    );
};

export default Customers;