import React from "react";
import { Clock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ApprovalPending() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black">
      <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">

        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
            <Clock className="text-yellow-500" size={32} />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Approval Pending
        </h1>

        {/* MESSAGE */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          Your application has been submitted successfully.
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Our team is reviewing your details. You will get access once your
          account is approved.
        </p>

        {/* INFO */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-600 dark:text-blue-400">
          <Mail size={16} />
          <span>You will be notified via email</span>
        </div>

        {/* ACTION */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
