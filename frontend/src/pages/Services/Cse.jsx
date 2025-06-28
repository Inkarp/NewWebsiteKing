import React, { useState } from "react";

const courses = [
  {
    title: "Python Programming with Projects",
    contents:
      "Syntax, Data Types, Loops, Functions, OOP, File Handling, Modules, Libraries (NumPy, Pandas)",
    outcome:
      "Can write programs, perform automation, and build mini projects.",
  },
  {
    title: "Full Stack Web Development",
    contents:
      "HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express, MongoDB, GitHub",
    outcome:
      "Can build and deploy full websites and web apps; ready for web developer roles.",
  },
  {
    title: "Data Structures & Algorithms (DSA)",
    contents:
      "Arrays, Stacks, Queues, Trees, Graphs, Recursion, Sorting, Searching",
    outcome:
      "Improved problem-solving; prepares students for technical interviews.",
  },
  {
    title: "SQL & MySQL (Database Management)",
    contents: "RDBMS, CRUD Operations, Joins, Group By, Normalization, Queries",
    outcome:
      "Can handle databases; eligible for analyst/backend developer roles.",
  },
  {
    title: "Data Analytics with Excel & Power BI",
    contents:
      "Formulas, Pivot Tables, Dashboards, Power Query, Power BI Visuals",
    outcome:
      "Can generate insights from data and prepare reports; job-ready for analyst roles.",
  },
  {
    title: "Artificial Intelligence & Machine Learning – Beginner",
    contents: "AI vs ML, Linear Regression, Decision Trees, Pandas, Scikit-learn",
    outcome:
      "Builds foundation for AI/ML career or higher studies.",
  },
  {
    title: "Cloud Computing Basics (AWS)",
    contents:
      "Cloud Models, EC2, S3, IAM, Hosting Websites, Cloud Security Basics",
    outcome: "Ready for cloud support/intern roles; understand deployment.",
  },
  {
    title: "Cybersecurity Essentials",
    contents:
      "Threats, Malware, Network Security, Firewalls, Phishing, Ethical Hacking Intro",
    outcome:
      "Builds cyber awareness; eligible for security analyst assistant roles.",
  },
  {
    title: "Software Testing (Manual + Automation)",
    contents: "SDLC, STLC, Test Cases, Bug Reporting, Selenium Basics",
    outcome: "Can work as QA tester; understands how to test applications.",
  },
  {
    title: "Mobile App Development with Flutter",
    contents:
      "Dart Basics, UI Design, Navigation, Firebase Integration, Deploying Apps",
    outcome:
      "Can develop Android/iOS apps; good for freelancing or startups.",
  },
  {
    title: "Git & GitHub (Version Control)",
    contents: "Git Basics, Commit, Branching, GitHub Repos, Collaboration",
    outcome:
      "Ready to work in tech teams; version control for any project.",
  },
  {
    title: "Operating System & Networking Basics",
    contents: "Processes, Memory, Scheduling, TCP/IP, IP Addressing, DNS",
    outcome:
      "Can understand how systems and networks function; fit for IT support.",
  },
  {
    title: "Java Programming",
    contents: "Syntax, OOPs, Collections, JDBC, Exception Handling",
    outcome:
      "Prepares for software/backend jobs and internships.",
  },
  {
    title: "Aptitude + Logical Reasoning",
    contents:
      "Number Series, Percentages, Time & Work, Blood Relations, Puzzles",
    outcome:
      "Prepares for campus placement, IT exams, banking/Govt exams.",
  },
  {
    title: "Spoken English & Communication Skills",
    contents:
      "Grammar, Vocabulary, Group Discussion, Public Speaking, Interviews",
    outcome:
      "Improves confidence, English speaking, and job communication.",
  },
  {
    title: "Business Analytics using Python",
    contents:
      "Python, DataFrames, Visualization (Matplotlib, Seaborn), Case Studies",
    outcome:
      "Entry-level business analyst capability; real-world data handling.",
  },
  {
    title: "Digital Marketing & SEO Basics",
    contents:
      "SEO, Google Ads, Social Media Marketing, Content Strategy",
    outcome:
      "Can run digital campaigns, help startups, freelance.",
  },
  {
    title: "DevOps Introduction",
    contents:
      "CI/CD Pipeline, Docker Basics, GitHub Actions, Cloud Deployments",
    outcome:
      "Understands modern software release practices; beginner DevOps roles.",
  },
  {
    title: "Linux for Beginners",
    contents:
      "File System, Terminal Commands, Shell Scripting Basics, Permissions",
    outcome:
      "Ready for system admin, DevOps or cyber-related jobs.",
  },
  {
    title: "Freelancing & Startup Skills",
    contents:
      "Profile Setup (Fiverr, Upwork), Proposal Writing, Client Handling, Payments",
    outcome:
      "Can earn online or start own mini IT service venture.",
  },
];

export default function Cse() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="bg-gradient-to-br from-[#f0f4fa] to-white py-14 px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-center mb-4 text-blue-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Kingdom Signature Programs for B.Sc. (Computer Science)
        </h2>
        <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
        <p className="text-center text-gray-600 text-lg italic mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
          ― Learn. Build. Transform. ―
        </p>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group border border-blue-100 rounded-xl p-5 bg-white shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
            >
              <div
                className="cursor-pointer"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <h3
                  className="text-lg font-semibold text-blue-800 group-hover:underline"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {index + 1}. {course.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {expanded === index
                    ? course.contents
                    : course.contents.split(",").slice(0, 2).join(", ") + "..."}
                </p>
                {expanded === index && (
                  <div className="mt-3 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p className="text-blue-800 font-medium">
                      📘 Outcome:
                      <span className="text-gray-700 font-normal ml-1">
                        {course.outcome}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Outcome Summary Box */}
        <div className="mt-14 p-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 rounded-xl shadow-inner text-center">
          <h4 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Why is this package important?</h4>
          <ul className="text-sm leading-relaxed space-y-1" style={{ fontFamily: "'Inter', sans-serif" }}>
            <li>✅ Job-Ready in IT Sector – Developer, Analyst, QA, Support</li>
            <li>✅ Competitive Exam Prep – Aptitude, English, Reasoning</li>
            <li>✅ Freelancing Income – Web, App, SEO, Digital</li>
            <li>✅ Higher Studies Prep – Python, ML, Java, DSA</li>
            <li>✅ Confidence & Communication – Soft skills, GD, Interviews</li>
          </ul>
        </div>
      </div>
    </section>
  );

}
