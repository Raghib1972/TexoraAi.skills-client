// src/Admin/FeedbackAdmin.jsx
import React from "react";

const FeedbackAdmin = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">Feedback</h1>
        <p className="mt-1 text-sm text-slate-400">
          View and act on feedback from students and trainers.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-emerald-900/70 border border-emerald-700 p-4">
          <p className="text-xs text-emerald-200">Open feedback</p>
          <p className="mt-2 text-2xl font-semibold text-emerald-50">0</p>
          <p className="mt-1 text-[11px] text-emerald-200">
            Items waiting for response.
          </p>
        </div>
        <div className="rounded-2xl bg-amber-900/70 border border-amber-700 p-4">
          <p className="text-xs text-amber-200">In progress</p>
          <p className="mt-2 text-2xl font-semibold text-amber-50">0</p>
          <p className="mt-1 text-[11px] text-amber-200">
            Being reviewed by support.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-900/80 border border-slate-700 p-4">
          <p className="text-xs text-slate-300">Resolved</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">0</p>
          <p className="mt-1 text-[11px] text-slate-300">
            Closed feedback items.
          </p>
        </div>
      </div>

      {/* Filters row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex gap-2">
          <select className="rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-violet-500">
            <option value="all">All types</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature request</option>
            <option value="general">General</option>
          </select>
          <select className="rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-violet-500">
            <option value="all">All status</option>
            <option value="open">Open</option>
            <option value="progress">In progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search feedback..."
          className="w-full md:w-72 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
        />
      </div>

      {/* Feedback list placeholder */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex text-xs font-semibold text-slate-400 border-b border-slate-800 pb-2 mb-3">
          <div className="w-3/6">Title</div>
          <div className="w-1/6">Type</div>
          <div className="w-1/6">Status</div>
          <div className="w-1/6 text-right">Last updated</div>
        </div>

        <p className="text-sm text-slate-400">
          
        </p>
      </div>
    </div>
  );
};

export default FeedbackAdmin;
