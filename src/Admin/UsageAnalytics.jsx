// src/Admin/UsageAnalytics.jsx
import React from "react";

const UsageAnalytics = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">
          Usage analytics
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Track platform usage across users, roles and time periods.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
          <p className="text-xs text-slate-400">Daily active users</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">0</p>
          <p className="mt-1 text-[11px] text-emerald-400">+0% vs yesterday</p>
        </div>
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
          <p className="text-xs text-slate-400">Average session length</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">0 min</p>
          <p className="mt-1 text-[11px] text-slate-400">Last 7 days</p>
        </div>
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
          <p className="text-xs text-slate-400">Peak concurrent users</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">0</p>
          <p className="mt-1 text-[11px] text-slate-400">Today</p>
        </div>
      </div>

      {/* Role wise usage placeholder */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-slate-100">
            Role wise usage
          </h2>
          <select className="text-[11px] bg-slate-950 border border-slate-700 rounded-md px-2 py-1 text-slate-100 focus:outline-none focus:ring-1 focus:ring-violet-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>

        <p className="text-sm text-slate-400">
        
        </p>
      </div>
    </div>
  );
};

export default UsageAnalytics;
