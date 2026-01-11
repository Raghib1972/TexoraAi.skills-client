import React from "react";

const DoubtsManagement = () => {
  const doubts = [
    { id: 1, student: "Aman Kumar", topic: "React useEffect", status: "Open" },
    { id: 2, student: "Neha Sharma", topic: "Promises vs async/await", status: "Resolved" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Support
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Doubts Management
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Track and resolve student queries from all batches.
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-700 p-4 space-y-2">
        {doubts.map((d) => (
          <div
            key={d.id}
            className="flex items-center justify-between rounded-lg bg-slate-800 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-slate-100">
                {d.topic}
              </p>
              <p className="text-xs text-slate-400">
                {d.student} · #{d.id}
              </p>
            </div>
            <button className="text-xs px-3 py-1 rounded-full bg-indigo-500 text-white hover:bg-indigo-400">
              {d.status === "Open" ? "Reply" : "View"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoubtsManagement;
