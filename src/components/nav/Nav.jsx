import React from "react";
import NavLink from "./NavLink";
import "./nav.scss"
import { useSelector } from "react-redux";

const Nav = () => {
    const { navLinks } = useSelector(state => state.navReducer)
    // 
    return (
        <nav className="nav">
            <ul className="nav__menu">
                {navLinks.map(item => {
                    return (
                        <NavLink
                            key={item.id}
                            text={item.text}
                            link={item.link}
                        />
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;