import React from 'react';
import Intro from "../../components/main/Intro.jsx";
import "./Main.css";
import About from "../../components/main/About.jsx";
import Services from "../../components/main/Services.jsx";
import ChooseUs from "../../components/main/choose-us/ChooseUs.jsx";

const Main = () => {
    return (
        <div>
            <Intro/>
            <About/>
            <Services/>
            <ChooseUs/>
        </div>
    );
};

export default Main;