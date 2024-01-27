import React from 'react';
import {Link, NavLink} from "react-router-dom";

const HeaderLink = (props) => {
    return (
        <NavLink
            to={props.path}
            className={({ isActive, isPending }) => {
                return `${isActive ? 'underline' : isPending ? "" : ""} font-bold cursor-pointer w-fit"`;
            }}
        >
            {props.name}
        </NavLink>
    );
};

export default HeaderLink;