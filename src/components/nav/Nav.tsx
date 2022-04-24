import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';

import NavLink from './NavLink';
import './nav.scss';


const Nav: React.FC = () => {
    const { navLinks } = useSelector((state: RootState) => state.navSlice);
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
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;