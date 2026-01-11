

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Video,
  FileText,
  ClipboardList,
  Calendar,
  MessageCircle,
  BookOpen,
  ChevronDown,
  ChevronRight,
  BarChart3,
  Settings,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";

const linkBase =
  "flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-colors";
const inactive =
  "text-slate-300 hover:text-white hover:bg-slate-800";
const active =
  "bg-indigo-600/20 text-indigo-200 border-l-4 border-indigo-400";

const TrainerSidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState({ content: true, reports: true });

  // 🌙 THEME STATE
  const [theme, setTheme] = useState("dark");

  // 🌙 APPLY THEME
  useEffect(() => {
    const root = document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/trainer/login");
  };

  return (
    <aside className="flex flex-col h-full py-4 text-slate-200 bg-slate-950">
      
      {/* LOGO + THEME TOGGLE */}
      <div className="flex items-center justify-between px-4 py-3 mb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold px-2 py-1 rounded text-sm">
            TexoraAI
          </span>
          <span className="font-semibold text-white">.skills</span>
        </div>

        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          {theme === "dark" ? (
            <Sun size={16} className="text-yellow-400" />
          ) : (
            <Moon size={16} className="text-slate-200" />
          )}
        </button>
      </div>

      {/* MENU */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Trainer
        </div>

        <NavLink
          to="/trainer"
          end
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/trainer/batches"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <Users size={18} />
          Batches
        </NavLink>

        {/* CONTENT MANAGEMENT */}
        <button
          onClick={() =>
            setOpen((p) => ({ ...p, content: !p.content }))
          }
          className="w-full flex items-center justify-between px-4 py-2 mt-4 text-xs font-semibold uppercase text-slate-400 hover:text-white"
        >
          <span className="flex items-center gap-2">
            <FileText size={14} />
            CONTENT MANAGEMENT
          </span>
          {open.content ? (
            <ChevronDown size={14} />
          ) : (
            <ChevronRight size={14} />
          )}
        </button>

        {open.content && (
          <div className="ml-3 mt-1 space-y-1">
            <NavLink
              to="/trainer/upload-videos"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              <Video size={16} />
              Upload Videos
            </NavLink>

            <NavLink
              to="/trainer/upload-docs"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              <FileText size={16} />
              Upload Documents
            </NavLink>

            <NavLink
              to="/trainer/courses"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              <BookOpen size={16} />
              Courses
            </NavLink>

            <NavLink
              to="/trainer/create-quiz"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              <ClipboardList size={16} />
              Create Quiz
            </NavLink>

            <NavLink
              to="/trainer/create-assignments"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              <ClipboardList size={16} />
              Assignments
            </NavLink>

            <NavLink
              to="/trainer/assessments"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              <ClipboardList size={16} />
              Assessments
            </NavLink>

            <NavLink
              to="/trainer/attendance"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              <Calendar size={16} />
              Attendance
            </NavLink>

            <NavLink
              to="/trainer/doubts-management"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              <MessageCircle size={16} />
              Doubts Management
            </NavLink>
          </div>
        )}

        {/* REPORTS */}
        <button
          onClick={() =>
            setOpen((p) => ({ ...p, reports: !p.reports }))
          }
          className="w-full flex items-center justify-between px-4 py-2 mt-4 text-xs font-semibold uppercase text-slate-400 hover:text-white"
        >
          <span className="flex items-center gap-2">
            <BarChart3 size={14} />
            REPORTS & ANALYTICS
          </span>
          {open.reports ? (
            <ChevronDown size={14} />
          ) : (
            <ChevronRight size={14} />
          )}
        </button>

        {open.reports && (
          <div className="ml-3 mt-1 space-y-1">
            <NavLink
              to="/trainer/student-reports"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              Student Reports
            </NavLink>
            <NavLink
              to="/trainer/batch-reports"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              Batch Reports
            </NavLink>
            <NavLink
              to="/trainer/performance"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              Performance Analysis
            </NavLink>
          </div>
        )}

        <div className="mt-6 px-4">
          <NavLink
            to="/trainer/settings"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <Settings size={18} />
            Settings
          </NavLink>
        </div>
      </div>

      {/* LOGOUT */}
      <div className="px-4 pt-4 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-md text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors text-sm font-medium"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default TrainerSidebar;
