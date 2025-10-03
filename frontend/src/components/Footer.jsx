import React from "react";
import { assets } from "../assets/assets";
import { Mail,Phone,MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div >
          <div className="flex items-center space-x-2 mb-4">
            <img src={assets.Edu_icon} alt="EduPlatform" className="h-8" />
            <span className="text-xl font-bold text-white">EduPlatform</span>
          </div>
          <p className="text-sm mb-4">
            Empowering students with quality education through comprehensive
            online tuition and coaching programs.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#"><img src={assets.facebook} alt="facebook" className="h-6"/></a>
            <a href="#"><img src={assets.Tiwtter} alt="facebook" className="h-6"/></a>
            <a href="#"><img src={assets.Insta} alt="Insta" className="h-6"/></a>
            <a href="#"><img src={assets.Youtube} alt="Youtube" className="h-6"/></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">School Tuition</a></li>
            <li><a href="#" className="hover:text-white">College Tuition</a></li>
            <li><a href="#" className="hover:text-white">Entrance Coaching</a></li>
            <li><a href="#" className="hover:text-white">Government Exams</a></li>
            <li><a href="#" className="hover:text-white">UPSC Coaching</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <Mail color="#3B82F6" height={"20px"}  />
             <span className="ms-2">support@eduplatform.com</span> 
            </li>
            <li className="flex items-center">
              <Phone color="#3B82F6" height={"20px"} />
              <span className="ms-2">+91 98785 43210</span>
            </li>
            <li className="flex items-center ">
              <MapPin color="#3B82F6" height={"20px"} />
               <span className="ms-2">Mumbai, Maharashtra, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2024 EduPlatform. All rights reserved. | Designed for Excellence in Education
      </div>
    </footer>
  );
};

export default Footer;
