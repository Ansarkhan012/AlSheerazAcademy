'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'COURSES', href: '/courses' },
    { name: 'FEES', href: '/fees' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'FREE TRIAL', href: '/contact', highlight: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
  
      <div 
        className="bg-green-700 text-white py-3"
        style={{
          backgroundImage: "url('/images/pattern.png')",
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-row justify-between items-center space-y-1 md:space-y-0">
           
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-green-300" />
              <a 
                href="mailto:alsheerazislamicschool@gmail.com" 
                className="text-[10px] md:text-sm hover:text-green-200 transition-colors duration-200"
              >
                alsheerazislamicschool@gmail.com
              </a>
            </div>
            
           
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-green-300" />
              <span className="text-[10px] md:text-sm font-medium">+92 349 9624807</span>
            </div>
          </div>
        </div>
      </div>

     
      <div className="bg-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="">
                <img src="/images/logo.png" className='w-12' alt="" />
              </div>
              <div>
                <h1 className="text-md md:text-2xl font-bold bg-green-700 bg-clip-text text-transparent">
                  AL-Sheeraz
                </h1>
                <p className="text-xs text-gray-600 font-medium">Islamic School</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300
                    ${item.highlight
                      ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md hover:shadow-lg hover:scale-105'
                      : 'text-gray-800 hover:text-green-700 '
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-2 animate-slideDown">
              <div className="flex flex-col space-y-2 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`
                      px-4 py-3.5 rounded-lg font-medium text-sm transition-all
                      ${item.highlight
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-sm'
                        : 'text-gray-800 hover:bg-green-50 hover:text-green-700'
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}