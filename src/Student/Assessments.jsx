import React, { useState } from "react";
import { FileText, Calendar } from "lucide-react";

const Assessments = () => {
const assessments = [
    {
    title: "React Basics Quiz",
    due: "2025-01-20",
    status: "Pending",
    score: "-",
    },
    {
    title: "JavaScript Assignment",
    due: "2025-01-25",
    status: "Completed",
    score: "85%",
    },
    {
    title: "Backend Test",
    due: "2025-01-30",
    status: "Pending",
    score: "-",
    },
    {
    title: "UI/UX Design Task",
    due: "2025-02-05",
    status: "Completed",
    score: "92%",
    },
];

const statusColor = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-600";
    return "bg-yellow-100 text-yellow-700";
};

return (
    <div className="p-6 space-y-6">

    <h1 className="text-2xl font-bold">Assessments</h1>

      {/* Assessment Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assessments.map((item, idx) => (
        <div
            key={idx}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <FileText className="text-blue-600" />
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
            <Calendar size={16} />
            Due: <span className="font-medium">{item.due}</span>
            </div>

            <span
            className={`px-3 py-1 text-sm rounded-full ${statusColor(
                item.status
            )}`}
            >
            {item.status}
            </span>

            <p className="mt-3 text-gray-700 text-sm">
            Score: <span className="font-semibold">{item.score}</span>
            </p>

            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            View Assessment
            </button>
        </div>
        ))}
    </div>
    </div>
);
};

export default Assessments;
