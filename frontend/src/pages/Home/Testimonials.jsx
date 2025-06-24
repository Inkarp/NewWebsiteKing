import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ananya S.',
    role: 'B.Sc Student, Vijayawada',
    quote:
      'Kingdom EdTech helped me discover my passion and guided me with a clear career path. The sessions were life-changing!',
    image: '/images/testimonial-1.jpg',
  },
  {
    name: 'Ravi Kumar',
    role: '10th Grade Student, Vizag',
    quote:
      'Their mentors not only motivated me but also taught me how to plan my study schedule and stay consistent.',
    image: '/images/testimonial-2.jpg',
  },
  {
    name: 'Priya Mehta',
    role: 'B.Com Graduate, Yellore',
    quote:
      'The resume-building and interview support got me my first internship. This is not just learning — it’s transformation.',
    image: '/images/testimonial-3.jpg',
  },
];

export default function Testimonials(){
  return (
    <section className=" py-20 px-6 md:px-20 mt-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif tracking-tight">
            Stories That Inspire
          </h2>
          <p className="text-gray-600 text-lg">
            Hear directly from students whose lives were transformed through Kingdom EdTech.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start"
            >
              <FaQuoteLeft className="text-blue-400 text-2xl mb-4" />
              <p className="text-gray-700 text-base mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center space-x-4 mt-auto">
                {/* <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-blue-500"
                /> */}
                <div>
                  <p className="font-semibold text-blue-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


