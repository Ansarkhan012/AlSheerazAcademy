import Pricing from "@/components/pricing";
import {
  BookOpen,
  GraduationCap,
  Landmark,
  Award,
  Baby,
  Clock,
  User,
  Users,
  Target,
  BarChart3,
  Sparkles,
} from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "Quran Recitation (Nazra)",
      description: "Learn proper recitation with Tajweed rules from qualified Qaris",
      icon: BookOpen,
      duration: "6-12 months",
      level: "All Levels",
      age: "5+ years",
      features: [
        "Basic Arabic Alphabet & Pronunciation",
        "Tajweed Rules Application",
        "Correct Makharij",
        "Fluency in Recitation",
        "Weekly Revision Sessions",
      ],
      curriculum: ["Qaida Course", "Tajweed Rules", "Practice Sessions", "Recitation Tests"],
    },
    {
      title: "Quran Memorization (Hifz)",
      description: "Complete Hifz program with structured revision system",
      icon: GraduationCap,
      duration: "2-3 years",
      level: "Intermediate",
      age: "7+ years",
      features: [
        "Personalized Memorization Plan",
        "Daily Sabaq & Revision",
        "Memorization Techniques",
        "Revision Schedule",
        "Completion Certificate",
      ],
      curriculum: ["Juz Selection", "Daily Memorization", "Revision System", "Final Test"],
    },
    {
      title: "Islamic Studies",
      description: "Learn Aqeedah, Fiqh, Seerah & Islamic ethics",
      icon: Landmark,
      duration: "1 year",
      level: "All Levels",
      age: "6+ years",
      features: [
        "Basic Aqeedah",
        "Fiqh of Worship",
        "Seerah of Prophet ﷺ",
        "Islamic History",
        "Moral Training",
      ],
      curriculum: ["Aqeedah", "Fiqh", "Seerah", "Ethics"],
    },
    {
      title: "Tajweed Certification",
      description: "Advanced Tajweed course with Ijazah certification",
      icon: Award,
      duration: "6-9 months",
      level: "Advanced",
      age: "15+ years",
      features: [
        "Advanced Tajweed Rules",
        "Recitation Correction",
        "Teaching Methodology",
        "Practical Sessions",
        "Ijazah Certificate",
      ],
      curriculum: ["Theory", "Practice", "Correction", "Certification"],
    },
    {
      title: "Kids Quran Program",
      description: "Fun & engaging Quran learning for kids",
      icon: Baby,
      duration: "Flexible",
      level: "Beginner",
      age: "4-10 years",
      features: [
        "Interactive Lessons",
        "Quranic Stories",
        "Islamic Manners",
        "Prayer Learning",
        "Fun Activities",
      ],
      curriculum: ["Qaida", "Short Surahs", "Duas", "Stories"],
    },
  ];

  const learningFeatures = [
    {
      title: "Qualified Teachers",
      description: "Certified Alim & Alimah instructors",
      icon: Users,
    },
    {
      title: "One-on-One Sessions",
      description: "Individual attention for every student",
      icon: Target,
    },
    {
      title: "Flexible Timings",
      description: "24/7 classes according to your timezone",
      icon: Clock,
    },
    {
      title: "Progress Tracking",
      description: "Monthly performance reports",
      icon: BarChart3,
    },
    {
      title: "Female Teachers",
      description: "Separate female teachers available",
      icon: User,
    },
    {
      title: "Free Trial Classes",
      description: "3 days free trial available",
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section
        className="relative py-24 text-white"
        style={{
          backgroundImage: "url('/images/1st.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Master the Quran with <span className="text-green-400">Expert Guidance</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Structured online Quran courses for all ages, taught by qualified scholars.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
              Start Free Trial
            </button>
            <button className="border border-white px-8 py-3 rounded-lg hover:bg-white/10">
              Book Assessment
            </button>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <course.icon className="w-6 h-6 text-green-700" />
                </div>
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>

              <ul className="space-y-2 mb-6">
                {course.features.slice(0, 3).map((f, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="text-right">
                <button className="text-green-700 font-semibold hover:underline">
                  View Details →
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Al Sheeraz?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningFeatures.map((f, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 hover:border-green-400 transition"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <Pricing />

      {/* CTA */}
      <section className="bg-green-700 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Quran Learning Journey Today
        </h2>
        <p className="mb-8 opacity-90">
          Join thousands of students learning Quran online worldwide
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold">
            Enroll Now
          </button>
          <button className="border border-white px-8 py-3 rounded-lg">
            Contact Admissions
          </button>
        </div>
      </section>
    </div>
  );
}
