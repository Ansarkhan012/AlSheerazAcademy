import { BookOpenCheck, Clock, GraduationCap, HeartHandshake, ShieldCheck, Users } from 'lucide-react'
import React from 'react'

export default function WhyChoose() {
  return (
    <section className="relative py-24 bg-[#f0f8ef]">
  <div className="max-w-7xl mx-auto px-6">

    
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
        Why Choose{" "}
        <span className="text-green-700">Al-Sheeraz Islamic School</span>
      </h2>
      <p className="text-gray-600 text-lg">
        Building strong Islamic values with modern education for a brighter
        future.
      </p>
    </div>

    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div style={{
        backgroundImage: `url('images/pattern.png')`
      }} className="bg-white rounded-3xl p-8 text-center border-2 border-green-800">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
          <BookOpenCheck className="w-8 h-8 text-green-700" />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Quran & Islamic Studies
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Complete Quran learning with Tajweed, Islamic manners, and character
          building.
        </p>
      </div>

      {/* CARD 2 */}
      <div style={{
        backgroundImage: `url('images/pattern.png')`
      }} className="bg-white rounded-3xl p-8 text-center border-2 border-green-800">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
          <GraduationCap className="w-8 h-8 text-green-700" />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Modern Education System
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Balanced curriculum including Maths, Science, English and Computer
          studies.
        </p>
      </div>

      {/* CARD 3 */}
      <div style={{
        backgroundImage: `url('images/pattern.png')`
      }} className="bg-white rounded-3xl p-8 text-center border-2 border-green-800">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
          <Users className="w-8 h-8 text-green-700" />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Qualified Male & Female Teachers
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Experienced and caring teachers ensuring Islamic values and academic
          excellence.
        </p>
      </div>

      {/* CARD 4 */}
      <div style={{
        backgroundImage: `url('images/pattern.png')`
      }} className="bg-white rounded-3xl p-8 text-center border-2 border-green-800">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
          <ShieldCheck className="w-8 h-8 text-green-700" />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Safe & Islamic Environment
        </h3>
        <p className="text-gray-600 leading-relaxed">
          A peaceful, respectful, and faith-centered learning environment for
          students.
        </p>
      </div>

      {/* CARD 5 */}
      <div style={{
        backgroundImage: `url('images/pattern.png')`
      }} className="bg-white rounded-3xl p-8 text-center border-2 border-green-800">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
          <Clock className="w-8 h-8 text-green-700" />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Flexible Timings
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Convenient schedules designed to fit parents and students routines.
        </p>
      </div>

      {/* CARD 6 */}
      <div style={{
        backgroundImage: `url('images/pattern.png')`
      }} className="bg-white rounded-3xl p-8 text-center border-2 border-green-800">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
          <HeartHandshake className="w-8 h-8 text-green-700" />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Personal Attention
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Small class sizes ensuring individual focus and progress monitoring.
        </p>
      </div>

    </div>
  </div>
</section>

  )
}
