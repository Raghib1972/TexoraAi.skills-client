import React from "react";

const stats = [
  { label: "Total prompts used", value: "42" },
  { label: "Last 7 days", value: "18" },
  { label: "Estimated time saved", value: "3.5 hrs" },
];

const recentUsage = [
  {
    id: 1,
    title: "Generated quiz questions for React Basics",
    when: "Today · 5:10 PM",
    type: "Quiz creation",
  },
  {
    id: 2,
    title: "Drafted feedback for Node.js assignment",
    when: "Yesterday · 9:40 PM",
    type: "Feedback",
  },
  {
    id: 3,
    title: "Summarised student doubts for Batch 101",
    when: "This week · Monday",
    type: "Summary",
  },
];

const TrainerAiUsage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Trainer
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">My AI Usage</h1>
      </div>

      {/* Summary cards */}
      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-slate-900 border border-slate-700 p-4 flex flex-col justify-between"
          >
            <p className="text-xs font-medium text-slate-400">{item.label}</p>
            <p className="mt-3 text-xl font-semibold text-slate-100">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* Recent AI actions */}
      <section className="rounded-2xl bg-slate-900 border border-slate-700 p-5">
        <h2 className="text-base font-semibold text-slate-100 mb-3">
          Recent AI activity
        </h2>

        <div className="space-y-3">
          {recentUsage.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between rounded-xl border border-slate-700 px-4 py-3 hover:bg-slate-800 transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-slate-100">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{item.when}</p>
              </div>
              <span className="ml-4 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold bg-indigo-500/15 text-indigo-300">
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrainerAiUsage;
