import GraduatePrograms from "./Services/GraduatePrograms";
import PGPrograms from "./Services/PGPrograms";
import SignaturePrograms from "./Services/SignaturePrograms";
import WhyKingdomIsDifferent from "./Services/WhyKingdomIsDiffernet";

export default function Services() {
    return (
  <section className="p-8">
    <SignaturePrograms />
    <GraduatePrograms />
    <PGPrograms />
    <WhyKingdomIsDifferent />
  </section>
);
}


