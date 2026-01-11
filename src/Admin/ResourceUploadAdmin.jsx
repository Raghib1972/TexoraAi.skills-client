
import React, { useState } from "react";
import axios from "axios";

const ALLOWED_TYPES = {
  document: ["application/pdf"],
  video: ["video/mp4", "video/mpeg", "video/quicktime"],
  diagram: ["image/png", "image/jpeg", "image/svg+xml"],
};

const ResourceUploadAdmin = () => {
  const [type, setType] = useState("document");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    const allowed = ALLOWED_TYPES[type];
    if (!allowed.includes(selected.type)) {
      alert(`Galat file type. Yaha sirf ${type} allowed hai.`);
      e.target.value = "";
      return;
    }
    setFile(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !file) {
      alert("Title aur file dono required hain.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("type", type);
    formData.append("file", file);

    try {
      setUploading(true);
      await axios.post("/api/admin/resources", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Upload successful");
      setTitle("");
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("Upload fail ho gaya");
    } finally {
      setUploading(false);
    }
  };

  const acceptAttr =
    type === "document"
      ? ".pdf"
      : type === "video"
      ? "video/*"
      : "image/png,image/jpeg,image/svg+xml";

  // 👉 yaha se dynamic label
  const typeLabel =
    type === "document" ? "Document (PDF)" : type === "video" ? "Video" : "Diagram (Image)";

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Upload {typeLabel}</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        {/* Type select */}
        <div className="flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              value="document"
              checked={type === "document"}
              onChange={(e) => {
                setType(e.target.value);
                setFile(null);
              }}
            />
            Document (PDF)
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              value="video"
              checked={type === "video"}
              onChange={(e) => {
                setType(e.target.value);
                setFile(null);
              }}
            />
            Video
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              value="diagram"
              checked={type === "diagram"}
              onChange={(e) => {
                setType(e.target.value);
                setFile(null);
              }}
            />
            Diagram (Image)
          </label>
        </div>

        {/* Title */}
        <div>
          <label className="block mb-1 text-sm">Title ({typeLabel})</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 bg-slate-900 text-slate-50"
            placeholder={typeLabel}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* File */}
        <div>
          <label className="block mb-1 text-sm">File ({typeLabel})</label>
          <input type="file" accept={acceptAttr} onChange={handleFileChange} />
          {file && (
            <p className="text-xs text-slate-400 mt-1">
              Selected: {file.name} ({Math.round(file.size / 1024)} KB)
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={uploading}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded"
        >
          {uploading ? "Uploading..." : `Upload ${typeLabel}`}
        </button>
      </form>
    </div>
  );
};

export default ResourceUploadAdmin;
