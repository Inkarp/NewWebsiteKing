const signaturePrograms = [
  "Certificate in Career Guidance & Life Skills",
  "Certificate in Motivation & Mental Strength",
  "Certificate in Basic Computer & IT Skills",
  "Certificate in Spoken English & Personality Development",
  "Certificate in Digital Marketing",
  "Certificate in Mobile Photography & Video Editing",
  "Certificate in Introduction to Coding & Web Design"
];

export default function SignaturePrograms() {
  return (
    <section className="py-10 px-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      <h2 className="text-3xl font-bold text-blue-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>"Kingdom Signature Programs"</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
        {signaturePrograms.map((item, idx) => (
          <li key={idx} className="bg-blue-50 p-4 rounded-lg shadow">
            ⭐ {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
