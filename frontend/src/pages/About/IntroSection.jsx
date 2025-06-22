import React from 'react';

export default function IntroSection() {
  return (
    <>
    <section className="bg-gradient-to-r from-blue-50 to-yellow-50 py-24 px-6 text-center">
      <div className="w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          “Every student is a seed of greatness. Kingdom is here to water that seed.”
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          We believe true education nurtures not only skills but souls — creating a life of purpose, service, and growth.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Meet Our Founder
        </button>
      </div>
    </section>
    </>
  );
};


