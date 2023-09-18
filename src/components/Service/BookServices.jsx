import React, { useEffect, useState } from 'react';
import BookService from './BookService';

const BookServices = () => {
    //modules 69.6
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
      <div className="mx-8 my-container grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service) => (
          <div
            className="w-64 h-80 bg-gray-200 shadow-md rounded-md overflow-hidden transition-transform hover:scale-105"
          >
            <BookService key={service._id} service={service} />
          </div>
        ))}
      </div>
    );
};

export default BookServices;