import Hero from "./Home/Hero";
import NewOfferings from "./Home/NewOfferings";
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
  <section className="px-8 bg-gradient-to-br from-purple-100 via-blue-100 to-green-50">
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
