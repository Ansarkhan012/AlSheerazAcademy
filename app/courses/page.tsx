import Pricing from "@/components/pricing";

export default function Courses() {
  const courses = [
    {
      title: 'Quran Recitation (Nazra)',
      description: 'Learn proper recitation with Tajweed rules from qualified Qaris',
      icon: '﷽',
      duration: '6-12 months',
      level: 'All Levels',
      age: '5+ years',
      features: [
        'Basic Arabic Alphabet & Pronunciation',
        'Tajweed Rules Application',
        'Correct Makharij (Articulation Points)',
        'Fluency in Recitation',
        'Weekly Revision Sessions'
      ],
      curriculum: ['Qaida Course', 'Tajweed Rules', 'Practice Sessions', 'Recitation Tests']
    },
    {
      title: 'Quran Memorization (Hifz)',
      description: 'Complete Hifz program with revision system and memorization techniques',
      icon: '📖',
      duration: '2-3 years',
      level: 'Intermediate',
      age: '7+ years',
      features: [
        'Personalized Memorization Plan',
        'Daily Sabaq & Para Revision',
        'Memorization Techniques',
        'Revision Schedule',
        'Hifz Completion Certificate'
      ],
      curriculum: ['Juz Selection', 'Daily Memorization', 'Revision System', 'Completion Tests']
    },
    
    {
      title: 'Islamic Studies',
      description: 'Comprehensive knowledge of Islamic fundamentals and daily practices',
      icon: '🕌',
      duration: '1 year',
      level: 'All Levels',
      age: '6+ years',
      features: [
        'Basic Aqeedah (Beliefs)',
        'Fiqh of Daily Worship',
        'Seerah of Prophet Muhammad (PBUH)',
        'Islamic History',
        'Moral & Ethical Training'
      ],
      curriculum: ['Aqeedah', 'Fiqh', 'Seerah', 'Islamic History', 'Ethics']
    },
    {
      title: 'Tajweed Certification',
      description: 'Professional Tajweed course with Ijazah certification',
      icon: '🎓',
      duration: '6-9 months',
      level: 'Advanced',
      age: '15+ years',
      features: [
        'Advanced Tajweed Rules',
        'Practical Application',
        'Recitation Correction',
        'Teaching Methodology',
        'Ijazah Certification'
      ],
      curriculum: ['Theory & Practice', 'Error Correction', 'Teaching Skills', 'Final Certification']
    },
    {
      title: 'Kids Quran Program',
      description: 'Fun and engaging Quran learning for young children',
      icon: '👶',
      duration: 'Flexible',
      level: 'Beginner',
      age: '4-10 years',
      features: [
        'Interactive Lessons',
        'Quranic Stories',
        'Islamic Manners',
        'Prayer Learning',
        'Fun Activities & Games'
      ],
      curriculum: ['Basic Qaida', 'Short Surahs', 'Islamic Stories', 'Dua Memorization']
    }
  ];

  const learningFeatures = [
    {
      title: 'Qualified Teachers',
      description: 'All teachers are Alim/Alimah graduates with Ijazah',
      icon: '👨‍🏫'
    },
    {
      title: 'One-on-One Sessions',
      description: 'Personalized attention with individual classes',
      icon: '🎯'
    },
    {
      title: 'Flexible Timings',
      description: '24/7 availability according to your timezone',
      icon: '⏰'
    },
    {
      title: 'Progress Tracking',
      description: 'Regular reports and assessment of student progress',
      icon: '📊'
    },
    {
      title: 'Female Teachers',
      description: 'Separate female teachers available for sisters & girls',
      icon: '👩‍🏫'
    },
    {
      title: 'Free Trial',
      description: 'Start with 3 free trial classes to experience',
      icon: '✨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section 
  style={{
    backgroundImage: "url('/images/1st.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="relative pt-24 pb-16"
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>
  
  {/* Gradient Overlay for better text readability */}
  
  <div className="relative z-10 container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Master the Quran with <span className="text-green-300">Expert Guidance</span>
      </h1>
      <p className="text-xl text-gray-200 mb-8">
        Comprehensive online Quran courses taught by qualified Islamic scholars. 
        Learn at your own pace from anywhere in the world.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105">
          Start Free Trial
        </button>
        <button className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300">
          Book Assessment
        </button>
      </div>
    </div>
  </div>
</section>

      {/* All Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Comprehensive Course Catalog
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our structured programs designed for every age and level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{course.icon}</div>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-sm">{course.age}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Course Features:</h4>
                    <ul className="space-y-2">
                      {course.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-green-700 font-semibold hover:text-green-800">
                      View Details →
                    </button>
                    <span className="text-lg font-bold text-green-700">$29<small className="text-gray-500 text-sm font-normal">/month</small></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Course Details Expanded */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Course Curriculum Details</h2>
            
            <div className="space-y-8">
              {courses.slice(0, 3).map((course, index) => (
                <div key={index} className="border-b border-gray-100 pb-8 last:border-0">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{course.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                      <p className="text-gray-600">{course.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Curriculum Modules:</h4>
                      <div className="space-y-3">
                        {course.curriculum.map((module, idx) => (
                          <div key={idx} className="flex items-center bg-gray-50 p-3 rounded-lg">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded mr-3">
                              Module {idx + 1}
                            </span>
                            <span className="text-gray-700">{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Learning Outcomes:</h4>
                      <ul className="space-y-3">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Al Sheeraz?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-colors duration-300">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

         
          <Pricing />

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What qualifications do your teachers have?', a: 'All our teachers are Alim/Alimah graduates with Ijazah certification and minimum 5 years teaching experience.' },
                { q: 'Can I change my schedule?', a: 'Yes, you can reschedule classes with 24 hours notice through our student portal.' },
                { q: 'Do you offer female teachers?', a: 'Yes, we have separate female teachers available for sisters and girls.' },
                { q: 'What technology do I need?', a: 'Just a smartphone or computer with internet connection. We use Zoom and our custom learning platform.' },
                { q: 'Is there a free trial?', a: 'Yes, we offer 3 free trial classes to help you evaluate our teaching methodology.' }
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-green-300 transition-colors duration-300">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Start Your Quran Learning Journey Today</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of students who have transformed their relationship with the Quran
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Enroll Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                Contact Admissions
              </button>
            </div>
            <p className="mt-6 text-sm opacity-80">
              Call us: +92 300 1234567 | Email: admissions@alsheeraz.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}