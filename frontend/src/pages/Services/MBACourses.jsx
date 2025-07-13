import React, { useState } from "react";

const tabs = [
  "All",
  "Core",
  "Finance",
  "Marketing",
  "HR",
  "Stock Market",
  "Certification",
  "Add-on",
];

const courses = [
  {
    category: "Core",
    title: "AI for Business Decision-Making",
    contents: "ChatGPT, Copilot, Prompt Engineering, Case Studies",
    outcome: "Use AI tools to solve business problems across domains.",
  },
  {
    category: "Core",
    title: "Sustainability & ESG Management",
    contents: "CSR, ESG Metrics, GRI Reporting, Branding Impact",
    outcome: "Apply ESG knowledge in strategy, reporting, and impact comms.",
  },
  {
    category: "Certification",
    title: "Google Ads + Meta Blueprint",
    contents: "Live ad setup, freelancing tips, certification prep",
    outcome: "Run campaigns, get certified, freelance during MBA.",
  },
  {
    category: "Finance",
    title: "Financial Modeling & Valuation",
    contents: "NPV, DCF, IRR, Excel-based projections",
    outcome: "Support strategic finance roles with solid models.",
  },
  {
    category: "Marketing",
    title: "Sales & Negotiation Mastery",
    contents: "Prospecting, closing, objections, B2B vs B2C",
    outcome: "Confidently drive deals and handle client objections.",
  },
  {
    category: "HR",
    title: "Talent Acquisition & Recruitment",
    contents: "JD creation, sourcing, ATS systems, interviews",
    outcome: "Hire smarter with real-world recruitment techniques.",
  },
  {
    category: "Stock Market",
    title: "Technical Analysis",
    contents: "Charts, indicators, candlestick patterns",
    outcome: "Predict stock price behavior using technical tools.",
  },
  {
    category: "Add-on",
    title: "Campus-to-Corporate Toolkit",
    contents: "Resume writing, LinkedIn, GD, communication",
    outcome: "Boost placement readiness and corporate transition.",
  },
];

export default function MBACourses() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCourses =
    activeTab === "All"
      ? courses
      : courses.filter((course) => course.category === activeTab);

  <section className="bg-gradient-to-br from-white to-blue-50 py-14 px-4 font-[Poppins]">
    <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-2"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Kingdom Edutech: Short-Term Courses for MBA Students
      </h2>
      <div className="w-64 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-5" />
      <p className="text-center text-gray-600 italic mb-10 text-lg">
        For all MBA Streams — Marketing, Finance, and HR
      </p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 text-sm rounded-full font-medium tracking-wide transition duration-300 ${activeTab === tab
                ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-md ring-2 ring-blue-200"
                : "bg-white border border-blue-700 text-blue-700 hover:bg-blue-100 hover:scale-105"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="relative bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 mt-2 mr-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
              #{index + 1}
            </div>
            <h3
              className="text-lg font-bold text-blue-900 mb-1"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              {course.title}
            </h3>
            <p className="text-sm mb-1 text-gray-700">
              <span className="font-medium text-gray-600">📘 Contents:</span> {course.contents}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium text-gray-600">🎯 Outcome:</span> {course.outcome}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

}
