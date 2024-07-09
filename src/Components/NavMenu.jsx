import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CiShare2 } from 'react-icons/ci';
import logo from '../assets/images/logopngname.png';
import logoScrolled from '../assets/images/logoName2.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={` sticky top-0 z-10 transition-all duration-300 ${scrolled ? 'bg-gray-300 shadow-lg' : 'bg-blue-900'}`}>
      <div className="navbar lg:px-8">
        <div className="flex-1">
          <img src={scrolled ? logoScrolled : logo} alt="Logo" />
        </div>
        <div className="flex-none gap-2">
          <div className="flex gap-2">
            <button className={`flex items-center  px-3 py-2 rounded-full ${scrolled ? 'border-black border text-black ' : 'border text-white'} `}>
              <CiShare2 className="text-xl " />
            </button>
            <button className={`flex items-center border rounded-full  px-3 py-2 ${scrolled ? 'text-black border-blue-400' : 'text-white '} `}>
              Download the 2024 Report
            </button>
          </div>
          <button
            onClick={toggleMenu}
            className={`btn btn-square focus:outline-none ${scrolled ? 'text-black bg-gray-300 border-none ' : 'text-white btn-ghost'}`}
          >
            {isOpen ? (
              <FaTimes className={`h-8 w-8 ${scrolled ? 'text-black ' : 'text-white'}`} />
            ) : (
              <FaBars className={`h-8 w-8 ${scrolled ? 'text-black ' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-95 z-50 flex flex-col items-end justify-start text-black">
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-6 focus:outline-none"
          >
            <FaTimes className="h-8 w-8" />
          </button>
          <ul className="space-y-4 space-x-2 m-1 text-left bg-white p-6 rounded-lg">
            <div className='flex gap-2 me-12'>
              <li>
                <button className="flex items-center text-white bg-green-500 px-3 py-2 rounded-full">
                  <CiShare2 className="text-xl" />
                </button>
              </li>
              <li>
                <button className="flex items-center rounded-full bg-blue-800 text-white px-2 py-2">
                  Download the 2024 Report
                </button>
              </li>
            </div>
            <li><a href="#index" className="text-black text-lg">The WPPOOL Index</a></li>
            <li><a href="#table" className="text-black text-lg">All Companies</a></li>
            <li><a href="#potential" className="text-black text-lg">Potential Future Listings</a></li>
            <li><a href="#slider" className="text-black text-lg">State of USA</a></li>
            <li><a href="#stories" className="text-black text-lg">Stories & Ideas</a></li>
            <li><a href="#about" className="text-black text-lg">About WPPOOL</a></li>
            <li><a href="#Portfolio" className="text-black text-lg">WPPOOL Portfolio Companies</a></li>
            <li><a href="#Visit" className="text-blue-800 text-lg">Visit WPPOOL</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
