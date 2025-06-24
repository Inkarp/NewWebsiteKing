import React, { useState, useEffect } from 'react';
import Logo from '/Logo.png';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaPhoneAlt, FaTimes, FaDownload } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-1/2 transform -translate-x-1/2  z-50 bg-white transition-all duration-300 ease-in-out ${scrolled ? 'shadow-md top-1 rounded-lg w-[96%]' : 'shadow-lg rounded-lg w-full'
        }`}


      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <div className="px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          {/* <img src={Logo} alt="Kingdom Logo" className="h-16 w-auto" /> */}
          <h1 className='text-4xl text-[#0b1f39]'>Kingdom</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-800 tracking-wide text-[1.05rem] uppercase">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 hover:text-blue-600 ${isActive ? 'text-blue-700 font-semibold' : ''
                }`
              }
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                {link.name}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+917661956771"
            className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-5 py-2 rounded-full shadow-md space-x-2 transition"
          >
            <FaPhoneAlt className="text-sm" />
            <span>Call Now</span>
          </a>
          <a
            href="/KingdomBrochure.pdf"
            download
            className="flex items-center bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-full shadow-md space-x-2 transition"
          >
            <FaDownload />
            <span>Download Brochure</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-800 tracking-wide text-[1rem] uppercase">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? 'text-blue-700 font-semibold' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="tel:+917661956771"
              className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-5 py-2 rounded-full shadow-md space-x-2 transition"
            >
              <FaPhoneAlt />
              <span>Call Now</span>
            </a>
            <a
              href="/KingdomBrochure.pdf"
              download
              className="flex items-center bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-full shadow-md space-x-2 transition"
            >
              <FaDownload />
              <span>Download Brochure</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
