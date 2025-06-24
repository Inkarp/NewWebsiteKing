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

// Highlighted offerings with custom layout
const highlightedOfferings = [
  {
    title: 'Job & Internship Support & Project Support',
    icon: <FaBriefcase className="text-purple-700 text-3xl mb-2" />,
    color: 'purple',
    description: 'Boost career readiness through resume help, live projects, and mock interviews.'
  },
  {
    title: 'Internship & Project Support',
    icon: <FaRocket className="text-green-700 text-3xl mb-2" />,
    color: 'green',
    description: 'Hands-on opportunities through local business/NGO collaborations.'
  },
  {
    title: 'Entrepreneurship & Startup Training',
    icon: <FaLightbulb className="text-yellow-600 text-3xl mb-2" />,
    color: 'yellow',
    description: 'Learn business basics and become a future job creator.'
  }
];

const NewOfferings = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      {/* Main Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12 flex flex-col justify-center items-center">
        
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Partnering with institutions to build confident, career-ready youth 
through life skills, digital knowledge, and personal development. 
        </h3>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {highlightedOfferings.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 p-6 rounded-xl shadow-xl flex flex-col items-start`}
          >
            {item.icon}
            <h3 className={`text-xl font-bold text-${item.color}-800`}>
              {item.title}
            </h3>
            <p className={`text-sm text-${item.color}-700 mt-1`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewOfferings;
