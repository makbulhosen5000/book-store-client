import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingMessage from './LoadingMessage';
import { Helmet } from 'react-helmet-async';

const BookDetails = () => {
    const data = useLoaderData();
    const [fold,setFold] = useState(true);
    const navigation = useNavigation();
    if(navigation.state==='loading'){
        return LoadingMessage;
    }
    console.log(data);
    return (
      <div className="flex place-items-center justify-center align-items-center h-screen">
        <Helmet>
          <title>Book Store | Details </title>
        </Helmet>
        <div>
          <img src={data?.image} alt="" />
        </div>
        <div>
          <button className="bg-yellow-600 w-40 rounded-full">Brand New</button>

          <h1 className="text-3xl font-bold">{data?.title}</h1>
          <p>Authors: {data?.authors}</p>
          <p>Publisher: {data?.publisher}</p>
          <p>Rating: {data?.rating}</p>
          {fold ? (
            <p className="text-gray-900">
              Desc: {data?.desc.substring(0, 70)}...
              <span
                onClick={() => setFold(!fold)}
                className="font-bold cursor-pointer"
              >
                Read More
              </span>
            </p>
          ) : (
            <p className=" w-96 text-gray-900">
              Desc: {data?.desc}
              <span
                onClick={() => setFold(!fold)}
                className="font-bold cursor-pointer"
              >
                Read Less
              </span>
            </p>
          )}
        </div>
      </div>
    );
};

export default BookDetails;