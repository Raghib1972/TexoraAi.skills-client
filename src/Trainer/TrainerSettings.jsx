import React from "react";

const TrainerSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Trainer
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">Settings</h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage your profile and notification preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
          <h2 className="text-sm font-semibold text-slate-100">Profile</h2>
          <div className="space-y-3">
            <input
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
              placeholder="Full name"
            />
            <input
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
              placeholder="Email"
            />
          </div>
          <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400">
            Save profile
          </button>
        </div>

        <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
          <h2 className="text-sm font-semibold text-slate-100">Notifications</h2>
          <label className="flex items-center gap-2 text-sm text-slate-200">
            <input type="checkbox" className="accent-indigo-500" />
            Email alerts for new doubts
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-200">
            <input type="checkbox" className="accent-indigo-500" />
            Email alerts for new submissions
          </label>
          <button className="mt-2 px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400">
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerSettings;
