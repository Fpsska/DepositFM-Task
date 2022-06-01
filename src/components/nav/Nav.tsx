import React from 'react';

import { useAppSelector } from '../../app/hooks';

import { RootState } from '../../app/store';

import NavLink from './NavLink';

import './nav.scss';

// /. imports

const Nav: React.FC = () => {
    const { navLinks } = useAppSelector((state: RootState) => state.navSlice);
    const { isPreloaderVisible } = useAppSelector((state: RootState) => state.formSlice);
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