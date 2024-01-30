import React, {useState} from 'react';
import {MAIN_ROUTE, PRICING_ROUTE, PROJECTS_ROUTE, SERVICES_ROUTE} from "../../utils/consts.js";
import HeaderLink from "./UI/HeaderLink.jsx";

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
            }
        ]
    )

    return (
        <div className={'w-full bg-butterscotch p-5 flex items-center gap-10 -mb-20'}>
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