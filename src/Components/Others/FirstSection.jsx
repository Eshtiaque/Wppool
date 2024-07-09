import React from 'react';
import img from '../../assets/images/indexPhoto.png'
import FilterSection from './FilterSection';
import MiniPart from './MiniPart';
import Chart from './Chart';

const FirstSection = () => {


    return (
        <div className='items-center text-center'>
            <div className='flex flex-col mt-4 p-4 rounded-lg  '>
                <div className='flex'>
                    <img className='w-10 h-12 mr-2' src={img} alt="" />
                    <h1 className='text-5xl item-left text-left font-serif mb-4 '>
                        The WPPOOL Index
                    </h1>
                </div>
                <div className='flex justify-between w-full gap-4'>
                    <div className="flex items-center justify-center px-4 bg-gray-100 rounded">
                        <span className="text-4xl text-orange-500 font-serif mr-16">+66.2%</span>
                        <span className="text-black text-end">WPPOOL <br /> Index</span>
                        <span className='border w-2 bg-orange-400 h-14 ms-2 '></span>
                    </div>

                    <div className="flex items-center justify-center p-4 bg-gray-100 rounded">
                        <span className="text-4xl text-blue-600 font-serif mr-16">+26.6%</span>
                        <span className="text-black text-end">Google <br /> Index</span>
                        <span className='border w-2 bg-blue-600 h-14 ms-2 '></span>
                    </div>

                    <div className="flex items-center justify-center p-4 bg-gray-100 rounded">
                        <span className="text-4xl text-green-600 font-serif mr-12">+34.1%</span>
                        <span className="text-black">Microsoft</span>
                        <span className='border w-2 bg-green-600 h-14 ms-2 '></span>
                    </div>

                    <div className="flex items-center justify-center p-4 bg-gray-100 rounded">
                        <span className="text-4xl text-purple-600 font-serif mr-16">+17%</span>
                        <span className="text-black text-end">Twitter <br />Index</span>
                        <span className='border w-2 bg-purple-600 h-14 ms-2 '></span>
                    </div>


                </div>
                <FilterSection />
            </div>
            <Chart/>
            <div className=' justify-center flex'>
            <MiniPart/>
            </div>
        </div>

    );
};

export default FirstSection;