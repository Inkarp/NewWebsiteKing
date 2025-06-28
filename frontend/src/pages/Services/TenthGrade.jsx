import React from "react";

const skills = [
  {
    name: "Find Your Path",
    title: "Career Discovery & Goal Setting",
    contents:
      "Introduction to various streams (Science, Commerce, Arts, Vocational), future opportunities, self-assessment tests.",
    outcome:
      "Students gain clarity on what they can become and how to get there.",
  },
  {
    name: "Digital Future Ready",
    title: "Basic Computer & Digital Literacy",
    contents:
      "MS Office, Google tools, online safety, digital communication.",
    outcome:
      "Confidence in using tech for academics and daily life.",
  },
  {
    name: "Udyamam – The Inner Drive",
    title: "Motivation & Life Skills",
    contents:
      "Goal-setting, time management, confidence building, handling peer pressure.",
    outcome:
      "A student with positive mindset and leadership potential.",
  },
  {
    name: "Speak to Lead",
    title: "Communication Skills & Personality Development",
    contents:
      "English speaking, body language, public speaking, writing skills.",
    outcome:
      "Students speak with confidence in interviews and stage events.",
  },
  {
    name: "Manassu – Emotional Intelligence",
    title: "Mental Wellness & Stress Handling",
    contents:
      "Mindfulness, emotional awareness, dealing with failure.",
    outcome:
      "Strong, emotionally balanced individuals.",
  },
  {
    name: "Meet the Mentor",
    title: "Career Talks with Real Heroes",
    contents:
      "Sessions with professionals (doctors, engineers, entrepreneurs) sharing their journey.",
    outcome:
      "Real inspiration, practical direction.",
  },
  {
    name: "Money & Me",
    title: "Financial Awareness for Teens",
    contents:
      "Savings, budgeting, digital payments, intro to banking.",
    outcome:
      "Financially smart students.",
  },
  {
    name: "Values that Build Kingdoms",
    title: "Value Education & Ethics",
    contents:
      "Integrity, respect, responsibility, compassion (non-religious but value based).",
    outcome:
      "Character building beyond academics.",
  },
  {
    name: "Smart Netizen",
    title: "Internet & Social Media Awareness",
    contents:
      "Responsible use of social media, cyberbullying, privacy awareness, fake news detection.",
    outcome:
      "Teach teens how to stay safe and smart online.",
  },
  {
    name: "Creative Minds Club",
    title: "Creativity & Innovation",
    contents:
      "Art, storytelling, innovation projects, creative writing, photography basics.",
    outcome:
      "Encourage imagination and problem-solving skills from an early age.",
  },
  {
    name: "Code & Create",
    title: "Intro to Coding & AI (Beginner)",
    contents:
      "Scratch programming, logic building, how AI works (basic level).",
    outcome:
      "Prepares students for future tech-based careers.",
  },
  {
    name: "Stage Ready",
    title: "Media & Presentation Skills",
    contents:
      "How to present using PowerPoint, video making basics, storytelling for YouTube.",
    outcome:
      "For future entrepreneurs, influencers, and leaders.",
  },
  {
    name: "Yuvatha Bharosa",
    title: "Govt & Competitive Exams Awareness",
    contents:
      "Awareness of SSC, banking, RRB jobs, exam patterns, success stories.",
    outcome:
      "Guides students from humble backgrounds toward govt careers.",
  },
  {
    name: "Green Warriors",
    title: "Environment, Agriculture & Sustainability",
    contents:
      "Local environmental issues, water conservation, intro to organic farming.",
    outcome:
      "Builds responsibility and eco-awareness.",
  },
  {
    name: "Study Smart",
    title: "Study Techniques & Exam Success",
    contents:
      "Note-making, memory techniques, mind maps, prep tips.",
    outcome:
      "Improves how students study and succeed in exams.",
  },
  {
    name: "Talk Like a Pro",
    title: "Spoken English with Regional Relevance",
    contents:
      "Telugu to English practice, real-life examples, speaking fluently and respectfully.",
    outcome:
      "Bridges the language gap in rural/semi-urban areas.",
  },
  {
    name: "Inner Light",
    title: "Spiritual & Moral Wisdom (Optional)",
    contents:
      "Non-denominational stories, peace, value-based reflection.",
    outcome:
      "Strengthens ethical foundation for life.",
  },
];

export default function TenthGrade() {
  return (
  <section className="bg-gradient-to-b from-blue-50 to-white py-14 px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
    <div className="max-w-7xl mx-auto">
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Kingdom Signature Skills for 10th Class Students
      </h2>
      <div className="w-60 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
      <p className="text-center text-gray-600 italic mb-10 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
        Learn Early. Grow Strong. Lead the Future.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-3">
              <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                {skill.name}
              </span>
            </div>
            <h4
              className="text-lg font-bold text-blue-800 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {skill.title}
            </h4>
            <p className="text-sm mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="font-medium text-gray-600">📘 What you learn:</span>{" "}
              {skill.contents}
            </p>
            <p className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="font-medium text-gray-600">🎯 Why it matters:</span>{" "}
              {skill.outcome}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

}
