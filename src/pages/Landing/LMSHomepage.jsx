
import {
  ArrowRight,
  Award,
  BookOpen,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Play,
  Star,
  Sun,
  TrendingUp,
  Users,
  Youtube,
  X,
  MessageCircle,
  Menu,
  ChevronDown,
  User,
  LogOut,
  GraduationCap,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";




export default function LMSHomepage() {
  const [activeTab, setActiveTab] = useState("product");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
 // ✅ APPLY DARK CLASS TO <html>
 useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [dark]);
  // ✅ User Authentication State
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
        sessionStorage.removeItem('user');
      }
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    setUserDropdownOpen(false);
    navigate('/login');
  };
  const handleCourseClick = (course) => {
    navigate('/course-details', { state: { course } });
  };

  const companies = [
    { 
      name: "Capgemini",
      colors: "from-blue-600 to-cyan-400",
      bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30"
    },
    { 
      name: "Microsoft",
      colors: "from-blue-600 to-blue-400",
      bgGradient: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30"
    },
    { 
      name: "Google",
      colors: "from-blue-500 to-green-400",
      bgGradient: "bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30"
    },
    { 
      name: "Texora",
      colors: "from-orange-500 to-amber-500",
      bgGradient: "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30"
    },
    { 
      name: "Amazon",
      colors: "from-orange-400 to-yellow-400",
      bgGradient: "bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30"
    },
    { 
      name: "UFS",
      colors: "from-blue-700 to-indigo-500",
      bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30"
    },
    { 
      name: "Apple",
      colors: "from-gray-400 to-gray-200",
      bgGradient: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/30 dark:to-gray-800/30"
    },
    { 
      name: "Cognizant",
      colors: "from-blue-600 to-indigo-500",
      bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30"
    }
  ];

  const courses = {
    product: [
      {
        id: 1,
        title: "Product Management Mastery",
        instructor: "Ex-Google PM",
        duration: "8 weeks",
        students: "2,500+",
        rating: 4.9,
        description: "Master product lifecycle from ideation to launch. Learn roadmapping, prioritization, stakeholder management & metrics that matter.",
        modules: ["Discovery & Research", "Roadmapping", "Prioritization Frameworks", "Launch Strategy", "Metrics & Analytics"],
        price: "₹49,000",
        highlights: ["Live sessions with Google PMs", "Real case studies", "1:1 mentorship", "Job referral support"]
      },
      {
        id: 2,
        title: "Product Analytics",
        instructor: "Ex-Amazon",
        duration: "6 weeks",
        students: "1,800+",
        rating: 4.8,
        description: "Data-driven product decisions. Master A/B testing, cohort analysis, funnel optimization & retention strategies.",
        modules: ["SQL for Product Managers", "Experimentation", "Funnel Analysis", "Retention Metrics", "Customer Segmentation"],
        price: "₹39,000",
        highlights: ["Amazon case studies", "Live SQL projects", "Advanced Mixpanel", "Retention frameworks"]
      },
      {
        id: 3,
        title: "Product Strategy",
        instructor: "Ex-Meta",
        duration: "10 weeks",
        students: "2,100+",
        rating: 4.9,
        description: "Strategic frameworks for product success. Positioning, competitive analysis, growth strategies & portfolio management.",
        modules: ["Market Analysis", "Competitive Strategy", "Growth Playbooks", "Portfolio Management", "Pricing Strategy"],
        price: "₹59,000",
        highlights: ["Meta growth case studies", "Strategy templates", "Live workshops", "Executive simulations"]
      },
    ],
    design: [
      {
        id: 4,
        title: "UI/UX Design Bootcamp",
        instructor: "Ex-Airbnb Designer",
        duration: "12 weeks",
        students: "3,200+",
        rating: 5.0,
        description: "Complete UI/UX journey from research to prototype. Figma mastery, design systems & portfolio projects.",
        modules: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Portfolio Building"],
        price: "₹69,000",
        highlights: ["Airbnb case studies", "Figma certification", "Live design reviews", "Job ready portfolio"]
      },
      {
        id: 5,
        title: "Design Systems",
        instructor: "Ex-Netflix",
        duration: "8 weeks",
        students: "1,500+",
        rating: 4.8,
        description: "Build scalable design systems like Netflix. Components, tokens, documentation & developer handoff.",
        modules: ["Component Libraries", "Design Tokens", "Documentation", "Dev Handoff", "Scale Patterns"],
        price: "₹45,000",
        highlights: ["Netflix system breakdown", "Figma + Storybook", "Live system audits", "Enterprise patterns"]
      },
      {
        id: 6,
        title: "User Research Pro",
        instructor: "Ex-Microsoft",
        duration: "6 weeks",
        students: "1,900+",
        rating: 4.7,
        description: "Research methods that drive product decisions. Interviews, surveys, usability testing & synthesis.",
        modules: ["Interview Techniques", "Survey Design", "Usability Testing", "Synthesis Methods", "Stakeholder Reports"],
        price: "₹35,000",
        highlights: ["Microsoft research frameworks", "Live user testing", "Report templates", "Stakeholder presentations"]
      },
    ],
    growth: [
      {
        id: 7,
        title: "Growth Marketing",
        instructor: "Ex-Uber Growth",
        duration: "8 weeks",
        students: "2,800+",
        rating: 4.9,
        description: "Growth loops, viral mechanics & acquisition strategies that scale businesses.",
        modules: ["Growth Frameworks", "Viral Loops", "Acquisition Channels", "Experimentation", "Scaling"],
        price: "₹49,000",
        highlights: ["Uber growth case studies", "Live experiments", "Channel deep dives", "Scaling frameworks"]
      },
      {
        id: 8,
        title: "SEO & Content Strategy",
        instructor: "Ex-Spotify",
        duration: "10 weeks",
        students: "2,300+",
        rating: 4.8,
        description: "Organic growth mastery. Technical SEO, content systems & link building at scale.",
        modules: ["Technical SEO", "Content Systems", "Link Building", "Analytics", "Scaling Organic"],
        price: "₹55,000",
        highlights: ["Spotify SEO case studies", "Live audits", "Content calendars", "Enterprise SEO"]
      },
      {
        id: 9,
        title: "Performance Marketing",
        instructor: "Ex-Swiggy",
        duration: "8 weeks",
        students: "2,600+",
        rating: 4.9,
        description: "Paid acquisition at scale. Facebook, Google, creative testing & LTV optimization.",
        modules: ["Facebook Ads", "Google Ads", "Creative Strategy", "LTV Optimization", "Scaling"],
        price: "₹47,000",
        highlights: ["Swiggy ad case studies", "Live campaign builds", "Creative testing", "ROAS frameworks"]
      },
    ],
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Product Manager @ Flipkart",
      text: "LMS helped me transition from engineering to PM. The mentorship was invaluable!",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "UX Designer @ Zomato",
      text: "Best investment in my career. Landed my dream job within 3 months of completing the course.",
      rating: 5,
    },
    {
      name: "Ananya Singh",
      role: "Growth Lead @ CRED",
      text: "The practical insights and real-world case studies made all the difference.",
      rating: 5,
    },
  ];

  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@Texoraai",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/105596104",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://api.whatsapp.com/send?phone=919210970334",
    },
  ];

  const CompanyLogo = ({ company }) => {
    const logoImages = {
      Capgemini: <img src="/cap.jpg" alt="Capgemini" className="w-full h-full object-contain" />,
      Microsoft: <img src="/Micrososft.jpg" alt="Microsoft" className="w-full h-full object-contain" />,
      Google: <img src="/Google.jpg" alt="Google" className="w-full h-full object-contain" />,
      Texora: <img src="/Picture1.jpg" alt="Texora" className="w-full h-full object-contain" />,
      Amazon: <img src="/Amazone.jpg" alt="Amazon" className="w-full h-full object-contain" />,
      UFS: <img src="/UFS-Logo.jpg" alt="UFS" className="w-full h-full object-contain" />,
      Apple: <img src="/Apple.jpg" alt="Apple" className="w-full h-full object-contain" />,
      Cognizant: <img src="/cognizant.jpg" alt="Cognizant" className="w-full h-full object-contain" />
    };
    return logoImages[company.name] || null;
  };

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => navigate('/')}
          >
            TexoraAi.skills
          </div>
          
          <div className="flex items-center gap-4">
          <button
  onClick={() => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }}
  className="w-10 h-10 flex items-center justify-center rounded-full
             border border-gray-300 dark:border-gray-700
             hover:bg-gray-100 dark:hover:bg-gray-900 transition"
  aria-label="Toggle theme"
