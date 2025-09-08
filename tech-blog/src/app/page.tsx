'use client';
import React from 'react';
import Link from 'next/link';
import heroImage from '../app/images/hero-section.jpg';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-blue-500 text-white py-20 px-6 lg:px-12">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Stay Updated with the Latest in Technology!
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Discover cutting-edge insights on AI, programming, gadgets, cybersecurity, and more.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href={'/Blog'}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold text-white text-sm md:text-base shadow-lg transition-all"
          >
            Explore Latest Blogs
          </Link>
          <Link
            href="#subscribe"
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-md font-semibold text-blue-800 text-sm md:text-base shadow-lg transition-all"
          >
            Subscribe Now
          </Link>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mt-12 relative z-20">
        <Image
          src={heroImage}
          alt="Tech Hero Image"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default Home;
