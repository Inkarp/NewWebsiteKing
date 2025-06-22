import React, { useEffect, useState } from 'react';
import LOgo from '/Logo.png';

const slides = [
  {
    quote: `"Every student is a seed of greatness. Kingdom EdTech is here to water that seed and make it a mighty tree."`,
    image: LOgo
  },
  {
    quote: `"We don’t just teach. We inspire learning. We don’t just train for exams. We prepare for life."`,
    image: LOgo
  },
  {
    quote: `"Learn – Practical skills, Grow – Emotionally & spiritually, Believe – In your purpose."`,
    image: LOgo
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % slides.length);
  };

  return (
    <>
    <section className="w-full py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Quote section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
          {slides[current].quote}
        </h1>
        <div className="space-x-4">
          <button
            onClick={handlePrev}
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded transition"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          >
            Next 
          </button>
        </div>
      </div>

      {/* Image section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src={slides[current].image}
          alt="Hero"
          className="w-full h-80 object-fit rounded-lg shadow-lg transition-all duration-700"
        />
      </div>
    </section>

    <section className="relative bg-gradient-to-br from-purple-100 via-blue-100 to-green-50 py-20 px-6 md:px-16 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Education Meets Purpose</h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover real skills, real mentors, and real clarity for your career and life.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Browse Courses</button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg">Contact Us</button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-10 mt-10 text-blue-800 text-lg font-medium">
          <div>
            <p className="text-3xl font-bold">25+</p>
            <p>Career Programs</p>
          </div>
          <div>
            <p className="text-3xl font-bold">1000+</p>
            <p>Students Empowered</p>
          </div>
          <div>
            <p className="text-3xl font-bold">50+</p>
            <p>Skills Taught</p>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default Hero;
