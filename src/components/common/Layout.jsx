import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <header className="header">HEADER</header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">FOOTER</footer>
        </>
    );
};

export default Layout;
