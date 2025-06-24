import React from 'react';
import Logo from "/Logo.png"

export default function FounderMessage() {
  return (
    <section className="py-5 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Founder Image */}
        <div className="flex justify-center">
          <img
            src='https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg'
            alt="Founder Benny Shyameul"
            className="rounded-xl shadow-lg w-72 h-auto object-cover"
          />
        </div>

        {/* Founder Message */}
        <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 rounded-3xl shadow-xl max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 font-serif tracking-tight">
            A Message from the Heart
          </h2>

          <p className="text-gray-800 text-xl italic font-[Georgia] leading-loose mb-6">
            “An empowering, inclusive education space where knowledge is sacred, growth is constant, and belief is the bridge to purpose.”
          </p>

          <p className="text-blue-700 font-semibold tracking-wide font-mono">
            – Benny Shyameul, Founder & CEO
          </p>
        </div>

      </div>
    </section>


  );
};


