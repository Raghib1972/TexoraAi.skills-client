import React from "react";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Student
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Student Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Quick overview of your learning progress and recent updates.
        </p>
      </div>

      {/* Top stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
          <p className="text-xs text-slate-400 uppercase">Active courses</p>
          <p className="mt-2 text-3xl font-semibold text-white">4</p>
        </div>
        <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
          <p className="text-xs text-slate-400 uppercase">Completed courses</p>
          <p className="mt-2 text-3xl font-semibold text-white">2</p>
        </div>
        <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
          <p className="text-xs text-slate-400 uppercase">Pending assessments</p>
          <p className="mt-2 text-3xl font-semibold text-white">3</p>
        </div>
        <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
          <p className="text-xs text-slate-400 uppercase">Attendance (%)</p>
          <p className="mt-2 text-3xl font-semibold text-white">92%</p>
        </div>
      </div>

      {/* Bottom cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Upcoming items */}
        <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
          <h2 className="text-sm font-semibold text-slate-100">
            Upcoming items
          </h2>
          <p className="mt-1 text-xs text-slate-400">Next 7 days schedule.</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
            <li>Live session: React State Management – Tomorrow, 7 PM</li>
            <li>Quiz: JavaScript Basics – In 3 days</li>
            <li>Project checkpoint submission – In 5 days</li>
          </ul>
        </div>

        {/* Recent activity */}
        <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
          <h2 className="text-sm font-semibold text-slate-100">
            Recent activity
          </h2>
          <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
            <li>Completed: React Hooks Deep Dive</li>
            <li>New assignment added in Node.js Backend</li>
            <li>Instructor replied to your doubt in UI/UX</li>
            <li>New video uploaded in Database Architecture</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;





