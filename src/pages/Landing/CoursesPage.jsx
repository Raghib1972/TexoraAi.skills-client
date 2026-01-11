
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Users,
  Star,
  ArrowRight,
  Sun,
  Moon,
  ArrowLeft
} from 'lucide-react';

export default function CoursesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("product");
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const courses = {
    product: [
      {
        id: 1,
        title: "Product Management Mastery",
        instructor: "Ex-Google PM",
        instructorFull: "Dr. Marily Nika",
        instructorTitle: "GenAI Product Builder @Google, ex-Meta",
        duration: "8 weeks",
        students: "2,500+",
        rating: 4.9,
        reviews: 318,
        description: "Master product lifecycle from ideation to launch. Learn roadmapping, prioritization, stakeholder management & metrics that matter.",
        modules: ["Discovery & Research", "Roadmapping", "Prioritization Frameworks", "Launch Strategy", "Metrics & Analytics"],
        price: "₹49,000",
        highlights: ["Live sessions with Google PMs", "Real case studies", "1:1 mentorship", "Job referral support"],
        liveSessions: 19,
        totalLessons: 86,
        projects: 3,
      },
      {
        id: 2,
        title: "Product Analytics",
        instructor: "Ex-Amazon",
        instructorFull: "Sarah Chen",
        instructorTitle: "Senior PM @Amazon, Data Analytics Expert",
        duration: "6 weeks",
        students: "1,800+",
        rating: 4.8,
        reviews: 245,
        description: "Data-driven product decisions. Master A/B testing, cohort analysis, funnel optimization & retention strategies.",
        modules: ["SQL for Product Managers", "Experimentation", "Funnel Analysis", "Retention Metrics", "Customer Segmentation"],
        price: "₹39,000",
        highlights: ["Amazon case studies", "Live SQL projects", "Advanced Mixpanel", "Retention frameworks"],
        liveSessions: 15,
        totalLessons: 68,
        projects: 2,
      },
      {
        id: 3,
        title: "Product Strategy",
        instructor: "Ex-Meta",
        instructorFull: "Michael Park",
        instructorTitle: "Strategic PM @Meta, Growth Specialist",
        duration: "10 weeks",
        students: "2,100+",
        rating: 4.9,
        reviews: 289,
        description: "Strategic frameworks for product success. Positioning, competitive analysis, growth strategies & portfolio management.",
        modules: ["Market Analysis", "Competitive Strategy", "Growth Playbooks", "Portfolio Management", "Pricing Strategy"],
        price: "₹59,000",
        highlights: ["Meta growth case studies", "Strategy templates", "Live workshops", "Executive simulations"],
        liveSessions: 22,
        totalLessons: 95,
        projects: 4,
      },
    ],
    design: [
      {
        id: 4,
        title: "UI/UX Design Bootcamp",
        instructor: "Ex-Airbnb Designer",
        instructorFull: "Emma Rodriguez",
        instructorTitle: "Lead Designer @Airbnb, Design Systems Expert",
        duration: "12 weeks",
        students: "3,200+",
        rating: 5.0,
        reviews: 412,
        description: "Complete UI/UX journey from research to prototype. Figma mastery, design systems & portfolio projects.",
        modules: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Portfolio Building"],
        price: "₹69,000",
        highlights: ["Airbnb case studies", "Figma certification", "Live design reviews", "Job ready portfolio"],
        liveSessions: 24,
        totalLessons: 105,
        projects: 5,
      },
      {
        id: 5,
        title: "Design Systems",
        instructor: "Ex-Netflix",
        instructorFull: "James Liu",
        instructorTitle: "Design Systems Lead @Netflix",
        duration: "8 weeks",
        students: "1,500+",
        rating: 4.8,
        reviews: 198,
        description: "Build scalable design systems like Netflix. Components, tokens, documentation & developer handoff.",
        modules: ["Component Libraries", "Design Tokens", "Documentation", "Dev Handoff", "Scale Patterns"],
        price: "₹45,000",
        highlights: ["Netflix system breakdown", "Figma + Storybook", "Live system audits", "Enterprise patterns"],
        liveSessions: 16,
        totalLessons: 72,
        projects: 3,
      },
      {
        id: 6,
        title: "User Research Pro",
        instructor: "Ex-Microsoft",
        instructorFull: "Dr. Priya Mehta",
        instructorTitle: "UX Research Lead @Microsoft",
        duration: "6 weeks",
        students: "1,900+",
        rating: 4.7,
        reviews: 224,
        description: "Research methods that drive product decisions. Interviews, surveys, usability testing & synthesis.",
        modules: ["Interview Techniques", "Survey Design", "Usability Testing", "Synthesis Methods", "Stakeholder Reports"],
        price: "₹35,000",
        highlights: ["Microsoft research frameworks", "Live user testing", "Report templates", "Stakeholder presentations"],
        liveSessions: 14,
        totalLessons: 58,
        projects: 2,
      },
    ],
    growth: [
      {
        id: 7,
        title: "Growth Marketing",
        instructor: "Ex-Uber Growth",
        instructorFull: "Alex Kumar",
        instructorTitle: "Growth Lead @Uber, Scaling Expert",
        duration: "8 weeks",
        students: "2,800+",
        rating: 4.9,
        reviews: 356,
        description: "Growth loops, viral mechanics & acquisition strategies that scale businesses.",
        modules: ["Growth Frameworks", "Viral Loops", "Acquisition Channels", "Experimentation", "Scaling"],
        price: "₹49,000",
        highlights: ["Uber growth case studies", "Live experiments", "Channel deep dives", "Scaling frameworks"],
        liveSessions: 18,
        totalLessons: 82,
        projects: 3,
      },
      {
        id: 8,
        title: "SEO & Content Strategy",
        instructor: "Ex-Spotify",
        instructorFull: "Laura Martinez",
        instructorTitle: "SEO Director @Spotify",
        duration: "10 weeks",
        students: "2,300+",
        rating: 4.8,
        reviews: 287,
        description: "Organic growth mastery. Technical SEO, content systems & link building at scale.",
        modules: ["Technical SEO", "Content Systems", "Link Building", "Analytics", "Scaling Organic"],
        price: "₹55,000",
        highlights: ["Spotify SEO case studies", "Live audits", "Content calendars", "Enterprise SEO"],
        liveSessions: 20,
        totalLessons: 92,
        projects: 4,
      },
      {
        id: 9,
        title: "Performance Marketing",
        instructor: "Ex-Swiggy",
        instructorFull: "Rahul Sharma",
        instructorTitle: "Performance Marketing Head @Swiggy",
        duration: "8 weeks",
        students: "2,600+",
        rating: 4.9,
        reviews: 312,
        description: "Paid acquisition at scale. Facebook, Google, creative testing & LTV optimization.",
        modules: ["Facebook Ads", "Google Ads", "Creative Strategy", "LTV Optimization", "Scaling"],
        price: "₹47,000",
        highlights: ["Swiggy ad case studies", "Live campaign builds", "Creative testing", "ROAS frameworks"],
        liveSessions: 17,
        totalLessons: 78,
        projects: 3,
      },
    ],
  };

  const handleViewDetails = (course) => {
    navigate('/course-details', { state: { course } });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <ArrowLeft size={20} />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              TexoraAi.skills
            </span>
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
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Build Your Career with the Right Skills
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose from our expert-led programs in Product, Design, and Growth
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 p-1 border border-blue-500/20">
              {["product", "design", "growth"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full text-sm font-medium capitalize transition-all ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-blue-500"
                  }`}
                >
                  {tab === "product" ? "Product" : tab === "design" ? "Design" : "Growth & Marketing"}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {courses[activeTab].map((course) => (
              <div
                key={course.id}
                className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-zinc-900 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {course.instructor}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen size={16} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} /> {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    {course.rating}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {course.description}
                </p>

                <button
                  onClick={() => handleViewDetails(course)}
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/50 transition flex items-center justify-center gap-2"
                >
                  View details <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
