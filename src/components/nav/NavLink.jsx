import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveStatus } from "../../app/actions/navActions";


const NavLink = ({ id, text, link, isActive }) => {
    const dispatch = useDispatch()
    // 
    const switchLinkActiveStatus = () => {
        dispatch(setActiveStatus(true, id))
    }
    // 
    return (
        <li className="nav__item">
            <Link className={isActive ? "nav__link active" : "nav__link"} to={link} onClick={switchLinkActiveStatus}>{text}</Link>
        </li>
    )
}

export default NavLink;