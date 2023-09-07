import React from "react";
import { Link } from "react-router-dom";

const BookService = ({ service }) => {
  console.log(service);
  return (
    <div className="p-4">
      <img src={service?.img} className="h-36" alt="" />
      <h2 className="text-xl font-semibold my-3">{service?.title}</h2>
      <p className="text-gray-600 font-bold text-xl">${service?.price}</p>
      <Link><button className="btn btn-success mt-6">Buy Now</button></Link>
    </div>
  );
};

export default BookService;
