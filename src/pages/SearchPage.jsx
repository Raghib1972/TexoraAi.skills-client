
import React from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const { pathname } = useLocation();
  const isStudent = pathname.startsWith("/student");
  const isTrainer = pathname.startsWith("/trainer");
  const isAdmin = pathname.startsWith("/admin");
  const isBusiness = pathname.startsWith("/business");

  // Heading role-wise (future use ke liye ready)
  const heading = isStudent
    ? "Student search"
    : isTrainer
    ? "Trainer search"
    : isBusiness
    ? "Business search"
    : isAdmin
    ? "Admin search"
    : "Search";

  const description = isStudent
    ? "Apne courses, assignments, documents aur doubts ko yahan se search karo."
    : isTrainer
    ? "Batches, students, uploaded content aur assessments ko yahan se search karo."
    : isBusiness
    ? "Leads, enrollments, invoices aur campaigns ko yahan search kar sakte hain."
    : isAdmin
    ? "Users, roles, payments aur system logs ko yahan se search karo."
    : "Global search across your LMS.";

  return (
    <div className="p-6 space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-slate-100">
          {heading}
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          {description}
        </p>
      </div>

      {/* Examples – abhi sirf Student ke liye */}
      {isStudent && (
        <div className="text-xs text-slate-500">
          <p>Examples:</p>
          <ul className="mt-1 list-disc list-inside space-y-1">
            <li>"React Week 3 notes"</li>
            <li>"Assignment 2 deadline"</li>
            <li>"Doubt: Hooks"</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
