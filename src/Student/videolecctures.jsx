import React, { useState } from "react";
import { PlayCircle, Clock } from "lucide-react";

const VideoLectures = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const videos = [
    { title: "React Basics – Components & Props", duration: "32 min", tag: "React" },
    { title: "State & Effects in React", duration: "28 min", tag: "React" },
    { title: "Node.js Intro – Event Loop", duration: "24 min", tag: "Backend" },
    { title: "Design Systems with Figma", duration: "41 min", tag: "Design" }
  ];

  const tags = ["All", "React", "Backend", "Design"];

  const filtered =
    selectedTag === "All"
      ? videos
      : videos.filter((v) => v.tag === selectedTag);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
          Video Lectures
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          Watch your course recordings and live session replays.
        </p>
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={
              "px-3 py-1.5 rounded-full text-xs font-medium border transition " +
              (selectedTag === tag
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-transparent text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800")
            }
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Videos list */}
      <div className="space-y-3">
        {filtered.map((v) => (
          <div
            key={v.title}
            className="flex items-center justify-between px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-600/10 flex items-center justify-center">
                <PlayCircle className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                  {v.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <Clock className="inline w-3 h-3 mr-1" />
                  {v.duration} · {v.tag}
                </p>
              </div>
            </div>

            <button className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLectures;
