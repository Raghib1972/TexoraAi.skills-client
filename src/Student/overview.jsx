import React from "react";

const Overview = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
        Overview
      </h1>

      <p className="text-sm text-slate-600 dark:text-slate-300">
        Quick summary of your learning progress, upcoming sessions and recent activity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Courses in progress
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            4
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Upcoming sessions
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            3
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Certificates earned
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            1
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
