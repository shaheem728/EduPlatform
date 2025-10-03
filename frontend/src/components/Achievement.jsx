import React from 'react'
import { stats } from '../assets/assets'
const Achievement = () => {
  return (
    <section className="bg-[#017CBA] py-32 ">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-bold">Trusted by Thousands of Students</h2>
        <p className="mt-2 text-sky-100">
          Our numbers speak for the quality of education we provide
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-blue-500 shadow-lg mb-4">
              <img src= {stat.icon} alt='Icon' className='w-8 h-8' />
              </div>
              <h3 className="text-2xl font-extrabold">{stat.value}</h3>
              <p className="mt-1 font-medium">{stat.label}</p>
              <p className="mt-1 text-sm text-sky-200">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievement



