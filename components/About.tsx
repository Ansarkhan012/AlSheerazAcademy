export default function About() {
  return (
    <section id="about" className="py-16 bg-white h-125 md:h-125">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
         
          
            
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-6">ABOUT US</h2>
            
  
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                Our Mission to Spread <span className="text-green-600">Quranic Knowledge</span>
              </h3>
              <p className="text-gray-700 mb-4">
                At Quran Institute, we are dedicated to providing high-quality Quran education to students of all ages and backgrounds. Our mission is to make Quran learning accessible, engaging, and effective for everyone, regardless of their location.
              </p>
              <p className="text-gray-700 mb-6">
                With certified teachers and a structured curriculum, we help students develop a deep connection with the Quran, improving their recitation, understanding, and application of its teachings in daily life.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-800">Certified Teachers</h4>
                    <p className="text-gray-600">All our instructors are certified with Ijazah in Quran recitation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-800">Flexible Schedule</h4>
                    <p className="text-gray-600">Classes available 24/7 to accommodate your busy lifestyle.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-800">Interactive Learning</h4>
                    <p className="text-gray-600">Engaging one-on-one sessions with interactive tools and materials.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              
              <div 
               className="bg-green-700 rounded-2xl p-8 shadow-2xl transform rotate-3"
               style={{
                backgroundImage: "url('/images/pattern.png')",
                
               
              }}>
                <div className="bg-white rounded-xl p-6 shadow-lg transform -rotate-3">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16  rounded-full mb-4">
                      <span className="text-3xl text-green-700 font-arabic">﷽</span>
                    </div>
                    <h4 className="text-2xl font-bold text-primary-900">Learn Quran Online</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                      <span className="font-medium text-primary-800">Students Worldwide</span>
                      <span className="font-bold text-green-600">2,500+</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                      <span className="font-medium text-primary-800">Certified Teachers</span>
                      <span className="font-bold text-green-600">50+</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                      <span className="font-medium text-primary-800">Satisfaction Rate</span>
                      <span className="font-bold text-green-600">98%</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                      <span className="font-medium text-primary-800">Countries</span>
                      <span className="font-bold text-green-600">40+</span>
                    </div>
                  </div>
                </div>
              </div>
              
             
              {/* <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/10 rounded-full"></div> */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}