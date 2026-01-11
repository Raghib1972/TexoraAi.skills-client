import React, { useState } from "react";
import { Search, BookOpen } from "lucide-react";

const MyCourses = () => {
  const [search, setSearch] = useState("");

  const courses = [
    { title: "React Development", teacher: "John Doe", progress: 65, tag: "Frontend" },
    { title: "Node.js Backend", teacher: "Sarah Khan", progress: 45, tag: "Backend" },
    { title: "UI/UX Fundamentals", teacher: "Emma Watson", progress: 80, tag: "Design" },
    { title: "Database Architecture", teacher: "Michael Lee", progress: 55, tag: "Database" }
  ];

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
        My Courses
      </h1>

      {/* Search Bar */}
      <div className="relative w-full md:w-1/3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((course, idx) => (
          <div
            key={idx}
            className="p-5 bg-white dark:bg-slate-900 rounded-xl shadow hover:shadow-lg transition border border-slate-100 dark:border-slate-800"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                {course.title}
              </h2>
              <BookOpen className="text-blue-600" />
            </div>

            <p className="text-sm text-gray-600 dark:text-slate-300 mb-2">
              Instructor: <span className="font-medium">{course.teacher}</span>
            </p>

            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
              {course.tag}
            </span>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 dark:bg-slate-800 h-2 rounded-full">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                Progress: {course.progress}%
              </p>
            </div>

            {/* Button */}
            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
