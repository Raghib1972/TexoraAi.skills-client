import React, { useEffect, useState } from "react";
import axios from "axios";
import auth from "../../auth";

const API_GATEWAY = "http://localhost:9000";

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const role = auth.getCurrentRole(); // student / trainer / admin

  const loadFiles = () => {
    setLoading(true);
    axios
      .get(`${API_GATEWAY}/api/files`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
        },
      })
      .then((res) => {
        // Spring Page response
        setFiles(res.data?.content || []);
      })
      .catch((err) => {
        console.error("Failed to load files", err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadFiles();
  }, []);

  const handleDownload = (fileName) => {
    window.open(`${API_GATEWAY}/api/files/download/${fileName}`, "_blank");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this file?")) return;

    try {
      await axios.delete(`${API_GATEWAY}/api/files/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
          "X-ROLE": role.toUpperCase(), // REQUIRED BY BACKEND
        },
      });

      loadFiles();
    } catch (err) {
      console.error("Delete failed", err);
      alert("Delete failed");
    }
  };

  if (loading) {
    return <p className="text-slate-400">Loading files...</p>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-100">Resources</h1>

      {files.length === 0 && (
        <p className="text-slate-400">No files uploaded yet.</p>
      )}

      {files.map((file) => (
        <div
          key={file.id}
          className="flex items-center justify-between rounded-xl bg-slate-900 border border-slate-700 p-4"
        >
          <div>
            <p className="text-sm font-semibold text-slate-100">
              {file.originalName}
            </p>
            <p className="text-xs text-slate-400">
              {file.type} • {Math.round(file.size / 1024)} KB
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => handleDownload(file.storedName)}
              className="px-3 py-1 text-xs rounded bg-indigo-600 text-white hover:bg-indigo-500"
            >
              Download
            </button>

            {role === "admin" && (
              <button
                onClick={() => handleDelete(file.id)}
                className="px-3 py-1 text-xs rounded bg-red-600 text-white hover:bg-red-500"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileList;