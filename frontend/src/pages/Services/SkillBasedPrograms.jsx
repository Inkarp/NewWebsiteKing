import React from 'react';
import { FaTools, FaFemale, FaUsers } from 'react-icons/fa';

const courses = [
  {
    category: 'Courses for Boys',
    icon: <FaTools className="text-blue-600 text-3xl mb-3" />,
    color: 'blue',
    items: [
      'Mobile Phone Repairing',
      'Two-Wheeler Mechanic',
      'Welding & Fabrication',
      'Plumbing & Pipe Fitting',
      'Basic Electrical Wiring',
      'AC & Refrigerator Servicing',
      'CCTV Installation & Maintenance',
      'Solar Panel Installation Technician',
      'Basic Carpentry',
      'Drone Operating & Repairing',
      'Machine Operator Training (Lathe/CNC)',
      'Automobile Servicing',
      'Graphic Design (CorelDRAW, Photoshop)',
      'Video Editing (Filmora, Premiere Pro)',
      'Photography (Event & Street)',
      'Audio Editing & Podcast Setup',
      'Agricultural Equipment Handling',
      'Basic Electronics & Soldering',
      '3D Printing & Prototyping',
      'Construction Assistant Skills (Bar Bending, Mixing, etc.)',
    ],
  },
  {
    category: 'Courses for Girls',
    icon: <FaFemale className="text-pink-500 text-3xl mb-3" />,
    color: 'pink',
    items: [
      'Tailoring & Fashion Designing',
      'Beautician & Salon Training',
      'Mehendi & Nail Art Design',
      'Cooking & Bakery (Cakes, Chocolates)',
      'Home-made Product Business (Papads, Pickles, etc.)',
      'Jewelry Making (Beads, Silk Thread, Terracotta)',
      'Candle & Soap Making',
      'Handloom Weaving (Local Styles)',
      'Hand Embroidery & Crochet',
      'Event Decoration (Balloon & Flower Decor)',
      'Interior Decoration Basics',
      'Computer Basics & MS Office',
      'Graphic Design (Canva, CorelDRAW for Women)',
      'Social Media Handling for Small Business',
      'Photography with Mobile',
      'Digital Marketing Basics',
      'Online Business Skills (Etsy, Amazon Handmade)',
      'Childcare & Preschool Teaching Skills',
      'Community Health Worker Training',
      'Tailored Yoga & Wellness Coaching',
    ],
  },
  {
    category: 'Courses for Both Boys & Girls',
    icon: <FaUsers className="text-green-600 text-3xl mb-3" />,
    color: 'green',
    items: [
      'Tailoring & Fashion Designing',
      'Beautician & Salon Training',
      'Mehendi & Nail Art Design',
      'Cooking & Bakery (Cakes, Chocolates)',
      'Home-made Product Business (Papads, Pickles, etc.)',
      'Jewelry Making (Beads, Silk Thread, Terracotta)',
      'Candle & Soap Making',
      'Handloom Weaving (Local Styles)',
      'Hand Embroidery & Crochet',
      'Event Decoration (Balloon & Flower Decor)',
      'Interior Decoration Basics',
      'Computer Basics & MS Office',
      'Graphic Design (Canva, CorelDRAW for Women)',
      'Social Media Handling for Small Business',
      'Photography with Mobile',
      'Digital Marketing Basics',
      'Online Business Skills (Etsy, Amazon Handmade)',
      'Childcare & Preschool Teaching Skills',
      'Community Health Worker Training',
      'Tailored Yoga & Wellness Coaching',
    ],
  },
];

const SkillCoursesSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-blue-50 via-white to-pink-50" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Skill-Based Training Programs
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((group, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-t-8 border-${group.color}-400 bg-white p-6`}
            >
              {/* Icon and Heading */}
              <div className="flex items-center space-x-3 mb-4">
                {group.icon}
                <h3 className="text-xl font-semibold text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>{group.category}</h3>
              </div>

              {/* List */}
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base max-h-[300px] overflow-y-auto pr-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                {group.items.map((item, index) => (
                  <li
                    key={index}
                    className="leading-snug hover:text-blue-600 transition duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCoursesSection;
