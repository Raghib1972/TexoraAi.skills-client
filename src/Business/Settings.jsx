// src/Business/Settings.jsx
import React from "react";

const BusinessSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Business
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Business Team Settings
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Configure team notifications and lead preferences.
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-6">
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-100">
            Account
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                Manager name
              </label>
              <input
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
                placeholder="Business manager"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                Work email
              </label>
              <input
                type="email"
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
                placeholder="manager@company.com"
              />
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-100">
            Lead alerts
          </h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input type="checkbox" className="rounded border-slate-600" />
              Notify on new leads
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input type="checkbox" className="rounded border-slate-600" />
              Notify on high‑priority leads
            </label>
          </div>
        </section>

        <div className="flex justify-end">
          <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSettings;
