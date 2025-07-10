import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { IoCloseSharp } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuLink = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Path', to: 'pricing' },
    { name: 'Sources', to: 'projects' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Connect', to: 'cta' },
  ];

  // Scroll Direction Handling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll Down - Hide
        setShowNavbar(false);
      } else {
        // Scroll Up - Show
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Header */}
      <header
        className={`bg-[#100a0a] py-4 lg:px-20 px-6 fixed top-0 left-0 w-full z-50 shadow-md border-b border-red-800 transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
        <div
  style={{
    fontSize:'2rem',
    fontWeight: '900',
    color: '#e50914',
    userSelect: 'none',
    cursor: 'grab',
    fontFamily: '"Dancing Script", cursive',
    textShadow:'1px 1px 3px #dc2626'
  }}
>
  God
</div>



          {/* Mobile Toggle Button */}
          <button
            className="text-white text-2xl md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoCloseSharp /> : <FaBars />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-gray-200 font-medium">
            {menuLink.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-[#e50914] font-semibold"
                className="cursor-pointer hover:text-[#e50914] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-[#100A0A] z-50 p-6 shadow-lg border-l border-red-600 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end mb-6">
          <button
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <IoCloseSharp />
          </button>
        </div>

        <div className="flex flex-col gap-6 text-white text-center pt-18">
          {menuLink.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="text-lg px-2 py-1 rounded hover:bg-[#e50914] hover:text-white transition cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
