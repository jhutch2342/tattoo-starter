import React from 'react';
// import nav data
import { navData } from '../data';

const Nav = ({ onGalleryClick }) => {
  // destructure nav data
  const { items } = navData;

  const handleClick = (href, name) => {
    if (name === 'Gallery' && onGalleryClick) {
      onGalleryClick();
    } else {
      // For other links, scroll to section
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <button
                className="link hover:border-b-2 hover:border-dark transition duration-300"
                onClick={() => handleClick(item.href, item.name)}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
