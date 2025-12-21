'use client';

import { useState } from 'react';
import { Phone, Mail, User, MessageSquare, Smartphone, Globe, Send } from 'lucide-react';

type FormData = {
  name: string;
  mobile: string;
  email: string;
  country: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    country: 'USA',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
          Get in touch with us for admission inquiries or any questions about our courses
        </p>
      </div>

      {/* Contact Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* LEFT — FORM */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="absolute inset-0  bg-green-900 "
                style={{
                  backgroundImage: "url('/images/pattern.png')",
                  
                  opacity: 0.95
                }}
              />
              
              <div className="relative p-8 md:p-10 text-white">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-3">
                    Quick Admission Form
                  </h2>
                  <p className="text-green-100 opacity-90">
                    Fill out the form and we'll contact you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-5">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-white/95 rounded-xl text-gray-800 placeholder-gray-500 
                                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                                 transition-all duration-200"
                      />
                    </div>

                    <div className="relative">
                      <Smartphone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        name="mobile"
                        placeholder="Mobile Number"
                        value={form.mobile}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-white/95 rounded-xl text-gray-800 placeholder-gray-500 
                                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                                 transition-all duration-200"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-white/95 rounded-xl text-gray-800 placeholder-gray-500 
                                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                                 transition-all duration-200"
                      />
                    </div>

                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 z-10" />
                      <select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-white/95 rounded-xl text-gray-800 
                                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                                 appearance-none cursor-pointer transition-all duration-200"
                      >
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="UK">United Kingdom</option>
                        <option value="USA">United States</option>
                        <option value="Canada">Canada</option>
                      </select>
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                      <textarea
                        name="message"
                        placeholder="Your message or questions..."
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-white/95 rounded-xl text-gray-800 placeholder-gray-500 
                                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                                 resize-none transition-all duration-200"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-4 rounded-xl 
                               font-semibold hover:from-black hover:to-gray-900 hover:shadow-xl 
                               active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

           
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="absolute inset-0 bg-[#847645]"
                style={{
                  backgroundImage: "url('/images/pattern.png')",
                 
                }}
              />
              
              <div className="relative p-8 md:p-10">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-100 mb-3">
                    More Ways to Reach Us
                  </h2>
                  <p className="text-[#d1bd74]">
                    We're available through multiple channels for your convenience
                  </p>
                </div>

                <div className="mb-10 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/images/3rd.jpg"
                    alt="Quran Learning Environment at AL Sheeraz Islamic School"
                    className="w-full h-64 md:h-72 object-cover"
                  />
                </div>

                <div className="space-y-4">
  {/* Phone */}
  <div className="flex items-center gap-3">
    <Phone className="w-6 h-6 text-[#d1bd74]" />
    <div>
      
      <a href="tel:+923705875100" className="text-sm text-gray-100">
        +92 370 5875100
      </a>
    </div>
  </div>

  
  <div className="flex items-center gap-3">
    <Phone className="w-6 h-6 text-[#d1bd74]" />
    <div>
      
      <a 
        href="https://wa.me/923705875100"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm  text-gray-100"
      >
        +92 370 5875100
      </a>
      
    </div>
  </div>

  
  <div className="flex items-center gap-3">
    <Mail className="w-6 h-6 text-[#d1bd74]" />
    <div>
      
      <a 
        href="mailto:info.mahadulashraf@gmail.com"
        className="text-sm text-gray-100 break-all"
      >
        info.alsheeraz@gmail.com
      </a>
      
    </div>
  </div>
</div>


                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
        <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Find Our Location
          </h3>
          <div className="h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <p className="text-gray-700 font-medium">
                Location details to be added here
              </p>
              <p className="text-gray-500 text-sm mt-2">
                We'll provide exact address upon request
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}