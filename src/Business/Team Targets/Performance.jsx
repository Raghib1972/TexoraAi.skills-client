import React from "react";

const Performance = () => {
  const members = [
    { name: "Ravi", leads: 30, enrollments: 12 },
    { name: "Meera", leads: 24, enrollments: 9 },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-slate-100">Team Performance</h1>

      <div className="space-y-2">
        {members.map((m) => (
          <div
            key={m.name}
            className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 flex justify-between"
          >
            <p className="text-sm text-slate-100">{m.name}</p>
            <p className="text-xs text-slate-400">
              Leads: {m.leads} · Enrollments: {m.enrollments}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
