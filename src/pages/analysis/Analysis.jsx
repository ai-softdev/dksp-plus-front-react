import React from 'react';
import {motion} from "framer-motion";
import AnalysisIntro from "../../components/analysis/AnalysisIntro.jsx";
import Footer from "../../components/Footer.jsx";
import AnalysisChart from "../../components/analysis/AnalysisChart.jsx";

const Analysis = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, display: "none" }}
        >
            <AnalysisIntro/>
            <AnalysisChart/>
            <Footer/>
        </motion.div>
    );
};

export default Analysis;