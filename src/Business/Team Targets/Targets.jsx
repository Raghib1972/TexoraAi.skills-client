import React from "react";

const Targets = () => {
  const targets = [
    { metric: "New Leads", monthly: 100, achieved: 42 },
    { metric: "Enrollments", monthly: 40, achieved: 15 },
    { metric: "Revenue", monthly: "₹4L", achieved: "₹1.2L" },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-slate-100">Team Targets</h1>

      <div className="space-y-2">
        {targets.map((t) => (
          <div
            key={t.metric}
            className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 flex justify-between"
          >
            <p className="text-sm text-slate-100">{t.metric}</p>
            <p className="text-xs text-slate-400">
              Target: {t.monthly} · Achieved: {t.achieved}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Targets;
