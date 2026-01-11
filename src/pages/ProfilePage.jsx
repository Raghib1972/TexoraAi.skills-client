import React from "react";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const { pathname } = useLocation();
  const isStudent = pathname.startsWith("/student");
  const isTrainer = pathname.startsWith("/trainer");
  const isAdmin = pathname.startsWith("/admin");
  const isBusiness = pathname.startsWith("/business");

  let user;

  if (isStudent) {
    user = {
      name: "Student User",
      role: "Student",
      email: "student@example.com",
      id: "STU-0012",
    };
  } else if (isTrainer) {
    user = {
      name: "Trainer User",
      role: "Trainer",
      email: "trainer@example.com",
      id: "TRN-0005",
    };
  } else if (isBusiness) {
    user = {
      name: "Business User",
      role: "Business Team",
      email: "business@example.com",
      id: "BUS-0003",
    };
  } else if (isAdmin) {
    user = {
      name: "Admin User",
      role: "Admin",
      email: "admin@example.com",
      id: "ADM-0001",
    };
  } else {
    user = {
      name: "LMS User",
      role: "User",
      email: "user@example.com",
      id: "USR-0001",
    };
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-xl font-semibold text-white shadow-md">
          {user.name.charAt(0)}
        </div>

        <div>
          <h1 className="text-xl font-semibold text-slate-100">
            {user.name}
          </h1>
          <p className="text-sm text-slate-400">
            {user.role} · ID: {user.id}
          </p>
        </div>
      </div>

      <div className="max-w-xl rounded-xl border border-slate-700/80 bg-slate-900/80 p-5 space-y-4">
        <div>
          <h2 className="text-sm font-medium text-slate-200">
            Account details
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            {isStudent &&
              "Student account information for LMS."}
            {isTrainer &&
              "Trainer account information for LMS."}
            {isAdmin &&
              "Admin account information and controls."}
            {isBusiness &&
              "Business team account information."}
            {!isStudent && !isTrainer && !isAdmin && !isBusiness &&
              "User account information."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-slate-500 text-xs uppercase tracking-wide">
              Name
            </p>
            <p className="text-slate-100 mt-1">{user.name}</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase tracking-wide">
              Role
            </p>
            <p className="text-slate-100 mt-1">{user.role}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-slate-500 text-xs uppercase tracking-wide">
              Email
            </p>
            <p className="text-slate-100 mt-1">{user.email}</p>
          </div>
        </div>

        <div className="pt-2 flex gap-3">
          <button className="px-4 py-2 rounded-md bg-violet-600 text-xs font-medium text-white hover:bg-violet-500">
            Edit profile
          </button>
          <button className="px-4 py-2 rounded-md border border-slate-600 text-xs font-medium text-slate-200 hover:bg-slate-800">
            Change password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
