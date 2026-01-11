import React from "react";
import { Bell, CheckCircle } from "lucide-react";

const TrainerNotifications = () => {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white">
            Trainer notifications
          </h1>
          <p className="text-sm text-slate-400">
            Batches, students, doubts aur assessment related alerts yahan dikhenge.
          </p>
        </div>

        <button className="text-xs text-indigo-400 hover:text-indigo-300">
          Mark all as read
        </button>
      </div>

      {/* Notification list */}
      <div className="space-y-3">
        {/* Notification 1 */}
        <div className="flex items-start gap-3 rounded-xl bg-slate-900 border border-slate-700 p-4">
          <div className="p-2 rounded-full bg-indigo-500/20">
            <Bell size={16} className="text-indigo-400" />
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium text-white">
              New doubt raised
            </p>
            <p className="text-xs text-slate-400">
              A new doubt is raised in <b>React Hooks</b> topic (Batch A).
            </p>
          </div>

          <span className="text-xs text-slate-500">10 min ago</span>
        </div>

        {/* Notification 2 */}
        <div className="flex items-start gap-3 rounded-xl bg-slate-900 border border-slate-700 p-4">
          <div className="p-2 rounded-full bg-emerald-500/20">
            <CheckCircle size={16} className="text-emerald-400" />
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium text-white">
              Attendance pending
            </p>
            <p className="text-xs text-slate-400">
              Today’s batch attendance has not been marked yet.
            </p>
          </div>

          <span className="text-xs text-slate-500">2 hr ago</span>
        </div>
      </div>
    </div>
  );
};

export default TrainerNotifications;
