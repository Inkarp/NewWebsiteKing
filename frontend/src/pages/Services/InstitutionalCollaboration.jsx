import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const benefits = [
  // "Institutional Prestige through Signature Collaborations",
  // "Plug-and-Play Academic Enrichment Without Overhead",
  // "Academic Identity Building",
  // "Custom Certificate Co-Branding (College + Kingdom)",
  // "Strategic Differentiation for Deemed-to-be/Autonomous Status",
  // "Leadership Development for Faculty",
  // "Enhanced Student Employability",
  // "Access to Latest Industry Trends",
  // "Alumni Engagement Programs",
  // "CSR and Community Outreach",
  // "AI-Driven Personalized Learning Insights for the College",
  // "“Kingdom Edutech College Ambassador” Program",
];

const InstitutionalCollaboration = () => {
  return (
    <section className=" py-20 px-6 md:px-20 ">
      {/* Hero Quote */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6">
          Let’s Transform Your College
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-700">
          INTO A CAMPUS OF CONFIDENCE, CREATIVITY, AND CAREER BUILDING.
        </p>
        <p className="mt-4 text-blue-800 font-semibold italic">
          Together, we’ll prepare students not just for exams — but for life.
        </p>
      </div>

      {/* Benefits */}
      {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start bg-white p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <FaCheckCircle className="text-green-600 mt-1 mr-3" />
            <p className="text-gray-800 text-base font-medium">{item}</p>
          </div>
        ))}
      </div> */}

      {/* Call to Action */}
      <div className="text-center bg-gray-300 py-10 rounded-full">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Ready to Partner with Kingdom EdTech?
        </h3>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:brightness-110 transition duration-300 shadow-md"
        >
          Contact Our Collaboration Team
        </Link>

      </div>
    </section>
  );
};

export default InstitutionalCollaboration;
