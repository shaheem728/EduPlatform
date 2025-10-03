import React from 'react'
import { programs } from '../assets/assets'
const Programs = () => {
  return (
     <section className="py-16 bg-gray-50 max-w-7xl mx-auto px-6">
        <div className='mb-5  flex flex-col items-center justify-center' >
        <h2 className="text-3xl font-bold text-gray-900">Comprehensive Learning Programs</h2>
        <p className="mt-2 text-gray-600 flex flex-col items-center">
         <span>Choose from our wide range of courses designed to help you achieve your</span>
        <span> academic and career goals</span>
        </p>
        </div>
     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {programs.map((program, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
        >
          <img src={program.icon} alt='Icon' className='w-12 h-12'/>
          <h3 className="text-black text-lg font-semibold mt-4">{program.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{program.description}</p>
          <ul className="mt-3 space-y-1 text-sm text-gray-700">
            {program.points.map((point, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {point}
              </li>
            ))}
          </ul>
          <button className="mt-4 px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-slate-300 hover:bg-gray-200 transition">
            Explore Courses
          </button>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Programs





