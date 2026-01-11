
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TrainerSidebar from "./TrainerSidebar";
import DashboardLayout from "../layouts/DashboardLayout";

import TrainerDashboard from "./TrainerDashboard";
import Batches from "./Batches";
import UploadVideos from "./UploadVideos";
import UploadDocuments from "./UploadDocuments";
import CreateQuiz from "./CreateQuiz";
import CreateAssignments from "./CreateAssignments";
import Assessments from "./Assessments";
import Attendance from "./Attendance";
import DoubtsManagement from "./DoubtsManagement";
import StudentReports from "./StudentReports";
import BatchReports from "./BatchReports";
import PerformanceAnalysis from "./PerformanceAnalysis";
import TrainerSettings from "./TrainerSettings";
import TrainerCourseManagement from "./TrainerCourseManagement";

// ✅ NEW PAGES
import TrainerNotifications from "./TrainerNotifications";
import TrainerProfile from "./TrainerProfile";

const TrainerPanel = () => {
  return (
    <DashboardLayout SidebarComponent={TrainerSidebar} label="Trainer panel">
      <Routes>
        {/* Dashboard */}
        <Route index element={<TrainerDashboard />} />

        {/* Top bar pages */}
        <Route path="notifications" element={<TrainerNotifications />} />
        <Route path="profile" element={<TrainerProfile />} />

        {/* Main pages */}
        <Route path="batches" element={<Batches />} />
        <Route path="upload-videos" element={<UploadVideos />} />
        <Route path="upload-docs" element={<UploadDocuments />} />
        <Route path="create-quiz" element={<CreateQuiz />} />
        <Route path="create-assignments" element={<CreateAssignments />} />
        <Route path="assessments" element={<Assessments />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="doubts-management" element={<DoubtsManagement />} />
        <Route path="courses" element={<TrainerCourseManagement />} />
        <Route path="student-reports" element={<StudentReports />} />
        <Route path="batch-reports" element={<BatchReports />} />
        <Route path="performance" element={<PerformanceAnalysis />} /> 
        <Route path="settings" element={<TrainerSettings />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/trainer" replace />} />
      </Routes>
    </DashboardLayout>
  );
};

export default TrainerPanel;
