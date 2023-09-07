import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingMessage from '../Loader/LoadingMessage';
import { Helmet } from 'react-helmet-async';

const Books = () => {
  const [search,setSearch] = useState('');
    const {books} = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state=='loading'){
      return <LoadingMessage/>
    }
    return (
      <div className="my-container">
        <div className="text-center mb-10">
          <Helmet>
            <title>Book Store | Books </title>
          </Helmet>
          ;
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-400 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {books
            .filter((book) => {
              return search?.toLowerCase() === ""
                ? book
                : book?.title?.toLowerCase().includes(search);
            })
            .map((book) => (
              <Book key={book?.isbn13} book={book} />
            ))}
        </div>
      </div>
    );
};

export default Books;