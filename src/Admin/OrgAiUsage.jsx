// src/Admin/OrgAiUsage.jsx
import React from "react";

const OrgAiUsage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">
          Organisation AI usage
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Aggregate AI usage across all users, roles and departments.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
          <p className="text-xs text-slate-400">Total requests (month)</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">0</p>
        </div>
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
          <p className="text-xs text-slate-400">Tokens used</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">0</p>
        </div>
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
          <p className="text-xs text-slate-400">Active users</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">0</p>
        </div>
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
          <p className="text-xs text-slate-400">Estimated cost</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">$0.00</p>
        </div>
      </div>

      {/* Role-wise usage placeholder */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
        <h2 className="text-sm font-semibold text-slate-100 mb-2">
          Usage by role
        </h2>
        <p className="text-sm text-slate-400">
          Yahan baad me chart dikhayenge ki Admin, Trainer aur Students ne kitna
          AI use kiya.
        </p>
      </div>

      {/* Department-wise usage placeholder */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
        <h2 className="text-sm font-semibold text-slate-100 mb-2">
          Usage by department / branch
        </h2>
        <p className="text-sm text-slate-400">
          
        </p>
      </div>
    </div>
  );
};

export default OrgAiUsage;
