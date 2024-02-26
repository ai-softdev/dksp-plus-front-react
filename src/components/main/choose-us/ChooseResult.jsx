import React, {useEffect, useMemo, useState} from 'react';
import AnimatedNumbers from "react-animated-numbers";
import {forwardRef} from "react"
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const ChooseResult = forwardRef(({className, number, content, ...props}, ref) => {
    const combinedClasses = `flex ${className}`
    const {t, i18n} = useTranslation()
    const animatedNumber = useMemo(() => number, [number]);

    return (
        <div
            ref={ref}
            className={combinedClasses}
        >
            <div className={'flex items-center justify-center bg-butterscotch text-center p-3 font-black text-cloudburst w-[96px]'}>
                {/*<AnimatedNumbers*/}
                {/*    includeComma*/}
                {/*    transitions={(index) => ({*/}
                {/*        type: "spring",*/}
                {/*        duration: index + 0.3,*/}
                {/*    })}*/}
                {/*    animateToNumber={animatedNumber}*/}
                {/*    fontStyle={{*/}
                {/*        fontSize: 20,*/}
                {/*        fontWeight: 800,*/}
                {/*        color: "#1C2752",*/}
                {/*    }}*/}
                {/*    className={'w-[100px] items-center justify-center'}*/}
                {/*/>*/}
                <span className={'font-black text-lg text-cloudburst'}>
                    {number}
                </span>
            </div>
            <div className={'w-full border border-whitesmoke p-3 text-whitesmoke'}>
                {t(content)}
            </div>
        </div>
    );
});

export default ChooseResult;
export const MChooseResult = motion(ChooseResult)