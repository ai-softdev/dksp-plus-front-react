import React from 'react';
import ProjectsIntro from "./ProjectsIntro.jsx";
import ProjectsList from "./ProjectsList.jsx";
import Footer from "../../components/Footer.jsx";
import {motion} from "framer-motion";

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, display: "none" }}
        >
            <ProjectsIntro/>
            <ProjectsList/>
            <Footer/>
        </motion.div>
    );
};

export default Projects;