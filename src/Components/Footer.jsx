import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 lg:px-24 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 md:w-1/3 bg-gray-200">
          <h2 className="text-2xl font-bold mb-4">
            Experience remarkable WordPress products with a new level of power, beauty, and human-centered designs.
          </h2>
          <p className="text-sm text-gray-600">&copy;2024 Terms of Use Privacy Policy</p>
          <p className="text-sm text-gray-600 lg:mt-12 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!
          </p>
        </div>
        <div className="mb-8 md:mb-0 ">
          <h3 className="text-lg font-semibold mb-4">Jump to</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-blue-600">About Us</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600">Portfolio</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600">News</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600">Stories</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600">Jobs</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600">About Us</a></li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Cambridge</h3>
          <p className="mb-4">
            70728 Yost Burg,<br /> North Magdaleneview,<br /> UT 97952-2814
          </p>
          <hr className='border border-slate-300 my-2' />
          <h3 className="text-lg font-semibold mb-4">London</h3>
          <p className="mb-4">
            Suite 292 903 Stehr Streets,<br /> Langworthtown, SC 94577-9465
          </p>
          <hr className='border border-slate-300 my-2' />
          <h3 className="text-lg font-semibold mb-4">San Francisco</h3>
          <p className="mb-4">
            19837 Gilberto Lodge,<br /> Lake Kendallville,<br /> Colorado - 97392, Bhutan
          </p>
          <hr className='border border-slate-300 my-2' />
          <div className="flex space-x-4 mt-4">
            <a href="#"><FaLinkedin className="h-6 w-6 text-gray-600" /></a>
            <a href="#"><FaTwitter className="h-6 w-6 text-gray-600" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
