import React from 'react';
import PricingIntro from "./PricingIntro.jsx";
import Footer from "../../components/Footer.jsx";
import PriceList from "./PriceList.jsx";
import Packages from "../../components/pricing/Packages.jsx";
import {motion} from "framer-motion";

const Pricing = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, display: "none" }}
        >
            <PricingIntro/>
            <PriceList/>
            <Packages/>
            <Footer/>
        </motion.div>
    );
};

export default Pricing;