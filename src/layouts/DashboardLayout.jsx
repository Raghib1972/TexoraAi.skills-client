import { Bell, Search, Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const colors = {
  primary: "from-blue-600 to-emerald-600",
  primarySolid: "bg-blue-600",
};

const DashboardLayout = ({ children, SidebarComponent }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const base = "/" + location.pathname.split("/")[1];

  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // ✅ THEME STATE (with persistence)
  const [theme, setTheme] = useState(
    localStorage.getItem("dashboard-theme") || "light"
  );

  // ✅ APPLY THEME TO ROOT
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("dashboard-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-slate-100 transition-colors duration-300">
      {/* BODY */}
      <div className="flex h-screen">

        {/* SIDEBAR */}
        {sidebarOpen && (
          <aside className="hidden md:flex md:w-60 flex-col bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-slate-800">
            {SidebarComponent && <SidebarComponent />}
          </aside>
        )}

        {/* MAIN */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* TOP BAR */}
          <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800">

            {/* SEARCH */}
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-900">
                <Search size={18} className="text-gray-500 dark:text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search batches, students, videos, documents..."
                  className="flex-1 bg-transparent outline-none text-sm text-gray-900 dark:text-slate-100 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-4 ml-4">

              {/* 🌙 THEME TOGGLE */}
              <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                title="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* 🔔 NOTIFICATIONS */}
              <button
                onClick={() => navigate(`${base}/notifications`)}
                className="relative bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                <Bell size={18} />
                <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3" />
              </button>

              {/* 👤 PROFILE */}
              <button
                onClick={() => navigate(`${base}/profile`)}
                className={`w-10 h-10 rounded-full ${colors.primarySolid} flex items-center justify-center text-white font-semibold`}
              >
                S
              </button>
            </div>
          </div>

          {/* PAGE CONTENT */}
          <main className="flex-1 overflow-auto p-6 bg-gray-100 dark:bg-slate-900 transition-colors">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
