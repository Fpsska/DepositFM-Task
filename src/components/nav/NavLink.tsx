import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setNavLinkActiveStatus } from '../../app/slices/navSlice';
import { useDefinePage } from '../../hooks/definePage';


interface NavLinkPropTypes {
    id: number,
    text: string,
    link: string,
    isActive: boolean,
}

const NavLink: React.FC<NavLinkPropTypes> = ({ id, text, link, isActive }) => {
    const dispatch = useDispatch();
    const { handlePageName } = useDefinePage();
    // 
    const switchLinkActiveStatus = (): void => {
        dispatch(setNavLinkActiveStatus({ id, status: true }));
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