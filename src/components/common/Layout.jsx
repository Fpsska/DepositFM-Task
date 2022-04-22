import React from 'react';
import { Outlet } from 'react-router';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = () => {
    return (
        <div className="page">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
