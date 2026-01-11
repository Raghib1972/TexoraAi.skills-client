// src/Business/Marketing/Campaigns.jsx
import React from "react";

const Campaigns = () => {
  const campaigns = [
    { id: 1, name: "Winter Offer", channel: "WhatsApp", leads: 15 },
    { id: 2, name: "New Year Blast", channel: "Facebook Ads", leads: 22 },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-slate-100">Campaigns</h1>

      <div className="space-y-2">
        {campaigns.map((c) => (
          <div
            key={c.id}
            className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 flex justify-between"
          >
            <div>
              <p className="text-sm font-medium text-slate-100">{c.name}</p>
              <p className="text-xs text-slate-400">{c.channel}</p>
            </div>
            <p className="text-xs text-emerald-300">{c.leads} leads</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
