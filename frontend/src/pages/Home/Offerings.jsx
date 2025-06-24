import React from 'react';
import { FaRocket, FaBriefcase, FaLightbulb } from 'react-icons/fa';

// General offerings
const generalOfferings = [
  'Career Guidance & Clarity',
  'Motivation & Personality Development',
  'Certification Courses & Placement-Oriented Training',
  'Parent Meetings',
  'Faculty Training & Development Programs',
  'Health & Mental Wellness Programs',
  'Earn While You Learn',
  'Placement & Resume Preparation'
];

// Highlighted offerings
const highlightedOfferings = [
  {
    title: 'Job & Internship Support & Project Support',
    icon: <FaBriefcase />,
    color: 'purple',
    description: 'Boost career readiness through resume help, live projects, and mock interviews.'
  },
  {
    title: 'Internship & Project Support',
    icon: <FaRocket />,
    color: 'green',
    description: 'Hands-on opportunities through local business/NGO collaborations.'
  },
  {
    title: 'Entrepreneurship & Startup Training',
    icon: <FaLightbulb />,
    color: 'yellow',
    description: 'Learn business basics and become a future job creator.'
  }
];

// Safe Tailwind class map
const colorClassMap = {
  purple: {
    from: 'from-purple-100',
    to: 'to-purple-200',
    text: 'text-purple-800',
    subtext: 'text-purple-700',
    icon: 'text-purple-700'
  },
  green: {
    from: 'from-green-100',
    to: 'to-green-200',
    text: 'text-green-800',
    subtext: 'text-green-700',
    icon: 'text-green-700'
  },
  yellow: {
    from: 'from-yellow-100',
    to: 'to-yellow-200',
    text: 'text-yellow-800',
    subtext: 'text-yellow-700',
    icon: 'text-yellow-600'
  }
};

const Offerings = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      {/* Main Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12 flex flex-col justify-center items-center">
        <div className="text-5xl font-bold text-blue-600 mt-2 border rounded-full px-6 py-3 mb-6">
          Our Offerings
        </div>
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Kingdom Seed to Success Program
        </h2>
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Real Learning. Real Growth. Real Impact.
        </h3>
        <p className="font-semibold text-lg max-w-3xl text-gray-700">
          Empowering students directly with life-changing skills and clarity.
        </p>
      </div>

      {/* General Offering Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
        {generalOfferings.map((title, index) => (
          <div
            key={index}
            className="p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-lg hover:shadow-xl transition-all group overflow-hidden"
          >
            <h3 className="text-blue-900 text-xl font-semibold slide-in">
              {title}
            </h3>
          </div>
        ))}
      </div>

      {/* Highlighted Unique Offerings */}
      <h3 className="text-2xl font-semibold text-blue-500 mb-8 text-center max-w-4xl mx-auto">
        Partnering with institutions to build confident, career-ready youth
        through life skills, digital knowledge, and personal development.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {highlightedOfferings.map((item, index) => {
          const color = colorClassMap[item.color];
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${color.from} ${color.to} p-6 rounded-xl shadow-xl flex flex-col items-start`}
            >
              <div className={`${color.icon} text-3xl mb-2`}>{item.icon}</div>
              <h3 className={`text-xl font-bold ${color.text}`}>
                {item.title}
              </h3>
              <p className={`text-sm mt-1 ${color.subtext}`}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Offerings;
