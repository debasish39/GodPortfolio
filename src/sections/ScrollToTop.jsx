// components/ScrollToTop.jsx
import React, { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


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
      className={`fixed bottom-18 right-9 z-50 w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-600 text-white shadow-lg hover:shadow-red-500/50 hover:scale-110 transition-all duration-300 ease-in-out ${

        visible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-75 pointer-events-none'
      }`}
    >
      <MdKeyboardDoubleArrowUp  className="text-white text-3xl mx-auto transition-transform duration-300" />
    </button>
  );
}
