import React from "react";

const NewEnrollments = () => {
  const enrollments = [
    { id: 1, name: "Ravi", course: "Full Stack", amount: "₹15,000" },
    { id: 2, name: "Meera", course: "Data Science", amount: "₹18,000" },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-slate-100">New Enrollments</h1>

      <div className="space-y-2">
        {enrollments.map((e) => (
          <div
            key={e.id}
            className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 flex justify-between"
          >
            <div>
              <p className="text-sm font-medium text-slate-100">{e.name}</p>
              <p className="text-xs text-slate-400">{e.course}</p>
            </div>
            <p className="text-xs text-emerald-300">{e.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewEnrollments;
