import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";


const CompaniesTable = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const companies = [
        { company: 'Adyen', ticker: 'AFRM', vertical: 'Payments', price: '$17.15', marketCap: '$50.5', revenueGrowth: '49.0%', grossMargin: '15.8%', evRevenue: '6.3', ytdPerformance: '24.3%' },
        { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: '$16.12', marketCap: '$4.7', revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: '4.9', ytdPerformance: '77.1%' },
        { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: '$16.27', marketCap: '$1.5', revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: '7.0', ytdPerformance: '10.0%' },
        { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: '$10.21', marketCap: '$2.0', revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: '6.0', ytdPerformance: '10.5%' },
        { company: 'Bakkt Holdings', ticker: 'BKKT', vertical: 'Wealth', price: '$1.32', marketCap: '$0.1', revenueGrowth: '38%', grossMargin: '--', evRevenue: '0.4', ytdPerformance: '13.8%' },
        { company: 'Virtu Financial Inc', ticker: 'VIRT', vertical: 'Wealth', price: '$17.0', marketCap: '$3.1', revenueGrowth: '-22.0%', grossMargin: '38.2%', evRevenue: '2.6', ytdPerformance: '-17.8%' },
        { company: 'Adyen', ticker: 'AFRM', vertical: 'Payments', price: '$17.15', marketCap: '$50.5', revenueGrowth: '49.0%', grossMargin: '15.8%', evRevenue: '6.3', ytdPerformance: '24.3%' },
        { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: '$16.12', marketCap: '$4.7', revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: '4.9', ytdPerformance: '77.1%' },
        { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: '$16.27', marketCap: '$1.5', revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: '7.0', ytdPerformance: '10.0%' },
        { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: '$10.21', marketCap: '$2.0', revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: '6.0', ytdPerformance: '10.5%' },
        { company: 'Bakkt Holdings', ticker: 'BKKT', vertical: 'Wealth', price: '$1.32', marketCap: '$0.1', revenueGrowth: '38%', grossMargin: '--', evRevenue: '0.4', ytdPerformance: '13.8%' },
        { company: 'Virtu Financial Inc', ticker: 'VIRT', vertical: 'Wealth', price: '$17.0', marketCap: '$3.1', revenueGrowth: '-22.0%', grossMargin: '38.2%', evRevenue: '2.6', ytdPerformance: '-17.8%' },
        { company: 'Adyen', ticker: 'AFRM', vertical: 'Payments', price: '$17.15', marketCap: '$50.5', revenueGrowth: '49.0%', grossMargin: '15.8%', evRevenue: '6.3', ytdPerformance: '24.3%' },
        { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: '$16.12', marketCap: '$4.7', revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: '4.9', ytdPerformance: '77.1%' },
        { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: '$16.27', marketCap: '$1.5', revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: '7.0', ytdPerformance: '10.0%' },
        { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: '$10.21', marketCap: '$2.0', revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: '6.0', ytdPerformance: '10.5%' },
        { company: 'Bakkt Holdings', ticker: 'BKKT', vertical: 'Wealth', price: '$1.32', marketCap: '$0.1', revenueGrowth: '38%', grossMargin: '--', evRevenue: '0.4', ytdPerformance: '13.8%' },
        { company: 'Virtu Financial Inc', ticker: 'VIRT', vertical: 'Wealth', price: '$17.0', marketCap: '$3.1', revenueGrowth: '-22.0%', grossMargin: '38.2%', evRevenue: '2.6', ytdPerformance: '-17.8%' },
        { company: 'Adyen', ticker: 'AFRM', vertical: 'Payments', price: '$17.15', marketCap: '$50.5', revenueGrowth: '49.0%', grossMargin: '15.8%', evRevenue: '6.3', ytdPerformance: '24.3%' },
        { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: '$16.12', marketCap: '$4.7', revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: '4.9', ytdPerformance: '77.1%' },
        { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: '$16.27', marketCap: '$1.5', revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: '7.0', ytdPerformance: '10.0%' },
        { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: '$10.21', marketCap: '$2.0', revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: '6.0', ytdPerformance: '10.5%' },
        { company: 'Bakkt Holdings', ticker: 'BKKT', vertical: 'Wealth', price: '$1.32', marketCap: '$0.1', revenueGrowth: '38%', grossMargin: '--', evRevenue: '0.4', ytdPerformance: '13.8%' },
        { company: 'Virtu Financial Inc', ticker: 'VIRT', vertical: 'Wealth', price: '$17.0', marketCap: '$3.1', revenueGrowth: '-22.0%', grossMargin: '38.2%', evRevenue: '2.6', ytdPerformance: '-17.8%' },
        { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: '$16.12', marketCap: '$4.7', revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: '4.9', ytdPerformance: '77.1%' },
        { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: '$16.27', marketCap: '$1.5', revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: '7.0', ytdPerformance: '10.0%' },
        { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: '$10.21', marketCap: '$2.0', revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: '6.0', ytdPerformance: '10.5%' },
        { company: 'Bakkt Holdings', ticker: 'BKKT', vertical: 'Wealth', price: '$1.32', marketCap: '$0.1', revenueGrowth: '38%', grossMargin: '--', evRevenue: '0.4', ytdPerformance: '13.8%' },
        { company: 'Virtu Financial Inc', ticker: 'VIRT', vertical: 'Wealth', price: '$17.0', marketCap: '$3.1', revenueGrowth: '-22.0%', grossMargin: '38.2%', evRevenue: '2.6', ytdPerformance: '-17.8%' },
        { company: 'Adyen', ticker: 'AFRM', vertical: 'Payments', price: '$17.15', marketCap: '$50.5', revenueGrowth: '49.0%', grossMargin: '15.8%', evRevenue: '6.3', ytdPerformance: '24.3%' },
        { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: '$16.12', marketCap: '$4.7', revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: '4.9', ytdPerformance: '77.1%' },
        { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: '$16.27', marketCap: '$1.5', revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: '7.0', ytdPerformance: '10.0%' },
        { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: '$10.21', marketCap: '$2.0', revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: '6.0', ytdPerformance: '10.5%' },
        { company: 'Bakkt Holdings', ticker: 'BKKT', vertical: 'Wealth', price: '$1.32', marketCap: '$0.1', revenueGrowth: '38%', grossMargin: '--', evRevenue: '0.4', ytdPerformance: '13.8%' },
        { company: 'Virtu Financial Inc', ticker: 'VIRT', vertical: 'Wealth', price: '$17.0', marketCap: '$3.1', revenueGrowth: '-22.0%', grossMargin: '38.2%', evRevenue: '2.6', ytdPerformance: '-17.8%' },

    ];

    const filteredCompanies = companies.filter(company =>
        company.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div id='table'>
            <div className="bg-gray-100 py-12">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 bg-white pt-12 pb-2 rounded-3xl">
                    <div className="flex flex-col md:flex-row justify-between  ">
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 md:mb-0">All Companies</h2>
                        <div className="relative w-full md:w-auto ">
                            <input
                                type="text"
                                className="border rounded-lg py-2 px-12 pl-10 lg:w-full md:w-64 focus:outline-none font-serif text-xl md:text-3xl "
                                placeholder="Search Companies"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                            <svg
                                className="absolute left-3 top-3 md:top-4 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.9 14.32a8 8 0 111.414-1.414l5.386 5.386a1 1 0 01-1.414 1.414l-5.386-5.386zM8 14a6 6 0 100-12 6 6 0 000 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className=" mt-12  table-zebra ">
                        <div className="max-h-96 overflow-y-auto custom-scrollbar ">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                                            <div className="flex items-center">
                                                Ticker
                                                <IoMdArrowDropdown className="ml-1 text-lg" />
                                            </div>
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vertical</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap ($B)</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue Growth</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gross Margin</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EV/Revenue</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">YTD Performance</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredCompanies.map((company, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{company.company}</td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{company.ticker}</td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{company.vertical}</td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{company.price}</td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{company.marketCap}</td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{company.revenueGrowth}</td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{company.grossMargin}</td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{company.evRevenue}</td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{company.ytdPerformance}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-4 mt-6 mx-8 lg:mx-0 md:mx-0">
    <button className="rounded-full bg-blue-800 text-white
     px-2 py-2  md:px-6 md:py-3">
        Download ‘All Companies’ Data
    </button>
    <button className="rounded-full bg-blue-800 text-white
     px-2  py-2 md:px-6 md:py-3">
        View Methodology
    </button>
</div>
        </div>

    );
};

export default CompaniesTable;
