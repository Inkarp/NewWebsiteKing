import React, { useState } from "react";

const tabs = ["Finance Courses", "Stock Market Specialization"];

const financeCourses = [
  { title: "Stock Market Basics & Trading", contents: "NSE/BSE overview, technical & fundamental analysis, trading apps", outcome: "Understand market behavior and start informed investing/trading" },
  { title: "Personal Finance Management", contents: "Budgeting, goal planning, mutual funds, taxation basics", outcome: "Make smarter money decisions for life and career" },
  { title: "Financial Modeling & Valuation", contents: "Excel modeling, DCF, NPV, IRR, business valuation", outcome: "Analyze companies and support financial decision-making" },
  { title: "FinTech & Blockchain Fundamentals", contents: "Digital payments, UPI, cryptocurrencies, blockchain use cases", outcome: "Stay competitive in the evolving financial technology space" },
  { title: "Tally + Zoho Books + GST Filing", contents: "Journal entries, invoicing, reports, GST practical training", outcome: "Become job-ready for finance roles in MSMEs or startups" },
  { title: "Mutual Funds & Insurance Planning", contents: "Types of funds, SIPs, ULIPs, risk profiling", outcome: "Gain confidence to advise or invest personally/professionally" },
  { title: "Excel & Power BI for Finance", contents: "Dashboarding, pivot tables, Power BI visualizations", outcome: "Analyze financial data and present insights effectively" },
  { title: "Credit & Loan Structuring", contents: "Types of loans, eligibility, EMI structuring, NBFC process", outcome: "Work in banking/NBFC sector with practical knowledge" }
];

const stockCourses = [
  { title: "Stock Market Basics", contents: "NSE/BSE, indices, IPOs", outcome: "Understand Indian stock market structure" },
  { title: "Technical Analysis", contents: "Charts, indicators, candlesticks, support/resistance", outcome: "Predict stock price movements" },
  { title: "Fundamental Analysis", contents: "Balance sheet, P&L, ratio analysis, valuation", outcome: "Analyze a company’s financial health" },
  { title: "Derivatives Market", contents: "Futures, options, hedging, arbitrage", outcome: "Understand complex instruments and risk management" },
  { title: "Portfolio Management", contents: "Risk-return, diversification, asset allocation", outcome: "Build and manage investment portfolios" },
  { title: "Behavioral Finance", contents: "Investor psychology, biases, decisions", outcome: "Understand behavior-driven market moves" },
  { title: "Algo Trading Basics", contents: "Automation, bots, logic", outcome: "Intro to automated trading systems" },
  { title: "Valuation Models", contents: "DCF, P/E, EPS, NAV", outcome: "Master pricing of stocks and businesses" },
  { title: "Options Trading Strategies", contents: "Spreads, Greeks, straddles", outcome: "Implement advanced strategies with confidence" },
  { title: "Market Simulation & Live Trading Lab", contents: "Paper trading, demo platforms", outcome: "Practice and apply learning in real-time" }
];

export default function MBAFinanceCourses() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const data = activeTab === "Finance Courses" ? financeCourses : stockCourses;

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-14 px-4 font-[Poppins]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-3" style={{ fontFamily: "'Pacifico', cursive" }}>
          Kingdom Signature Finance Courses for MBA Students
        </h2>
        <div className="w-52 h-1 bg-gradient-to-r from-blue-700 to-indigo-600 mx-auto mb-10 rounded-full"></div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-800 to-purple-700 text-white shadow-md scale-105"
                  : "bg-white border border-blue-800 text-blue-800 hover:bg-blue-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((course, index) => (
            <div key={index} className="bg-white border border-blue-100 p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
              <span className="absolute top-2 right-3 text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full shadow">
                #{index + 1}
              </span>
              <h3 className="text-lg font-bold text-blue-900 mb-1" style={{ fontFamily: "'Pacifico', cursive" }}>
                {course.title}
              </h3>
              <p className="text-sm mb-1 text-gray-700">
                <span className="font-semibold text-gray-600">📘 Contents:</span> {course.contents}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-gray-600">🎯 Outcome:</span> {course.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
