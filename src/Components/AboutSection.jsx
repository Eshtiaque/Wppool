import React from 'react';
import aboutImage from '../assets/images/alien.png';

const AboutSection = () => {
  return (
    <section id='about' className="bg-gray-100 py-10">
      <div className="container bg-white max-w-7xl mx-auto px-4 md:px-24 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-serif mb-4">About WPPOOL</h2>
          <h3 className="text-xl text-slate-00 font-serif mb-4">Investing in wppool for over 50 years</h3>
          <p className="mb-6 text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-2xl shadow-black">
            Contact WPPOOL
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src={aboutImage} alt="About WPPOOL" className="max-w-full h-auto rounded-lg " />
        </div>
      </div>

      <hr className="border mt-32 max-w-7xl mx-auto border-[#90b8f0]"/>

    </section>
  );
};

export default AboutSection;
