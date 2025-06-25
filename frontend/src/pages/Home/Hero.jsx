import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '/Logo.png';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import Home1 from "/Home1.jpg"
import Home2 from "/Home2.jpg"
import Home3 from "/Home3.avif"
import Home4 from "/Home4.jpg"
import Home5 from "/Home5.webp"

const slides = [
  {
    quote: `"Kingdom Edutech is not just an institute — it's a turning point.”`,
    image: Home1,
  },
  {
    quote: `"Real success begins when you learn what schools don’t teach.."`,
    image: Home2,
  },
  {
    quote: `“With the right skills, even an average student can build an extraordinary future.”`,
    image: Home3,
  },
  {
    quote: `“Don’t wait for the world to give you a chance — learn the skills to create your own.”`,
    image: Home3,
  },
  {
    quote: `“You don’t need to be a topper to lead. You just need the right direction.”`,
    image: Home5,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      {/* Hero Slider */}
      <section className="w-full mt-17 py-10 px-6 md:px-16  flex flex-col md:flex-row items-center justify-between">
        {/* Quote Section */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h1 className="text-3xl px-5 py-10 md:text-4xl font-bold text-blue-900 leading-snug">
            {slides[current].quote}
          </h1>
        
        </motion.div>

        {/* Image Section */}
        <motion.div
          key={`img-${current}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          <img
            src={slides[current].image}
            alt="Hero Slide"
            className="w-full h-80 object-contain "
          />
        </motion.div>
      </section>

      {/* CTA & Stats */}
      <section className="relative mt-5 bg-black/20 rounded-full py-20 px-6 md:px-16 overflow-hidden">
        {/* Decorative Blurs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

        <div className="relative z-10  text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
          >
            Education Meets Purpose
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-700 mb-6"
          >
            Discover real skills, real mentors, and real clarity for your career and life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <Link to="/services" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition">
              Browse Courses
            </Link>
            <Link to="/contact" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 w-[50%] mx-auto bg-white shadow-xl py-10 px-4 mt-12 rounded-xl text-blue-800 text-lg font-medium"
        >
          <StatBlock end={25} suffix="+" subtitle="Career Programs" />
          <StatBlock end={1000} suffix="+" subtitle="Students Empowered" />
          <StatBlock end={50} suffix="+" subtitle="Skills Taught" />

        </motion.div>
      </section>
    </>
  );
};

const StatBlock = ({ end, suffix, subtitle }) => (
  <div className="text-center">
    <p className="text-4xl font-extrabold text-blue-900">
      <CountUp end={end} duration={2.5} suffix={suffix} start={0} />
    </p>
    <p className="text-blue-700 text-lg font-medium mt-1">{subtitle}</p>
  </div>
);

export default Hero;
