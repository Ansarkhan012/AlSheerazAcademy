import React from 'react'

export default function Free() {
  return (
    <section
  className="relative w-full py-20"
  style={{
    backgroundImage: "url('/images/pattern.png')",
    
  }}
>
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

   
    <div className="flex justify-center">
      <img
        src="/images/2nd.jpg"
        alt="Quran Book"
        className="w-full max-w-md "
      />
    </div>

    
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
        TRY FOR{" "}
        <span className="text-green-800">FREE ONLINE QURAN</span>{" "}
        CLASSES
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-xl">
        Complete the form to experience our FREE Trial classes and learn the
        Quran online. Qaf Quran Academy provides up to Three Days of
        complimentary trials. Enroll with us today.
      </p>

      <h2 className="text-3xl font-bold text-green-700 mb-8">
        3 Days Free Trial
      </h2>

      <button className="bg-green-700 hover:bg-green-800 transition text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
        Book Free Trial Now
      </button>
    </div>

  </div>
</section>

  )
}
