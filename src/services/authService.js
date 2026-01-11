
// import axios from "axios";

// const API_BASE_URL = "http://localhost:5173"; // API Gateway

// const authService = {
//   // ================= LOGIN =================
//   login(email, password) {
//     return axios.post(`${API_BASE_URL}/api/auth/login`, {
//       email,
//       password,
//     });
//   },

//   // ================= GOOGLE LOGIN =================
//   googleLogin({ idToken, role }) {
//     console.log(idToken);
//     console.log(role);
//     return axios.post(
//       `${API_BASE_URL}/api/auth/google`,
//       {
//         idToken,
//         role,
//       },
//       {
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   },
//   // ================= REGISTER =================
//   register({ name, email, password, role }) {
//     return axios.post(`${API_BASE_URL}/api/auth/register`, {
//       name,
//       email,
//       password,
//       role,
//     });
//   },

//   // ================= FORGOT PASSWORD =================
//   forgotPassword(email) {
//     return axios.post(`${API_BASE_URL}/api/auth/forgot-password`, {
//       email,
//     });
//   },

//   // ================= RESET PASSWORD =================
//   // ⚠️ BACKEND EXPECTS @RequestParam
//   resetPassword(token, newPassword) {
//     return axios.post(
//       `${API_BASE_URL}/api/auth/reset-password?token=${token}&newPassword=${newPassword}`
//     );
//   },

//   // ================= TOKEN HELPERS =================
//   saveToken(token) {
//     localStorage.setItem("lms_token", token);
//   },

//   getToken() {
//     return localStorage.getItem("lms_token");
//   },

//   logout() {
//     localStorage.removeItem("lms_token");
//   },
// };

// export default authService;