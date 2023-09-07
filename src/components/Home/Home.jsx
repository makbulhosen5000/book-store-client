import React from 'react';
import BookHome from './BookHome';
import Slider from '../Slider/Slider';
import BookServices from '../Service/BookServices';

const Home = () => {
    return (
      <div className="">
        <Slider/>
        <BookHome/>
        <BookServices/>
      </div>
    );
};

export default Home;