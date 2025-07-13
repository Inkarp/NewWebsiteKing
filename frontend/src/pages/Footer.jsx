import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/Logo.png';
import LogoNew from '/kingdomNew.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          {/* <h3 className="text-xl font-bold mb-3">Kingdom EdTech</h3> */}
          <img src={LogoNew} alt="Kingdom EdTech Logo" className="h-24 w-54 bg-white " />
          <p className="text-xs">
            Empowering purpose-driven students with practical, life-oriented skills.
            <br />
            #LearnToday #LeadTomorrow
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold mb-3">Programs</h4>
          <ul className="space-y-2 text-sm">
            <Link to="/services?tab=tenth"><li className='hover:underline'>10th stars</li></Link>
            <Link to="/services?tab=intermediate"><li className='hover:underline'>+2 birds</li></Link>
            <Link to="/services?tab=btech"><li className='hover:underline'>Graduates for all pg streams</li></Link>
            <Link to="/services?tab=mba"><li className='hover:underline'>Skill based courses</li></Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <p className="text-sm">📞 +91 76619 56771</p>
          <p className="text-sm">✉️ kingdomedutech@gmail.com</p>
          <p className="text-sm mt-2">Eluru, WestGodavari<br />Andhra Pradesh</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kingdom EdTech. All rights reserved.
      </div>
    </footer>
  );
};


