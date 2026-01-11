// src/Admin/Departments.jsx
import React from "react";

const Departments = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">Departments</h1>
        <p className="mt-1 text-sm text-slate-400">
          Create and manage departments inside your organisation.
        </p>
      </div>

      {/* Actions row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <button className="px-4 py-2 rounded-md bg-violet-600 text-sm font-medium text-white hover:bg-violet-500">
          + Add department
        </button>
        <input
          type="text"
          placeholder="Search departments..."
          className="w-full md:w-64 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
        />
      </div>

      {/* Table placeholder */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex text-xs font-semibold text-slate-400 border-b border-slate-800 pb-2 mb-3">
          <div className="w-2/5">Department name</div>
          <div className="w-2/5">Head of department</div>
          <div className="w-1/5 text-right">Actions</div>
        </div>

        {/* Empty state */}
        <p className="text-sm text-slate-400">
          
        </p>
      </div>
    </div>
  );
};

export default Departments;
