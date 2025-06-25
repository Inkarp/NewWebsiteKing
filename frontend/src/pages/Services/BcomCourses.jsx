import React, { useState } from "react";

const courses = [
  {
    title: "Tally Prime with GST",
    contents: "Ledger creation, vouchers, GST entries, reports",
    outcome: "Eligible for accountant, billing, and office jobs",
    category: "Accounting",
  },
  {
    title: "Advanced Excel for Business",
    contents: "Formulas, Pivot Tables, MIS Reports, Charts",
    outcome: "Essential for analyst jobs, office work, data entry",
    category: "Data & Tools",
  },
  {
    title: "Income Tax Filing & ITR Tools",
    contents: "Income slabs, ITR 1-4, filing portal, Form 16",
    outcome: "Can file taxes for self/clients or assist CA",
    category: "Finance",
  },
  {
    title: "Digital Marketing Basics",
    contents: "SEO, Social Media Ads, Google Ads, Canva",
    outcome: "Good for freelancing, business promotion, internships",
    category: "Digital",
  },
  {
    title: "Resume, Interview, and LinkedIn Skills",
    contents: "Resume tips, LinkedIn profile, mock interviews",
    outcome: "Improves job selection chances drastically",
    category: "Soft Skills",
  },
  {
    title: "SAP (ERP) – Business Process & Module Basics",
    contents:
      "SAP FICO, HCM, MM Modules, T-codes, Reporting, SAP GUI navigation",
    outcome: "Ready for ERP-enabled accounting, HR, and logistics jobs",
    category: "ERP",
  },
  {
    title: "Freelancing & Self-Employment Skills",
    contents: "Fiverr, Upwork, profile setup, proposals",
    outcome: "Can earn independently using skills like Excel, Tally, Design",
    category: "Freelance",
  },
  {
    title: "CRM & Customer Service Tools",
    contents: "CRM software (Zoho, Salesforce basics), soft skills",
    outcome: "Eligible for marketing/support roles in companies",
    category: "Marketing",
  },
  {
    title: "E-Invoicing & Online Tax Tools",
    contents: "Tally e-invoicing, GST e-way bills, Zoho Books basics",
    outcome: "Efficient in paperless accounting jobs",
    category: "Accounting",
  },
  {
    title: "Leadership & Public Speaking Mastery",
    contents: "Voice control, storytelling, stage skills",
    outcome: "Builds presence for interviews, teaching, business leadership",
    category: "Soft Skills",
  },
];

const categories = ["All", "Accounting", "Finance", "Digital", "Data & Tools", "Soft Skills", "ERP", "Freelance", "Marketing"];

export default function BcomCourses() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section className="bg-gradient-to-br from-[#f5f7fb] to-white py-14 px-4 font-[Poppins]">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-3"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Must-Learn Courses for B.Com (All Streams)
        </h2>
        <div className="w-52 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
        <p className="text-center text-gray-600 mb-10 text-lg">
          ✳ Kingdom Signature Programs –{" "}
          <span className="font-semibold">Practical | Career-Oriented | Job-Focused</span>
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition duration-300 ${selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-md ring-2 ring-blue-300"
                  : "bg-white border border-blue-600 text-blue-700 hover:bg-blue-100 hover:scale-105"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="relative bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 mt-2 mr-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
                #{index + 1}
              </div>
              <h3
                className="text-lg font-bold text-blue-800 mb-1"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                {course.title}
              </h3>
              <p className="text-sm mb-1">
                <span className="font-medium text-gray-600">Contents:</span>{" "}
                {course.contents}
              </p>
              <p className="text-sm">
                <span className="font-medium text-gray-600">Outcome:</span>{" "}
                {course.outcome}
              </p>
            </div>
          ))}
        </div>

        {/* Why These Courses Matter */}
        <div className="mt-14 p-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 rounded-xl shadow-inner text-center">
          <h4 className="text-xl font-bold mb-2">Why Are These Courses Important?</h4>
          <ul className="text-sm leading-relaxed space-y-1">
            <li>✅ Prepares for jobs in accounting, HR, and finance sectors</li>
            <li>✅ Makes you office-ready with Excel, GST, SAP, Communication</li>
            <li>✅ Helps crack competitive exams – Aptitude, Reasoning</li>
            <li>✅ Freelancing options for income through skills</li>
            <li>✅ Start your own business, store, or support family venture</li>
          </ul>
        </div>
      </div>
    </section>
  );

}
