import React from 'react'

export default function () {
  return (
    <section className="my-24  py-4">
  <div className="max-w-7xl mx-auto px-5 text-center">
    
    
    <h2 className="text-2xl md:text-4xl font-bold mb-10">
      Guidance & <span className='text-green-600'>Reflections</span>
    </h2>

    {/* Boxes */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Box 1 */}
      <div className="bg-white p-2 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col items-center">
        <img
          src="/images/spiritual.jpg"
          alt="Personal Guidance"
          className="w-full h-52 rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Personal Guidance</h3>
        <p className="text-gray-600 leading-relaxed text-center">
          Our teachers provide one-on-one guidance to ensure each student 
          learns at their own pace with proper Tajweed and understanding.
        </p>
      </div>

 
      <div className="bg-white p-2 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col items-center">
        <img
          src="/images/personal.jpg"
          alt="Spiritual Reflections"
          className="w-full h-52 rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Spiritual Reflections</h3>
        <p className="text-gray-600 leading-relaxed text-center">
          Students are encouraged to reflect on Quranic verses and apply 
          the teachings in daily life for spiritual growth.
        </p>
      </div>

      
      <div className="bg-white p-2 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col items-center">
        <img
          src="/images/structured.png"
          alt="Structured Learning"
          className="w-full h-52 rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-4">Structured Learning</h3>
        <p className="text-gray-600 leading-relaxed text-center">
          Our structured curriculum ensures a smooth learning journey 
          from beginner to advanced levels, covering recitation, memorization, 
          and comprehension.
        </p>
      </div>

    </div>
  </div>
</section>
  )
}
