// src/Admin/CertificatesAdmin.jsx
import React from "react";

const templates = [
  {
    id: 1,
    name: "Classic Purple",
    bg: "bg-violet-900",
    badge: "bg-violet-500",
    font: "Serif",
    theme: "#7C3AED",
    linkedCourses: 4,
  },
  {
    id: 2,
    name: "Elegant Dark",
    bg: "bg-slate-900",
    badge: "bg-slate-500",
    font: "Sans",
    theme: "#0F172A",
    linkedCourses: 2,
  },
  {
    id: 3,
    name: "Gold Accent",
    bg: "bg-amber-900",
    badge: "bg-amber-500",
    font: "Serif",
    theme: "#F59E0B",
    linkedCourses: 3,
  },
];

const CertificatesAdmin = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">Certificates</h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage certificate templates and configure theme colors and fonts.
        </p>
      </div>

      {/* Actions row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <button className="px-4 py-2 rounded-md bg-violet-600 text-sm font-medium text-white hover:bg-violet-500">
          + New template
        </button>
        <input
          type="text"
          placeholder="Search templates..."
          className="w-full md:w-72 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
        />
      </div>

      {/* Template cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className={`relative rounded-2xl border border-slate-800 overflow-hidden ${tpl.bg} p-4 flex flex-col justify-between`}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-slate-50">
                {tpl.name}
              </h2>
              <span className="px-2 py-0.5 text-[10px] rounded-full bg-slate-900/40 text-slate-300">
                Font: {tpl.font}
              </span>
            </div>

            {/* fake preview band */}
            <div className="h-20 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-center">
              <span className="text-[10px] text-slate-200">
                Preview area (BG + theme color)
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`w-4 h-4 rounded-full border border-white/40 ${tpl.badge}`}
                />
                <p className="text-[11px] text-slate-200">
                  Theme color: <span className="font-mono">{tpl.theme}</span>
                </p>
              </div>
              <p className="text-[11px] text-slate-300">
                {tpl.linkedCourses} courses
              </p>
            </div>

            <div className="mt-3 flex items-center justify-end gap-2">
              <button className="px-3 py-1 rounded-md text-[11px] bg-slate-900/60 text-slate-100 hover:bg-slate-800">
                Edit
              </button>
              <button className="px-3 py-1 rounded-md text-[11px] bg-emerald-600 text-white hover:bg-emerald-500">
                Use template
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Issue history placeholder */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <h2 className="text-sm font-semibold text-slate-100 mb-2">
          Recent certificate issues
        </h2>
        <p className="text-sm text-slate-400">
          Yahan baad me issued certificates ka history (student, course, date)
          dikhayenge.
        </p>
      </div>
    </div>
  );
};

export default CertificatesAdmin;
