import React from 'react';
import { Outlet } from 'react-router';

import { useAppSelector } from '../../app/hooks';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import Preloader from './Preloader/Preloader';

// /. imports

const Layout: React.FC = () => {

    const { isPreloaderVisible } = useAppSelector(state => state.formSlice);

    return (
        <div className="page">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
            {isPreloaderVisible
                ? <div className="page__preloader">
                    <Preloader />
                </div>
                : <></>
            }
        </div>
    );
};

export default Layout;
