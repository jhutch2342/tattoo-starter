import React from 'react';
// import nav data
import { navData } from '../data';
// import components
import Socials from './Socials';

const NavMobile = ({ onCalculatorClick, setNavMobile }) => {
  // destructure nav data
  const { items } = navData;

  const handleCalculatorClick = () => {
    setNavMobile(false); // Close mobile menu
    onCalculatorClick(); // Navigate to calculator
  };

  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden ">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="text-2xl font-primary uppercase"
                href={item.href}
                onClick={() => setNavMobile(false)}
              >
                {item.name}
              </a>
            </li>
          );
        })}
        {/* Calculator link */}
        <li>
          <button
            onClick={handleCalculatorClick}
            className="text-2xl font-primary uppercase bg-transparent border-none cursor-pointer"
          >
            Calculator
          </button>
        </li>
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
