
import {
  Award,
  BookOpen,
  BookOpenText,
  CalendarCheck,
  ClipboardList,
  Cpu,
  FileText,
  FolderOpen,
  HelpCircle,
  LayoutDashboard,
  Moon,
  PlayCircle,
  Sun,
} from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../auth";

// ---------------- MENUS ----------------

// STUDENT MENUS
const studentMenus = [
  { name: "Dashboard", path: "/student", icon: LayoutDashboard },
  {
    name: "Learning Materials",
    icon: PlayCircle,
    children: [
      { name: "Video Lectures", path: "/student/videos", icon: PlayCircle },
      { name: "Documents", path: "/student/documents", icon: FileText },
      { name: "Resources", path: "/student/resources", icon: FolderOpen },
    ],
  },
  {
    name: "My Courses",
    icon: BookOpenText,
    children: [
      { name: "My Courses", path: "/student/courses", icon: BookOpenText },
      { name: "Assessments", path: "/student/assessments", icon: ClipboardList },
      { name: "Attendance", path: "/student/attendance", icon: CalendarCheck },
      { name: "Doubts", path: "/student/doubts", icon: HelpCircle },
      { name: "Certificates", path: "/student/certificates", icon: Award },
    ],
  },
  { name: "My AI Usage", path: "/student/ai-usage", icon: Cpu },
];

// TRAINER MENUS
const trainerMenus = [
  { name: "Dashboard", path: "/trainer", icon: LayoutDashboard },
  { name: "Batch Management", path: "/trainer/batches", icon: BookOpenText },
  {
    name: "Content Management",
    icon: FileText,
    children: [
      { name: "Upload Videos", path: "/trainer/upload-videos", icon: PlayCircle },
      { name: "Upload Documents", path: "/trainer/upload-docs", icon: FileText },
      { name: "Create Quiz", path: "/trainer/create-quiz", icon: ClipboardList },
      { name: "Create Assignments", path: "/trainer/create-assignments", icon: ClipboardList },
    ],
  },
  { name: "Assessments", path: "/trainer/assessments", icon: ClipboardList },
  { name: "Attendance", path: "/trainer/attendance", icon: CalendarCheck },
  { name: "Doubts Management", path: "/trainer/doubts-management", icon: HelpCircle },
  {
    name: "Reports & Analytics",
    icon: Cpu,
    children: [
      { name: "Student Reports", path: "/trainer/student-reports", icon: FileText },
      { name: "Batch Reports", path: "/trainer/batch-reports", icon: FileText },
      { name: "Performance Analysis", path: "/trainer/performance", icon: Cpu },
    ],
  },
  { name: "My AI Usage", path: "/trainer/ai-usage", icon: Cpu },
];

// ADMIN MENUS
const adminMenus = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  {
    name: "Organisation Manager",
    icon: BookOpenText,
    children: [
      { name: "Settings", path: "/admin/settings", icon: Cpu },
      { name: "Departments", path: "/admin/departments", icon: FolderOpen },
      { name: "Branches", path: "/admin/branches", icon: FolderOpen },
    ],
  },
  {
    name: "User Management",
    icon: BookOpenText,
    children: [
      { name: "All Users", path: "/admin/users", icon: BookOpenText },
      { name: "Students", path: "/admin/students", icon: BookOpenText },
      { name: "Trainers", path: "/admin/trainers", icon: BookOpenText },
    ],
  },
  {
    name: "Course Management",
    icon: BookOpen,
    children: [
      { name: "All Courses", path: "/admin/courses", icon: BookOpenText },
      { name: "Categories", path: "/admin/categories", icon: FolderOpen },
    ],
  },
  {
    name: "Document Generator",
    icon: FileText,
    children: [
      { name: "Certificates", path: "/admin/certificates", icon: Award },
      { name: "Reports", path: "/admin/reports", icon: FileText },
      { name: "Resources", path: "/admin/resources/upload", icon: FolderOpen },
    ],
  },
  {
    name: "Insight Review",
    icon: Cpu,
    children: [
      { name: "Usage Analytics", path: "/admin/usage", icon: Cpu },
      { name: "Feedback", path: "/admin/feedback", icon: HelpCircle },
    ],
  },
  { name: "My AI Usage", path: "/admin/ai-usage", icon: Cpu },
  { name: "Organization Usage", path: "/admin/org-usage", icon: Cpu },
];

