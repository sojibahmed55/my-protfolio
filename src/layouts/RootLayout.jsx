import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import StarBackground from '../components/StarBackground/StarBackground';

const RootLayout = () => {
    return (
        <div>
            {/* <StarBackground></StarBackground>          */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;