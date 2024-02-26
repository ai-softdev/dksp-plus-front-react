import React, {useEffect} from 'react';
import Intro from "../../components/main/Intro.jsx";
import "./Main.css";
import About from "../../components/main/About.jsx";
import Services from "../../components/main/Services.jsx";
import ChooseUs from "../../components/main/choose-us/ChooseUs.jsx";
import ResentWork from "../../components/main/recent-work/ResentWork.jsx";
import Testimonials from "../../components/main/testimonials/Testimonials.jsx";
import Clients from "../../components/main/clients/Clients.jsx";
import Footer from "../../components/Footer.jsx";
import {motion, useScroll} from "framer-motion";

const Main = () => {
    const { scrollYProgress } = useScroll()
    useEffect(() => {
        let arr = [3,4,5,6,7,3,3]
        let num = ''
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i]; j++){
                num +=String(arr[i])
            }
            console.log(`${arr[i]} = ${num}`)
            num = ''
        }
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, display: "none" }}
        >
            <Intro/>
            <About/>
            <Services/>
            <ChooseUs/>
            {/*<ResentWork/>*/}
            <Testimonials/>
            <Clients/>
            <Footer/>
        </motion.div>
    );
};

export default Main;