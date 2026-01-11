import React from "react";

const FollowUps = () => {
  const items = [
    { id: 1, name: "Akash", due: "Tomorrow 11:00 AM", note: "Demo call" },
    { id: 2, name: "Sneha", due: "Today 7:00 PM", note: "Pricing discussion" },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-slate-100">Follow Ups</h1>

      <div className="space-y-2">
        {items.map((i) => (
          <div
            key={i.id}
            className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3"
          >
            <p className="text-sm font-medium text-slate-100">{i.name}</p>
            <p className="text-xs text-slate-400">{i.note}</p>
            <p className="text-xs text-amber-300 mt-1">Due: {i.due}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowUps;
