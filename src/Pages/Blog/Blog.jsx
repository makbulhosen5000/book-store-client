import React, { useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';


const Blog = () => {
    const [search, setSearch] = useState("");
    const navigation = useNavigation();

    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <Link to="/js-question">
            <button className="btn btn-warning">
              JAVA SCRIPT
            </button>
          </Link>
          <Link to="/php-question">
            <button className="btn btn-warning">
              PHP
            </button>
          </Link>
        </div>
      </>
    );
};

export default Blog;