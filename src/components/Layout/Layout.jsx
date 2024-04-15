import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";
import Main from "./Main/Main";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Main/>
            <Footer/>
        </>
    );
};

export default Layout;