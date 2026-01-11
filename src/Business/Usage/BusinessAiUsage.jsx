import React from "react";

const BusinessAiUsage = () => {
  const logs = [
    { id: 1, feature: "Lead scoring", usedAt: "Today 4:30 PM" },
    { id: 2, feature: "Email copy generation", usedAt: "Today 3:15 PM" },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-slate-100">My AI Usage</h1>

      <div className="space-y-2">
        {logs.map((l) => (
          <div
            key={l.id}
            className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 flex justify-between"
          >
            <p className="text-sm text-slate-100">{l.feature}</p>
            <p className="text-xs text-slate-400">{l.usedAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessAiUsage;
