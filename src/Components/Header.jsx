import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaArrowAltCircleDown } from "react-icons/fa";
import img from '../assets/images/dot.png';
import { BsArrowDownCircleFill } from "react-icons/bs";



const Header = () => {

  const goToBtn =()=>{
    const scrollHeight = document.documentElement.scrollHeight;
    window.scrollTo({ top: scrollHeight, left: 0, behavior: "smooth" });
}

  return (
    <div>
         
      <header className="relative  bg-blue-900 text-white min-h-screen flex ">
        {/* First Section */}
        <div className="flex flex-col justify-between p-6 w-1/4">

          <div className="flex-1 flex flex-col justify-end space-y-8 text-left pb-20 ps-4 ">
            <div className='pb-8'>
              <p className="text-6xl  font-serif ">60</p>
              <p >Companies</p>
            </div>
            <div className='pb-8'>
              <p className="text-6xl font-serif">$100B</p>
              <p>Market cap</p>
            </div>
            <div className='pb-8'>
              <p className="text-6xl font-serif">3.5x</p>
              <p >Revenue multiple</p>
            </div>
            <div className='pb-2'>
              <p className="text-6xl font-serif">60%</p>
              <p>LTM avg. revenue growth rate</p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex-1 flex flex-col justify-center items-center relative">
          {/* Background image div with clip-path */}
          <div
            className="absolute"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              clipPath: 'polygon(15% 0%, 100% 0%, 75% 100%, 0% 100%)',
              mixBlendMode: 'multiply',
              zIndex: 0,
              height: '80%',
              width: '80%',
              top: '10%',
              left: '10%',
              margin: 'auto'
            }}
          />

          {/* SVG polygon border */}
          <div
            className="absolute"
            style={{
              zIndex: 1,
              height: '80%',
              width: '80%',
              top: '10%',
              left: '10%',
              margin: 'auto',
              pointerEvents: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{
                height: '80%',
                width: '60%'
              }}
            >
              <polygon points="35,0 100,0 65,100 0,100" fill="none" stroke="white" strokeWidth="0.2" />
            </svg>
          </div>

          <div className="relative p-10 z-10 text-center">
            <h1 className="text-8xl font-serif text-white">The WPPOOL Index</h1>
            <p className="text-xl mt-4 text-white">Monitor the performance of emerging, publicly traded, financial technology companies</p>
          </div>
        </div>



        {/* Third Section */}
        <div className="w-1/4 flex flex-col justify-end items-end me-8 p-6 pb-32">
          <button onClick={goToBtn}  className="text-white">
            <BsArrowDownCircleFill size={72} />
          </button>
        </div>
      </header>
    </div>

  );
};

export default Header;
