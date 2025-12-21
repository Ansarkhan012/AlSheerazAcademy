export default function Courses() {
  const courses = [
    {
      title: 'Quran Recitation',
      description: 'Learn proper Tajweed rules and correct pronunciation of Arabic letters.',
      icon: '﷽',
      color: 'from-primary-500 to-primary-600',
    },
    {
      title: 'Quran Memorization',
      description: 'Structured Hifz program with personalized memorization plans.',
      icon: '📖',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Quran Translation',
      description: 'Understand the meaning of Quranic verses with detailed explanations.',
      icon: '🔍',
      color: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Islamic Studies',
      description: 'Learn basics of Islam, Seerah, Fiqh, and Islamic history.',
      icon: '🕌',
      color: 'from-gold-500 to-amber-600',
    },
  ];

  return (
    <section id="courses" className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-900 mb-4"><span className="text-green-800">Al Sheeraz</span> Offers Many Courses <br /> to Learn the Quran Online</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Quran learning programs for children and adults
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} style={{
              backgroundImage: `url('/images/pattern.png')`
            }} className="bg-green-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br ${course.color} text-white text-2xl`}>
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-100 mb-3">{course.title}</h3>
                <p className="text-gray-100 mb-6">{course.description}</p>
                <a href="#" className="text-green-100 font-semibold hover:text-primary-800 flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}