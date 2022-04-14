import React from "react";
import { Outlet } from "react-router";
import Header from "../header/Header";

const Layout = () => {
    return (
        <div className="page">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">FOOTER</footer>
        </div>
    );
};

export default Layout;
