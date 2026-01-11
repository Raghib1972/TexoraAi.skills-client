import React from "react";

const invoices = [
  { id: "INV-101", client: "Ravi", amount: "₹15,000", status: "Paid" },
  { id: "INV-102", client: "Meera", amount: "₹18,000", status: "Pending" },
];

const Invoices = () => (
  <div className="p-6 space-y-4">
    <h1 className="text-xl font-semibold text-slate-100">Invoices</h1>

    <table className="w-full text-sm text-left text-slate-300">
      <thead className="text-xs uppercase text-slate-400 border-b border-slate-800">
        <tr>
          <th className="py-2">Invoice</th>
          <th className="py-2">Client</th>
          <th className="py-2">Amount</th>
          <th className="py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((i) => (
          <tr key={i.id} className="border-b border-slate-900">
            <td className="py-2">{i.id}</td>
            <td className="py-2">{i.client}</td>
            <td className="py-2">{i.amount}</td>
            <td className="py-2 text-xs">{i.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Invoices;
