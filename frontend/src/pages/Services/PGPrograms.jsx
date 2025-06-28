const pgPrograms = [
  "Campus-to-Corporate Toolkit",
  "AI for Business Decision-Making",
  "Digital Business Models & Startups",
  "International Business & Global Trade",
  "Mini MBA in Startups",
  "Excel + Power BI for Business Analytics",
  "High-Impact Short-Term Courses for MBA, MCA, M.COM, MSc, MTech Students"
];

export default function PGPrograms() {
  return (
    <section className="py-10 px-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      <h2 className="text-3xl font-bold text-green-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>For All PG Streams</h2>
      <ul className="space-y-4 text-gray-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
        {pgPrograms.map((item, idx) => (
          <li key={idx} className="bg-green-50 p-4 rounded-lg shadow border-l-4 border-green-600">
            📘 {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
