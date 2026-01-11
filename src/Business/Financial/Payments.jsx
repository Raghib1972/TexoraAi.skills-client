import React from "react";

const payments = [
  { id: 1, client: "Ravi", mode: "UPI", amount: "₹15,000", date: "20 Dec" },
  { id: 2, client: "Meera", mode: "Card", amount: "₹10,000", date: "21 Dec" },
];

const Payments = () => (
  <div className="p-6 space-y-4">
    <h1 className="text-xl font-semibold text-slate-100">Payments</h1>

    <div className="space-y-2">
      {payments.map((p) => (
        <div
          key={p.id}
          className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 flex justify-between"
        >
          <div>
            <p className="text-sm font-medium text-slate-100">{p.client}</p>
            <p className="text-xs text-slate-400">
              {p.mode} · {p.date}
            </p>
          </div>
          <p className="text-xs text-emerald-300">{p.amount}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Payments;
