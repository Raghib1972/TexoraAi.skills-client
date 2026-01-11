
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RoleGuard from "../components/RoleGuard";
import Sidebar from "../components/Sidebar";
import DashboardLayout from "../layouts/DashboardLayout";
import StudentEnroll from "./StudentEnroll.jsx";

// Dashboard pages
import DashboardPage from "./DashboardPage.jsx";

import Assessments from "./Assessments.jsx";
import Attendance from "./Attendance.jsx";
import Certificates from "./certificates.jsx";
import Documents from "./Documents.jsx";
import Doubts from "./Doubts.jsx";
import MyCourses from "./MyCourses.jsx";
import Overview from "./overview.jsx";
import Resources from "./Resources.jsx";
import Settings from "./Settings.jsx";
import VideoLectures from "./videolecctures.jsx";

// Top-bar pages
import NotificationsPage from "../pages/NotificationsPage";
import ProfilePage from "../pages/ProfilePage";
import SearchPage from "../pages/SearchPage";

const StudentPanel = () => {
  return (
    <RoleGuard allowedRole="student">
      <DashboardLayout SidebarComponent={Sidebar} label="Student panel">
        <Routes>
          {/* ✅ Default dashboard */}
          <Route index element={<DashboardPage />} />

          {/* ✅ Enroll page */}
          <Route path="enroll" element={<StudentEnroll />} />

          {/* Learning materials */}
          <Route path="videos" element={<VideoLectures />} />
          <Route path="documents" element={<Documents />} />
          <Route path="resources" element={<Resources />} />

          {/* My courses */}
          <Route path="courses" element={<MyCourses />} />
          <Route path="assessments" element={<Assessments />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="doubts" element={<Doubts />} />
          <Route path="certificates" element={<Certificates />} />

          {/* Extra */}
          
          <Route path="overview" element={<Overview />} />

          {/* Top bar pages */}
          <Route path="search" element={<SearchPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />

          {/* Settings */}
          <Route path="settings" element={<Settings />} />

          {/* ✅ Fallback */}
          <Route path="*" element={<Navigate to="." replace />} />
        </Routes>
      </DashboardLayout>
    </RoleGuard>
  );
};

export default StudentPanel;

