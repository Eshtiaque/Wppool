import React from 'react';
import stripeLogo from '../assets/logos/stripe.png'; // Add the correct paths to your logo images
import klarnaLogo from '../assets/logos/klarna.png';
import plaidLogo from '../assets/logos/plaid.png';
import checkoutLogo from '../assets/logos/checkout.png';
import revolutLogo from '../assets/logos/revolut.png';
import chimeLogo from '../assets/logos/chime.png';
import n26Logo from '../assets/logos/n26.png';
import brexLogo from '../assets/logos/brex.png';
import deelLogo from '../assets/logos/deel.png';
import gustoLogo from '../assets/logos/gusto.png';

const PotentialListings = () => {
  const logos = [
    { id: 1, img: stripeLogo, name: 'Stripe' },
    { id: 2, img: klarnaLogo, name: 'Klarna' },
    { id: 3, img: plaidLogo, name: 'Plaid' },
    { id: 4, img: checkoutLogo, name: 'Checkout.com' },
    { id: 5, img: revolutLogo, name: 'Revolut' },
    { id: 6, img: chimeLogo, name: 'Chime' },
    { id: 7, img: n26Logo, name: 'N26' },
    { id: 8, img: brexLogo, name: 'Brex' },
    { id: 9, img: deelLogo, name: 'Deel' },
    { id: 10, img: gustoLogo, name: 'Gusto' },
  ];

  return (
    <div id='potential' className="bg-gray-100 py-12 mt-12 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-4xl font-serif text-gray-900">Potential Future Listings</h2>
          <p className="mt-4 text-lg text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.<br/> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {logos.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center bg-white p-6 rounded-lg shadow">
              <img src={logo.img} alt={logo.name} className="h-8 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotentialListings;
