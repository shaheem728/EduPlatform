import React from 'react'
import { features } from '../assets/assets'
const Services = () => {
  return (
     <section className="py-16 bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose EduPlatform?</h2>
        <p className="mt-2 flex flex-col items-center text-gray-600">
         <span> Experience the perfect blend of technology and personalized learning designed </span><span> for your success</span>
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-lg transition">
              <img src={feature.icon} alt="Icon" className='w-14 h-14 mx-auto mb-4' />
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services




