import React from 'react';

const SkillCoursesSection = () => {
  const courses = [
    {
      category: 'Courses for Boys',
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

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12 font-serif tracking-tight">
          Skill-Based Training Programs
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition duration-300 border border-blue-100"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2">
                {group.category}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
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
