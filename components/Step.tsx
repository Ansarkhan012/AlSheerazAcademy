import { Book, BookOpenCheck, Laptop } from 'lucide-react'
import React from 'react'

export default function Step() {
  return (
    <section className="my-10 bg-white">
  <div className="max-w-7xl mx-auto px-5">
    
    <h1 className="text-center text-4xl font-bold mb-14">
      <span className='text-green-800'>Learn Quran Online</span> with Tajweed
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

  
  <div className="text-center p-6 rounded-xl border">
    <span className="block mb-2 text-green-700 text-2xl font-bold">
      Step 1
    </span>

    <BookOpenCheck className="w-10 h-10 mx-auto mb-4 text-green-600" />

    <h2 className="text-xl font-semibold mb-3">
      Choose Your Course
    </h2>
    <p className="text-gray-600 leading-relaxed">
      Select a Quran learning plan that suits your level and schedule.
    </p>
  </div>

 
  <div className="text-center p-6 rounded-xl border">
    <span className="block mb-2 text-green-700 text-2xl font-bold">
      Step 2
    </span>

    <Book className="w-10 h-10 mx-auto mb-4 text-green-600" />

    <h2 className="text-xl font-semibold mb-3">
      Book Free Trial
    </h2>
    <p className="text-gray-600 leading-relaxed">
      Get a free trial class with our qualified male or female teachers.
    </p>
  </div>

  
  <div className="text-center p-6 rounded-xl border">
    <span className="block mb-2 text-green-700 text-2xl font-bold">
      Step 3
    </span>

    <Laptop className="w-10 h-10 mx-auto mb-4 text-green-600" />

    <h2 className="text-xl font-semibold mb-3">
      Start Learning
    </h2>
    <p className="text-gray-600 leading-relaxed">
      Begin your Quran journey with live online classes from home.
    </p>
  </div>

</div>

  </div>
</section>
  )
}
