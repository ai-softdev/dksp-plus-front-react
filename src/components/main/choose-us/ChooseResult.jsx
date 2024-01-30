import React from 'react';
import AnimatedNumbers from "react-animated-numbers";

const ChooseResult = ({className, number, content, ...props}) => {
    const combinedClasses = `flex ${className}`

    return (
        <div className={combinedClasses}>
            <div className={'flex items-center justify-center bg-butterscotch text-center p-3 font-black text-cloudburst w-[96px]'}>
                <AnimatedNumbers
                    includeComma
                    transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.3,
                    })}
                    animateToNumber={number}
                    fontStyle={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: "#1C2752",
                    }}
                />
            </div>
            <div className={'w-full border border-whitesmoke p-3 text-whitesmoke'}>
                {content}
            </div>
        </div>
    );
};

export default ChooseResult;