import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import ChatBox from '../components/Messenger/ChatBox';

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