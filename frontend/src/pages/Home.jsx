import React from 'react'
import { assets } from "../assets/assets";
const Home = () => {
  return (
    <section className="bg-[linear-gradient(113.42deg,#DB0082_6.46%,#017CBA_66.65%)]">
      <div className="container mx-auto px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Master Your <br /> <span className="text-[#017CBA]">Academic Goals</span> <br />
            with Expert  <br />Guidance
          </h1>
          <p className="text-lg text-gray-100 mb-6">
            From school tuition to competitive exam preparation, get personalized online 
            coaching that adapts to your learning style and schedule.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-2  mb-8 text-sm text-gray-100">
           <div className='mx-3 flex'><img src={assets.Rating_icon} alt="Rating" className='w-5 h-5 me-2'/> <span>  4.9/5 Rating</span></div> 
            <div className='mx-3 flex'><img src={assets.Student_icon} alt="Student" className='w-5 h-5 me-2'/> <span>50,000+ Students</span></div>
           <div className='mx-3 flex'><img src={assets.Book_icon} alt="Courses"  className='w-5 h-5 me-2'/> <span>  500+ Courses</span></div> 
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="px-6  bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow">
              Explore Courses
            </button>
            <button className="flex items-center px-6 py-3 bg-white text-blue-600  rounded-lg shadow hover:bg-gray-100">
              <img src={assets.Watch_icon} alt="Watch" className='h-4 mx-2' />  Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="lg:w-1/2  relative mt-10 lg:mt-0 flex justify-center">
          <img
            src={assets.Hero}
            alt="Students learning"
            className="w-full max-w-lg my-5"
          />

          {/* Floating Tag - Live Classes */}
          <div className="absolute flex items-center h-11 top-0 -left-1 lg:left-2 bg-white shadow-md px-3 py-1 rounded-md text-sm font-medium">
            <img src={assets.live_icon} alt='Live' className='h-3 mx-1'/><span className='text-slate-500 text-[12px]'> Live Classes </span>
          </div>

          {/* Floating Tag - Success Rate */}
          <div className="absolute bottom-3 right-0 lg:right-2 bg-white shadow-md px-2 py-3 rounded-lg text-sm font-medium ">
            <span className='text-blue-600 font-bold'>98%</span><br/>
            <span className='text-slate-500 text-[12px]'>Success Rate</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home



