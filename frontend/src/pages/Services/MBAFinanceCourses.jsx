import React, { useState } from "react";

const tabs = ["Finance Courses", "Stock Market Specialization"];

const financeCourses = [
  {
    title: "Stock Market Basics & Trading",
    contents: "NSE/BSE overview, technical & fundamental analysis, trading apps",
    outcome: "Understand market behavior and start informed investing/trading",
  },
  {
    title: "Personal Finance Management",
    contents: "Budgeting, goal planning, mutual funds, taxation basics",
    outcome: "Make smarter money decisions for life and career",
  },
  {
    title: "Financial Modeling & Valuation",
    contents: "Excel modeling, DCF, NPV, IRR, business valuation",
    outcome: "Analyze companies and support financial decision-making",
  },
  {
    title: "FinTech & Blockchain Fundamentals",
    contents: "Digital payments, UPI, cryptocurrencies, blockchain use cases",
    outcome: "Stay competitive in the evolving financial technology space",
  },
  {
    title: "Tally + Zoho Books + GST Filing",
    contents: "Journal entries, invoicing, reports, GST practical training",
    outcome: "Become job-ready for finance roles in MSMEs or startups",
  },
  {
    title: "Mutual Funds & Insurance Planning",
    contents: "Types of funds, SIPs, ULIPs, risk profiling",
    outcome: "Gain confidence to advise or invest personally/professionally",
  },
  {
    title: "Excel & Power BI for Finance",
    contents: "Dashboarding, pivot tables, Power BI visualizations",
    outcome: "Analyze financial data and present insights effectively",
  },
  {
    title: "Credit & Loan Structuring",
    contents: "Types of loans, eligibility, EMI structuring, NBFC process",
    outcome: "Work in banking/NBFC sector with practical knowledge",
  },
];

const stockCourses = [
  {
    title: "Stock Market Basics",
    contents: "NSE/BSE, indices, IPOs",
    outcome: "Understand Indian stock market structure",
  },
  {
    title: "Technical Analysis",
    contents: "Charts, indicators, candlesticks, support/resistance",
    outcome: "Predict stock price movements",
  },
  {
    title: "Fundamental Analysis",
    contents: "Balance sheet, P&L, ratio analysis, valuation",
    outcome: "Analyze a company’s financial health",
  },
  {
    title: "Derivatives Market",
    contents: "Futures, options, hedging, arbitrage",
    outcome: "Understand complex instruments and risk management",
  },
  {
    title: "Portfolio Management",
    contents: "Risk-return, diversification, asset allocation",
    outcome: "Build and manage investment portfolios",
  },
  {
    title: "Behavioral Finance",
    contents: "Investor psychology, biases, decisions",
    outcome: "Understand behavior-driven market moves",
  },
  {
    title: "Algo Trading Basics",
    contents: "Automation, bots, logic",
    outcome: "Intro to automated trading systems",
  },
  {
    title: "Valuation Models",
    contents: "DCF, P/E, EPS, NAV",
    outcome: "Master pricing of stocks and businesses",
  },
  {
    title: "Options Trading Strategies",
    contents: "Spreads, Greeks, straddles",
    outcome: "Implement advanced strategies with confidence",
  },
  {
    title: "Market Simulation & Live Trading Lab",
    contents: "Paper trading, demo platforms",
    outcome: "Practice and apply learning in real-time",
  },
];

export default function MBAFinanceCourses() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const data = activeTab === "Finance Courses" ? financeCourses : stockCourses;

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Kingdom Signature Finance Courses for MBA Students
        </h2>
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                activeTab === tab
                  ? "bg-blue-800 text-white"
                  : "border border-blue-800 text-blue-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.map((course, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-100 p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-1">
                {index + 1}. {course.title}
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
      </div>
    </section>
  );
}
