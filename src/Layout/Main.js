import React from 'react';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import { Outlet } from 'react-router-dom';
import TopHeader from '../Pages/Header/TopHeader';

const Main = () => {
    return (
        <div>
            <TopHeader></TopHeader>
           <Header></Header>
             <Outlet></Outlet>
           <Footer></Footer>
          
        </div>
    );
};

export default Main;