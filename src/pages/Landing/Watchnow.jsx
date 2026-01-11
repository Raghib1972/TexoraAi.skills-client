
import React, { useState, useEffect } from "react";
import {
  PlayCircle,
  Users,
  Play,
  Pause,
  Volume2,
  Maximize,
  Sparkles,
  Sun,
  Moon,
  Youtube,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const colors = {
  primary: "from-blue-600 to-emerald-600",
  primarySolid: "bg-blue-600",
  accent: "from-yellow-400 to-orange-500",
  muted: "text-gray-600 dark:text-gray-400",
  surface: "bg-white dark:bg-black",
};

export default function TexoraAISkills() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-slate-900 text-black dark:text-white">
      {/* Header */}
      <header className={`bg-gradient-to-r ${colors.primary} text-white py-4 px-6 shadow-lg`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8" />
            <span className="text-2xl font-bold">TexoraAI.skills</span>
          </div>
          <nav className="flex gap-4 items-center">
            {/* <button className="hover:text-yellow-300 transition-colors">Courses</button> */}
            <button
              onClick={() => setDark(!dark)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 bg-white/10 hover:bg-white/20 transition"
              aria-label="Toggle theme"
            >
              {dark ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Sub Navigation */}
      <div className={`bg-gradient-to-r ${colors.primary} text-white py-4 px-6 border-t border-white/20`}>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className={`mb-4 flex items-center gap-2 text-sm ${colors.muted} font-semibold`}>
          <span className={`bg-gradient-to-r ${colors.accent} text-transparent bg-clip-text`}>
            ⚡
          </span>
          <span className={`bg-gradient-to-r ${colors.accent} text-transparent bg-clip-text`}>
            Featured Course
          </span>
        </div>

        <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text mb-4`}>
          System Design for Velocity Coders
        </h1>

        <p className={`text-lg ${colors.muted} mb-8`}>
          Hosted by{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            Arjay McCandless
          </span>
        </p>

        {/* Video Section */}
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600/20">
          <div className="aspect-video relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-950 flex">
              <div className="flex-1 flex items-center justify-center relative">
                <div className="text-white text-left px-12 max-w-4xl">
                  <h2 className={`text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r ${colors.accent} text-transparent bg-clip-text`}>
                    You will learn my best practices for:
                  </h2>
                  <div className="space-y-4 text-xl md:text-2xl">
                    <div className="hover:translate-x-2 transition-transform">
                      <span className={`bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text font-bold`}>
                        1.
                      </span>{" "}
                      Designing Systems with AI
                    </div>
                    <div className="hover:translate-x-2 transition-transform">
                      <span className={`bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text font-bold`}>
                        2.
                      </span>{" "}
                      Avoiding common pitfalls
                    </div>
                    <div className="hover:translate-x-2 transition-transform">
                      <span className={`bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text font-bold`}>
                        3.
                      </span>{" "}
                      Good tools / frameworks to consider
                    </div>
                    <div className="hover:translate-x-2 transition-transform">
                      <span className={`bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text font-bold`}>
                        4.
                      </span>{" "}
                      Not comprehensive
                    </div>
                  </div>
                </div>
              </div>

              <div className={`absolute top-4 right-4 w-32 h-32 bg-gradient-to-br ${colors.primary} rounded-lg overflow-hidden border-2 border-yellow-400 shadow-lg`}>
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-xs text-gray-300 font-semibold">
                    Instructor Live
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4">
              <div className="flex items-center gap-4 mb-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`${colors.primarySolid} hover:bg-blue-700 text-white p-2 rounded-full transition-all`}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                <div className="flex items-center gap-2 text-white text-sm font-mono">
                  <span>3:37</span>
                  <span>/</span>
                  <span>45:36</span>
                </div>

                <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className={`h-full w-1/12 bg-gradient-to-r ${colors.accent} rounded-full`}></div>
                </div>

                <button className="text-white hover:text-yellow-400 transition-colors">
                  <Volume2 className="w-5 h-5" />
                </button>

                <button className="text-white hover:text-yellow-400 text-sm font-semibold px-2 py-1 bg-gray-800 rounded transition-colors">
                  1x
                </button>

                <button className="text-white hover:text-yellow-400 transition-colors">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
              IN THIS VIDEO
            </h3>
          </div>
          <div className="flex items-center gap-6">
            <button className={`${colors.primarySolid} hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all`}>
              SHARE THIS LESSON
            </button>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <div className={`bg-gradient-to-r ${colors.accent} p-1 rounded`}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">1,473 students</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className={`${colors.surface} p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800`}>
            <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text`}>
              About this Course
            </h3>
            <p className={`${colors.muted} leading-relaxed mb-4`}>
              Learn essential system design principles tailored for developers
              who need to move fast. This course covers practical patterns,
              scalability considerations, and real-world trade-offs that will
              help you design better systems from day one.
            </p>
            <p className={`${colors.muted} leading-relaxed`}>
              Arjay McCandless, a Software Engineer with years of experience in
              building scalable systems, shares his best practices for designing
              systems with AI, avoiding common pitfalls, and choosing the right
              tools and frameworks.
            </p>
          </div>

          <div className={`${colors.surface} p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800`}>
            <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text`}>
              What you&apos;ll learn
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-200">
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                <span className={`bg-gradient-to-r ${colors.accent} text-white font-bold text-lg p-1 rounded`}>
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Designing Systems with AI</p>
                  <p className={`text-sm ${colors.muted}`}>
                    Leverage AI tools and patterns for system architecture
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                <span className={`bg-gradient-to-r ${colors.accent} text-white font-bold text-lg p-1 rounded`}>
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Avoiding Common Pitfalls</p>
                  <p className={`text-sm ${colors.muted}`}>
                    Learn from mistakes others have made in system design
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                <span className={`bg-gradient-to-r ${colors.accent} text-white font-bold text-lg p-1 rounded`}>
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Tools & Frameworks</p>
                  <p className={`text-sm ${colors.muted}`}>
                    Discover the best tools and frameworks to consider
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                <span className={`bg-gradient-to-r ${colors.accent} text-white font-bold text-lg p-1 rounded`}>
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Practical Approach</p>
                  <p className={`text-sm ${colors.muted}`}>
                    Quick, actionable insights - not comprehensive theory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 ${colors.surface} rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800`}>
          <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text`}>
            About the Instructor
          </h3>
          <div className="flex items-start gap-6">
            <div className={`w-24 h-24 bg-gradient-to-br ${colors.primary} rounded-full flex-shrink-0 shadow-lg`}></div>
            <div>
              <h4 className="text-xl font-bold mb-2">Arjay McCandless</h4>
              <p className={`${colors.muted} mb-4`}>
                Software Engineer with extensive experience in building and
                scaling systems. Passionate about sharing practical knowledge
                and helping developers write better code faster.
              </p>
              <div className={`flex gap-4 text-sm ${colors.muted} flex-wrap`}>
                <span className={`bg-gradient-to-r ${colors.primary} text-white px-3 py-1 rounded-full font-semibold`}>
                  10+ years experience
                </span>
                <span className={`bg-gradient-to-r ${colors.accent} text-white px-3 py-1 rounded-full font-semibold`}>
                  1,473 students
                </span>
                <span className={`${colors.primarySolid} text-white px-3 py-1 rounded-full font-semibold`}>
                  System Design Expert
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-blue-600 via-emerald-600 to-teal-600 dark:from-blue-900 dark:via-emerald-900 dark:to-teal-900 border-t border-blue-500/30 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent mb-4">
              TexoraAi.skills
            </p>
            <p className="text-blue-100 dark:text-blue-200 text-sm">
              Modern learning platform for ambitious professionals who want to
              break into product, design and growth roles.
            </p>
          </div>

          <div className="text-blue-100 dark:text-blue-200 text-sm space-y-3">
            <p className="font-semibold text-white mb-2">Contact</p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs">✉</span>
              </div>
              <a href="mailto:support@texoraai.skills" className="hover:text-white transition">
                support@texoraai.skills
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs">📍</span>
              </div>
              <span>Skalholtsgatan 2, Kista, Stockholm, Sweden - 164 40</span>
            </div>
          </div>

          <div className="text-blue-100 dark:text-blue-200">
            <p className="font-semibold text-white mb-4">Connect</p>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.youtube.com/@Texoraai"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
              >
                <Youtube size={20} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/105596104"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=919210970334"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
              >
                <MessageCircle size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-blue-200 dark:text-blue-300 text-sm">
            {new Date().getFullYear()} TexoraAi.skills. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}