>
  {dark ? (
    <Sun className="w-5 h-5 text-yellow-400" />
  ) : (
    <Moon className="w-5 h-5 text-slate-900 dark:text-slate-200" />
  )}
</button>


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
  <button
    onClick={() => navigate("/explore-programs")}
    className="
      text-gray-800 dark:text-white
      font-medium
      hover:text-blue-500
      transition
    "
  >
    Explore Free Services
  </button>

              <a href="#mentors" className="hover:text-blue-500 transition">
                Mentors
              </a>
              <a href="#success" className="hover:text-blue-500 transition">
                Success Stories
              </a>
              <a href="#courses"  className="hover:text-blue-500 transition">
              Courses
              </a>
              
              {/* ✅ User Dropdown Menu */}
              {user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      {user.picture ? (
                        <img 
                          src={user.picture} 
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-4 h-4" />
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${userDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden">
                      {/* User Info */}
                      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <p className="font-medium text-sm truncate">{user.email}</p>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <button className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                          <GraduationCap className="w-5 h-5 text-blue-500" />
                          <span className="text-sm">My learning</span>
                        </button>
                        
                        <button className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                          <User className="w-5 h-5 text-emerald-500" />
                          <span className="text-sm">Edit profile</span>
                        </button>
                        
                        <div className="my-2 border-t border-gray-200 dark:border-gray-700"></div>
                        
                        <button 
                          onClick={handleLogout}
                          className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition text-red-500"
                        >
                          <LogOut className="w-5 h-5" />
                          <span className="text-sm">Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition text-white"
                >
                  Get Started
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
{mobileMenuOpen && (
  <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
    <div className="px-6 py-4 space-y-4">

      <button
        onClick={() => {
          navigate("/explore-programs");
          setMobileMenuOpen(false);
        }}
        className="block w-full text-left py-2 hover:text-blue-500 transition"
      >
        Programs
      </button>

      <a
        href="#mentors"
        className="block w-full text-left py-2 hover:text-blue-500 transition"
        onClick={() => setMobileMenuOpen(false)}
      >
        Mentors
      </a>

      <a
        href="#success"
        className="block w-full text-left py-2 hover:text-blue-500 transition"
        onClick={() => setMobileMenuOpen(false)}
      >
        Success Stories
      </a>

      <a
        href="#courses"
        className="block w-full text-left py-2 hover:text-blue-500 transition"
        onClick={() => setMobileMenuOpen(false)}
      >
        Courses
      </a>

      {user ? (
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={() => {
              handleLogout();
              setMobileMenuOpen(false);
            }}
            className="w-full bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg font-medium transition text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            navigate("/login");
            setMobileMenuOpen(false);
          }}
          className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-3 rounded-full font-medium transition text-white"
        >
          Get Started
        </button>
      )}

    </div>
  </div>
)}
</nav>


      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-full text-blue-500 dark:text-blue-400 text-sm">
            🎉 Advanced TexoraAi.skills for Modern Education
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Become the{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Top 1%
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Learn Product, Design, Growth & Marketing from industry experts at Google, Amazon, Meta & top startups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
     

<button
  onClick={() => navigate("/watch-demo")}
  className="border border-gray-300 dark:border-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition flex items-center gap-2"
>
  <Play size={20} /> Watch now
</button>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">50K+</p>
            <p className="text-gray-600 dark:text-gray-400">Learners</p>
          </div>
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">95%</p>
            <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">100+</p>
            <p className="text-gray-600 dark:text-gray-400">Expert Mentors</p>
          </div>
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">4.9</p>
            <p className="text-gray-600 dark:text-gray-400">Avg Rating</p>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50 dark:from-zinc-950 dark:via-blue-950/20 dark:to-emerald-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Trusted By</p>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Learners Placed At Top Companies
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className={`${company.bgGradient} rounded-2xl p-8 flex flex-col items-center justify-center gap-4 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group`}
              >
                <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform bg-white/80 dark:bg-black/80 rounded-xl p-2 shadow-lg">
                  <CompanyLogo company={company} />
                </div>
                <span className={`text-sm font-bold bg-gradient-to-r ${company.colors} bg-clip-text text-transparent`}>
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section
  id="courses"
  className="py-16 px-6 bg-white dark:bg-black scroll-mt-28"
>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
            Build Your Career with the Right Skills
            </h2>
            <div className="inline-flex rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 p-1 border border-blue-500/20">
              {["product", "design", "growth"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-blue-500"
                  } transition-all`}
                >
                  {tab === "product"
                    ? "Product"
                    : tab === "design"
                    ? "Design"
                    : "Growth & Marketing"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses[activeTab].map((course) => (
              <div
              key={course.id}
              className="border border-gray-200 dark:border-gray-800 rounded-2xl p-5 bg-gradient-to-br from-white/50 to-blue-50 dark:from-black/50 dark:to-zinc-950 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer group"
              onClick={() => handleCourseClick(course)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCourseClick(course)}
            >
            
                <div>
                  <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {course.instructor}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} /> {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400" />
                      {course.rating}
                    </span>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-black rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800 shadow-2xl">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    {selectedCourse.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {selectedCourse.instructor}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">About this program</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center p-4 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30 rounded-2xl">
                <div>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedCourse.duration}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Duration</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{selectedCourse.students}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Students</p>
                </div>
                <div>
                  <div className="flex justify-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={`${
                        i < Math.floor(selectedCourse.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`} />
                    ))}
                  </div>
                  <p className="text-sm font-semibold">{selectedCourse.rating}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-2xl text-center">
                <p className="text-3xl font-bold">{selectedCourse.price}</p>
                <p className="text-emerald-100">Limited time offer</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">What you'll learn</h3>
                <div className="space-y-2">
                  {selectedCourse.modules.map((module, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-white font-bold text-xs">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Program Highlights</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedCourse.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-xl border border-blue-500/20">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Award size={12} className="text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => navigate("/explore-programs")}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                >
                  Enroll Now <ArrowRight size={20} />
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 border border-gray-300 dark:border-gray-700 py-4 px-6 rounded-2xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mentors */}
      <section id="mentors" className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-zinc-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Learn from mentors who have done it before
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Sessions led by operators from top product companies so you understand how work happens in the real world.
            </p>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Award size={12} className="text-white" />
                </div>
                1:1 mentorship and small cohort learning.
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                  <TrendingUp size={12} className="text-white" />
                </div>
                Project reviews with detailed feedback.
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Users size={12} className="text-white" />
                </div>
                Peer community for accountability and networking.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-gray-200 dark:border-gray-800 rounded-2xl p-4 bg-gradient-to-br from-white to-blue-50/50 dark:from-black dark:to-zinc-900 shadow-lg"
              >
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  "{t.text}"
                </p>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Success Stories */}
      <section
        id="success"
        className="py-16 px-6 bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-zinc-950 border-t border-gray-200 dark:border-gray-800"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Career support that doesn't stop at certificates
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get help with interview prep, portfolios, referrals and role mapping so you can actually break into the roles you want.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                <p className="font-semibold mb-1 text-blue-600 dark:text-blue-400">Portfolio support</p>
                <p>Turn your projects into case studies hiring managers love.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
                <p className="font-semibold mb-1 text-emerald-600 dark:text-emerald-400">Interview prep</p>
                <p>Mock interviews, feedback and guidance on role expectations.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
                <p className="font-semibold mb-1 text-cyan-600 dark:text-cyan-400">Referrals & network</p>
                <p>Warm intros to hiring teams and community-led referrals.</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-5 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 shadow-xl">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              "The career support team pushed me beyond just completing assignments. They helped me position my experience the right way."
            </p>
            <p className="text-sm font-semibold mb-1">Anonymous Learner</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Transitioned to PM role from QA
            </p>
            <button
              onClick={() => navigate("/explore-programs")}
              className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-sm font-medium hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
            >
              Explore Free Services
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-blue-600 via-emerald-600 to-teal-600 dark:from-blue-900 dark:via-emerald-900 dark:to-teal-900 border-t border-blue-500/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent mb-4">
              TexoraAi.skills
            </p>
            <p className="text-blue-100 dark:text-blue-200 text-sm">
              Modern learning platform for ambitious professionals who want to break into product, design and growth roles.
            </p>
          </div>
          <div className="text-blue-100 dark:text-blue-200 text-sm space-y-3">
            <p className="font-semibold text-white mb-2">Contact</p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <a href="mailto:support@texoraai.skills" className="hover:text-white transition">
                support@texoraai.skills
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span>Skalholtsgatan 2, Kista, Stockholm, Sweden - 164 40</span>
            </div>
          </div>
          <div className="text-blue-100 dark:text-blue-200">
            <p className="font-semibold text-white mb-4">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
                  >
                    {Icon ? (
                      <Icon size={20} className="text-white" />
                    ) : (
                      <span className="text-white font-bold text-lg">WA</span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-blue-200 dark:text-blue-300 text-sm">
            © {new Date().getFullYear()} TexoraAi.skills. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}