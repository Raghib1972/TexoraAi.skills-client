import React from "react";

const leads = [
  { id: 1, name: "Akash", source: "Facebook Ads", stage: "New" },
  { id: 2, name: "Sneha", source: "Website", stage: "In Discussion" },
];

const AllLeads = () => (
  <div className="p-6 space-y-4">
    <h1 className="text-xl font-semibold text-slate-100">All Leads</h1>

    <table className="w-full text-sm text-left text-slate-300">
      <thead className="text-xs uppercase text-slate-400 border-b border-slate-800">
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Source</th>
          <th className="py-2">Stage</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((l) => (
          <tr key={l.id} className="border-b border-slate-900">
            <td className="py-2">{l.name}</td>
            <td className="py-2 text-slate-400">{l.source}</td>
            <td className="py-2 text-slate-300">{l.stage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AllLeads;
