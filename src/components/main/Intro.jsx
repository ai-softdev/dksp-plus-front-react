import React from 'react';

const Intro = () => {
    return (
        <div className={'main_bg min-h-[90vh]'}>
            <div className={'container pt-[200px] flex flex-col gap-6 relative z-10'}>
                <div className={'subtitle flex items-center gap-3 w-fit px-3 py-2 text-white font-medium'}>
                    <svg className={'rotate-animation'} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M30 14.5729C29.9903 14.3973 29.9172 14.2307 29.7936 14.1026C29.6701 13.9746 29.504 13.8934 29.325 13.8733L27.476 13.5813C27.3928 13.568 27.3163 13.5288 27.2578 13.4695C27.1993 13.4103 27.162 13.3342 27.1514 13.2526C27.1161 13.0309 27.0793 12.8008 27.0288 12.5826C27.0126 12.5033 27.0221 12.4209 27.0561 12.3471C27.0901 12.2733 27.1469 12.2117 27.2185 12.1709L28.8613 11.2806C29.0244 11.1995 29.1513 11.0627 29.2178 10.8962C29.2843 10.7297 29.2857 10.5452 29.2219 10.3777L28.937 9.61057C28.8745 9.44253 28.7508 9.30288 28.5894 9.21835C28.428 9.13381 28.2403 9.11034 28.0623 9.15241L26.2197 9.5043C26.1373 9.51867 26.0524 9.50729 25.977 9.47178C25.9017 9.43626 25.8397 9.37844 25.8 9.30654C25.6926 9.11018 25.5757 8.91031 25.4538 8.71396C25.4096 8.644 25.3888 8.56229 25.3945 8.48026C25.4002 8.39823 25.4321 8.31999 25.4856 8.2565L26.7115 6.87428C26.8361 6.7438 26.9076 6.5735 26.9128 6.39526C26.918 6.21702 26.8564 6.04305 26.7397 5.90589L26.2046 5.27882C26.0882 5.14119 25.9236 5.0506 25.7427 5.0246C25.5617 4.9986 25.3774 5.03903 25.2252 5.13807L23.612 6.08324C23.5405 6.12506 23.4571 6.14333 23.3741 6.13534C23.2911 6.12736 23.213 6.09355 23.1512 6.0389C22.9731 5.88618 22.7906 5.73909 22.6197 5.60326C22.5541 5.55275 22.5067 5.48314 22.4844 5.40455C22.4621 5.32596 22.4661 5.24247 22.4957 5.16622L23.1635 3.449C23.2362 3.28516 23.2447 3.10094 23.1874 2.93137C23.1301 2.76179 23.011 2.61866 22.8526 2.52917L22.125 2.11464C21.9666 2.02548 21.78 1.9965 21.601 2.03325C21.422 2.07 21.2632 2.1699 21.1551 2.31381L19.976 3.75937C19.9336 3.8222 19.87 3.86865 19.7963 3.89074C19.7226 3.91283 19.6434 3.90918 19.5721 3.88042C19.5281 3.86282 19.156 3.71433 18.8668 3.62002C18.7875 3.59479 18.7185 3.54546 18.67 3.47923C18.6215 3.413 18.5959 3.33336 18.5971 3.25195L18.6252 1.4172C18.6353 1.23805 18.5781 1.06146 18.4643 0.920516C18.3505 0.779569 18.188 0.683924 18.0072 0.651492L17.1815 0.510737C17.0016 0.480405 16.8165 0.514844 16.6607 0.607654C16.5048 0.700465 16.3888 0.845335 16.3341 1.01534L15.7212 2.76141C15.6933 2.83892 15.6408 2.90569 15.5712 2.95192C15.5016 2.99815 15.4187 3.02141 15.3346 3.01829H14.6315C14.548 3.01997 14.4662 2.9959 14.3975 2.94953C14.3289 2.90315 14.277 2.83683 14.2493 2.76001L13.6392 1.02379C13.5855 0.852539 13.4697 0.706255 13.3135 0.612333C13.1572 0.518411 12.9713 0.483291 12.7904 0.513552L11.9632 0.654307C11.7836 0.686483 11.622 0.781192 11.5084 0.920848C11.3949 1.0605 11.3372 1.23562 11.3459 1.41368L11.3748 3.25476C11.3753 3.33739 11.3486 3.418 11.2984 3.48457C11.2482 3.55115 11.1774 3.60014 11.0964 3.62424C10.9313 3.68688 10.5728 3.8206 10.4099 3.87972C10.2656 3.93039 10.1084 3.87479 9.9815 3.73192L8.8089 2.32437C8.70132 2.17958 8.54268 2.07871 8.3635 2.04117C8.18432 2.00362 7.99724 2.03205 7.83823 2.12098L7.11275 2.53128C6.95268 2.62094 6.83228 2.76524 6.77476 2.93639C6.71724 3.10753 6.72666 3.29339 6.80121 3.45815L7.46828 5.17114C7.49738 5.24756 7.5012 5.33096 7.47921 5.40961C7.45722 5.48826 7.41052 5.5582 7.34568 5.6096C7.17044 5.75035 6.99088 5.89111 6.81203 6.04735C6.75062 6.10157 6.67304 6.13519 6.59065 6.14329C6.50825 6.1514 6.42536 6.13356 6.3541 6.09239L4.75963 5.12892C4.60652 5.03173 4.42233 4.9924 4.24163 5.01831C4.06092 5.04423 3.89612 5.1336 3.77814 5.26967L3.2452 5.89533C3.12682 6.03156 3.06409 6.2056 3.06902 6.38415C3.07394 6.5627 3.14617 6.73321 3.27189 6.86302L4.50362 8.24383C4.55828 8.30605 4.59095 8.3838 4.5968 8.46556C4.60264 8.54732 4.58135 8.62874 4.53607 8.69777C4.41275 8.8892 4.2952 9.09048 4.18847 9.29176C4.14855 9.36416 4.08615 9.42237 4.01023 9.45802C3.93431 9.49367 3.84877 9.50495 3.76588 9.49022L1.92621 9.14326C1.7481 9.10132 1.56039 9.12484 1.39891 9.20935C1.23743 9.29385 1.11349 9.43342 1.05073 9.60142L0.762272 10.3671C0.698513 10.5348 0.700003 10.7195 0.766461 10.8862C0.832919 11.0529 0.959726 11.19 1.12285 11.2715L2.76564 12.1618C2.83951 12.2015 2.89812 12.2637 2.93259 12.3389C2.96707 12.414 2.97554 12.4981 2.95674 12.5784L2.93943 12.6678C2.90193 12.8641 2.86732 13.0499 2.83415 13.2477C2.82268 13.3283 2.78539 13.4032 2.72763 13.4619C2.66986 13.5205 2.59456 13.5599 2.51251 13.5742L0.659868 13.8663C0.47869 13.888 0.311803 13.9733 0.190375 14.1063C0.0689462 14.2394 0.00127967 14.4109 1.22961e-05 14.5891V15.4041C-0.00104353 15.5829 0.0659291 15.7557 0.187962 15.8891C0.309996 16.0225 0.478408 16.107 0.660589 16.1261L2.51251 16.4175C2.59573 16.4307 2.67233 16.4699 2.73083 16.5291C2.78933 16.5884 2.82659 16.6645 2.83703 16.7462C2.87237 16.9686 2.90915 17.198 2.95963 17.4162C2.97589 17.4955 2.96636 17.5778 2.93236 17.6516C2.89835 17.7255 2.84158 17.7871 2.76996 17.8279L1.1279 18.7195C0.964773 18.8007 0.837904 18.9375 0.77142 19.104C0.704937 19.2705 0.703477 19.455 0.76732 19.6225L1.05578 20.3896C1.11839 20.5576 1.2422 20.6971 1.40356 20.7816C1.56492 20.8661 1.75252 20.8897 1.93054 20.8478L3.77309 20.4994C3.85549 20.4848 3.94051 20.4961 4.01592 20.5316C4.09134 20.5672 4.15326 20.6251 4.1928 20.6972C4.30097 20.8942 4.41708 21.0934 4.53895 21.2897C4.58343 21.3596 4.60429 21.4414 4.5986 21.5235C4.59291 21.6055 4.56094 21.6838 4.50722 21.7472L3.28126 23.1287C3.15526 23.2582 3.08206 23.4281 3.07542 23.6066C3.06878 23.7851 3.12916 23.9597 3.2452 24.0978L3.77958 24.7249C3.89589 24.8626 4.0605 24.9533 4.24146 24.9793C4.42242 25.0053 4.60683 24.9648 4.7589 24.8656L6.37212 23.9205C6.44365 23.8786 6.52706 23.8604 6.61004 23.8684C6.69301 23.8763 6.77116 23.9101 6.83294 23.9648C7.01179 24.1175 7.19352 24.2646 7.36443 24.4004C7.42997 24.451 7.47737 24.5206 7.49979 24.5991C7.52221 24.6777 7.5185 24.7611 7.48919 24.8375L6.82068 26.5547C6.74796 26.7185 6.73944 26.9028 6.79674 27.0723C6.85404 27.2419 6.97317 27.385 7.1315 27.4745L7.86059 27.8855C8.01894 27.9748 8.20547 28.0039 8.38444 27.9672C8.56341 27.9306 8.72224 27.8309 8.83054 27.6871L10.024 26.2549C10.125 26.1331 10.2837 26.0789 10.4012 26.1254C10.6522 26.2267 10.8202 26.2837 11.118 26.3809C11.1974 26.4062 11.2664 26.4555 11.315 26.5217C11.3636 26.5879 11.3894 26.6675 11.3885 26.7489L11.3596 28.5823C11.3499 28.7614 11.4072 28.9378 11.5209 29.0787C11.6346 29.2196 11.797 29.3153 11.9777 29.348L12.8034 29.4887C12.9833 29.5194 13.1685 29.4851 13.3245 29.3922C13.4804 29.2994 13.5964 29.1543 13.6507 28.9841L14.2637 27.2409C14.2914 27.1633 14.344 27.0965 14.4136 27.0502C14.4832 27.004 14.5661 26.9808 14.6502 26.984H15.3534C15.4368 26.9822 15.5188 27.0062 15.5874 27.0526C15.6561 27.099 15.7079 27.1654 15.7356 27.2423L16.3464 28.9785C16.3937 29.1292 16.4893 29.2612 16.6191 29.355C16.7488 29.4489 16.906 29.4997 17.0676 29.5C17.1106 29.5001 17.1536 29.4963 17.1959 29.4887L18.0231 29.348C18.2028 29.3158 18.3644 29.2211 18.4779 29.0814C18.5914 28.9418 18.6492 28.7667 18.6404 28.5886L18.6115 26.7475C18.611 26.6664 18.6369 26.5872 18.6855 26.5214C18.7341 26.4556 18.8029 26.4067 18.882 26.3816C19.1589 26.2908 19.3536 26.2176 19.5245 26.1528L19.5678 26.1366C19.7914 26.0613 19.8995 26.1528 19.9623 26.2288L21.1702 27.6807C21.2785 27.8244 21.4372 27.924 21.616 27.9606C21.7948 27.9972 21.9811 27.9682 22.1394 27.8792L22.8656 27.4689C23.0245 27.3794 23.144 27.2359 23.2013 27.0658C23.2586 26.8957 23.2498 26.711 23.1764 26.547L22.5101 24.834C22.4807 24.7576 22.4766 24.6742 22.4985 24.5955C22.5204 24.5168 22.5671 24.4469 22.632 24.3955C22.8072 24.2548 22.9868 24.114 23.1656 23.9578C23.2274 23.9034 23.3055 23.8698 23.3883 23.8619C23.4711 23.8541 23.5543 23.8724 23.6257 23.9141L25.2404 24.8572C25.3934 24.9545 25.5777 24.9939 25.7584 24.968C25.9392 24.9421 26.104 24.8526 26.2219 24.7164L26.7555 24.0901C26.8739 23.9538 26.9366 23.7798 26.9317 23.6012C26.9268 23.4227 26.8546 23.2522 26.7288 23.1224L25.4986 21.738C25.4439 21.6758 25.4112 21.5981 25.4054 21.5163C25.3995 21.4346 25.4208 21.3531 25.4661 21.2841C25.5894 21.0934 25.707 20.8921 25.8137 20.6901C25.8538 20.6179 25.9162 20.5598 25.9921 20.5242C26.068 20.4885 26.1534 20.4772 26.2363 20.4917L28.0738 20.8414C28.2519 20.8834 28.4396 20.8599 28.6011 20.7753C28.7626 20.6908 28.8865 20.5513 28.9493 20.3833L29.2341 19.6176C29.2979 19.45 29.2963 19.2654 29.2299 19.0988C29.1634 18.9323 29.0366 18.7953 28.8736 18.7139L27.2293 17.8222C27.1565 17.782 27.0988 17.72 27.0649 17.6454C27.031 17.5707 27.0227 17.4874 27.0411 17.4077L27.0584 17.3183C27.0959 17.122 27.1305 16.9362 27.1637 16.7384C27.1752 16.6578 27.2125 16.5829 27.2702 16.5242C27.328 16.4656 27.4033 16.4262 27.4853 16.4119L29.338 16.1205C29.5196 16.0991 29.687 16.0138 29.8089 15.8807C29.9307 15.7475 29.9987 15.5756 30 15.397V14.5729ZM9.63102 21.1884C9.54115 21.3409 9.41549 21.4704 9.26435 21.5663C9.11322 21.6622 8.94093 21.7217 8.76164 21.74C8.58235 21.7583 8.40118 21.7348 8.233 21.6714C8.06483 21.6081 7.91446 21.5067 7.79424 21.3756C6.16958 19.6225 5.27253 17.3416 5.27813 14.9778C5.28373 12.6141 6.19158 10.3372 7.82453 8.5915C7.94537 8.46046 8.09639 8.35932 8.26514 8.29642C8.43389 8.23351 8.61554 8.21063 8.79512 8.22966C8.97471 8.2487 9.14709 8.30911 9.29806 8.40592C9.44903 8.50272 9.57428 8.63314 9.66347 8.78645L12.9555 14.4413C13.0544 14.6099 13.1064 14.8009 13.1064 14.9952C13.1064 15.1895 13.0544 15.3804 12.9555 15.549L9.63102 21.1884ZM15 24.5088C14.3137 24.509 13.6294 24.4382 12.9584 24.2977C12.7836 24.2596 12.6205 24.1818 12.4822 24.0707C12.344 23.9596 12.2345 23.8182 12.1626 23.6581C12.0908 23.498 12.0586 23.3236 12.0687 23.1491C12.0788 22.9746 12.1308 22.8049 12.2207 22.6537L15.538 17.0234C15.6378 16.8538 15.7817 16.7128 15.9551 16.6149C16.1286 16.5169 16.3255 16.4653 16.526 16.4654H23.1707C23.3497 16.4651 23.5262 16.506 23.686 16.5847C23.8458 16.6634 23.9843 16.7778 24.0903 16.9185C24.1964 17.0592 24.267 17.2223 24.2964 17.3946C24.3258 17.5669 24.3132 17.7435 24.2596 17.9102C22.9983 21.7331 19.3269 24.5088 15 24.5088ZM15.5416 12.9739L12.2596 7.33385C12.1707 7.1824 12.1195 7.01265 12.1102 6.83832C12.1009 6.66399 12.1338 6.48998 12.2062 6.33034C12.2786 6.17071 12.3884 6.02994 12.5269 5.9194C12.6653 5.80886 12.8285 5.73167 13.0031 5.69405C13.6597 5.55901 14.329 5.49108 15 5.49136C19.3269 5.49136 22.9983 8.26706 24.2575 12.0921C24.311 12.2587 24.3236 12.4354 24.2942 12.6077C24.2648 12.78 24.1942 12.9431 24.0882 13.0838C23.9821 13.2245 23.8436 13.3389 23.6838 13.4176C23.524 13.4963 23.3475 13.5372 23.1685 13.5369H16.5339C16.3322 13.5373 16.134 13.4854 15.9597 13.3865C15.7853 13.2875 15.641 13.1452 15.5416 12.9739Z" fill="#FF7B47"/>
                    </svg>
                    <span>
                        Разумное руководство к успеху: Оптимизируйте ваш бизнес с нами
                    </span>
                </div>
                <h5 className={'title max-w-[70%]'}>
                    Бизнес-Консалтинг: <br/> Ваш успех в надёжных руках
                </h5>
            </div>
        </div>
    );
};

export default Intro;