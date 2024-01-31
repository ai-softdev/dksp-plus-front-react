import React from 'react';
import {Link, NavLink} from "react-router-dom";
import i18n from "../../../locales/i18n.js";

const HeaderLink = (props) => {
    return (
        <NavLink
            to={props.path}
            className={({ isActive, isPending }) => {
                return `${isActive ? 'underline' : isPending ? "" : ""} font-bold cursor-pointer w-fit"`;
            }}
        >
            {i18n.t(props.name)}
        </NavLink>
    );
};

export default HeaderLink;