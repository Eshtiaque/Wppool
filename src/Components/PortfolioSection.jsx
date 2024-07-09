import React from 'react';
import alibabaLogo from '../assets/Company/alibaba.png'
import vendrLogo from '../assets/Company/vendr.png'; // Example, replace with actual path
import vestwellLogo from '../assets/Company/vestwell.png'; // Example, replace with actual path
import snapdocsLogo from '../assets/Company/snapdocs.png'; // Example, replace with actual path
import toastLogo from '../assets/Company/toast.png'; // Example, replace with actual path
import connexpayLogo from '../assets/Company/connexpay.png'; // Example, replace with actual path
import mineraltreeLogo from '../assets/Company/mineraltree.png'; // Example, replace with actual path
import flywireLogo from '../assets/Company/flywire.png'; // Example, replace with actual path
import quovoLogo from '../assets/Company/quovo.png'; // Example, replace with actual path
import spendeskLogo from '../assets/Company/spendesk.png'; // Example, replace with actual path
import notabeneLogo from '../assets/Company/notabene.png'; // Example, replace with actual path
import recuryLogo from '../assets/Company/recury.png'; // Example, replace with actual path
import fireblocksLogo from '../assets/Company/fireblocks.png'; // Example, replace with actual path
import kenshoLogo from '../assets/Company/kensho.png'; // Example, replace with actual path
import futureAdvisorLogo from '../assets/Company/futureAdvisor.png'; // Example, replace with actual path
import argyleLogo from '../assets/Company/argyle.png'; // Example, replace with actual path
import snapsheetLogo from '../assets/Company/snapsheet.png'; // Example, replace with actual path

const PortfolioSection = () => {
  const companies = [
    { name: 'Alibaba', logo: alibabaLogo },
    { name: 'Vendr', logo: vendrLogo },
    { name: 'Vestwell', logo: vestwellLogo },
    { name: 'Snapdocs', logo: snapdocsLogo },
    { name: 'vendr', logo: vendrLogo },
    { name: 'Snapdocs', logo: snapdocsLogo },
    { name: 'Toast', logo: toastLogo },
    { name: 'ConnexPay', logo: connexpayLogo },
    { name: 'ConnexPay', logo: connexpayLogo },
    { name: 'MineralTree', logo: mineraltreeLogo },
    { name: 'Flywire', logo: flywireLogo },
    { name: 'Quovo', logo: quovoLogo },
    { name: 'Spendesk', logo: spendeskLogo },
    { name: 'Nota Bene', logo: notabeneLogo },
    { name: 'Recury', logo: recuryLogo },
    { name: 'Fireblocks', logo: fireblocksLogo },
    { name: 'Kensho', logo: kenshoLogo },
    { name: 'FutureAdvisor', logo: futureAdvisorLogo },
    { name: 'Argyle', logo: argyleLogo },
    { name: 'Snapsheet', logo: snapsheetLogo },
  ];

  return (
    <section id='Portfolio' className="bg-gray-100 py-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-24">
        <h2 className="text-4xl font-serif mb-8 text-left">
          Selected WPPOOL Portfolio Companies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center bg-white p-4 rounded-lg shadow">
              <img src={company.logo} alt={company.name} className="h-8 " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
