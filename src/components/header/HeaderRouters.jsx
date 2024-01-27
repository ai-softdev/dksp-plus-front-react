import React, {useState} from 'react';
import {MAIN_ROUTE, SERVICES_ROUTE} from "../../utils/consts.js";
import HeaderLink from "./UI/HeaderLink.jsx";

const HeaderRouters = () => {
    const [links, setLinks] = useState(
        [
            {
                name: 'Home',
                path: MAIN_ROUTE
            },
            {
                name: 'About Us',
                path: SERVICES_ROUTE
            },
            {
                name: 'Pages',
                path: MAIN_ROUTE
            },
            {
                name: 'Services',
                path: MAIN_ROUTE
            },
            {
                name: 'Blog',
                path: MAIN_ROUTE
            },
            {
                name: 'Contact Us',
                path: MAIN_ROUTE
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