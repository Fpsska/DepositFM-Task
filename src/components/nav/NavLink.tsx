import React from 'react';

import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';

import { setNavLinkActiveStatus } from '../../app/slices/navSlice';

import { usePageName } from '../../hooks/usePageName';

// /. imports

interface NavLinkPropTypes {
    id: number,
    text: string,
    link: string,
    isActive: boolean,
    isPreloaderVisible: boolean
}

// /. interfaces

const NavLink: React.FC<NavLinkPropTypes> = (props) => {

    const {
        id,
        text,
        link,
        isActive,
        isPreloaderVisible
    } = props;

    const { handlePageName } = usePageName();

    const dispatch = useAppDispatch();

    const switchLinkActiveStatus = (): void => {
        dispatch(setNavLinkActiveStatus({ id, status: true }));
        handlePageName(text);
    };

    return (
        <li className="nav__item">
            <Link
                className={isActive ? 'nav__link active' : 'nav__link'}
                to={isPreloaderVisible ? '' : link}
                onClick={() => !isPreloaderVisible && switchLinkActiveStatus()}
                data-testid="nav-link"
            >
                {text}
            </Link>
        </li>
    );
};

export default NavLink;