import React from "react";

const CreateQuiz = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Assessments
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">Create Quiz</h1>
        <p className="mt-1 text-sm text-slate-400">
          Build quizzes to evaluate student understanding.
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
            placeholder="Quiz title"
          />
          <input
            className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
            placeholder="Batch / Course"
          />
        </div>

        <textarea
          rows={3}
          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
          placeholder="Instructions for the quiz (optional)."
        />

        <div className="rounded-lg bg-slate-950 border border-slate-700 p-4 space-y-3">
          <p className="text-sm font-semibold text-slate-100">
            Question 1
          </p>
          <input
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
            placeholder="Question text"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <input className="rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100" placeholder="Option A" />
            <input className="rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100" placeholder="Option B" />
            <input className="rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100" placeholder="Option C" />
            <input className="rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100" placeholder="Option D" />
          </div>
          <input
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100"
            placeholder="Correct answer (e.g. Option B)"
          />
        </div>

        <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400">
          Save quiz
        </button>
      </div>
    </div>
  );
};

export default CreateQuiz;
