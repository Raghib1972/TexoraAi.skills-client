import React from "react";

const Documents = () => {
  const docs = [
    { name: "Syllabus.pdf", size: "1.2 MB", type: "PDF" },
    { name: "Notes_Week_1.docx", size: "450 KB", type: "DOCX" },
    { name: "Assignment_Guide.pdf", size: "900 KB", type: "PDF" }
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
        Documents
      </h1>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        All study materials, notes and guides shared by your trainers.
      </p>

      <div className="mt-4 space-y-2">
        {docs.map((d) => (
          <div
            key={d.name}
            className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
          >
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                {d.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {d.type} · {d.size}
              </p>
            </div>
            <button className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
