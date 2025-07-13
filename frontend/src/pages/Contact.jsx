import React from 'react';
import { FaCommentDots, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPhoneAlt, FaUser } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Get in Touch with Us</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            We'd love to hear from you. Whether you're a student, parent, college, or curious learner — reach out for guidance, partnership, or support.
          </p>

          <div className="space-y-4 text-gray-800 text-base">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-600" />
              <span className="font-semibold text-blue-800">+91 76619 56771</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600" />
              <span className="font-semibold text-blue-800">kingdomedutech@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span className="font-medium">Eluru, West Godavari
                Andhra Pradesh</span>
            </div>
          </div>
        </div>


        {/* Right Side - Contact Form */}
        <form className="bg-white border border-blue-100 shadow-xl p-8 rounded-2xl space-y-5 backdrop-blur-lg">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Send Us a Message</h3>

          {/* Name Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Your full name"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Mobile Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaPhone className="text-gray-400 mr-2" />
              <input
                type="tel"
                placeholder="+91 XXXXXXXXXX"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <div className="flex items-start border border-gray-300 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaCommentDots className="text-gray-400 mt-1 mr-2" />
              <textarea
                placeholder="Your message here..."
                className="w-full h-28 resize-none outline-none bg-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
