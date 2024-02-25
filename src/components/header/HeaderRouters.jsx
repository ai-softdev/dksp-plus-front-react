import React, {useState} from 'react';
import {ANALYSIS_ROUTE, MAIN_ROUTE, PRICING_ROUTE, PROJECTS_ROUTE, SERVICES_ROUTE} from "../../utils/consts.js";
import HeaderLink from "./UI/HeaderLink.jsx";
import i18n from "../../locales/i18n.js";

const HeaderRouters = () => {
    const [links, setLinks] = useState(
        [
            {
                name: 'Home',
                path: MAIN_ROUTE
            },
            {
                name: 'Projects',
                path: PROJECTS_ROUTE
            },
            {
                name: 'Pricing',
                path: PRICING_ROUTE
            },
            {
                name: 'Market analysis',
                path: ANALYSIS_ROUTE
            }
        ]
    )

    return (
        <div className={'w-8/12 bg-butterscotch rounded-lg p-5 flex items-center justify-evenly gap-10 absolute -bottom-10'}>
            {links.map((link, index) => (
                <HeaderLink
                    key={index}
                    name={link.name}
                    path={link.path}
                />
            ))}
        </div>
    );
};

export default HeaderRouters;