// src/Admin/AllCourses.jsx
import React from "react";

const AllCourses = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-100">All courses</h1>
        <p className="mt-1 text-sm text-slate-400">
          Approve, publish and manage all courses on the platform.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full md:w-72 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
        />
        <button className="px-4 py-2 rounded-md bg-violet-600 text-sm font-medium text-white hover:bg-violet-500">
          + Create course
        </button>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex text-xs font-semibold text-slate-400 border-b border-slate-800 pb-2 mb-3">
          <div className="w-2/6">Course name</div>
          <div className="w-1/6">Category</div>
          <div className="w-1/6">Trainer</div>
          <div className="w-1/6">Status</div>
          <div className="w-1/6 text-right">Enrollments</div>
        </div>

        <p className="text-sm text-slate-400">
        </p>
      </div>
    </div>
  );
};

export default AllCourses;   // <- yeh line pakka honi chahiye
