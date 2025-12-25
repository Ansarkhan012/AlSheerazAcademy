import About from "@/components/About";
import CTA from "@/components/CTA";
import { BookOpen, Heart, Star, Users, GraduationCap } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <>
     
      <section
        style={{
          backgroundImage: "url('/images/1st.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative py-24 px-4 text-white"
      >
        <div className="absolute  inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
            <GraduationCap className="w-6 h-6 text-green-300" />
            <span className="text-base font-semibold tracking-wide">
              Path of Knowledge
            </span>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="text-green-500">Al Sheeraz Islamic School</span>
            </h1>
            <div className="text-3xl font-arabic text-green-200 mb-2">
              مدرسة الشيراز الإسلامية
            </div>
          </div>
          <p className="text-sm md:text-md text-gray-200 mb-8">
            Guided by the principles of the Quran and Sunnah, we nurture future leaders 
            with strong Islamic identity, academic excellence, and moral integrity.
          </p>
        </div>

        {/* Decorative Islamic Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-900/20 to-transparent"></div>
      </section>

      
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-xl">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To provide comprehensive Islamic education that combines authentic Quranic 
                teachings with modern academic excellence, nurturing students who embody 
                Islamic values and contribute positively to society.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
                <p className="text-green-800 italic">
                  "Read in the name of your Lord who created" <br />
                  <span className="text-sm text-green-600">- Quran 96:1</span>
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To be a leading Islamic educational institution recognized for developing 
                morally upright, intellectually capable, and spiritually grounded Muslims 
                who serve as beacons of light in their communities.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
                <p className="text-green-800 italic">
                  "And say: My Lord! Increase me in knowledge" <br />
                  <span className="text-sm text-green-600">- Quran 20:114</span>
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Core Islamic Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our educational approach is built upon these foundational principles
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "Quranic Excellence",
                  desc: "Tajweed, Hifz, and Tafseer programs"
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Ihsan & Character",
                  desc: "Building Akhlaq and Islamic manners"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Community Service",
                  desc: "Serving society with compassion"
                },
                {
                  icon: <GraduationCap className="w-6 h-6" />,
                  title: "Academic Excellence",
                  desc: "Modern education integrated with faith"
                },
                {
                  icon: <GraduationCap className="w-6 h-6" />,
                  title: "Spiritual Growth",
                  desc: "Daily prayers and spiritual guidance"
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: "Leadership",
                  desc: "Developing future Muslim leaders"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-green-50 rounded-lg text-green-600">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* History & Legacy */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Legacy</h2>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Founded with a vision to preserve Islamic heritage while embracing 
                  contemporary education, Al Sheeraz Islamic School has been serving 
                  the Muslim community for over two decades.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our institution follows the authentic teachings of Islam as derived 
                  from the Quran and Sunnah, providing a balanced education that prepares 
                  students for both worldly success and spiritual fulfillment.
                </p>
                <div className="bg-white p-6 rounded-xl mt-8 border-l-4 border-green-500">
                  <p className="text-gray-800 italic text-center">
                    "The best among you are those who learn the Quran and teach it"
                    <br />
                    <span className="text-green-600 text-sm">- Prophet Muhammad (SAW)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 mb-10 bg-gradient-to-br from-green-900 to-green-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-green-200 max-w-2xl mx-auto">
              Dedicated to nurturing the next generation of Muslim leaders
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Years of Service" },
              { number: "500+", label: "Students Enrolled" },
              { number: "50+", label: "Quran Huffaz" },
              { number: "30+", label: "Qualified Teachers" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-green-300 mb-2">{stat.number}</div>
                <div className="text-green-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}