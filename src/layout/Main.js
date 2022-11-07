import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Pages/shared/Footer/Footer';
import Header from '../Components/Pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;