import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FilterSection = () => {
  const [isSectorsDropdownOpen, setSectorsDropdownOpen] = useState(false);
  const [isTypesDropdownOpen, setTypesDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('6M');

  const sectorsRef = useRef(null);
  const typesRef = useRef(null);

  const toggleSectorsDropdown = () => {
    setSectorsDropdownOpen(!isSectorsDropdownOpen);
  };

  const toggleTypesDropdown = () => {
    setTypesDropdownOpen(!isTypesDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (sectorsRef.current && !sectorsRef.current.contains(event.target)) {
      setSectorsDropdownOpen(false);
    }
    if (typesRef.current && !typesRef.current.contains(event.target)) {
      setTypesDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between space-x-4 p-4">
     <div className='flex gap-4'>
     <div className="relative" ref={sectorsRef}>
        <button
          onClick={toggleSectorsDropdown}
          className="flex items-center px-4 py-1 bg-blue-600 text-white rounded-full"
        >
          Sectors <FaChevronDown className="ml-12" />
        </button>
        {isSectorsDropdownOpen && (
          <div className="absolute mt-2 w-28 bg-white border rounded shadow-lg z-10">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sector 1</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sector 2</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sector 3</li>
            </ul>
          </div>
        )}
      </div>

      <div className="relative" ref={typesRef}>
        <button
          onClick={toggleTypesDropdown}
          className="flex items-center px-4 py-1 bg-blue-600 text-white rounded-full"
        >
          Types of IPO <FaChevronDown className="ml-12" />
        </button>
        {isTypesDropdownOpen && (
          <div className="absolute mt-2 w-28 bg-white border rounded shadow-lg z-10">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Type 1</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Type 2</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Type 3</li>
            </ul>
          </div>
        )}
      </div>

     </div>
     

      <div className="flex items-center   bg-gray-100 rounded-full">
        <button
          className={`px-4 py-1 ${activeTab === '1Y' ? 'bg-blue-600 text-white rounded-full ' : 'text-gray-600'}`}
          onClick={() => setActiveTab('1Y')}
        >
          1Y
        </button>
        <button
          className={`px-4 py-1 ${activeTab === 'YTD' ? 'bg-blue-600 text-white rounded-full' : 'text-gray-600'}`}
          onClick={() => setActiveTab('YTD')}
        >
          YTD
        </button>
        <button
          className={`px-4 py-1 ${activeTab === '6M' ? 'bg-blue-600 text-white rounded-full' : 'text-gray-600'}`}
          onClick={() => setActiveTab('6M')}
        >
          6M
        </button>
        <button
          className={`px-4 py-1 ${activeTab === '1M' ? 'bg-blue-600 text-white rounded-full' : 'text-gray-600'}`}
          onClick={() => setActiveTab('1M')}
        >
          1M
        </button>
        <button
          className={`px-4 py-1 ${activeTab === '1W' ? 'bg-blue-600 text-white rounded-full' : 'text-gray-600'}`}
          onClick={() => setActiveTab('1W')}
        >
          1W
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
