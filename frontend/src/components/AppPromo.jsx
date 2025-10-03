import React from "react";
import { assets } from "../assets/assets";

const AppPromo = () => {
  return (
    <section className="bg-gradient-to-r from-[#017CBA] to-[#DB0082] py-16 px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between text-white">
      {/* Left Content */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Take Your Learning <br/> Anywhere with Our App
        </h2>
        <p className="mb-6 text-lg text-gray-100">
          Download the EduPlatform mobile app and access all your <br/> courses,
          live classes, and study materials on the go.
        </p>

        {/* Features */}
        <ul className="space-y-3 text-gray-100 mb-6 list-disc ms-5">
          <li>Offline video downloads</li>
          <li>Push notifications for classes</li>
          <li>Interactive practice tests</li>
          <li>Progress tracking & analytics</li>
        </ul>

        {/* Rating */}
        <p className="flex items-center mb-6 text-yellow-300">
         <img src={assets.Rating_icon} className="w-4 h-4"/>   
         <span className="ml-2 text-white">4.8/5 on App Store & Play Store</span>
        </p>

        {/* Store Buttons */}
        <div className="flex space-x-4">
          <a href="#" className="inline-block">
            <img
              src={assets.AppStore}
              alt="Download on App Store"
              className="w-36 h-10"
            />
          </a>
          <a href="#" className="inline-block">
            <img
              src={assets.Google}
              alt="Get it on Google Play"
              className="w-36 h-10"
            />
          </a>
        </div>
      </div>

      {/* Right Side - App Mockup */}
      <div className="w-auto lg:w-lg h-full   flex justify-center">
        <img
          src={assets.App}
          alt="EduPlatform App"
          className=" drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default AppPromo;
