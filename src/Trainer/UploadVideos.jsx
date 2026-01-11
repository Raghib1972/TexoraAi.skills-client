import React from "react";

const UploadVideos = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Trainer
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">Upload Videos</h1>
        <p className="mt-1 text-sm text-slate-400">
          Upload lecture videos for your batches.
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
        <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center">
          <p className="text-sm text-slate-300">
            Drag and drop video files here, or
          </p>
          <button className="mt-3 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400">
            Browse files
          </button>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
            Title
          </label>
          <input
            className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
            placeholder="React State Management - Lecture 1"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
            Description
          </label>
          <textarea
            rows={3}
            className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
            placeholder="Short description about this lecture."
          />
        </div>

        <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400">
          Upload video
        </button>
      </div>
    </div>
  );
};

export default UploadVideos;
