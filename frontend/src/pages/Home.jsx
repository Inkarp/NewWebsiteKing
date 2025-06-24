import Hero from "./Home/Hero";
import Offerings from "./Home/Offerings";
import Testimonials from "./Home/Testimonials";
import WhyChooseUs from "./Home/WhyChooseUs";
import GraduatePrograms from "./Services/GraduatePrograms";
import InstitutionalCollaboration from "./Services/InstitutionalCollaboration";
import PGPrograms from "./Services/PGPrograms";
import SignaturePrograms from "./Services/SignaturePrograms";
import SkillCoursesSection from "./Services/SkillBasedPrograms";
import WhyKingdomIsDifferent from "./Services/WhyKingdomIsDiffernet";

const Home = () => (
  <section className="p-8">
    {/* <h1 className="text-3xl font-bold mb-4">Welcome to Kingdom EdTech</h1>
    <p className="text-lg text-gray-700 max-w-3xl">
      Kingdom EdTech is a mission-driven educational platform transforming students into purpose-driven professionals. Our programs go beyond academics, integrating real-life skills, faith, and mentorship.
    </p> */}
    <Hero />
    <WhyChooseUs />
    <Offerings />
    <SkillCoursesSection />
    <InstitutionalCollaboration />
    <WhyKingdomIsDifferent />
    <Testimonials />
  </section>
);

export default Home;
