import Hero from "./Home/Hero";
import Offerings from "./Home/Offerings";
import Testimonials from "./Home/Testimonials";
import WhyChooseUs from "./Home/WhyChooseUs";

const Home = () => (
  <section className="p-8">
    {/* <h1 className="text-3xl font-bold mb-4">Welcome to Kingdom EdTech</h1>
    <p className="text-lg text-gray-700 max-w-3xl">
      Kingdom EdTech is a mission-driven educational platform transforming students into purpose-driven professionals. Our programs go beyond academics, integrating real-life skills, faith, and mentorship.
    </p> */}
    <Hero />
    <WhyChooseUs />
    <Offerings /> 
    <Testimonials />
  </section>
);

export default Home;
