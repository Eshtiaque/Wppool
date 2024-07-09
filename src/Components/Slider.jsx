import React, { useState } from 'react';
import image1 from '../assets/slide/svgviewer-png-output (21).png';
import image2 from '../assets/slide/svgviewer-png-output (22).png';
import image3 from '../assets/slide/svgviewer-png-output (23).png';
import { FaChevronDown } from "react-icons/fa";
import bg from '../assets//slide/svgviewer-png-output.png';

const Carousel = () => {
  const slides = [
    { id: 1, img: image1 },
    { id: 2, img: image2 },
    { id: 3, img: image3 },
  ];
  const itemsPerPage = 2;
  const totalPages = Math.ceil(slides.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div id='slider' className='bg-gray-100'>

      <div className='max-w-7xl mx-auto mt-12 mb-12 bg-gray-100 px-4 sm:px-6 lg:px-8'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '60% 20px',
          backgroundPositionY: '10px',
          height: 'auto', // Adjust height to auto to allow content to expand
        }}>
        {/* SVG polygon border */}
        <div
          className="absolute hidden md:flex"
          style={{
            zIndex: 0,
            height: '100%',
            width: '80%',
            top: '2950px',
            left: '12%',
            margin: 'auto',
            pointerEvents: 'none',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              height: '40%',
              width: '20%'
            }}
          >
            <polygon points="50,0 100,0 50,100 0,100" fill="none" stroke="gray" strokeWidth="0.4" />
          </svg>
        </div>
        {/* heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-2">State of USA</h1>
        <div className="flex items-center justify-start space-x-2 mb-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn rounded-full px-8 bg-blue-800 text-white gap-2 sm:gap-6">2024<FaChevronDown /></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>2023</a></li>
              <li><a>2022</a></li>
            </ul>
          </div>
        </div>
        <small className="text-gray-600">
          Click through the slides or download the report to view natively on your device.
        </small>

        <div className="relative mt-4">
          <div className="carousel rounded-box overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentPage * 100 / itemsPerPage}%)` }}>
              {slides.map((slide, index) => (
                <div key={slide.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3" style={{ width: index === slides.length - 1 ? '100%' : '50%' }}>
                  <img src={slide.img} alt={`Slide ${index + 1}`} className="w-full h-72 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-x-2 mt-4 md:mt-6">
          <div className='flex justify-start items-center space-x-2 mb-4 md:mb-0'>
            <button onClick={prevPage} className="bg-white shadow-2xl shadow-black p-3 sm:p-3 px-6 sm:px-5 me-2 sm:me-4 rounded-full" disabled={currentPage === 0}>
              &lt;
            </button>
            <button onClick={nextPage} className="bg-white shadow-2xl shadow-black p-3 sm:p-3 px-6 sm:px-5 rounded-full" disabled={currentPage === totalPages - 1}>
              &gt;
            </button>
            <div className="flex lg:items-center items-start space-x-4">
  <span className="text-lg font-medium p-2">Pages</span>
  <div className="relative">
    <select
      value={currentPage + 1}
      onChange={(e) => setCurrentPage(Number(e.target.value) - 1)}
      className="block appearance-none w-full bg-white border border-gray-300 text-gray-900 py-4 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-2xl"
    >
      {Array.from({ length: totalPages }, (_, index) => (
        <option key={index} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
    
  </div>
  <span className="text-lg font-medium p-2">of {totalPages}</span>
</div>
          </div>

          <div className='flex lg:justify-end w-full md:w-auto mt-4 md:mt-0'>
            <button className="rounded-full bg-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 lg:me-72">
              Download the 2024 Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
