import React from "react";

const batches = [
  {
    id: "BATCH-101",
    name: "Full Stack Web Dev - Morning",
    course: "MERN Full Stack",
    students: 32,
    status: "Running",
    startDate: "01 Dec 2025",
    endDate: "31 Mar 2026",
  },
  {
    id: "BATCH-102",
    name: "React JS Evening Batch",
    course: "React Development",
    students: 24,
    status: "Upcoming",
    startDate: "10 Jan 2026",
    endDate: "30 Apr 2026",
  },
  {
    id: "BATCH-103",
    name: "Node.js Weekend Batch",
    course: "Node.js Backend",
    students: 20,
    status: "Completed",
    startDate: "01 Aug 2025",
    endDate: "30 Nov 2025",
  },
];

const statusClasses = {
  Running: "bg-emerald-50 text-emerald-600",
  Upcoming: "bg-indigo-50 text-indigo-600",
  Completed: "bg-slate-100 text-slate-600",
};

const Batches = () => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
          Batch Management
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          View and manage your active, upcoming, and completed batches.
        </p>
      </div>

      {/* Card wrapper */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-slate-900 dark:text-slate-50">
            All Batches
          </h2>
          <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
            + Create New Batch
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-xs text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700">
                <th className="py-2 pr-4 text-left">Batch ID</th>
                <th className="py-2 pr-4 text-left">Batch Name</th>
                <th className="py-2 pr-4 text-left">Course</th>
                <th className="py-2 pr-4 text-left">Students</th>
                <th className="py-2 pr-4 text-left">Status</th>
                <th className="py-2 pr-4 text-left">Start</th>
                <th className="py-2 pr-4 text-left">End</th>
                <th className="py-2 pr-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch) => (
                <tr
                  key={batch.id}
                  className="border-b last:border-b-0 border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors"
                >
                  <td className="py-3 pr-4 font-medium text-slate-800 dark:text-slate-100">
                    {batch.id}
                  </td>
                  <td className="py-3 pr-4 text-slate-800 dark:text-slate-100">
                    {batch.name}
                  </td>
                  <td className="py-3 pr-4 text-slate-600 dark:text-slate-300">
                    {batch.course}
                  </td>
                  <td className="py-3 pr-4 text-slate-600 dark:text-slate-300">
                    {batch.students}
                  </td>
                  <td className="py-3 pr-4">
                    <span
                      className={
                        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold " +
                        statusClasses[batch.status]
                      }
                    >
                      {batch.status}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-slate-600 dark:text-slate-300">
                    {batch.startDate}
                  </td>
                  <td className="py-3 pr-4 text-slate-600 dark:text-slate-300">
                    {batch.endDate}
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                        View
                      </button>
                      <button className="text-xs px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                        Manage
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Batches;
