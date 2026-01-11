import React from "react";

const UploadDocuments = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Trainer
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Upload Documents
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Share notes, assignments and reference material with students.
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
        <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center">
          <p className="text-sm text-slate-300">
            Drag and drop documents here, or
          </p>
          <button className="mt-3 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400">
            Browse files
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
              Title
            </label>
            <input
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
              placeholder="Week 1 Notes"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
              Course / Batch
            </label>
            <input
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
              placeholder="Full Stack Batch A"
            />
          </div>
        </div>

        <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400">
          Upload document
        </button>
      </div>
    </div>
  );
};

export default UploadDocuments;
