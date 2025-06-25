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

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          Kingdom Edutech: Short-Term Courses for MBA Students
        </h2>
        <p className="text-center text-gray-600 italic mb-8">
          For all MBA Streams — Marketing, Finance, and HR
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 text-sm rounded-full transition ${
                activeTab === tab
                  ? "bg-blue-800 text-white"
                  : "border border-blue-800 text-blue-800"
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
              className="bg-blue-50 border border-blue-100 rounded-xl p-5 shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-1">
                {course.title}
              </h3>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Contents:</span> {course.contents}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Outcome:</span> {course.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
