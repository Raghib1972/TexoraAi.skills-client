import React from "react";

const stats = [
  {
    label: "Total Users",
    value: "0",
    color: "bg-sky-900",
    iconBg: "bg-sky-500",
    icon: "👤",
  },
  {
    label: "Active Courses",
    value: "0",
    color: "bg-emerald-900",
    iconBg: "bg-emerald-500",
    icon: "📚",
  },
  {
    label: "Pending Approvals",
    value: "0",
    color: "bg-amber-900",
    iconBg: "bg-amber-500",
    icon: "⏳",
  },
  {
    label: "Revenue (MTD)",
    value: "$0K",
    color: "bg-violet-900",
    iconBg: "bg-violet-500",
    icon: "💰",
  },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-xs font-semibold text-indigo-500 tracking-wide uppercase">
            Admin
          </p>
          <h2 className="text-2xl font-semibold mt-1 text-slate-100">
            Admin Dashboard
          </h2>
          <p className="text-sm text-slate-400">
            Manage users, courses and overall platform performance.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className={`rounded-2xl p-4 flex flex-col justify-between shadow-sm ${item.color}`}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-medium text-slate-100">
                {item.label}
              </p>
              <div
                className={`w-9 h-9 rounded-full ${item.iconBg} flex items-center justify-center text-white`}
              >
                <span className="text-lg">{item.icon}</span>
              </div>
            </div>
            <p className="text-2xl font-semibold text-slate-50">
              {item.value}
            </p>
            <p className="mt-1 text-xs text-emerald-400">↑ 0%</p>
          </div>
        ))}
      </div>

      {/* Completion / engagement */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl p-4 bg-slate-900/80 border border-slate-800">
          <p className="text-xs font-medium text-slate-300">
            Completion rate
          </p>
          <p className="mt-3 text-2xl font-semibold text-slate-50">0%</p>
          <p className="mt-1 text-xs text-emerald-400">↑ 0%</p>
        </div>
        <div className="rounded-2xl p-4 bg-slate-900/80 border border-slate-800">
          <p className="text-xs font-medium text-slate-300">
            Engagement score
          </p>
          <p className="mt-3 text-2xl font-semibold text-slate-50">0%</p>
          <p className="mt-1 text-xs text-emerald-400">↑ 0%</p>
        </div>
      </div>

      {/* Key reports */}
      <section className="bg-slate-900/80 rounded-2xl border border-slate-800 p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-semibold text-slate-50">Key reports</h3>
            <p className="text-xs text-slate-400">
              High‑level summary of platform performance.
            </p>
          </div>
          <button className="text-xs text-violet-400 hover:text-violet-300 font-medium">
            View detailed reports
          </button>
        </div>

        <div className="rounded-xl border border-slate-800 px-4 py-6 text-sm text-slate-400">
          Report widgets will come here (user growth, revenue trends, course
          performance).
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
