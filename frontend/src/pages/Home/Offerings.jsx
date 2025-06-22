import React from 'react';
import Logo from "/Logo.png"

const offerings = [
  {
    title: 'Career Guidance & Clarity',
    image: Logo,
    points: [
      'Find your path after 10th, Inter, or Degree.',
      'Discover your passion with expert mentorship.',
      'Includes career map workbook, quizzes, and 1-on-1 sessions.'
    ]
  },
  {
    title: 'Motivation & Personality Development',
    image: Logo,
    points: [
      'Weekly sessions on focus & purpose.',
      'Guest mentors, success stories, and peer talks.'
    ]
  },
  {
    title: 'Kingdom Signature Programs',
    image: Logo,
    points: [
      'Short-term, mobile-friendly certifications.',
      'Learn from home and boost your resume.'
    ]
  },
  {
    title: 'Study Planning & Exam Support',
    image: Logo,
    points: [
      'Timetable templates and live “study smart” sessions.',
      'Exam bootcamps, stress tips, and writing techniques.'
    ]
  },
  {
    title: 'Job & Internship Support',
    image: Logo,
    points: [
      'Resume building, mock interviews, job alerts.',
      'Internships with NGOs/startups. Career plans included.'
    ]
  }
];




export default function Offerings() {
  return (
    <>
     <section className="bg-white py-10 px-6 md:px-16">
        
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 flex flex-col justify-center items-center p-3">
            <div className="text-5xl text-bold text-blue-600 mt-2 border rounded-full text-center px-6 py-3 mb-5">Our Offerings</div>
          <h2 className="text-4xl text-bold  text-blue-600 mb-4 py-2">Real Learning. Real Growth. Real Impact.</h2>
          <p className="font-bold text-lg max-w-3xl mx-auto">
            Empowering students directly with life-changing skills and clarity.
          </p>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center justify-center rounded-xl shadow-2xl hover:shadow-xl transition-all overflow-hidden  h-full hover:scale-105 hover:border"
            >
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">{item.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm flex-grow">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



    
    </>
  );
};


