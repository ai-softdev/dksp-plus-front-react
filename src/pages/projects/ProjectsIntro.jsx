import React from 'react';
import IntroBg from "../../components/ui/intro-bg/IntroBg.jsx";
import MainTitle from "../../components/ui/MainTitle.jsx";

const ProjectsIntro = () => {
    return (
        <div className={'relative py-36 overflow-hidden'}>
            <IntroBg
                background={`url('./image/projects.jpg')`}
            />
            <div className="container">
                <MainTitle
                    className={'relative text-whitesmoke z-10 text-center'}
                    content={'Our Projects'}
                />
            </div>
        </div>
    );
};

export default ProjectsIntro;