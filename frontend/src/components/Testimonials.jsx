// SuccessStories.jsx
import React from "react";
import { assets, testimonials } from "../assets/assets";

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-12 bg-white mt-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Success Stories</h2>
        <p className="text-gray-600 mt-2">
          Hear from our students who achieved their dreams with our guidance
        </p>
      </div>

      {/* Cards */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className=" p-6  bg-white rounded-2xl shadow-lg transition"
          >
              <div className="flex items-center justify-between mb-4">
                  <img src={assets.Quotation_mark} alt="Quote_Icon" className="w-8 h-8" />
                  <StarRating rating={t.rating} />
                </div>
            <p className="text-gray-700 italic text-balance lg:pe-8 mb-4 ">“{t.quote}”</p>
            <hr className="text-slate-300"/>
            <div className="flex items-center mt-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
              <span className="ml-auto text-xs font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {t.course}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="text-center mt-10">
        <p className="text-slate-500 my-5">Join thousands of successful students</p>
        <button className="px-6 py-2 m-1 bg-sky-800 text-white rounded-lg shadow hover:bg-blue-700 transition mr-3">
          Explore Courses
        </button>
        <button className="px-6 py-2 m-1 border border-blue-400 text-blue-400 rounded-lg hover:bg-gray-100 transition">
          View All Success Stories
        </button>
      </div>
    </section>
  )
}

export default Testimonials


