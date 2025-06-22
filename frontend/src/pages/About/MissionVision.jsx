import React from 'react';
import Logo from "/Logo.png"

export default function MissionVision() {
  return (
    <>

      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="bg-blue-50 border-l-4 border-blue-500 shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              To provide accessible, value-based education that
              guides students toward life and career success
              To integrate practical skills + emotional support +
              spiritual wisdom
              To offer mentorship, motivation, and a roadmap to
              help students navigate their journey with clarity
              and courage
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">Our Vision</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
              To build a generation of purpose-driven learners
              by combining education, faith, and real life
              wisdom  empowering students to learn, grow, and
              believe in their unique calling.”
            </ul>
          </div>
        </div>
      </section>

      {/* <section className="relative h-[80vh] overflow-hidden">
      <img
        src={Logo}
        alt="Kingdom Campus"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Building More Than Careers — Shaping Destinies
        </h1>
        <p className="text-lg max-w-2xl mb-6">
          Kingdom EdTech empowers students to rise with clarity, courage, and calling through faith-centered education.
        </p>
        <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded hover:bg-yellow-500">
          Learn. Grow. Believe.
        </button>
      </div>
    </section> */}
    </>
  );
};


