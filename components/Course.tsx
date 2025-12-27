'use client';

import Link from "next/link";
import { Book, BookOpen, Search, BookAudio } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: 'Quran Recitation',
      description: 'Learn proper Tajweed rules and correct pronunciation.',
      icon: BookOpen, // Lucide icon
    },
    {
      title: 'Quran Memorization',
      description: 'Structured Hifz program with personalized plans.',
      icon: Book,
    },
    {
      title: 'Quran Translation',
      description: 'Understand the meaning of Quranic verses.',
      icon: Search,
    },
    {
      title: 'Islamic Studies',
      description: 'Learn basics of Islam, Seerah, Fiqh, and history.',
      icon: BookAudio,
    },
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Quran Learning Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed for all ages and levels
          </p>
        </div>
        
        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 text-green-600">
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <Link
                  href="/courses" 
                  className="text-green-700 font-medium hover:text-green-800 inline-flex items-center"
                >
                  Learn more
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            )
          })}
        </div>
        
        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors duration-300"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
