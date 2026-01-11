import React from "react";

const CreateAssignments = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Assessments
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Create Assignment
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Share coding or written tasks with deadlines.
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
        <input
          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
          placeholder="Assignment title"
        />
        <textarea
          rows={4}
          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
          placeholder="Problem statement / description."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            className="rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
            placeholder="Batch"
          />
          <input
            type="date"
            className="rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
          />
          <input
            className="rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
            placeholder="Max marks"
          />
        </div>

        <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400">
          Create assignment
        </button>
      </div>
    </div>
  );
};

export default CreateAssignments;
