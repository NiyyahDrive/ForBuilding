'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">MA</div>
            <span className="hidden sm:inline text-sm font-semibold text-gray-800">
              Alrubaei Werken
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Projecten
            </Link>
            <Link
              href="#experience"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Ervaring
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Contact Button */}
          <Link
            href="#contact"
            className="hidden sm:inline bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Contacteer ons
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="#services"
              className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
            >
              Projecten
            </Link>
            <Link
              href="#experience"
              className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
            >
              Ervaring
            </Link>
            <Link
              href="#contact"
              className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
