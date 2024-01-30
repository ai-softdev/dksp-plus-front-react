import React from 'react';
import {motion} from "framer-motion";

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, display: "none" }}
        >
           services
        </motion.div>
    );
};

export default Services;