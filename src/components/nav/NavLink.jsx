import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setActiveStatus } from '../../app/actions/navActions';
import { useDefinePage } from '../../hooks/definePage';


const NavLink = ({ id, text, link, isActive }) => {
    const dispatch = useDispatch();
    const { handlePageName } = useDefinePage();
    // 
    const switchLinkActiveStatus = () => {
        dispatch(setActiveStatus(true, id));
        handlePageName(text);
    };
    // 
    return (
        <li className="nav__item">
            <Link className={isActive ? 'nav__link active' : 'nav__link'} to={link} onClick={switchLinkActiveStatus}>{text}</Link>
        </li>
    );
};

export default NavLink;