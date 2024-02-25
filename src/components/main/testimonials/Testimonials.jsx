import React from 'react';
import Customers from "./Customers.jsx";
import Banner from "./Banner.jsx";
import Form from "./Form.jsx";
import Subtitle, {MSubtitle} from "../../ui/Subtitle.jsx";
import MainTitle, {MotionMainTitle} from "../../ui/MainTitle.jsx";
import {motion} from "framer-motion";
import {textRightAnimation, textTopAnimation} from "../../../utils/consts.js";

const Testimonials = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className={'py-32'}
        >
            <div className={'container flex flex-col items-center justify-center gap-12 '}>
                <div className={'flex items-center justify-center flex-col'}>
                    <MSubtitle
                        variants={textTopAnimation}
                        custom={1}
                        svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M18.9392 10.5226V20.8376C18.9392 21.1321 18.8812 21.4237 18.7685 21.6957C18.6558 21.9678 18.4906 22.215 18.2824 22.4232C18.0742 22.6314 17.827 22.7966 17.5549 22.9093C17.2828 23.022 16.9913 23.08 16.6968 23.08H3.2424C2.64768 23.08 2.07731 22.8437 1.65678 22.4232C1.23625 22.0027 1 21.4323 1 20.8376V7.3832C1 6.78848 1.23625 6.21812 1.65678 5.79759C2.07731 5.37706 2.64768 5.14081 3.2424 5.14081H12.6313" stroke="#FF7B47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22.9258 1.22295C22.8415 1.1303 22.7392 1.05571 22.6253 1.00368C22.5113 0.951653 22.388 0.923273 22.2627 0.920252C22.1375 0.917232 22.0129 0.939635 21.8966 0.986106C21.7802 1.03258 21.6745 1.10215 21.5858 1.19063L20.872 1.90097C20.7855 1.98753 20.7369 2.1049 20.7369 2.22728C20.7369 2.34966 20.7855 2.46703 20.872 2.5536L21.5264 3.2068C21.5693 3.2499 21.6203 3.2841 21.6764 3.30743C21.7326 3.33076 21.7928 3.34277 21.8536 3.34277C21.9144 3.34277 21.9746 3.33076 22.0308 3.30743C22.0869 3.2841 22.1379 3.2499 22.1808 3.2068L22.8768 2.51436C23.2288 2.16294 23.2617 1.59052 22.9258 1.22295ZM19.4287 3.34356L9.01119 13.7418C8.94803 13.8047 8.90212 13.8828 8.87789 13.9686L8.39602 15.4037C8.38448 15.4426 8.38366 15.4839 8.39366 15.5233C8.40365 15.5627 8.42409 15.5986 8.45281 15.6273C8.48153 15.6561 8.51747 15.6765 8.55684 15.6865C8.59621 15.6965 8.63754 15.6957 8.67649 15.6841L10.1105 15.2023C10.1963 15.1781 10.2744 15.1322 10.3373 15.069L20.7364 4.65113C20.8326 4.5539 20.8865 4.42265 20.8865 4.28587C20.8865 4.14909 20.8326 4.01783 20.7364 3.9206L20.1622 3.34356C20.0648 3.24648 19.9329 3.19197 19.7954 3.19197C19.6579 3.19197 19.526 3.24648 19.4287 3.34356Z" fill="#FF7B47"/>
                        </svg>}
                        content={'Напишите нам'}
                    />
                    <MotionMainTitle
                        variants={textTopAnimation}
                        custom={2}
                        className={'!text-[35px] mt-3'}
                        content={'Форма записи'}
                    />
                </div>
                <Form
                    className={'w-6/12'}
                />
                <div className={'w-6/12 flex gap-5 flex-col'}>
                    {/*<Customers/>*/}
                    <Banner/>
                </div>
            </div>
        </motion.section>
    );
};

export default Testimonials;