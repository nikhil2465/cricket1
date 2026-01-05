'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string): string => {
    return pathname === path 
      ? 'border-yellow-500 text-gray-900' 
      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700';
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-yellow-600">
                Elite Cricket Academy
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-10">
              <Link 
                href="/" 
                className={`${isActive('/')} inline-flex items-center px-3 py-2 border-b-2 text-base font-medium`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`${isActive('/about')} inline-flex items-center px-3 py-2 border-b-2 text-base font-medium`}
              >
                About
              </Link>
              <Link 
                href="/programs" 
                className={`${isActive('/programs')} inline-flex items-center px-3 py-2 border-b-2 text-base font-medium`}
              >
                Programs
              </Link>
              <Link 
                href="/coaches" 
                className={`${isActive('/coaches')} inline-flex items-center px-3 py-2 border-b-2 text-base font-medium`}
              >
                Coaches
              </Link>
              <Link 
                href="/contact" 
                className={`${isActive('/contact')} inline-flex items-center px-3 py-2 border-b-2 text-base font-medium`}
              >
                Contact
              </Link>
              <Link 
                href="/facilities" 
                className={`${isActive('/facilities')} inline-flex items-center px-3 py-2 border-b-2 text-base font-medium`}
              >
                Facilities
              </Link>
              <Link 
                href="/achievements" 
                className={`${isActive('/achievements')} inline-flex items-center px-3 py-2 border-b-2 text-base font-medium`}
              >
                Achievements
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-6">
            <Link
              href="/login"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Register Now
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`${pathname === '/' ? 'bg-yellow-50 border-yellow-500 text-yellow-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${pathname === '/about' ? 'bg-yellow-50 border-yellow-500 text-yellow-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              About
            </Link>
            <Link
              href="/programs"
              className={`${pathname === '/programs' ? 'bg-yellow-50 border-yellow-500 text-yellow-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              Programs
            </Link>
            <Link
              href="/coaches"
              className={`${pathname === '/coaches' ? 'bg-yellow-50 border-yellow-500 text-yellow-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              Coaches
            </Link>
            <Link
              href="/contact"
              className={`${pathname === '/contact' ? 'bg-yellow-50 border-yellow-500 text-yellow-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              Contact
            </Link>
            <Link
              href="/facilities"
              className={`${isActive('/facilities')} border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              Facilities
            </Link>
            <Link
              href="/achievements"
              className={`${isActive('/achievements')} border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              Achievements
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 space-y-1">
                <Link
                  href="/register"
                  className="block px-4 py-2 text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-md text-center mx-3"
                >
                  Register Now
                </Link>
                <Link
                  href="/login"
                  className="block px-4 py-2 text-base font-medium text-center text-gray-700 hover:bg-gray-100 rounded-md mx-3 border border-gray-300"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
