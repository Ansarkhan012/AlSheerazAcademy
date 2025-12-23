import Link from 'next/link'
import React from 'react'

export default function CTA() {
  return (
    <section className="bg-gradient-to-r my-11 from-green-800 to-green-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Ready to Start Your Quran Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students learning Quran with Al Sheeraz Islamic Academy
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href={"/contact"} className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition">
              Enroll Now - Free Trial
            </Link>
            <Link href={"/contact"} className="bg-transparent border-2 border-white text-white hover:bg-green-700 font-semibold px-4 md:px-8 py-3 rounded-lg transition">
              Contact for Custom Plan
            </Link>
          </div>
        </div>
      </section>
      
  )
}
