// components/ScrollToTop.jsx
import React, { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-12 right-12 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl
        hover:shadow-red-500/50 hover:scale-110 transition-all duration-300 ease-in-out group
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
    >
      <MdKeyboardDoubleArrowUp className="text-white text-2xl sm:text-3xl mx-auto transition-transform duration-300 group-hover:-translate-y-1" />

      {/* Optional Tooltip */}
      <span className="absolute bottom-14 right-1/2 translate-x-1/2 text-xs bg-black bg-opacity-80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
        Back to Top
      </span>
    </button>
  );
}
