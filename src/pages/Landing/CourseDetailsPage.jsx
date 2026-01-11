
import {
    ArrowLeft,
    Award,
    BookOpen,
    Calendar,
    CheckCircle,
    Clock,
    Moon,
    PlayCircle,
    Star,
    Sun,
    Target,
    Users,
    X,
    Zap
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CourseDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const courseData = location.state?.course;

  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    if (!courseData) {
      navigate('/courses');
    }
  }, [courseData, navigate]);

  if (!courseData) return null;

  const learningOutcomes = [
    "Build and launch a real product from scratch",
    "Master product strategy and roadmapping",
    "Learn data-driven decision making",
    "Understand user research and validation",
    "Manage stakeholders and cross-functional teams",
    "Create compelling product narratives"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <div className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-2 py-2">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/courses')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <ArrowLeft size={20} />
              <span>Back to courses</span>
            </button>

            <button
              onClick={() => {
                const next = !dark;
                setDark(next);
                localStorage.setItem("theme", next ? "dark" : "light");
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            >
              {dark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-sm text-yellow-800 dark:text-yellow-400 mb-2">
                <Award size={14} />
                <span>Featured Program</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {courseData.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {courseData.instructorFull} • {courseData.instructorTitle}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">{courseData.rating}</span>
                  <span>({courseData.reviews})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{courseData.students} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{courseData.duration}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => setShowEnrollModal(true)}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition"
              >
                Enroll Now • {courseData.price}
              </button>
              <button
                onClick={() => navigate('/syllabus', { state: { course: courseData } })}
                className="border border-gray-300 dark:border-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition"
              >
                View Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                About this program
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {courseData.description}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-4 border border-blue-200/50 dark:border-blue-800/50">
                  <div className="flex items-center gap-2 mb-2">
                    <PlayCircle className="text-blue-600 dark:text-blue-400" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">{courseData.liveSessions}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Live Sessions</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl p-4 border border-emerald-200/50 dark:border-emerald-800/50">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="text-emerald-600 dark:text-emerald-400" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">{courseData.totalLessons}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Lessons</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-4 border border-purple-200/50 dark:border-purple-800/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="text-purple-600 dark:text-purple-400" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">{courseData.projects}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">What You'll Learn</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modules */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Course Modules</h3>
              <div className="space-y-2">
                {courseData.modules.map((module, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enroll Card */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {courseData.price}
                </p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">Limited time offer</p>
              </div>

              <button
                onClick={() => setShowEnrollModal(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition mb-4"
              >
                Enroll Now
              </button>

              <button
                onClick={() => navigate('/syllabus', { state: { course: courseData } })}
                className="w-full border border-gray-300 dark:border-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition mb-6"
              >
                View Full Syllabus
              </button>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>Next cohort starting soon</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Clock size={16} />
                  <span>{courseData.duration} intensive program</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Users size={16} />
                  <span>Small cohort (max 30 students)</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50">
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                Program Highlights
              </h3>
              <div className="space-y-3">
                {courseData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Zap size={18} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enroll Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl max-w-md w-full p-8 border border-gray-200 dark:border-gray-800 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to start?</h3>
              <button
                onClick={() => setShowEnrollModal(false)}
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30 rounded-xl p-4">
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{courseData.price}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">One-time payment</p>
              </div>

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-600" />
                  <span>Full access to all course materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-600" />
                  <span>1:1 mentorship sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-600" />
                  <span>Lifetime community access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-600" />
                  <span>Industry certification</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition">
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
