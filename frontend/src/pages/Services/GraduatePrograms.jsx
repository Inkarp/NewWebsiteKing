const graduatePrograms = [
  "Career Guidance & Life Skills",
  "Emotional Intelligence & Mental Wellness",
  "Spoken English & Public Speaking",
  "Digital Marketing",
  "Tally with GST & Accounting Tools",
  "Basic to Advanced Computer Skills",
  "Photography & Video Editing",
  "Music Production & Sound Engineering",
  "Beauty & Grooming",
  "Coding for Beginners",
  "Competitive Exam Foundation",
  "Entrepreneurship & Startup Thinking"
];

export default function GraduatePrograms() {
  return (
    <section className="py-10 px-6 bg-yellow-50">
      <h2 className="text-3xl font-bold text-yellow-800 mb-6">For Graduates</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 font-medium">
        {graduatePrograms.map((item, idx) => (
          <li key={idx} className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-500">
            🎓 {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
