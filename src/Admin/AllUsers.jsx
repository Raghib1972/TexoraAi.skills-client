import React, { useState } from "react";
import { Edit, Search, Trash, UserPlus } from "lucide-react";

const AllUsers = () => {
  const [search, setSearch] = useState("");

  const users = [
    { name: "Aman Sharma", email: "aman@gmail.com", role: "Admin" },
    { name: "Priya Singh", email: "priya@gmail.com", role: "Teacher" },
    { name: "Rohit Verma", email: "rohit@gmail.com", role: "Student" },
    { name: "Sara Malik", email: "sara@gmail.com", role: "Student" },
  ];

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const roleColor = (role) => {
    if (role === "Admin") return "bg-red-100 text-red-600";
    if (role === "Teacher") return "bg-blue-100 text-blue-600";
    return "bg-green-100 text-green-600";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-100">Users</h1>
        <button className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-500 transition">
          <UserPlus size={18} />
          Add user
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full md:w-1/3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search users..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-slate-900/80 rounded-xl overflow-hidden border border-slate-800 text-sm">
          <thead className="bg-slate-900">
            <tr>
              <th className="p-4 text-left text-slate-300">Name</th>
              <th className="p-4 text-left text-slate-300">Email</th>
              <th className="p-4 text-left text-slate-300">Role</th>
              <th className="p-4 text-left text-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, idx) => (
              <tr
                key={idx}
                className="border-t border-slate-800 hover:bg-slate-800/70 transition"
              >
                <td className="p-4 text-slate-100">{user.name}</td>
                <td className="p-4 text-slate-300">{user.email}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${roleColor(
                      user.role
                    )}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="p-4 flex gap-3">
                  <button className="text-blue-400 hover:text-blue-300">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
