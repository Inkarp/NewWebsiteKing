import React from 'react';
import { FaBookOpen, FaHeart, FaUserGraduate, FaLightbulb, FaRocket, FaHandsHelping, FaUserShield, FaBrain } from 'react-icons/fa';

const reasons = [
    {
        icon: <FaBookOpen className="text-3xl text-blue-600" />,
        title: "Purpose-Driven Education",
        description: "We don’t just teach skills – we ignite passion, purpose, and direction in every learner."
    },
    {
        icon: <FaHeart className="text-3xl text-pink-500" />,
        title: "Life + Skill Training",
        description: "We blend emotional strength, mental wellness, and practical learning for holistic growth."
    },
    {
        icon: <FaUserGraduate className="text-3xl text-yellow-500" />,
        title: "Student-Centric Approach",
        description: "Each student is seen as a seed of greatness – we nourish potential with care and mentorship."
    },
    {
        icon: <FaLightbulb className="text-3xl text-green-600" />,
        title: "Innovative Learning Models",
        description: "Interactive courses, real-world application, and personalized career paths make us unique."
    }
];

const steps = [
    {
        title: "Step 1: Discover",
        description: "Students identify their strengths, purpose, and interests through guided mentorship."
    },
    {
        title: "Step 2: Learn",
        description: "Skill-based training in areas like digital marketing, IT, design, wellness, and more."
    },
    {
        title: "Step 3: Grow",
        description: "Life skills, emotional strength, and personal development integrated into every course."
    },
    {
        title: "Step 4: Believe & Lead",
        description: "Confidence, clarity, and real-world readiness built through faith and practical wisdom."
    }
];

const points = [
    {
        icon: <FaRocket className="text-4xl text-blue-600 mb-4" />,
        title: "Launch With Purpose",
        description: "We focus on career clarity, not just certificates. Each course is a stepping stone to your calling."
    },
    {
        icon: <FaHandsHelping className="text-4xl text-green-600 mb-4" />,
        title: "Mentorship That Cares",
        description: "We guide, support, and walk with our learners — academically, emotionally, and spiritually."
    },
    {
        icon: <FaUserShield className="text-4xl text-purple-600 mb-4" />,
        title: "Safe Space to Grow",
        description: "Inclusive, value-based education with faith and integrity at the core of every lesson."
    },
    {
        icon: <FaBrain className="text-4xl text-yellow-500 mb-4" />,
        title: "Skill + Wisdom Blend",
        description: "We teach real-world skills with life insight, helping students make wise decisions with confidence."
    }
];

export default function WhyChooseUs() {
    return (
        <>
            <section className=" py-16 px-6 md:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Choose Kingdom EdTech?</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        We’re not here to compete. We’re here to complete what traditional systems left behind — real education for real life.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 hover:shadow-lg p-6 rounded-lg text-center border border-gray-100 transition-all"
                        >
                            <div className="mb-4">{reason.icon}</div>
                            <h3 className="text-lg font-semibold text-blue-800 mb-2">{reason.title}</h3>
                            <p className="text-gray-600 text-sm">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
};


