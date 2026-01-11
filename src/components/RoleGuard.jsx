

import { Navigate, useLocation } from "react-router-dom";
import auth from "../auth";

const RoleGuard = ({ children }) => {
  const location = useLocation();
  const currentRole = auth.getCurrentRole();
  const pathname = location.pathname;

  // ✅ Public routes (NO AUTH REQUIRED)
  if (
    pathname.startsWith("/apply-") ||
    pathname.endsWith("/login")
  ) {
    return children;
  }

  const targetRole = pathname.split("/")[1];

  // ❌ Not logged in → role specific login
  if (!auth.isAuthenticated()) {
    return <Navigate to={`/${targetRole}/login`} replace />;
  }

  // 🟢 Admin → full access
  if (currentRole === "admin") {
    return children;
  }

  // 🔒 Wrong role trying to access another dashboard
  if (currentRole !== targetRole) {
    return <Navigate to={`/${currentRole}/dashboard`} replace />;
  }

  // ✅ Allowed
  return children;
};

export default RoleGuard;
