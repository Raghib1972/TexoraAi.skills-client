import React from "react";

const stats = [
  { label: "Active Leads", value: 24, change: "+12%", color: "bg-sky-900", icon: "👥" },
  { label: "Conversions (This Week)", value: 7, change: "+3%", color: "bg-emerald-900", icon: "✅" },
  { label: "Revenue (MTD)", value: "₹1.2L", change: "+18%", color: "bg-violet-900", icon: "💰" },
  { label: "Target Progress", value: "42%", change: "On track", color: "bg-amber-900", icon: "🎯" },
];

const pipeline = [
  { stage: "New Leads", count: 18 },
  { stage: "In Discussion", count: 9 },
  { stage: "Closed Won", count: 7 },
];

const BusinessDashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">
            Business team
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className={`rounded-2xl p-4 flex flex-col justify-between ${item.color} border border-slate-800`}
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-slate-100">{item.label}</p>
              <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center">
                {item.icon}
              </span>
            </div>
            <p className="mt-3 text-2xl font-semibold text-slate-50">{item.value}</p>
            <p className="mt-1 text-[11px] text-emerald-300">{item.change}</p>
          </div>
        ))}
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {pipeline.map((p) => (
          <div
            key={p.stage}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
          >
            <p className="text-xs text-slate-400">Stage</p>
            <p className="text-sm font-semibold text-slate-100 mt-1">{p.stage}</p>
            <p className="mt-3 text-2xl font-semibold text-slate-50">{p.count}</p>
            <p className="mt-1 text-[11px] text-slate-500">Active opportunities</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BusinessDashboard;
