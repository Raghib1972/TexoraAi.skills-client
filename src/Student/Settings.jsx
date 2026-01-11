import React from "react";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
          Settings
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          Manage your account, preferences and privacy for this LMS.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {/* Profile */}
        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Profile
          </h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Name, email and basic information.
          </p>
        </section>

        {/* Security */}
        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Security
          </h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Password and login settings.
          </p>
        </section>

        {/* Notifications */}
        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Notifications
          </h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Email and in‑app alerts for classes, assignments and announcements.
          </p>
        </section>

        {/* Appearance */}
        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Appearance
          </h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Theme preferences (light / dark) and sidebar layout.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Settings;
