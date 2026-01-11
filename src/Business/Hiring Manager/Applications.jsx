import React from "react";

const Applications = () => {
  const applications = [
    { id: 1, name: "Rahul Kumar", role: "Sales Intern", status: "Screening" },
    { id: 2, name: "Aisha Khan", role: "BD Executive", status: "Interview Scheduled" },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-slate-100">Applications</h1>

      <div className="space-y-2">
        {applications.map((a) => (
          <div
            key={a.id}
            className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 flex justify-between"
          >
            <div>
              <p className="text-sm font-medium text-slate-100">{a.name}</p>
              <p className="text-xs text-slate-500">{a.role}</p>
            </div>
            <p className="text-xs text-emerald-300">{a.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
