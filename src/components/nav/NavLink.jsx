import React from "react";

const NavLink = ({ text, link }) => {
    return (
        <li className="nav__item">
            <a className="nav__link" href={link}>{text}</a>
        </li>
    )
}

export default NavLink;