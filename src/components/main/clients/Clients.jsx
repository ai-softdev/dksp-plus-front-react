import React from 'react';
import Subtitle, {MSubtitle} from "../../ui/Subtitle.jsx";
import MainTitle, {MotionMainTitle} from "../../ui/MainTitle.jsx";
import ClientsSlider, {MClientSlider} from "./ClientsSlider.jsx";
import './Clients.css'
import {motion} from "framer-motion";
import {textLeftAnimation, textTopAnimation} from "../../../utils/consts.js";

const Clients = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className={'py-20'}
        >
            <div className={'container'}>
                <MSubtitle
                    variants={textTopAnimation}
                    custom={1}
                    className={'mx-auto'}
                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M19.3591 10.5226V20.8376C19.3591 21.1321 19.3011 21.4237 19.1884 21.6958C19.0757 21.9678 18.9105 22.215 18.7023 22.4233C18.4941 22.6315 18.2469 22.7967 17.9748 22.9093C17.7028 23.022 17.4112 23.08 17.1167 23.08H3.66232C3.0676 23.08 2.49724 22.8438 2.0767 22.4233C1.65617 22.0027 1.41992 21.4324 1.41992 20.8376V7.38327C1.41992 6.78855 1.65617 6.21818 2.0767 5.79765C2.49724 5.37712 3.0676 5.14087 3.66232 5.14087H13.0512" stroke="#FF7B47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M23.3457 1.22301C23.2614 1.13036 23.1592 1.05577 23.0452 1.00374C22.9312 0.951714 22.8079 0.923334 22.6827 0.920313C22.5574 0.917293 22.4328 0.939696 22.3165 0.986168C22.2002 1.03264 22.0944 1.10222 22.0057 1.19069L21.2919 1.90103C21.2054 1.98759 21.1568 2.10496 21.1568 2.22734C21.1568 2.34972 21.2054 2.46709 21.2919 2.55366L21.9463 3.20687C21.9892 3.24996 22.0402 3.28416 22.0963 3.30749C22.1525 3.33082 22.2127 3.34283 22.2735 3.34283C22.3343 3.34283 22.3945 3.33082 22.4507 3.30749C22.5068 3.28416 22.5578 3.24996 22.6007 3.20687L23.2967 2.51442C23.6487 2.163 23.6816 1.59058 23.3457 1.22301ZM19.8486 3.34362L9.43112 13.7419C9.36795 13.8048 9.32204 13.8829 9.29781 13.9686L8.81594 15.4037C8.8044 15.4427 8.80358 15.484 8.81358 15.5234C8.82357 15.5627 8.84401 15.5987 8.87273 15.6274C8.90145 15.6561 8.93739 15.6766 8.97676 15.6865C9.01613 15.6965 9.05746 15.6957 9.09641 15.6842L10.5305 15.2023C10.6162 15.1781 10.6943 15.1322 10.7573 15.0691L21.1563 4.65119C21.2525 4.55396 21.3065 4.42271 21.3065 4.28593C21.3065 4.14915 21.2525 4.01789 21.1563 3.92066L20.5821 3.34362C20.4847 3.24655 20.3528 3.19203 20.2153 3.19203C20.0779 3.19203 19.946 3.24655 19.8486 3.34362Z" fill="#FF7B47"/>
                    </svg>}
                    content={'Customers'}
                />
                <MotionMainTitle
                    variants={textLeftAnimation}
                    custom={2}
                    className={'text-center mt-5'}
                    content={'Our reliable customers!'}
                />
                <MClientSlider
                    variants={textTopAnimation}
                    custom={3}
                    className={'mt-10'}
                />
            </div>
        </motion.section>
    );
};

export default Clients;