"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => router.push(path);

  return (
    <nav className="bg-red-600 p-4 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Logo with Blood Drop */}
        <button onClick={() => handleNavigation('/')} className="flex items-center space-x-2">
          <span className="text-2xl">🩸</span>
          <span className="font-extrabold text-2xl tracking-tight text-white">SGI Donors</span>
        </button>

        {/* Menu Items */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <button
            onClick={() => handleNavigation('/api/donar/new')}
            className="hover:text-yellow-200 transition-colors duration-200 text-base font-medium"
          >
            Register
          </button>
          <button
            onClick={() => handleNavigation('/alldonars')}
            className="hover:text-yellow-200 transition-colors duration-200 text-base font-medium"
          >
            All Donors
          </button>
          <button
            onClick={() => handleNavigation('/allfeedbacks')}
            className="hover:text-yellow-200 transition-colors duration-200 text-base font-medium"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
