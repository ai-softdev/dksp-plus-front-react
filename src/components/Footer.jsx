import React from 'react';
import SocialItem from "./header/UI/SocialItem.jsx";
import FooterSocialLink from "./footer/FooterSocialLink.jsx";
import FooterPageLink from "./footer/FooterPageLink.jsx";
import {motion} from "framer-motion";
import {textTopAnimation} from "../utils/consts.js";

const Footer = () => {
    const socialsLinks = [
        `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <circle cx="30" cy="30" r="30" fill="#2C3765"/>
                                    <path d="M33.6585 22.5472C34.7231 22.5503 35.7431 22.9589 36.4958 23.6838C37.2486 24.4086 37.6729 25.3909 37.6761 26.416V34.1527C37.6729 35.1778 37.2486 36.16 36.4958 36.8849C35.7431 37.6098 34.7231 38.0183 33.6585 38.0214H25.6243C24.5598 38.0183 23.5397 37.6098 22.787 36.8849C22.0342 36.16 21.6099 35.1778 21.6068 34.1527V26.416C21.6099 25.3909 22.0342 24.4086 22.787 23.6838C23.5397 22.9589 24.5598 22.5503 25.6243 22.5472H33.6585ZM33.6585 21H25.6243C22.5309 21 20 23.4371 20 26.416V34.1527C20 37.1315 22.5309 39.5686 25.6243 39.5686H33.6585C36.752 39.5686 39.2828 37.1315 39.2828 34.1527V26.416C39.2828 23.4371 36.752 21 33.6585 21Z" fill="white"/>
                                    <path d="M34.8633 26.4163C34.6249 26.4163 34.3919 26.3482 34.1937 26.2207C33.9956 26.0932 33.8411 25.9119 33.7499 25.6999C33.6587 25.4878 33.6348 25.2545 33.6813 25.0293C33.7278 24.8042 33.8426 24.5974 34.0111 24.4351C34.1797 24.2728 34.3944 24.1623 34.6282 24.1175C34.862 24.0727 35.1043 24.0957 35.3245 24.1836C35.5447 24.2714 35.7329 24.4201 35.8654 24.611C35.9978 24.8018 36.0685 25.0262 36.0685 25.2558C36.0688 25.4083 36.0379 25.5593 35.9774 25.7003C35.917 25.8412 35.8282 25.9693 35.7163 26.0771C35.6043 26.1849 35.4713 26.2704 35.3249 26.3286C35.1785 26.3868 35.0217 26.4166 34.8633 26.4163ZM29.641 27.1897C30.2767 27.1897 30.8981 27.3712 31.4266 27.7113C31.9551 28.0514 32.3671 28.5347 32.6103 29.1003C32.8536 29.6658 32.9172 30.2881 32.7932 30.8884C32.6692 31.4888 32.3631 32.0402 31.9136 32.4731C31.4641 32.9059 30.8915 33.2007 30.268 33.3201C29.6446 33.4395 28.9984 33.3782 28.4111 33.144C27.8238 32.9097 27.3219 32.513 26.9687 32.0041C26.6156 31.4951 26.4271 30.8967 26.4271 30.2846C26.428 29.4641 26.7669 28.6774 27.3694 28.0972C27.972 27.5169 28.7889 27.1906 29.641 27.1897ZM29.641 25.6425C28.6876 25.6425 27.7555 25.9147 26.9628 26.4248C26.17 26.9349 25.5521 27.6599 25.1873 28.5081C24.8224 29.3564 24.7269 30.2898 24.9129 31.1903C25.099 32.0908 25.5581 32.9179 26.2323 33.5671C26.9065 34.2163 27.7654 34.6585 28.7005 34.8376C29.6357 35.0167 30.605 34.9248 31.4858 34.5734C32.3667 34.2221 33.1196 33.6271 33.6493 32.8637C34.179 32.1003 34.4617 31.2028 34.4617 30.2846C34.4617 29.0534 33.9538 27.8727 33.0498 27.0021C32.1457 26.1315 30.9196 25.6425 29.641 25.6425Z" fill="white"/>
                                </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <circle cx="30" cy="30" r="30" fill="#2C3765"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M39.2828 30.2843C39.2828 25.1572 34.9657 21 29.6414 21C24.3171 21 20 25.1572 20 30.2843C20 34.9182 23.5251 38.7592 28.1349 39.4563V32.9689H25.6863V30.2843H28.1349V28.2389C28.1349 25.9124 29.5747 24.6263 31.7767 24.6263C32.8317 24.6263 33.9353 24.8078 33.9353 24.8078V27.0928H32.7189C31.5219 27.0928 31.1475 27.8082 31.1475 28.5435V30.2843H33.8212L33.3942 32.9689H31.1479V39.4572C35.7577 38.7604 39.2828 34.9194 39.2828 30.2843Z" fill="white"/>
                            </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <circle cx="30" cy="30" r="30" fill="#2C3765"/>
                                <path d="M40.6602 23.9584C39.8852 24.2952 39.0652 24.517 38.2261 24.617C39.1079 24.1006 39.7711 23.2803 40.0912 22.3099C39.2575 22.7974 38.3469 23.1394 37.3984 23.3214C36.9991 22.9028 36.5187 22.5698 35.9866 22.3427C35.4546 22.1155 34.8818 21.9989 34.3033 22C31.9609 22 30.0654 23.868 30.0654 26.1708C30.0637 26.4911 30.1004 26.8104 30.1747 27.122C28.4951 27.0433 26.8504 26.6148 25.3458 25.864C23.8413 25.1132 22.51 24.0566 21.4372 22.7619C21.0608 23.3963 20.8618 24.1203 20.8608 24.858C20.8608 26.3042 21.6154 27.5826 22.7547 28.3315C22.0797 28.3155 21.4185 28.1368 20.8273 27.8107V27.8623C20.8273 29.8853 22.2907 31.5682 24.2276 31.9513C23.8634 32.0484 23.488 32.0976 23.1111 32.0977C22.8436 32.0981 22.5767 32.0722 22.3144 32.0202C22.8528 33.6773 24.42 34.8825 26.2764 34.9169C24.7679 36.0794 22.9159 36.7078 21.0115 36.7032C20.6734 36.7027 20.3357 36.6825 20 36.6429C21.9374 37.88 24.1895 38.5344 26.4882 38.5281C34.2943 38.5281 38.5589 32.1708 38.5589 26.6572C38.5589 26.4764 38.5541 26.2956 38.5455 26.1191C39.3733 25.5303 40.0893 24.7986 40.6602 23.9584Z" fill="white"/>
                            </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <circle cx="30" cy="30" r="30" fill="#2C3765"/>
                                <path d="M29.7966 20C24.3866 20 20 24.3847 20 29.7923C20 33.801 22.4142 37.2458 25.8649 38.7627C25.8386 38.0807 25.8605 37.2589 26.0354 36.5157C26.2235 35.7201 27.295 31.178 27.295 31.178C27.295 31.178 26.9801 30.5529 26.9801 29.6305C26.9801 28.1792 27.8198 27.095 28.8695 27.095C29.7617 27.095 30.1903 27.7639 30.1903 28.5639C30.1903 29.46 29.6173 30.7977 29.3243 32.0392C29.0794 33.0797 29.8447 33.9234 30.8725 33.9234C32.7269 33.9234 33.9777 31.5409 33.9777 28.7169C33.9777 26.5704 32.5301 24.9661 29.9016 24.9661C26.932 24.9661 25.0776 27.1825 25.0776 29.6567C25.0776 30.5092 25.3313 31.1125 25.7249 31.5759C25.9042 31.7901 25.9305 31.8775 25.8649 32.1223C25.8168 32.3015 25.7118 32.7343 25.6637 32.9092C25.5981 33.1584 25.3969 33.2458 25.1738 33.154C23.8049 32.5944 23.1664 31.0994 23.1664 29.4119C23.1664 26.6316 25.515 23.2961 30.1684 23.2961C33.9077 23.2961 36.37 26.0021 36.37 28.9048C36.37 32.7474 34.2314 35.6152 31.0824 35.6152C30.0241 35.6152 29.0313 35.0425 28.6901 34.3955C28.6901 34.3955 28.1216 36.6512 27.9991 37.0884C27.7936 37.8447 27.3868 38.5966 27.0151 39.1867C27.9169 39.4526 28.8521 39.5881 29.7923 39.5889C35.2023 39.5889 39.5889 35.2042 39.5889 29.7966C39.5889 24.389 35.2067 20 29.7966 20Z" fill="white"/>
                            </svg>`
    ]
    const exploreList = [
        {
            name: 'About Us',
            link: 'About Us'
        },
        {
            name: 'Gallery',
            link: 'Gallery'
        },
        {
            name: 'Offers',
            link: 'Offers'
        },
        {
            name: 'Pricing',
            link: 'Pricing'
        },
        {
            name: 'FAQ',
            link: 'FAQ'
        }
    ]
    const utilityList = [
        {
            name: 'Style Guide',
            link: 'Style Guide'
        },
        {
            name: 'Changelog',
            link: 'Changelog'
        },
        {
            name: 'Licenses',
            link: 'Licenses'
        },
        {
            name: 'Protected Page',
            link: 'Protected Page'
        },
        {
            name: '404 Page',
            link: '404 Page'
        }
    ]
    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            className={'bg-cloudburst py-12'}
        >
            <div className="container flex">
                <div className={'w-full flex items-center justify-between pb-14'}>
                    <motion.div
                        variants={textTopAnimation}
                        custom={1}
                        className={'flex items-center gap-3 text-xl text-cloudburst'}
                    >
                        <img className={'w-[100px]'} src="/image/logo-dark.png" alt="logo"/>
                    </motion.div>
                    <motion.div
                        variants={textTopAnimation}
                        custom={1}
                        className={'flex items-center gap-10'}
                    >
                        {/*<SocialItem*/}
                        {/*    svg={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 69 68" fill="none">*/}
                        {/*        <circle cx="34.7949" cy="34" r="34" fill="#FF7B47"/>*/}
                        {/*        <path d="M45.2949 24H24.2949C22.9142 24 21.7949 25.1193 21.7949 26.5V41.5C21.7949 42.8807 22.9142 44 24.2949 44H45.2949C46.6756 44 47.7949 42.8807 47.7949 41.5V26.5C47.7949 25.1193 46.6756 24 45.2949 24Z" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>*/}
                        {/*        <path d="M25.7949 28L34.7949 35L43.7949 28" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>*/}
                        {/*    </svg>}*/}
                        {/*    link={'mailto:Info@Example.com'}*/}
                        {/*    title={'Mail Us!'}*/}
                        {/*    subtitle={'Info@Example.com'}*/}
                        {/*    isFooter={true}*/}
                        {/*/>*/}
                        {/*<SocialItem*/}
                        {/*    svg={<svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 69 68" fill="none">*/}
                        {/*        <circle cx="34.7949" cy="34" r="34" fill="#FF7B47"/>*/}
                        {/*        <path d="M48.0458 40.8062C47.1296 39.8832 44.9107 38.5361 43.8342 37.9933C42.4322 37.2871 42.3168 37.2294 41.2149 38.0481C40.4799 38.5944 39.9912 39.0824 39.131 38.899C38.2708 38.7155 36.4015 37.6811 34.7647 36.0497C33.128 34.4182 32.0335 32.4948 31.8495 31.6376C31.6654 30.7803 32.1616 30.2974 32.7028 29.5607C33.4655 28.5223 33.4078 28.3492 32.7558 26.9474C32.2475 25.857 30.8612 23.6591 29.9346 22.7476C28.9434 21.7686 28.9434 21.9416 28.3048 22.207C27.7848 22.4258 27.286 22.6917 26.8145 23.0014C25.8914 23.6146 25.3791 24.124 25.0208 24.8896C24.6626 25.6551 24.5016 27.4499 26.3518 30.8109C28.2021 34.1719 29.5002 35.8905 32.187 38.5696C34.8738 41.2487 36.9398 42.6892 39.96 44.383C43.6963 46.4754 45.1294 46.0675 45.8973 45.7098C46.6652 45.3522 47.177 44.8445 47.7914 43.9215C48.1019 43.4508 48.3685 42.9526 48.5876 42.4331C48.8535 41.7967 49.0266 41.7967 48.0458 40.8062Z" stroke="#1C2752" strokeWidth="2" strokeMiterlimit="10"/>*/}
                        {/*    </svg>}*/}
                        {/*    link={'tel:+9989999999999'}*/}
                        {/*    title={'Call Us!'}*/}
                        {/*    subtitle={'+9989 99 999-99-99'}*/}
                        {/*    isFooter={true}*/}
                        {/*/>*/}
                        {/*<SocialItem*/}
                        {/*    svg={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 69 68" fill="none">*/}
                        {/*        <circle cx="34.2988" cy="34" r="34" fill="#FF7B47"/>*/}
                        {/*        <path d="M34.2988 20C28.778 20 24.2988 24.4274 24.2988 29.8803C24.2988 36.1546 30.9655 46.0977 33.4134 49.532C33.515 49.677 33.6482 49.7949 33.8021 49.8763C33.956 49.9576 34.1262 50 34.2988 50C34.4715 50 34.6417 49.9576 34.7956 49.8763C34.9495 49.7949 35.0826 49.677 35.1842 49.532C37.6322 46.0991 44.2988 36.1597 44.2988 29.8803C44.2988 24.4274 39.8197 20 34.2988 20Z" stroke="#1C2752" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
                        {/*        <path d="M34.2988 35C36.508 35 38.2988 33.2091 38.2988 31C38.2988 28.7909 36.508 27 34.2988 27C32.0897 27 30.2988 28.7909 30.2988 31C30.2988 33.2091 32.0897 35 34.2988 35Z" stroke="#1C2752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>*/}
                        {/*    </svg>}*/}
                        {/*    link={'https://maps.app.goo.gl/WCxXvjtQZd6toWWE7'}*/}
                        {/*    title={'Location'}*/}
                        {/*    subtitle={'Amsterdam, 109-74'}*/}
                        {/*    isFooter={true}*/}
                        {/*/>*/}
                    </motion.div>
                </div>
                <div className={'mt-8 flex'}>
                    <div>
                        <motion.span
                            variants={textTopAnimation}
                            custom={1}
                            className={'text-whitesmoke font-[200]'}
                        >
                            Обратитесь к нашим контактным данным и узнайте больше о наших услугах по консалтингу. Мы стремимся быть вашим надежным партнером в реализации бизнес-проектов и достижении ваших целей.
                        </motion.span>
                        {/*<div className={'mt-12 flex  gap-4'}>*/}
                        {/*    {socialsLinks.map((item, index)=> (*/}
                        {/*        <FooterSocialLink*/}
                        {/*            className={'cursor-pointer hover:shadow-gainsboro rounded-full transition-all ease-in-out duration-300'}*/}
                        {/*            svg={item}*/}
                        {/*        />*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                    </div>
                    {/*<div className={'pr-10 border-r border-dusk pl-10 flex flex-col gap-3 w-4/12 text-whitesmoke font-[200]'}>*/}
                    {/*    <p className={'font-bold'}>*/}
                    {/*        Explore*/}
                    {/*    </p>*/}
                    {/*    {exploreList.map((item, index) => (*/}
                    {/*        <FooterPageLink*/}
                    {/*            name={item.name}*/}
                    {/*            link={item.link}*/}
                    {/*        />*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                    {/*<div className={'pr-10 pl-10 flex flex-col gap-3 w-4/12 text-whitesmoke font-[200]'}>*/}
                    {/*    <p className={'font-bold'}>*/}
                    {/*        Uitility Pages*/}
                    {/*    </p>*/}
                    {/*    {utilityList.map((item, index) => (*/}
                    {/*        <FooterPageLink*/}
                    {/*            name={item.name}*/}
                    {/*            link={item.link}*/}
                    {/*        />*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;