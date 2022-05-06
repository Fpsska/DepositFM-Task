import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setNavLinkActiveStatus } from '../../app/slices/navSlice';
import { useDefinePage } from '../../hooks/definePage';

// /. imports

interface NavLinkPropTypes {
    id: number,
    text: string,
    link: string,
    isActive: boolean,
    isPreloaderVisible: boolean
}

// /. interfaces

const NavLink: React.FC<NavLinkPropTypes> = ({ id, text, link, isActive, isPreloaderVisible }) => {
    const dispatch = useDispatch();
    const { handlePageName } = useDefinePage();
    // 
    const switchLinkActiveStatus = (): void => {
        if (!isPreloaderVisible) {
            dispatch(setNavLinkActiveStatus({ id, status: true }));
            handlePageName(text);
        }
    };
    // 
    return (
        <li className="nav__item">
            <Link className={isActive ? 'nav__link active' : 'nav__link'}
                to={isPreloaderVisible ? '' : link}
                onClick={switchLinkActiveStatus}>{text}</Link>
        </li>
    );
};

export default NavLink;