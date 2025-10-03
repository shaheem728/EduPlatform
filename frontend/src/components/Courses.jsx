import { Star, Clock, BookOpen } from "lucide-react";
import { courses } from "../assets/assets";
import React from 'react'

const Courses = () => {
  return (
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl  mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Popular Courses</h2>
        <p className="mt-2 text-gray-600">
          Join thousands of students already learning with our top-rated courses
        </p>

        <div className="mt-11  grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition"
            >
              {/* Top Image with badges */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                {/* Discount */}
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {course.discount}
                </span>
                {/* Popular tag */}
                {course.tags.includes("Popular") && (
                  <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 text-left">
                {/* Level & Rating */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span className="font-medium">{course.level}</span>
                  <span className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-yellow-500" />
                    {course.rating}{" "}
                    <span className="text-gray-400">({course.students.toLocaleString()})</span>
                  </span>
                </div>

                <h3 className="font-semibold text-gray-900 pe-2  lg:pe-10">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>

                {/* Duration & Lessons */}
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" /> {course.lessons} lessons
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4">
                  <span className="text-lg font-bold text-gray-900">
                    ₹{course.price.toLocaleString()}
                  </span>{" "}
                  <span className="line-through text-gray-400 text-sm">
                    ₹{course.oldPrice.toLocaleString()}
                  </span>
                </div>

                {/* Enroll Button */}
                <button className="mt-4 w-auto px-3 bg-[#016BA5] text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10">
          <button className="px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition">
            View All Courses →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses


