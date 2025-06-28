import React, { useState, useEffect } from "react";
import BcomCourses from "./Services/BcomCourses";
import BTechCourses from "./Services/BTechCourses";
import Cse from "./Services/Cse";
import Intermediate from "./Services/Intermediate";
import MBACourses from "./Services/MBACourses";
import MBAFinanceCourses from "./Services/MBAFinanceCourses";
import TenthGrade from "./Services/TenthGrade";

export default function Services() {
  const [activeTab, setActiveTab] = useState("tenth");
  const [isLoading, setIsLoading] = useState(false);

  const tabs = [
    { id: "tenth", name: "10th Grade", icon: "🎓", component: TenthGrade, color: "from-blue-500 to-cyan-500" },
    { id: "intermediate", name: "Intermediate", icon: "📚", component: Intermediate, color: "from-purple-500 to-pink-500" },
    { id: "cse", name: "Computer Science", icon: "💻", component: Cse, color: "from-green-500 to-emerald-500" },
    { id: "bcom", name: "B.Com Courses", icon: "📊", component: BcomCourses, color: "from-orange-500 to-red-500" },
    { id: "btech", name: "B.Tech Courses", icon: "⚙️", component: BTechCourses, color: "from-indigo-500 to-purple-500" },
    { id: "mba", name: "MBA Courses", icon: "🎯", component: MBACourses, color: "from-teal-500 to-blue-500" },
    { id: "mba-finance", name: "MBA Finance", icon: "💰", component: MBAFinanceCourses, color: "from-yellow-500 to-orange-500" },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const handleTabChange = (tabId) => {
    setIsLoading(true);
    setActiveTab(tabId);
    setTimeout(() => setIsLoading(false), 300);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [activeTab]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse-custom"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse-custom" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-25 animate-pulse-custom" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-cyan-200 rounded-full opacity-15 animate-pulse-custom" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-pink-200 rounded-full opacity-20 animate-pulse-custom" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-7xl mt-20 mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 
            className="text-5xl md:text-6xl font-bold gradient-text-animate mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Services
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Discover our comprehensive range of educational programs designed to shape your future
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="glass rounded-3xl p-3 shadow-2xl mb-8 animate-slide-in-right">
          <div className="flex flex-wrap justify-center gap-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-lg
                  ${activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-xl scale-105`
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md'
                  }
                `}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="glass rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
          <div className="p-8">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Loading {activeTabData?.name}...
                </span>
              </div>
            ) : (
              <div className="animate-fade-in-up">
                {ActiveComponent && <ActiveComponent />}
              </div>
            )}
          </div>
        </div>

        {/* Active Tab Indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-lg">
            <span className="text-lg">{activeTabData?.icon}</span>
            <span 
              className="font-semibold text-gray-700"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Currently viewing: {activeTabData?.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


