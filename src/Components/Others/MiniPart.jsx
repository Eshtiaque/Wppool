import React from 'react';

const companies = [
  { name: 'WPPOOL', color: 'bg-orange-500' },
  { name: 'Google', color: 'bg-blue-500' },
  { name: 'Microsoft', color: 'bg-green-300' },
  { name: 'Twitter', color: 'bg-purple-600' },
];

const MiniPart = () => {
  return (
    <div className="flex space-x-6 p-4">
      {companies.map((company, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div className={`w-3 h-3 ${company.color}`}></div>
          <span className="text-md text-gray-600">{company.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MiniPart;
