import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import FirstSection from './Others/FirstSection';

const IndexPoll = () => {
  const [openItems, setOpenItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleItem = (item) => {
    setOpenItems((prevState) =>
      prevState.includes(item)
        ? prevState.filter((i) => i !== item)
        : [...prevState, item]
    );
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div id='index'>
<div  className='max-w-[1640px] max-h-[880px] mx-auto bg-white '>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" checked={drawerOpen} readOnly />
        <div className="drawer-content flex flex-col lg:flex-row lg:justify-around">
          {/* Page content here */}
          <FirstSection />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden" onClick={toggleDrawer}>
            {drawerOpen ? "Close drawer" : "Open drawer"}
          </label>
        </div>
        <div className="drawer-side bg-white p-4 max-h-[880px]">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay" onClick={toggleDrawer}></label>
          <ul className="menu bg-slate-200 text-base-content min-h-full rounded-2xl w-80">
            {/* Sidebar content here */}
            <li className='flex-row text-lg py-2 font-serif rounded-xl text-white bg-blue-800 m-1 flex justify-between items-center'>
              <span className="flex-grow cursor-pointer" onClick={() => toggleItem('index')}>
                The Index
              </span>
              <span onClick={() => toggleItem('index')}>
                {openItems.includes('index') ? <FaMinus className="ml-2" /> : <FaPlus className="ml-2" />}
              </span>
            </li>
            <li className='flex-row text-lg py-2 rounded font-serif m-1 flex justify-between items-center'>
              <span className="flex-grow cursor-pointer" onClick={() => toggleItem('indexTabTwo')}>
                The Index Tab Two
              </span>
              <span onClick={() => toggleItem('indexTabTwo')}>
                {openItems.includes('indexTabTwo') ? <FaMinus className="ml-2" /> : <FaPlus className="ml-2" />}
              </span>
            </li>
            <li className='flex-row text-lg font-serif py-2 rounded m-1 flex justify-between items-center'>
              <span className="flex-grow cursor-pointer" onClick={() => toggleItem('indexTabThree')}>
                The Index Tab Three
              </span>
              <span onClick={() => toggleItem('indexTabThree')}>
                {openItems.includes('indexTabThree') ? <FaMinus className="ml-2" /> : <FaPlus className="ml-2" />}
              </span>
            </li>
            <li className='flex-row text-lg font-serif py-2 rounded m-1 flex justify-between items-center'>
              <span className="flex-grow cursor-pointer" onClick={() => toggleItem('indexTabFour')}>
                The Index Tab Four
              </span>
              <span onClick={() => toggleItem('indexTabFour')}>
                {openItems.includes('indexTabFour') ? <FaMinus className="ml-2" /> : <FaPlus className="ml-2" />}
              </span>
            </li>
            <li className='flex-row text-lg font-serif py-2 rounded m-1 flex justify-between items-center'>
              <span className="flex-grow cursor-pointer" onClick={() => toggleItem('indexTabFive')}>
                The Index Tab Five
              </span>
              <span onClick={() => toggleItem('indexTabFive')}>
                {openItems.includes('indexTabFive') ? <FaMinus className="ml-2" /> : <FaPlus className="ml-2" />}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default IndexPoll;
