import React from "react";

const TrainerProfile = () => {
  return (
    <div className="max-w-md">
      {/* Profile header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white font-semibold">
          T
        </div>

        <div>
          <h1 className="text-lg font-semibold text-white">
            Trainer User
          </h1>
          <p className="text-xs text-slate-400">
            Trainer • ID: TRN-0005
          </p>
        </div>
      </div>

      {/* Profile card */}
      <div className="rounded-xl bg-slate-900 border border-slate-700 p-4 space-y-3">
        <h2 className="text-sm font-semibold text-white">
          Account details
        </h2>

        <div className="text-sm text-slate-300 space-y-1">
          <p>
            <span className="text-slate-400">Name:</span> Trainer User
          </p>
          <p>
            <span className="text-slate-400">Role:</span> Trainer
          </p>
          <p>
            <span className="text-slate-400">Email:</span> trainer@example.com
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <button className="px-3 py-1.5 rounded-md bg-indigo-600 text-white text-xs hover:bg-indigo-500 transition">
            Edit profile
          </button>

          <button className="px-3 py-1.5 rounded-md bg-slate-800 text-white text-xs hover:bg-slate-700 transition">
            Change password
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfile;
