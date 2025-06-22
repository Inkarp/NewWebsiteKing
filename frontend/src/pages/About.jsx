import FounderMessage from "./About/FounderMessage";
import IntroSection from "./About/IntroSection";
import MissionVision from "./About/MissionVision";
import Philosophy from '/Phil.jpg';

export default function About() {
    return (
        <>
            <section className="py-5 mt-10 px-4 md:px-10 bg-white">
                <div className="w-full mx-auto">

                    {/* Hero Heading */}
                    <div className="text-center mb-16 bg-gradient-to-r from-blue-50 to-yellow-50 py-20 px-6 rounded-xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-4">
                            More Than Education — A Purpose-Driven Mission
                        </h1>
                        <p className="text-lg font-semibold text-gray-600 max-w-3xl mx-auto">
                            Kingdom EdTech is not just an education platform. It's a movement to transform students into professionals — with vision, clarity, and purpose.
                        </p>
                    </div>

                    {/* Section 1: Our Philosophy */}
                    <div className="w-[90%] mx-auto">
                        <div className="mb-10 grid md:grid-cols-2 gap-10 items-center">
                            <img
                                src={Philosophy}
                                alt="Transforming students"
                                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                            />
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 tracking-tight font-serif">
                                    Our Philosophy
                                </h2>
                                <p className="text-gray-700 font-semibold text-base md:text-lg leading-relaxed font-light">
                                    At Kingdom EdTech, we believe real education should not be confined to classrooms. It should be experiential, inspiring, and life-changing. <br /><br />
                                    We focus on developing students holistically — helping them grow not only academically but also emotionally, professionally, and ethically.
                                </p>
                            </div>
                        </div>

                        {/* Section 2: Kingdom’s Unique Platform */}
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            {/* Text First */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-serif tracking-tight">
                                    A Platform With a Difference
                                </h2>
                                <p className="text-gray-700 font-semibold text-base md:text-lg leading-relaxed font-light">
                                    Kingdom EdTech isn't just about digital courses. We mentor students, support them emotionally,
                                    and help them identify strengths and passions.<br /><br />
                                    Our content, community, and coaching are crafted to spark transformation — inside and outside the classroom.
                                </p>
                            </div>

                            {/* Image Second */}
                            <img
                                src={Philosophy}
                                alt="Learning with clarity"
                                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                            />
                        </div>

                        {/* Section 3: Value Highlights */}
                        <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 p-10 rounded-2xl shadow-xl border-l-4 border-blue-600 w-full md:w-2/3 lg:w-1/2 mx-auto mb-20">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-6 font-serif tracking-tight text-center">
                                What We Truly Stand For
                            </h2>
                            <ul className="space-y-4 text-blue-800 text-lg font-medium leading-relaxed list-disc list-inside">
                                <li><span className="font-semibold">We don’t just teach</span> — we inspire learning.</li>
                                <li><span className="font-semibold">We don’t just train for exams</span> — we prepare for life.</li>
                                <li><span className="font-semibold">We don’t just provide courses</span> — we show career paths with clarity and purpose.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Additional Modular Sections */}
                    <MissionVision />
                    <IntroSection />
                    <FounderMessage />

                </div>
            </section>
        </>
    );
}
