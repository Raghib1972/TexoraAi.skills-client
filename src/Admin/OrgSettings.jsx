// src/Admin/OrgSettings.jsx
import React from "react";

const OrgSettings = () => {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">
          Organisation settings
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage institute name, branding, contact details and global
          configuration for your LMS.
        </p>
      </div>

      {/* Basic info card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4">
        <h2 className="text-sm font-semibold text-slate-100">Basic info</h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm">
          <div className="space-y-1">
            <label className="text-xs text-slate-400">Organisation name</label>
            <input
              type="text"
              placeholder="Your institute / company name"
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-slate-400">Support email</label>
            <input
              type="email"
              placeholder="support@example.com"
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-slate-400">Contact number</label>
            <input
              type="text"
              placeholder="+91‑98765 43210"
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-slate-400">Default timezone</label>
            <select
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-violet-500"
              defaultValue="IST"
            >
              <option value="IST">IST (UTC+5:30)</option>
              <option value="UTC">UTC</option>
              <option value="EST">EST (UTC‑5)</option>
              <option value="CET">CET (UTC+1)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Branding card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4">
        <h2 className="text-sm font-semibold text-slate-100">Branding</h2>
        <p className="text-xs text-slate-400">
          Control how your LMS looks for all users.
        </p>

        <div className="grid gap-4 md:grid-cols-2 text-sm">
          <div className="space-y-2">
            <p className="text-xs text-slate-400">Logo</p>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 text-xs">
                Logo
              </div>
              <button className="px-3 py-1.5 rounded-md bg-slate-800 text-xs text-slate-100 hover:bg-slate-700">
                Upload logo
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-slate-400">Primary color</p>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-violet-600" />
              <input
                type="text"
                placeholder="#4F46E5"
                className="flex-1 rounded-md bg-slate-950 border border-slate-700 px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded-md bg-violet-600 text-sm font-medium text-white hover:bg-violet-500">
          Save changes
        </button>
      </div>
    </div>
  );
};

export default OrgSettings;
