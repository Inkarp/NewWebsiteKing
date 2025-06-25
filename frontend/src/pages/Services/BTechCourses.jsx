import React, { useState } from "react";

const techCourses = [
  {
    title: "Python Full Stack",
    topics: [
      "Python Programming",
      "MySQL (Database)",
      "Flask (Framework)",
      "Django (Framework)",
      "HTML, CSS, JavaScript",
      "React, Node.js, Bootstrap",
    ],
  },
  {
    title: "Java Full Stack",
    topics: [
      "Java Programming",
      "HTML, CSS, JavaScript",
      "React.js",
      "Spring Boot",
      "Spring MVC",
      "JDBC (Database)",
    ],
  },
  {
    title: "MERN Stack Development",
    topics: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
    ],
  },
  {
    title: "Power BI",
    topics: ["Excel", "Power BI", "MySQL or any database"],
  },
  {
    title: "Python Libraries & Data",
    topics: ["NumPy", "Pandas", "Matplotlib", "Web Scraping"],
  },
  {
    title: "Deployment Tools",
    topics: ["AWS", "GitHub", "Vercel"],
  },
  {
    title: "Additional Tech Skills",
    topics: ["C Language", "Python with ML", "Python with AI", "Angular", "PHP"],
  },
];

export default function BTechCourses() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-gradient-to-br from-[#f7faff] to-white py-14 px-4 font-[Poppins]">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-blue-900"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Technology & Digital Skills for B.Tech Students
          </h2>
          <div className="w-56 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full my-4" />
          <p className="text-lg text-gray-600 italic leading-relaxed">
            "Not Just a Degree — A Real-World Skill Arsenal." <br />
            "Code. Create. Conquer." <br />
            "Learn Smart. Work Smarter. Win Bigger."
          </p>
          <div className="mt-3 text-sm text-blue-700 font-semibold tracking-wide">
            #FutureEngineer &nbsp; #LearnToLead &nbsp; #KingdomEdutech
          </div>
        </div>

        {/* Expandable Course Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {techCourses.map((course, index) => (
            <div
              key={index}
              className="border border-blue-100 bg-white rounded-2xl p-5 shadow hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
            >
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <h3
                  className="text-lg font-semibold text-blue-800"
                  style={{ fontFamily: "'Pacifico', cursive" }}
                >
                  {course.title}
                </h3>
                <span className="text-blue-600 text-2xl font-bold">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1 pl-1">
                  {course.topics.map((topic, idx) => (
                    <li key={idx}>📘 {topic}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}