// BUSINESS MENUS
const businessMenus = [
  { name: "Dashboard", path: "/business", icon: LayoutDashboard },
  {
    name: "Hiring Manager",
    icon: BookOpenText,
    children: [
      { name: "Job Openings", path: "/business/jobs", icon: FileText },
      { name: "Applications", path: "/business/applications", icon: ClipboardList },
    ],
  },
  {
    name: "Lead Management",
    icon: Cpu,
    children: [
      { name: "All Leads", path: "/business/leads", icon: BookOpenText },
      { name: "Follow Ups", path: "/business/followups", icon: ClipboardList },
    ],
  },
  {
    name: "Enrollments",
    icon: BookOpenText,
    children: [
      { name: "New Enrollments", path: "/business/enrollments", icon: BookOpenText },
      { name: "Renewals", path: "/business/renewals", icon: BookOpenText },
    ],
  },
  {
    name: "Financial",
    icon: FileText,
    children: [
      { name: "Invoices", path: "/business/invoices", icon: FileText },
      { name: "Payments", path: "/business/payments", icon: FileText },
    ],
  },
  {
    name: "Marketing",
    icon: Cpu,
    children: [
      { name: "Campaigns", path: "/business/campaigns", icon: Cpu },
      { name: "Sources", path: "/business/sources", icon: FolderOpen },
    ],
  },
  {
    name: "Team Targets",
    icon: ClipboardList,
    children: [
      { name: "Targets", path: "/business/targets", icon: ClipboardList },
      { name: "Performance", path: "/business/performance", icon: Cpu },
    ],
  },
  { name: "My AI Usage", path: "/business/ai-usage", icon: Cpu },
];

// --------------- SIDEBAR COMPONENT ---------------

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isTrainer = location.pathname.startsWith("/trainer");
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isBusiness = location.pathname.startsWith("/business");

  let menus = studentMenus;
  if (isTrainer) menus = trainerMenus;
  if (isAdminRoute) menus = adminMenus;
  if (isBusiness) menus = businessMenus;

  const [openGroups, setOpenGroups] = React.useState({});
  const [dark, setDark] = React.useState(
    () => localStorage.getItem("theme") === "dark"
  );
  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  
  const toggleGroup = (name) => {
    setOpenGroups((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
  
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
  
      return next;
    });
  };
  

  const handleRoleChange = (value) => {
    navigate(value);
  };

  const handleLogout = () => {
    let role = "student";
    const path = location.pathname;

    if (path.startsWith("/trainer")) role = "trainer";
    else if (path.startsWith("/admin")) role = "admin";
    else if (path.startsWith("/business")) role = "business";

    auth.logout();
    navigate(`/login?role=${role}`);
  };

  const currentRolePath = isAdminRoute
    ? "/admin"
    : isTrainer
    ? "/trainer"
    : isBusiness
    ? "/business"
    : "/student";

  const currentRole = auth.getCurrentRole();  // "admin" / others
  const showRoleDropdown = currentRole === "admin"; // admin ko har route par dropdown

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900">
      {/* Top header */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-500 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <p className="text-white font-semibold text-base">TexoraAi.skills</p>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-150"
          >
            {dark ? (
              <Sun className="w-4 h-4 text-white" />
            ) : (
              <Moon className="w-4 h-4 text-white" />
            )}
          </button>
        </div>

        {/* Role dropdown: only for admin user, any route */}
        {showRoleDropdown && (
          <select
            value={currentRolePath}
            onChange={(e) => handleRoleChange(e.target.value)}
            className="w-full text-sm rounded-lg bg-white text-slate-800 px-3 py-2 focus:outline-none"
          >
            <option value="/student">Student</option>
            <option value="/trainer">Trainer</option>
            <option value="/admin">Admin</option>
            <option value="/business">Business Team</option>
          </select>
        )}
      </div>

      {/* Menus */}
      <nav className="flex-1 px-2 py-3 space-y-1 text-slate-800 dark:text-slate-100">
        {menus.map((item) => {
          const Icon = item.icon;

          if (item.children) {
            const isOpen = openGroups[item.name] ?? true;

            return (
              <div key={item.name} className="space-y-1">
                <button
                  type="button"
                  onClick={() => toggleGroup(item.name)}
                  className="w-full flex items-center justify-between px-3 pt-3 text-[11px] font-semibold text-slate-500 tracking-wide uppercase"
                >
                  <span className="flex items-center gap-2">
                    {Icon && <Icon className="w-3 h-3" />}
                    {item.name}
                  </span>
                  <span className="text-[10px]">{isOpen ? "▾" : "▸"}</span>
                </button>

                {isOpen &&
                  item.children.map((child) => {
                    const ChildIcon = child.icon;
                    return (
                      <button
                        key={child.name}
                        onClick={() => navigate(child.path)}
                        className="w-full flex items-center gap-2 text-left text-[13px] px-5 py-2 rounded-lg font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150"
                      >
                        {ChildIcon && (
                          <ChildIcon className="w-4 h-4 text-slate-400" />
                        )}
                        <span>{child.name}</span>
                      </button>
                    );
                  })}
              </div>
            );
          }

          const active = location.pathname === item.path;

          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-semibold transition-colors duration-150 " +
                (active
                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20"
                  : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800")
              }
            >
              {Icon && <Icon className="w-4 h-4" />}
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="border-t border-slate-200 dark:border-slate-700 px-2 py-3 space-y-1">
        <button
          onClick={() => navigate(`${currentRolePath}/settings`)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150"
        >
          <span>⚙️</span>
          <span>Settings</span>
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors duration-150"
        >
          <span>↩</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;






