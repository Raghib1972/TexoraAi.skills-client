
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../auth";

const Navbar = ({ label = "Dashboard" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentRole = auth.getCurrentRole(); // "admin" / "student" / "trainer" / "business"

  // Admin user ke liye har route par dropdown dikhana
  const showDropdown = currentRole === "admin";

  const handleRoleChange = (e) => {
    const value = e.target.value;
    navigate(`/${value}`);
  };

  return (
    <header
      className="w-full border-b bg-white/80 backdrop-blur-sm px-6 py-3 flex items-center justify-between
                 border-slate-200
                 dark:bg-slate-900/80 dark:border-slate-800"
    >
      <h1 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
      TexoraAi.skills
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {label}
        </span>

        {showDropdown && (
          <select
            className="text-xs bg-slate-800 text-white rounded px-2 py-1 outline-none
                       border border-slate-600"
            onChange={handleRoleChange}
            defaultValue={location.pathname.startsWith("/trainer")
              ? "trainer"
              : location.pathname.startsWith("/student")
              ? "student"
              : location.pathname.startsWith("/business")
              ? "business"
              : "admin"}
          >
            <option value="student">Student</option>
            <option value="trainer">Trainer</option>
            <option value="admin">Admin</option>
            <option value="business">Business Team</option>
          </select>
        )}
      </div>
    </header>
  );
};

export default Navbar;

