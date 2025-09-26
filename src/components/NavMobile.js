import React from 'react';
// import nav data
import { navData } from '../data';
// import components
import Socials from './Socials';

const NavMobile = ({ onGalleryClick, onHomeClick }) => {
  // destructure nav data
  const { items } = navData;

  const handleClick = (href, name) => {
    if (name === 'Gallery' && onGalleryClick) {
      onGalleryClick();
    } else if (onHomeClick) {
      // If we're on gallery page, go back to home first, then scroll
      onHomeClick();
      // Wait a bit for page transition, then scroll
      setTimeout(() => {
        if (href.startsWith('#')) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      // For other links, scroll to section (when on home page)
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden ">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <button
                className="text-2xl font-primary uppercase"
                onClick={() => handleClick(item.href, item.name)}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
