"use client";

import { useState } from "react";
import { CheckCircle, Gift, Shield, Users, Clock, BookOpen, CreditCard } from "lucide-react";
import Pricing from "@/components/pricing";

const FeesPage = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  

  const paymentMethods = [
    { name: "Bank Transfer", icon: "🏦", description: "Direct bank deposit" },
    { name: "EasyPaisa", icon: "📱", description: "Instant mobile payment" },
    { name: "JazzCash", icon: "💳", description: "Mobile wallet" },
    { name: "PayPal", icon: "🌐", description: "International payments" }
  ];

  const scholarshipOptions = [
    "Orphan sponsorship available",
    "Financial aid for deserving students",
    "Partial scholarships",
    "Sibling discounts"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      
      <section style={{
    backgroundImage: "url('/images/1st.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
       className="relative overflow-hidden bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-16 px-4">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 border-2 border-white rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-white rounded-full -translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Gift className="w-5 h-5" />
            <span className="text-sm font-medium">Educational Fee Structure</span>
          </div>
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
            Quran Learning Fee Plan
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Transparent pricing for authentic Quranic education. Every penny supports our mission of spreading Quranic knowledge.
          </p>
         
        </div>
      </section>

     
      

      
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          
          <Pricing />
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Payment Methods
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h4 className="font-bold text-lg mb-2">{method.name}</h4>
              <p className="text-gray-600 text-sm">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <CreditCard className="w-6 h-6" />
            How to Pay
          </h3>
          <ol className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
              Select your desired course and payment plan
            </li>
            <li className="flex items-start">
              <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
              Complete the enrollment form
            </li>
            <li className="flex items-start">
              <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
              Choose your preferred payment method
            </li>
            <li className="flex items-start">
              <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
              Submit payment and receive confirmation within 24 hours
            </li>
          </ol>
        </div>
      </section>

     

      
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-2">Can I change my plan later?</h4>
            <p className="text-gray-700">Yes, you can upgrade or downgrade your plan anytime. The changes will be effective from the next billing cycle.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-2">What is included in the fee?</h4>
            <p className="text-gray-700">The fee includes one-on-one classes with qualified teachers, learning materials, progress reports, and continuous support.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-2">Is there a trial period?</h4>
            <p className="text-gray-700">Yes, we offer a 3-day free trial for all new students to experience our teaching methodology.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-2">What if I need to pause my classes?</h4>
            <p className="text-gray-700">You can pause your classes for up to 2 weeks with prior notice. Longer breaks may require special arrangements.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Quran Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students learning Quran with Al Sheeraz Islamic Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition">
              Enroll Now - Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition">
              Contact for Custom Plan
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeesPage;