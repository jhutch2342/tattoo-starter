import React from 'react';
// import nav data
import { navData } from '../data';

const Nav = ({ onCalculatorClick }) => {
  // destructure nav data
  const { items } = navData;

  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="link hover:border-b-2 hover:border-dark transition duration-300"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
        {/* Calculator link */}
        <li>
          <button
            onClick={onCalculatorClick}
            className="link hover:border-b-2 hover:border-dark transition duration-300 bg-transparent border-none cursor-pointer"
          >
            Calculator
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
