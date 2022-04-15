import React from "react";
import Nav from "../nav/Nav";
import "./header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__nav">
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header;