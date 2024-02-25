import React from 'react';
import {forwardRef} from "react";
import {motion} from "framer-motion";

const Subtitle = forwardRef(({svg, content, className, ...props}, ref) => {
    const combinedClasses = `flex items-center gap-3 bg-whitesmoke px-4 py-2 w-fit ${className}`

    return (
        <div ref={ref} className={combinedClasses}>
            {svg}
            <p className={'font-bold'}>
                {content}
            </p>
        </div>
    );
})

export default Subtitle

export const MSubtitle = motion(Subtitle);