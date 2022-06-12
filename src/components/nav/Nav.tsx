import React from 'react';

import { useAppSelector } from '../../app/hooks';

import NavLink from './NavLink';

import './nav.scss';

// /. imports

const Nav: React.FC = () => {
    const { navLinks } = useAppSelector(state => state.navSlice);
    const { isPreloaderVisible } = useAppSelector(state => state.formSlice);
    // 
    return (
        <nav className="nav">
            <ul className="nav__menu">
                {navLinks.map(item => {
                    return (
                        <NavLink
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            link={item.link}
                            isActive={item.isActive}
                            isPreloaderVisible={isPreloaderVisible}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;