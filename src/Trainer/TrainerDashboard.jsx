import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Trainer
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Trainer Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage your batches and track student progress.
        </p>
      </div>

      {/* Top stats cards (clickable) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button
          onClick={() => navigate("/trainer/batches")}
          className="text-left rounded-xl bg-slate-900 border border-slate-700 p-4 hover:bg-slate-800 transition"
        >
          <p className="text-xs text-slate-400">Active Batches</p>
          <p className="mt-2 text-3xl font-semibold text-white">0</p>
        </button>

        <button
          onClick={() => navigate("/trainer/student-reports")}
          className="text-left rounded-xl bg-emerald-900/70 border border-emerald-700 p-4 hover:bg-emerald-800 transition"
        >
          <p className="text-xs text-emerald-100/80">Total Students</p>
          <p className="mt-2 text-3xl font-semibold text-white">0</p>
        </button>

        <button
          onClick={() => navigate("/trainer/doubts-management")}
          className="text-left rounded-xl bg-amber-900/80 border border-amber-700 p-4 hover:bg-amber-800 transition"
        >
          <p className="text-xs text-amber-100/80">Pending Doubts</p>
          <p className="mt-2 text-3xl font-semibold text-white">0</p>
        </button>

        <button
          onClick={() => navigate("/trainer/create-quiz")}
          className="text-left rounded-xl bg-violet-900/80 border border-violet-700 p-4 hover:bg-violet-800 transition"
        >
          <p className="text-xs text-violet-100/80">Tests Created</p>
          <p className="mt-2 text-3xl font-semibold text-white">0</p>
        </button>
      </div>

      {/* Recent batches section */}
      <section className="rounded-xl bg-slate-900 border border-slate-700 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-white">Recent Batches</h2>
          <button
            onClick={() => navigate("/trainer/batches")}
            className="text-xs text-indigo-300 hover:text-indigo-200"
          >
            View all
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-slate-800 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-slate-100">
                Full Stack Batch A
              </p>
              <p className="text-xs text-slate-400">25 Students</p>
            </div>
            <button
              onClick={() => navigate("/trainer/batches")}
              className="text-xs px-3 py-1 rounded-full bg-indigo-500 text-white hover:bg-indigo-400"
            >
              View Details
            </button>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-slate-800 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-slate-100">
                React Evening Batch
              </p>
              <p className="text-xs text-slate-400">18 Students</p>
            </div>
            <button
              onClick={() => navigate("/trainer/batches")}
              className="text-xs px-3 py-1 rounded-full bg-indigo-500 text-white hover:bg-indigo-400"
            >
              View Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;


