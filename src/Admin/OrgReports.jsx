// src/Admin/OrgReports.jsx
import React from "react";

const OrgReports = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">
          Organisation reports
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Download high‑level reports for management and stakeholders.
        </p>
      </div>

      {/* Quick filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex gap-2">
          <select className="rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-violet-500">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
          <select className="rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-violet-500">
            <option>All types</option>
            <option>Enrollment</option>
            <option>Completion</option>
            <option>Revenue</option>
          </select>
        </div>
        <button className="px-4 py-2 rounded-md bg-violet-600 text-sm font-medium text-white hover:bg-violet-500">
          + Create custom report
        </button>
      </div>

      {/* Reports list placeholder */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
        <div className="flex text-xs font-semibold text-slate-400 border-b border-slate-800 pb-2 mb-3">
          <div className="w-2/6">Report name</div>
          <div className="w-2/6">Type</div>
          <div className="w-1/6">Format</div>
          <div className="w-1/6 text-right">Actions</div>
        </div>

        <p className="text-sm text-slate-400">
          
        </p>
      </div>
    </div>
  );
};

export default OrgReports;
