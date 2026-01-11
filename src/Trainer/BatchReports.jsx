import React from "react";

const BatchReports = () => {
  const batches = [
    { name: "Full Stack Batch A", students: 25, avgScore: "82%", completion: "74%" },
    { name: "React Evening Batch", students: 18, avgScore: "79%", completion: "68%" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Reports
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Batch Reports
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Compare performance across batches.
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-slate-400 border-b border-slate-700">
            <tr>
              <th className="py-2">Batch</th>
              <th className="py-2">Students</th>
              <th className="py-2">Avg score</th>
              <th className="py-2">Completion</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {batches.map((b) => (
              <tr key={b.name} className="text-slate-100">
                <td className="py-2">{b.name}</td>
                <td className="py-2">{b.students}</td>
                <td className="py-2">{b.avgScore}</td>
                <td className="py-2">{b.completion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BatchReports;
