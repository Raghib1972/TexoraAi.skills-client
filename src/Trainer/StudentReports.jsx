import React from "react";

const StudentReports = () => {
  const rows = [
    { name: "Aman Kumar", batch: "Full Stack A", progress: "85%", attendance: "92%" },
    { name: "Neha Sharma", batch: "React Evening", progress: "78%", attendance: "88%" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Reports
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Student Reports
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          View individual performance across all batches.
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-slate-400 border-b border-slate-700">
            <tr>
              <th className="py-2">Student</th>
              <th className="py-2">Batch</th>
              <th className="py-2">Course progress</th>
              <th className="py-2">Attendance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {rows.map((r) => (
              <tr key={r.name} className="text-slate-100">
                <td className="py-2">{r.name}</td>
                <td className="py-2">{r.batch}</td>
                <td className="py-2">{r.progress}</td>
                <td className="py-2">{r.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentReports;
