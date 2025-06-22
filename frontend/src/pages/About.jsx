import FounderMessage from "./About/FounderMessage";
import IntroSection from "./About/IntroSection";
import MissionVision from "./About/MissionVision";
import Philosophy from '/Phil.jpg'

export default function About() {
    return (
        <>
            <section className="p-8 ">
                <div className="w-full py-20 mx-auto   ">

                    {/* Hero Heading */}
                    <div className="text-center mb-16 bg-gradient-to-r from-blue-50 to-yellow-50 py-20">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                            More Than Education — A Purpose-Driven Mission
                        </h1>
                        <p className="mt-4 font-semibold text-lg text-gray-600 max-w-3xl mx-auto">
                            Kingdom EdTech is not just an education platform. It's a movement to transform students into professionals — with vision, clarity, and purpose.
                        </p>
                    </div>

                    {/* Section 1: Our Philosophy */}
                    <div className="mb-16 grid md:grid-cols-2 gap-10 items-center px-4 md:px-10">
                        {/* Image on left for larger screens */}
                        <img
                            src={Philosophy}
                            alt="Transforming students"
                            className="w-full h-auto rounded-2xl shadow-xl object-cover"
                        />

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 tracking-tight font-serif">
                                Our Philosophy
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-light">
                                At Kingdom EdTech, we believe real education should not be confined to classrooms.
                                It should be experiential, inspiring, and life-changing. <br /><br />
                                We focus on developing students holistically — helping them grow not only academically
                                but also emotionally, professionally, and ethically.
                            </p>
                        </div>
                    </div>


                    {/* Section 1: Mission Values Highlighted */}
                    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 p-10 rounded-2xl shadow-xl mb-16 border-l-4 border-blue-600">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-6 font-serif tracking-tight">
                            What We Truly Stand For
                        </h2>
                        <ul className="space-y-4 text-blue-800 text-lg font-medium leading-relaxed">
                            <li>✅ <span className="font-semibold">We don’t just teach</span> — we inspire learning.</li>
                            <li>✅ <span className="font-semibold">We don’t just train for exams</span> — we prepare for life.</li>
                            <li>✅ <span className="font-semibold">We don’t just provide courses</span> — we show career paths with clarity and purpose.</li>
                        </ul>
                    </div>

                    {/* Section 2: Kingdom’s Unique Platform */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16 px-4 md:px-0">
                        
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold text-blue-800 mb-4 font-serif tracking-tight">
                                A Platform With a Difference
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed font-light">
                                Kingdom EdTech isn't just about digital courses. We mentor students, support them emotionally,
                                and help them identify strengths and passions.<br /><br />
                                Our content, community, and coaching are crafted to spark transformation — inside and outside the classroom.
                            </p>
                        </div>
                        <img
                            src={Philosophy}
                            alt="Learning with clarity"
                            className="rounded-2xl shadow-xl order-2 md:order-1"
                        />
                    </div>
                </div>
                <MissionVision />
                <IntroSection />
                <FounderMessage />
            </section>
        </>
    );
}

