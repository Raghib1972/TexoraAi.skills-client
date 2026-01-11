import React from "react";

const upcoming = [
  {
    id: "QUIZ-101",
    title: "React Basics Quiz",
    batch: "Full Stack Web Dev - Morning",
    type: "Quiz",
    due: "25 Dec 2025",
    status: "Scheduled",
  },
  {
    id: "ASSIGN-201",
    title: "Node.js API Assignment",
    batch: "Node.js Weekend Batch",
    type: "Assignment",
    due: "28 Dec 2025",
    status: "Draft",
  },
];

const typeClasses = {
  Quiz: "bg-indigo-50 text-indigo-600",
  Assignment: "bg-amber-50 text-amber-600",
};

const statusClasses = {
  Scheduled: "bg-emerald-50 text-emerald-600",
  Draft: "bg-slate-100 text-slate-600",
};

const Assessments = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Assessments
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Assessments Overview
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage quizzes and assignments for your batches.
        </p>
      </div>

      {/* Upcoming assessments */}
      <section className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-base font-semibold text-slate-100">
              Upcoming assessments
            </h2>
            <p className="text-xs text-slate-400">
              Quizzes and assignments scheduled for the next few days.
            </p>
          </div>
          <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
            + Create assessment
          </button>
        </div>

        {upcoming.length === 0 ? (
          <p className="text-sm text-slate-400">
            Abhi koi assessment schedule nahi hai.
          </p>
        ) : (
          <div className="space-y-3">
            {upcoming.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-slate-700 px-4 py-3 hover:bg-slate-800 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-slate-100">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {item.batch}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={
                      "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold " +
                      typeClasses[item.type]
                    }
                  >
                    {item.type}
                  </span>
                  <span
                    className={
                      "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold " +
                      statusClasses[item.status]
                    }
                  >
                    {item.status}
                  </span>
                  <p className="text-xs text-slate-300">Due {item.due}</p>
                  <button className="text-xs px-3 py-1.5 rounded-lg border border-slate-600 text-slate-100 hover:bg-slate-700 transition-colors">
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Placeholder for full list */}
      <section className="rounded-2xl bg-slate-900 border border-slate-700 p-6">
        <p className="text-sm text-slate-300">
          
        </p>
      </section>
    </div>
  );
};

export default Assessments;
