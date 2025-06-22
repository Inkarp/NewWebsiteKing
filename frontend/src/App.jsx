import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Footer from './pages/Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      {/* 👇 Place inside Router */}
      <ScrollToTop />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/917661956771"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div
          className={`bg-green-500 rounded-full p-4 text-white text-3xl shadow-lg transition-transform duration-500 ${
            blink ? 'opacity-100 scale-125' : 'opacity-80 scale-100'
          }`}
        >
          <FaWhatsapp />
        </div>
      </a>
    </Router>
  );
}

export default App;
