// src/Admin/MyAiUsageAdmin.jsx
import React from "react";

const MyAiUsageAdmin = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">My AI usage</h1>
        <p className="mt-1 text-sm text-slate-400">
          Personal AI token and request usage for this admin account.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
          <p className="text-xs text-slate-400">Requests this month</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">0</p>
          <p className="mt-1 text-[11px] text-emerald-400">0% of monthly limit</p>
        </div>
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
          <p className="text-xs text-slate-400">Tokens used</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">0</p>
          <p className="mt-1 text-[11px] text-slate-400">Approx. cost: $0.00</p>
        </div>
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
          <p className="text-xs text-slate-400">Allowed limit</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">10K</p>
          <p className="mt-1 text-[11px] text-slate-400">Per month for this admin</p>
        </div>
      </div>

      {/* Usage table placeholder */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-slate-100">
            Recent AI requests
          </h2>
          <select className="text-[11px] bg-slate-950 border border-slate-700 rounded-md px-2 py-1 text-slate-100 focus:outline-none focus:ring-1 focus:ring-violet-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>All time</option>
          </select>
        </div>

        <div className="flex text-xs font-semibold text-slate-400 border-b border-slate-800 pb-2 mb-3">
          <div className="w-2/6">Date</div>
          <div className="w-2/6">Feature</div>
          <div className="w-1/6">Tokens</div>
          <div className="w-1/6 text-right">Status</div>
        </div>

        <p className="text-sm text-slate-400">
          
        </p>
      </div>
    </div>
  );
};

export default MyAiUsageAdmin;
