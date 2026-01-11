import React from "react";

const Renewals = () => {
  const items = [
    { id: 1, name: "Ravi", plan: "Monthly", due: "25 Dec" },
    { id: 2, name: "Meera", plan: "Quarterly", due: "30 Dec" },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-slate-100">Renewals</h1>

      <div className="space-y-2">
        {items.map((r) => (
          <div
            key={r.id}
            className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 flex justify-between"
          >
            <div>
              <p className="text-sm font-medium text-slate-100">{r.name}</p>
              <p className="text-xs text-slate-400">{r.plan}</p>
            </div>
            <p className="text-xs text-amber-300">Due: {r.due}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Renewals;
