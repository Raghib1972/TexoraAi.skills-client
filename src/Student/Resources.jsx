import { FileText, Image, Upload, Video } from "lucide-react";
import React from "react";

export default function Resources() {
const resources = [
    { title: "React Notes PDF", type: "pdf", icon: FileText, size: "2.1 MB" },
    { title: "NodeJS Lecture", type: "video", icon: Video, size: "120 MB" },
    { title: "Database Diagram", type: "image", icon: Image, size: "1.4 MB" },
];

return (
    <div className="space-y-6">
      {/* Header */}
    <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Resources</h2>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
        <Upload size={18} />
        Upload Material
        </button>
    </div>

      {/* Resource Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((item, idx) => (
        <div
            key={idx}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg border transition"
        >
            <div className="flex items-center gap-3 mb-3">
            <item.icon className="w-6 h-6 text-blue-500" />
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            </div>

            <p className="text-sm text-gray-600">File Size: {item.size}</p>

            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            Download
            </button>
        </div>
        ))}
    </div>
    </div>
);
}
