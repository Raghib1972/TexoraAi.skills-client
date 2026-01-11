
const auth = {
  signup({ name, email, password, role = "student" }) {
    const allUsers = JSON.parse(localStorage.getItem("lms_users") || "[]");
    const newUser = { name, email, password, role, id: Date.now() };
   
    if (allUsers.find(u => u.email === email)) {
      return false;
    }
   
    allUsers.push(newUser);
    localStorage.setItem("lms_users", JSON.stringify(allUsers));
    return true;
  },

  // ✅ NEW: Google Login method
  googleLogin({ name, email, picture, role = "student", googleToken }) {
    const allUsers = JSON.parse(localStorage.getItem("lms_users") || "[]");
    
    // Check if user exists, if not create
    let user = allUsers.find(u => u.email === email);
    if (!user) {
      user = { name, email, picture, role, id: Date.now(), isGoogleUser: true };
      allUsers.push(user);
      localStorage.setItem("lms_users", JSON.stringify(allUsers));
    }
    
    // Save current user and token
    localStorage.setItem("lms_user", JSON.stringify({ ...user, role }));
    localStorage.setItem("lms_token", googleToken || "google-token");
    return true;
  },

  login({ email, password, role }) {
    const allUsers = JSON.parse(localStorage.getItem("lms_users") || "[]");
    const user = allUsers.find(u => u.email === email && u.password === password);
   
    if (!user) return false;
   
    const finalUser = { ...user, role: role || user.role };
    localStorage.setItem("lms_user", JSON.stringify(finalUser));
    localStorage.setItem("lms_token", "dummy-token");
    return true;
  },

  logout() {
    localStorage.removeItem("lms_token");
    localStorage.removeItem("lms_user");
  },

  isAuthenticated() {
    return !!localStorage.getItem("lms_token");
  },

  getCurrentUser() {
    const saved = localStorage.getItem("lms_user");
    return saved ? JSON.parse(saved) : {};
  },

  getCurrentRole() {
    const user = this.getCurrentUser();
    return user.role || "student";
  },

  canAccess(role) {
    const userRole = this.getCurrentRole();
    return userRole === "admin" || userRole === role;
  }
};

export default auth;




// import authService from "./services/authService";

// const auth = {
//   async signup({ name, email, password, role = "STUDENT" }) {
//     await authService.register({
//       name,
//       email,
//       password,
//       role: role.toUpperCase(),
//     });
//     return true;
//   },

//   async login({ email, password }) {
//     try {
//       const res = await authService.login(email, password);

//       const { token, email: userEmail, role } = res.data;

//       localStorage.setItem("lms_token", token);
//       localStorage.setItem(
//         "lms_user",
//         JSON.stringify({
//           email: userEmail,
//           role: role.toLowerCase(),
//         })
//       );

//       return true;
//     } catch (err) {
//       return false;
//     }
//   },

//   async googleLogin({ idToken, role }) {
//     try {
//       const res = await authService.googleLogin({
//         idToken: idToken, // ✅ MUST MATCH BACKEND
//         role,
//       });

//       const { token, email: userEmail, role: userRole } = res.data;

//       localStorage.setItem("lms_token", token);
//       localStorage.setItem(
//         "lms_user",
//         JSON.stringify({
//           email: userEmail,
//           role: userRole.toLowerCase(),
//         })
//       );

//       return true;
//     } catch (err) {
//       console.error("Google login failed:", err);
//       return false;
//     }
//   },

//   logout() {
//     localStorage.removeItem("lms_token");
//     localStorage.removeItem("lms_user");
//   },

//   isAuthenticated() {
//     return !!localStorage.getItem("lms_token");
//   },

//   getCurrentUser() {
//     const saved = localStorage.getItem("lms_user");
//     return saved ? JSON.parse(saved) : {};
//   },

//   getCurrentRole() {
//     return this.getCurrentUser().role || "student";
//   },

//   canAccess(targetRole) {
//     const currentRole = this.getCurrentRole();
//     return currentRole === "admin" || currentRole === targetRole;
//   },
// };

// export default auth;