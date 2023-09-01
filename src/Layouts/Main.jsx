import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ChatBox from '../components/ChatBox';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <ChatBox/>
            <Footer/>
            
        </div>
    );
};

export default Main;