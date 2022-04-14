import React from "react";
import "./header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__nav">
                    <nav className="nav">
                        <ul className="nav__menu">
                            <li className="nav__item">
                                <a className="nav__link active" href="#">Форма</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">Палитра</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;