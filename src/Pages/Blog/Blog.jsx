import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import blogs from '../../../public/question.json';
import LoadingMessage from '../../components/Loader/LoadingMessage';
import { Helmet } from 'react-helmet-async';


const Blog = () => {
    const [search, setSearch] = useState("");
    const navigation = useNavigation();
    if(navigation.state=='loading'){
        return <LoadingMessage/>
    }

    return (
      <>
        <div className="text-center mt-16">
          <Helmet>
            <title>Book Store | Blog </title>
          </Helmet>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-400 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="my-container grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {blogs
            .filter((blog) => {
              return search?.toLowerCase() === ""
                ? blog
                : blog?.question?.toLowerCase().includes(search);
            })
            .map((blog, index) => (
              <div
                className="w-64 h-80 bg-gray-200 shadow-md rounded-md overflow-hidden transition-transform hover:scale-105"
                key={index}
              >
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {blog?.question}
                  </h2>
                  <p className="text-gray-600">{blog?.answer}</p>
                </div>
              </div>
            ))}
        </div>
      </>
    );
};

export default Blog;