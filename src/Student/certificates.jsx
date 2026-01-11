import React from "react";

const Certificates = () => {
  const templates = [
    {
      id: 1,
      name: "Completion Certificate",
      level: "Course Completion",
      description: "Awarded when a student successfully completes all modules of a course.",
      accent: "from-indigo-500 to-sky-500"
    },
    {
      id: 2,
      name: "Excellence Certificate",
      level: "Top Performer",
      description: "Given to students scoring above 90% and maintaining excellent attendance.",
      accent: "from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      name: "Internship Certificate",
      level: "Industry Internship",
      description: "Issued after successful completion of internship and project submission.",
      accent: "from-fuchsia-500 to-purple-500"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
          Certificates
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          View your certificate templates. Download or request generation from your admin.
        </p>
      </div>

      {/* Templates grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col"
          >
            {/* Top colored band */}
            <div
              className={`h-2 rounded-t-2xl bg-gradient-to-r ${tpl.accent}`}
            />

            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                {tpl.name}
              </h2>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {tpl.level}
              </p>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 flex-1">
                {tpl.description}
              </p>

              {/* Actions */}
              <div className="mt-4 flex items-center justify-between gap-2">
                <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
                  Preview
                </button>
                <button className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200">
                  Download sample
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
