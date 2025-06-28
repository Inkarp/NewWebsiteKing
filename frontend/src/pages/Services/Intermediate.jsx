import React, { useState } from "react";

const courseData = {
  CEC: [
    {
      title: "Tally + GST Basics",
      contents: "Accounting, ledger, vouchers, GST",
      outcome: "Job-ready commerce skills",
    },
    {
      title: "Banking & Insurance Awareness",
      contents: "Bank types, policies, savings, loans",
      outcome: "Career foundation in BFSI",
    },
    {
      title: "Entrepreneurship Basics",
      contents: "Startup ideas, business models",
      outcome: "Encourages self-employment",
    },
    {
      title: "Digital Marketing Introduction",
      contents: "SEO, social media, basics",
      outcome: "Prepares for business/digital roles",
    },
    {
      title: "MS Excel & Accounting Tools",
      contents: "Spreadsheets, formulas, analysis",
      outcome: "Practical tool for commerce jobs",
    },
    {
      title: "Stock Market for Beginners",
      contents: "Sensex, shares, investment basics",
      outcome: "Financial awareness",
    },
    {
      title: "Retail & Customer Handling",
      contents: "Sales, CRM, billing tools",
      outcome: "Retail job readiness",
    },
    {
      title: "E-commerce Basics",
      contents: "Online business, portals, payment gateways",
      outcome: "Digital commerce literacy",
    },
    {
      title: "Business English & Communication",
      contents: "Email, report writing, formal speaking",
      outcome: "Workplace-ready communication",
    },
    {
      title: "Basics of Law for Commerce",
      contents: "Contracts, consumer law, taxes",
      outcome: "Awareness of legal aspect in business",
    },
  ],
  BIPC: [
    {
      title: "Health & Nutrition Awareness",
      contents: "Food habits, body functions",
      outcome: "Promotes health responsibility",
    },
    {
      title: "First Aid & Emergency Care",
      contents: "CPR, wounds, basic survival skills",
      outcome: "Life-saving knowledge",
    },
    {
      title: "Biotechnology Awareness",
      contents: "Genetics, vaccines, lab practices",
      outcome: "Career awareness in Biotech",
    },
    {
      title: "Paramedical Career Orientation",
      contents: "Nursing, lab tech, pharmacy",
      outcome: "Career path guidance",
    },
    {
      title: "Environmental Science Basics",
      contents: "Pollution, ecosystems, recycling",
      outcome: "Creates eco-awareness",
    },
    {
      title: "Public Health & Hygiene",
      contents: "Sanitation, infection control",
      outcome: "Community health understanding",
    },
    {
      title: "Basic Lab Techniques",
      contents: "Equipment handling, safety",
      outcome: "Hands-on understanding for further study",
    },
    {
      title: "Medical Terminology",
      contents: "Anatomy terms, diagnosis language",
      outcome: "Prepares for advanced studies",
    },
    {
      title: "Biology in Daily Life",
      contents: "Microbes, diet, body response",
      outcome: "Connects theory to real life",
    },
    {
      title: "Spoken English for Health Sector",
      contents: "Patient interaction, empathy",
      outcome: "Communication for future roles",
    },
  ],
  MPC: [
    {
      title: "Basic Python Programming",
      contents: "Variables, logic, syntax",
      outcome: "Foundation for software careers",
    },
    {
      title: "Engineering Career Guidance",
      contents: "Branches, colleges, entrance exams",
      outcome: "Career roadmap clarity",
    },
    {
      title: "Robotics & Circuits",
      contents: "Motors, sensors, simple kits",
      outcome: "Applied electronics exposure",
    },
    {
      title: "CAD & Design Thinking",
      contents: "AutoCAD basics, creative prototyping",
      outcome: "Design skills for engineers",
    },
    {
      title: "Physics Around Us",
      contents: "Energy, motion, tech examples",
      outcome: "Real-life application of concepts",
    },
    {
      title: "3D Printing Awareness",
      contents: "Technology, design tools",
      outcome: "Future-tech exposure",
    },
    {
      title: "Math Tricks & Speed Calculations",
      contents: "Vedic math, logic puzzles",
      outcome: "Competitive exam prep",
    },
    {
      title: "AI & Future Tech",
      contents: "Intro to AI, ML, applications",
      outcome: "Modern tech awareness",
    },
    {
      title: "Space & Rocket Science Basics",
      contents: "ISRO, orbits, launch systems",
      outcome: "Science motivation",
    },
    {
      title: "Ethics in Science & Engineering",
      contents: "Integrity, research conduct",
      outcome: "Values in technology use",
    },
  ],
  HEC: [
    {
      title: "Public Speaking & Debate",
      contents: "Body language, stage confidence",
      outcome: "Leadership and communication",
    },
    {
      title: "UPSC & Govt Jobs Foundation",
      contents: "Indian polity, history, reasoning",
      outcome: "Early civil service prep",
    },
    {
      title: "NGO & Social Work Basics",
      contents: "Community service, volunteering",
      outcome: "Awareness of impact sector",
    },
    {
      title: "Journalism & Media Literacy",
      contents: "News writing, media analysis",
      outcome: "Career skills in media",
    },
    {
      title: "Basic Economics for Daily Life",
      contents: "Money flow, demand-supply",
      outcome: "Financial understanding",
    },
    {
      title: "Digital Citizenship",
      contents: "Ethics, privacy, social media use",
      outcome: "Responsible online behavior",
    },
    {
      title: "Time Management & Study Skills",
      contents: "Productivity, scheduling",
      outcome: "Academic success booster",
    },
    {
      title: "Leadership & Soft Skills",
      contents: "Teamwork, integrity, presentation",
      outcome: "Character building",
    },
    {
      title: "English for Competitive Exams",
      contents: "Vocabulary, reading, writing",
      outcome: "Exam preparation edge",
    },
    {
      title: "Gender Sensitivity & Legal Rights",
      contents: "Equality, safety, awareness",
      outcome: "Social responsibility",
    },
  ],
};

export default function Intermediate() {
  const [activeTab, setActiveTab] = useState("CEC");

  return (
    <section className="py-12 mt-10 px-4 bg-gradient-to-br from-[#f4f8fb] to-[#eef2f7] text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Courses for Intermediate Streams
        </h2>
        <div className="w-40 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8 rounded-full" />

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {Object.keys(courseData).map((stream) => (
            <button
              key={stream}
              onClick={() => setActiveTab(stream)}
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 ease-in-out transform 
        ${activeTab === stream
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105 ring-2 ring-purple-300"
                  : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-100 hover:scale-105"
                }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {stream}
            </button>
          ))}
        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseData[activeTab].map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-xl border border-blue-100 p-6 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:border-blue-400"
            >
              <h3
                className="text-xl font-semibold text-blue-800 mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {course.title}
              </h3>
              <p className="text-sm mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span className="font-medium text-gray-600">Contents:</span>{" "}
                {course.contents}
              </p>
              <p className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span className="font-medium text-gray-600">Outcome:</span>{" "}
                {course.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}
