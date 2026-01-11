import React, { useState } from "react";

const RoleTabs = () => {
const [active, setActive] = useState("Admin");

const tabs = ["Admin", "Teacher", "Student"];

return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      {/* Tabs Row */}
    <div className="flex gap-4 border-b pb-3">

        {tabs.map((tab) => (
        <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 font-medium transition rounded-xl 
            ${
                active === tab
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }
            `}
        >
            {tab}
        </button>
        ))}

    </div>

      {/* Tab Content */}
    <div className="mt-6">

        {active === "Admin" && (
        <div className="text-gray-700 text-lg font-medium">
            Admin dashboard content goes here...
        </div>
        )}

        {active === "Teacher" && (
        <div className="text-gray-700 text-lg font-medium">
            Teacher panel content goes here...
        </div>
        )}

        {active === "Student" && (
        <div className="text-gray-700 text-lg font-medium">
            Student dashboard content goes here...
        </div>
        )}

    </div>

    </div>
);
};

export default RoleTabs;


