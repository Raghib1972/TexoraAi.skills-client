import { Route, Routes } from "react-router-dom";
import RoleGuard from "./components/RoleGuard";

/* ===== AUTH ===== */
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ApprovalPending from "./pages/Auth/ApprovalPending";


/* ===== LANDING ===== */
import ExploreFreeServices from "./pages/Landing/ExploreFreeServices";
import Watchnow from "./pages/Landing/Watchnow";
import LMSHomepage from "./pages/Landing/LMSHomepage";
import CourseDetail from "./pages/Landing/CourseDetailsPage";
import SyllabusPage from "./pages/Landing/SyllabusPage";


/* ===== TRAINER ===== */
import ApplyTrainer from "./Trainer/ApplyTrainer";
import TrainerLogin from "./Trainer/TrainerLogin";
import TrainerPanel from "./Trainer/TrainerPanel";

/* ===== STUDENT ===== */
import StudentApplicationForm from "./Student/StudentApplicationForm";
import StudentPanel from "./Student/StudentPanel";
import StudentLogin from "./Student/StudentLogin";

/* ===== BUSINESS ===== */
import ApplyBusiness from "./Business/ApplyBusiness";
import BusinessLogin from "./Business/BusinessLogin";
import BusinessPanel from "./Business/BusinessPanel";

/* ===== ADMIN ===== */
import ApplyAdmin from "./Admin/ApplyAdmin";
import AdminLogin from "./Admin/AdminLogin";
import AdminPanel from "./Admin/AdminPanel";

function App() {
  return (
    <Routes>
      {/* ===== PUBLIC ===== */}
      <Route path="/" element={<LMSHomepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/approval-pending" element={<ApprovalPending />} />


      {/* ===== APPLY (PUBLIC) ===== */}
      <Route path="/apply-student" element={<StudentApplicationForm />} />
      <Route path="/apply-trainer" element={<ApplyTrainer />} />
      <Route path="/apply-business" element={<ApplyBusiness />} />
      <Route path="/apply-admin" element={<ApplyAdmin />} />

      {/* ===== LOGIN (PUBLIC) ===== */}
      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/trainer/login" element={<TrainerLogin />} />
      <Route path="/business/login" element={<BusinessLogin />} />
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* ===== PROTECTED DASHBOARDS ===== */}
      <Route
        path="/student/*"
        element={
          <RoleGuard>
            <StudentPanel />
          </RoleGuard>
        }
      />

      <Route
        path="/trainer/*"
        element={
          <RoleGuard>
            <TrainerPanel />
          </RoleGuard>
        }
      />

      <Route
        path="/business/*"
        element={
          <RoleGuard>
            <BusinessPanel />
          </RoleGuard>
        }
      />

      <Route
        path="/admin/*"
        element={
          <RoleGuard>
            <AdminPanel />
          </RoleGuard>
        }
      />

      {/* ===== LANDING ===== */}
      <Route path="/explore-programs" element={<ExploreFreeServices />} />
      <Route path="/watch-demo" element={<Watchnow />} />
      <Route path="/course-details" element={<CourseDetail />} />
      <Route path="/syllabus" element={<SyllabusPage />} />


      {/* ===== FALLBACK ===== */}
      <Route path="*" element={<LMSHomepage />} />
    </Routes>
  );
}

export default App;
