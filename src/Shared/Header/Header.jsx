import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";



const Header = () => {

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const navItem = (
      <>
        <Link
          to="/"
          className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
            location.pathname === "/"
              ? "bg-yellow-500 text-white border-b-8 border-white"
              : "text-gray-300"
          }`}
        >
          Home
        </Link>
        <Link
          to="/books"
          className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
            location.pathname === "/books"
              ? "bg-yellow-500 text-white border-b-8 border-white"
              : "text-gray-300"
          }`}
        >
          Books
        </Link>
        <Link
          to="/blog"
          className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
            location.pathname === "/blog"
              ? "bg-yellow-500 text-white border-b-8 border-white"
              : "text-gray-300"
          }`}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
            location.pathname === "/contact"
              ? "bg-yellow-500 text-white border-b-8 border-white"
              : "text-gray-300"
          }`}
        >
          Contact
        </Link>
        <Dropdown/>
      </>
    );
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
                <img
                  className="h-8 w-8"
                  src="https://i.ibb.co/FsXMPPJ/logo.png"
                  alt="Logo"
                />
            
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">{navItem}</div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 sm:px-3">{navItem}</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
