export default function Teachers() {
  const teachers = [
    {
      name: 'Sheikh Ahmed',
      expertise: 'Quran Recitation & Tajweed',
      experience: '15+ years',
      imageColor: 'bg-primary-100',
    },
    {
      name: 'Ustadha Fatima',
      expertise: 'Quran Memorization',
      experience: '10+ years',
      imageColor: 'bg-purple-100',
    },
    {
      name: 'Sheikh Yusuf',
      expertise: 'Quran Translation',
      experience: '12+ years',
      imageColor: 'bg-amber-100',
    },
    {
      name: 'Ustadha Aisha',
      expertise: 'Islamic Studies',
      experience: '8+ years',
      imageColor: 'bg-emerald-100',
    },
  ];

  return (
    <section id="teachers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Our Certified Teachers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced and qualified Quran teachers with Ijazah certification
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className={`h-48 ${teacher.imageColor} flex items-center justify-center`}>
                <div className="w-32 h-32 rounded-full bg-white/80 flex items-center justify-center">
                  <span className="text-4xl text-primary-700">👨‍🏫</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2">{teacher.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{teacher.expertise}</p>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Experience: {teacher.experience}</span>
                </div>
                <button className="w-full bg-primary-50 text-primary-700 font-semibold py-3 rounded-lg hover:bg-primary-100 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All our teachers are native Arabic speakers with certified Ijazah and extensive teaching experience.
          </p>
          <button className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Meet All Teachers
          </button>
        </div>
      </div>
    </section>
  );
}