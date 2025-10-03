import React, { useState } from "react";
import { ChevronDown } from 'lucide-react';
import { assets } from "../assets/assets";
import { Menu } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="shadow-sm bg-white">
      <div className="container mx-auto px-6 lg:px-20 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={assets.Edu_icon} alt="EduPlatform" className="h-7" />
          <span className="font-bold text-lg text-gray-800">EduPlatform</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <div className="relative group">
            <button className="flex items-center hover:text-blue-600">
              Courses  <ChevronDown className="ms-1 mt-1 w-5" /> 
            </button>
            {/* Dropdown */}
            <div className="absolute  h-10 hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-44">
             
            </div>
          </div>
          <a href="#" className="hover:text-blue-600">My Learning</a>
          <a href="#" className="hover:text-blue-600">Test Practice</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-3 py-2 border border-slate-300 rounded-2xl text-black hover:bg-gray-100">
            Login
          </button>
          <button className="px-3 py-2 bg-[#016BA5] text-white rounded-2xl hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
           <Menu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <a href="#" className="block hover:text-blue-600">Home</a>
          <a href="#" className="block hover:text-blue-600">Courses</a>
          <a href="#" className="block hover:text-blue-600">My Learning</a>
          <a href="#" className="block hover:text-blue-600">Test Practice</a>
          <a href="#" className="block hover:text-blue-600">About Us</a>
          <div className="flex space-x-4 pt-4">
            <button className="flex-1 border py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              Login
            </button>
            <button className="flex-1 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
