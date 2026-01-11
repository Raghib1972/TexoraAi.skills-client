
// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import RoleGuard from "../components/RoleGuard";
// import Sidebar from "../components/Sidebar";
// import DashboardLayout from "../layouts/DashboardLayout";

// import NotificationsPage from "../pages/NotificationsPage";
// import ProfilePage from "../pages/ProfilePage";
// import SearchPage from "../pages/SearchPage";
// import AdminDashboard from "./AdminDashboard";
// import AllCourses from "./AllCourses";
// import AllUsers from "./AllUsers";
// import Branches from "./Branches";
// import Categories from "./Categories";
// import CertificatesAdmin from "./CertificatesAdmin";
// import Departments from "./Departments";
// import FeedbackAdmin from "./FeedbackAdmin";
// import MyAiUsageAdmin from "./MyAiUsageAdmin";
// import OrgAiUsage from "./OrgAiUsage";
// import OrgReports from "./OrgReports";
// import OrgSettings from "./OrgSettings";
// import ResourceUploadAdmin from "./ResourceUploadAdmin";
// import StudentsAdmin from "./StudentsAdmin";
// import TrainersAdmin from "./TrainersAdmin";
// import UsageAnalytics from "./UsageAnalytics";
// import AdminResources from "./AdminResources";
// import AdminVideoList from "./AdminVideoList";
// import AdminFileList from "./AdminFileList";


// const AdminPanel = () => {
//   return (
//     <RoleGuard allowedRole="admin">
//       <DashboardLayout SidebarComponent={Sidebar} label="Admin panel">
//         <Routes>
//           <Route path="/" element={<AdminDashboard />} />
//           <Route path="settings" element={<OrgSettings />} />
//           <Route path="departments" element={<Departments />} />
//           <Route path="branches" element={<Branches />} />
//           <Route path="users" element={<AllUsers />} />
//           <Route path="students" element={<StudentsAdmin />} />
//           <Route path="trainers" element={<TrainersAdmin />} />
//           <Route path="courses" element={<AllCourses />} />
//           <Route path="categories" element={<Categories />} />
//           <Route path="certificates" element={<CertificatesAdmin />} />
//           <Route path="reports" element={<OrgReports />} />
//           <Route path="resources/upload" element={<ResourceUploadAdmin />} />
//           <Route path="usage" element={<UsageAnalytics />} />
//           <Route path="feedback" element={<FeedbackAdmin />} />
//           <Route path="ai-usage" element={<MyAiUsageAdmin />} />
//           <Route path="org-usage" element={<OrgAiUsage />} />
//           <Route path="search" element={<SearchPage />} />
//           <Route path="notifications" element={<NotificationsPage />} />
//           <Route path="profile" element={<ProfilePage />} />
//           <Route path="*" element={<Navigate to="." replace />} />
//           <Route path="resources" element={<AdminResources />} />
//           <Route path="resources/videos" element={<AdminVideoList />} />
//           <Route path="resources/files" element={<AdminFileList />} />

//         </Routes>
//       </DashboardLayout>
//     </RoleGuard>
//   );
// };

// export default AdminPanel;


import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RoleGuard from "../components/RoleGuard";
import Sidebar from "../components/Sidebar";
import DashboardLayout from "../layouts/DashboardLayout";

import NotificationsPage from "../pages/NotificationsPage";
import ProfilePage from "../pages/ProfilePage";
import SearchPage from "../pages/SearchPage";

import AdminDashboard from "./AdminDashboard";
import AllCourses from "./AllCourses";
import AllUsers from "./AllUsers";
import Branches from "./Branches";
import Categories from "./Categories";
import CertificatesAdmin from "./CertificatesAdmin";
import Departments from "./Departments";
import FeedbackAdmin from "./FeedbackAdmin";
import MyAiUsageAdmin from "./MyAiUsageAdmin";
import OrgAiUsage from "./OrgAiUsage";
import OrgReports from "./OrgReports";
import OrgSettings from "./OrgSettings";
import ResourceUploadAdmin from "./ResourceUploadAdmin";
import StudentsAdmin from "./StudentsAdmin";
import TrainersAdmin from "./TrainersAdmin";
import UsageAnalytics from "./UsageAnalytics";
// import AdminResources from "./AdminResources";

const AdminPanel = () => {
  return (
    <RoleGuard allowedRole="admin">
      <DashboardLayout SidebarComponent={Sidebar} label="Admin panel">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="settings" element={<OrgSettings />} />
          <Route path="departments" element={<Departments />} />
          <Route path="branches" element={<Branches />} />
          <Route path="users" element={<AllUsers />} />
          <Route path="students" element={<StudentsAdmin />} />
          <Route path="trainers" element={<TrainersAdmin />} />
          <Route path="courses" element={<AllCourses />} />
          <Route path="categories" element={<Categories />} />
          <Route path="certificates" element={<CertificatesAdmin />} />
          <Route path="reports" element={<OrgReports />} />

          {/* ✅ RESOURCES (single page) */}
          {/* <Route path="resources" element={<AdminResources />} /> */}

          <Route path="usage" element={<UsageAnalytics />} />
          <Route path="feedback" element={<FeedbackAdmin />} />
          <Route path="ai-usage" element={<MyAiUsageAdmin />} />
          <Route path="org-usage" element={<OrgAiUsage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />

          <Route path="*" element={<Navigate to="." replace />} />
        </Routes>
      </DashboardLayout>
    </RoleGuard>
  );
};

export default AdminPanel;
