import React, { useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Blog = () => {
    const [search, setSearch] = useState("");


    return (
      <>
        <Helmet>
          <title>Blog | Book Store</title>
        </Helmet>
        <div className="flex items-center justify-center h-screen">
          <Link to="/js-question">
            <button className="btn btn-warning">JAVA SCRIPT</button>
          </Link>
          <Link to="/php-question">
            <button className="btn btn-warning">PHP</button>
          </Link>
        </div>
      </>
    );
};

export default Blog;