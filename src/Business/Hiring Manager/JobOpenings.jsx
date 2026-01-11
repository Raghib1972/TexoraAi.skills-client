import React from "react";

const mockJobs = [
  { id: 1, title: "Business Development Executive", openings: 3, location: "Remote" },
  { id: 2, title: "Sales Intern", openings: 5, location: "Bangalore" },
];

const JobOpenings = () => (
  <div className="p-6 space-y-4">
    <h1 className="text-xl font-semibold text-slate-100">Job Openings</h1>

    <div className="space-y-2">
      {mockJobs.map((job) => (
        <div
          key={job.id}
          className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 flex justify-between items-center"
        >
          <div>
            <p className="text-sm font-medium text-slate-100">{job.title}</p>
            <p className="text-xs text-slate-500">
              {job.location} · {job.openings} openings
            </p>
          </div>
          <button className="text-xs px-3 py-1 rounded-md bg-violet-600 text-white">
            View candidates
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default JobOpenings;
