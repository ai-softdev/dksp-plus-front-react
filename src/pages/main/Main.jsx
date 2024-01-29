import React from 'react';
import Intro from "../../components/main/Intro.jsx";
import "./Main.css";
import About from "../../components/main/About.jsx";
import Services from "../../components/main/Services.jsx";
import ChooseUs from "../../components/main/choose-us/ChooseUs.jsx";
import ResentWork from "../../components/main/recent-work/ResentWork.jsx";
import Testimonials from "../../components/main/testimonials/Testimonials.jsx";

const Main = () => {
    return (
        <div>
            <Intro/>
            <About/>
            <Services/>
            <ChooseUs/>
            <ResentWork/>
            <Testimonials/>
        </div>
    );
};

export default Main;