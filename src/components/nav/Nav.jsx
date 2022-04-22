import React from 'react';
import { useSelector } from 'react-redux';

import NavLink from './NavLink';
import './nav.scss';


const Nav = () => {
    const { navLinks } = useSelector(state => state.navReducer);
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