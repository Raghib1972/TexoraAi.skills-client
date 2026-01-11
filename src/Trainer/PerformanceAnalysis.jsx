import React from "react";

const PerformanceAnalysis = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Analytics
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Performance Analysis
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          High level view of batches, completion and assessments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Average course completion", value: "76%" },
          { label: "Average assessment score", value: "81%" },
          { label: "Overall attendance", value: "88%" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl bg-slate-900 border border-slate-700 p-4"
          >
            <p className="text-xs text-slate-400 uppercase">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
        <h2 className="text-sm font-semibold text-slate-100 mb-2">
          Notes
        </h2>
        <p className="text-sm text-slate-300">
          Use this page later to integrate real charts (e.g. Recharts /
          Chart.js) and show trend lines for each metric.
        </p>
      </div>
    </div>
  );
};

export default PerformanceAnalysis;
