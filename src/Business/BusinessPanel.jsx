
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardLayout from "../layouts/DashboardLayout";
import RoleGuard from "../components/RoleGuard"; // ✅ Role protection

import BusinessDashboard from "./BusinessDashboard";

// Hiring Manager
import JobOpenings from "./Hiring Manager/JobOpenings.jsx";
import Applications from "./Hiring Manager/Applications.jsx";

// Lead Management
import AllLeads from "./Lead Management/AllLeads.jsx";
import FollowUps from "./Lead Management/FollowUps.jsx";

// Enrollments
import NewEnrollments from "./Enrollments/NewEnrollments.jsx";
import Renewals from "./Enrollments/Renewals.jsx";

// Financial
import Invoices from "./Financial/Invoices.jsx";
import Payments from "./Financial/Payments.jsx";

// Marketing
import Campaigns from "./Marketing/Campaigns.jsx";
import Sources from "./Marketing/Sources.jsx";

// Team Targets
import Targets from "./Team Targets/Targets.jsx";
import Performance from "./Team Targets/Performance.jsx";



import NotificationsPage from "../pages/NotificationsPage";
import ProfilePage from "../pages/ProfilePage";
import SearchPage from "../pages/SearchPage";
import BusinessSettings from "./Settings.jsx";

const BusinessPanel = () => {
  return (
    <RoleGuard allowedRole="business">
      <DashboardLayout SidebarComponent={Sidebar} label="Business panel">
        <Routes>
          <Route index element={<BusinessDashboard />} />

          {/* Hiring Manager */}
          <Route path="jobs" element={<JobOpenings />} />
          <Route path="applications" element={<Applications />} />

          {/* Lead Management */}
          <Route path="leads" element={<AllLeads />} />
          <Route path="followups" element={<FollowUps />} />

          {/* Enrollments */}
          <Route path="enrollments" element={<NewEnrollments />} />
          <Route path="renewals" element={<Renewals />} />

          {/* Financial */}
          <Route path="invoices" element={<Invoices />} />
          <Route path="payments" element={<Payments />} />

          {/* Marketing */}
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="sources" element={<Sources />} />

          {/* Team Targets */}
          <Route path="targets" element={<Targets />} />
          <Route path="performance" element={<Performance />} />

          

          {/* Settings */}
          <Route path="settings" element={<BusinessSettings />} />

          {/* Top bar pages */}
          <Route path="search" element={<SearchPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />

          <Route path="*" element={<Navigate to="." replace />} />
        </Routes>
      </DashboardLayout>
    </RoleGuard>
  );
};

export default BusinessPanel;

