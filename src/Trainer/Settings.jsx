import React from "react";

const TrainerSettings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Trainer
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Trainer Settings
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage your profile, notifications and teaching preferences.
        </p>
      </div>

      {/* Content */}
      <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-6">
        {/* Profile */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-100">
            Profile details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                Full name
              </label>
              <input
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
                placeholder="Trainer name"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
                placeholder="trainer@example.com"
              />
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-100">
            Notifications
          </h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input type="checkbox" className="rounded border-slate-600" />
              Email alerts for new doubts
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input type="checkbox" className="rounded border-slate-600" />
              Email alerts for new assignments
            </label>
          </div>
        </section>

        {/* Save button */}
        <div className="flex justify-end">
          <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerSettings;
