// src/Admin/Categories.jsx
import React from "react";

const Categories = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">
          Course categories
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Group courses into categories like Web Dev, Data Science, etc.
        </p>
      </div>

      {/* Actions row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full md:w-72 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
        />
        <button className="px-4 py-2 rounded-md bg-violet-600 text-sm font-medium text-white hover:bg-violet-500">
          + Add category
        </button>
      </div>

      {/* Table placeholder */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex text-xs font-semibold text-slate-400 border-b border-slate-800 pb-2 mb-3">
          <div className="w-3/6">Category name</div>
          <div className="w-2/6">Total courses</div>
          <div className="w-1/6 text-right">Actions</div>
        </div>

        <p className="text-sm text-slate-400">
          
        </p>
      </div>
    </div>
  );
};

export default Categories;
