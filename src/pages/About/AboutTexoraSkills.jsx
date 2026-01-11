import React from "react";

const AboutTexoraSkills = () => {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Top container */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/40 text-xs font-medium text-indigo-300 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mr-2" />
          Texora.skills · Future‑ready LMS
        </div>

        {/* Heading + intro */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
          About <span className="text-indigo-400">Texora.skills</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl">
          Texora.skills is built to centralize courses, assessments, and
          performance tracking into one intuitive platform, so every stakeholder
          can focus on real learning instead of manual admin work.
        </p>

        {/* 2‑column layout */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-start">
          {/* LEFT: text blocks */}
          <div className="space-y-8">
            {/* About roles */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-7 shadow-lg shadow-indigo-500/10">
              <h2 className="text-xl font-semibold mb-3 text-slate-50">
                Built for every learning role
              </h2>
              <p className="text-slate-300">
                It brings together role‑based dashboards for Students, Trainers,
                Admins, and Business Teams to ensure that everyone sees exactly
                what they need, when they need it.
              </p>
            </section>

            {/* Mission */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-7">
              <h2 className="text-xl font-semibold mb-3 text-slate-50">
                Our Mission
              </h2>
              <p className="text-slate-300 mb-3">
                Our mission is to empower learners with practical, job‑ready
                skills while giving trainers and institutions powerful tools to
                design, deliver, and measure high‑impact learning experiences.
              </p>
              <p className="text-slate-300">
                Texora.skills aims to bridge the gap between traditional
                classrooms and modern digital learning by combining structured
                curriculum, live interaction, and continuous feedback in a
                single system.
              </p>
            </section>

            {/* Why + Vision */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-7 space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-slate-50">
                  Why Texora.skills
                </h2>
                <p className="text-slate-300 mb-2">
                  Today’s learners need more than just recorded videos—they need
                  clarity, structure, and real‑time feedback to stay motivated
                  and achieve their goals.
                </p>
                <p className="text-slate-300">
                  Texora.skills is designed to deliver that experience with
                  clean dashboards, insightful analytics, and a flexible
                  architecture that fits classrooms, academies, and corporate
                  training programs alike.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <h2 className="text-xl font-semibold mb-2 text-slate-50">
                  Our Vision
                </h2>
                <p className="text-slate-300 mb-2">
                  Our vision is to become the trusted learning backbone for
                  institutes and organizations that want to prepare their
                  learners for the future of work.
                </p>
                <p className="text-slate-300">
                  By continuously improving with new features, automation, and
                  smart insights, Texora.skills aims to make high‑quality
                  education accessible, measurable, and truly learner‑centric.
                </p>
              </div>
            </section>
          </div>

          {/* RIGHT: dashboard preview style card */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-5 md:p-6 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-56 w-56 bg-indigo-500/20 blur-3xl rounded-full" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Unified dashboards
                  </p>
                  <h3 className="text-lg font-semibold text-slate-50">
                    One platform. Four roles.
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Live preview
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between bg-slate-800/70 rounded-xl px-3 py-2">
                  <span className="font-medium text-slate-100">
                    Student Dashboard
                  </span>
                  <span className="text-emerald-300">
                    Progress · Courses · Certificates
                  </span>
                </div>
                <div className="flex justify-between bg-slate-800/60 rounded-xl px-3 py-2">
                  <span className="font-medium text-slate-100">
                    Trainer Dashboard
                  </span>
                  <span className="text-indigo-300">
                    Sessions · Assignments · Analytics
                  </span>
                </div>
                <div className="flex justify-between bg-slate-800/60 rounded-xl px-3 py-2">
                  <span className="font-medium text-slate-100">
                    Admin Dashboard
                  </span>
                  <span className="text-amber-300">
                    Users · Batches · Permissions
                  </span>
                </div>
                <div className="flex justify-between bg-slate-800/60 rounded-xl px-3 py-2">
                  <span className="font-medium text-slate-100">
                    Business Team
                  </span>
                  <span className="text-fuchsia-300">
                    Training ROI · Reports · Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What we offer – cards row */}
      <section className="border-t border-slate-800 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-6 text-slate-50">
            What we offer
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Students */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
              <p className="text-sm font-semibold text-sky-300 mb-2">
                For Students
              </p>
              <p className="text-sm text-slate-300">
                Guided learning paths, hands‑on projects, quizzes, and progress
                analytics that help them grow from beginner to job‑ready
                professionals.
              </p>
            </div>
            {/* Trainers */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
              <p className="text-sm font-semibold text-violet-300 mb-2">
                For Trainers
              </p>
              <p className="text-sm text-slate-300">
                Easy course creation, assignment management, live session
                support, and automated grading to streamline teaching workflows.
              </p>
            </div>
            {/* Admin & Business */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
              <p className="text-sm font-semibold text-emerald-300 mb-2">
                For Admins &amp; Business Teams
              </p>
              <p className="text-sm text-slate-300">
                Central control over enrollments, attendance, reports, and
                certifications to manage learning at scale and track ROI on
                training.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTexoraSkills;
