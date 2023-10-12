import React, { useState } from 'react';
import logo from '../../public/assets/logo.png'
import { useSelector } from 'react-redux';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  //getting the number of items in the cart
  const cartItems = useSelector(store => store?.cart?.cartItems)

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex">
          <img src={logo} alt="brand logo" width='75' height='75' />
          <span className='text-black ml-2 mt-5 text-lg sm:text-2xl md:text-2xl'>Feast Finder</span>
        </div>

        {/* Navbar Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-5">
          <span className="text-slate-700 md:text-lg">
            Home
          </span>
          <span className="text-slate-700 md:text-lg">
            About
          </span>
          <span className="text-slate-700 md:text-lg">
            Contact
          </span>
          <span className="text-slate-700 md:text-lg">
            <i className="fa-solid fa-bag-shopping"></i>
            <span className='bg-slate-300 px-2 py-1  font-bold rounded-full text-xl'>{ cartItems?.length }</span>
          </span>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <i className="fa-solid fa-bag-shopping"></i>
          <span className='bg-slate-300 px-2 py-1  font-bold rounded-full text-xl'>{ cartItems?.length || 0 }</span>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-slate-700 p-4">
          <span className="block py-2">
            Home
          </span>
          <span className="block py-2">
            About
          </span>
          <span className="block py-2">
            Services
          </span>
          <span className="block py-2">
            Contact
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
