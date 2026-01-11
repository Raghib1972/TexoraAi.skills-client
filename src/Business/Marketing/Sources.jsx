// src/Business/Marketing/Sources.jsx
import React from "react";

const Sources = () => {
  const sources = [
    { name: "Facebook Ads", percent: "40%" },
    { name: "Website", percent: "35%" },
    { name: "Referral", percent: "25%" },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-slate-100">Sources</h1>

      <div className="space-y-2">
        {sources.map((s) => (
          <div
            key={s.name}
            className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 flex justify-between"
          >
            <p className="text-sm text-slate-100">{s.name}</p>
            <p className="text-xs text-emerald-300">{s.percent}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sources;
