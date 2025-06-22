import React, { useState, useEffect } from 'react';
import Logo from '/Logo.png';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaPhoneAlt, FaTimes, FaDownload } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sticky scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
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
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Kingdom Logo" className="h-16 w-32" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-800">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? 'text-blue-700 border-b-2 border-blue-500' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Call Now + Brochure on Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+917661956771"
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg space-x-2"
          >
            <FaPhoneAlt className="text-sm" />
            <span>Call Now</span>
          </a>
          <a
            href="/KingdomBrochure.pdf" // Ensure this file is in your public folder
            download
            className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg space-x-2 font-medium"
          >
            <FaDownload />
            <span>Download Brochure</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
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
          <nav className="flex flex-col space-y-4 px-6 py-4 font-medium text-gray-800">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `hover:text-blue-600 ${
                    isActive ? 'text-blue-700 font-semibold' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="tel:+917661956771"
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg space-x-2"
            >
              <FaPhoneAlt />
              <span>Call Now</span>
            </a>
            <a
              href="/KingdomBrochure.pdf"
              download
              className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg space-x-2"
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
