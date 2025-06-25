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
    <section className="bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Technology & Digital Skills for B.Tech Students
          </h2>
          <p className="text-lg mt-2 text-gray-600 italic">
            "Not Just a Degree — A Real-World Skill Arsenal." <br />
            "Code. Create. Conquer." <br />
            "Learn Smart. Work Smarter. Win Bigger."
          </p>
          <div className="mt-3 text-sm text-blue-700 font-semibold">
            #FutureEngineer &nbsp; #LearnToLead &nbsp; #KingdomEdutech
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {techCourses.map((course, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-blue-50 rounded-xl p-5 shadow hover:shadow-md transition"
            >
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-blue-800">
                  {course.title}
                </h3>
                <span className="text-blue-700 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                  {course.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
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
