

// import React, { useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [searchParams] = useSearchParams();

//   /* ========= ROLE DETECTION (same as Login) ========= */
//   const queryRole = searchParams.get("role") || "student";
//   const role = ["student", "trainer", "admin", "business"].includes(queryRole)
//     ? queryRole
//     : "student";

//   const validateEmail = (value) => {
//     if (!value) return "Email is required";
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!regex.test(value)) return "Enter a valid email";
//     return "";
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     const validationError = validateEmail(email);
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch(
//         "http://localhost:5000/api/auth/forgot-password",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email }),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data?.message || "Something went wrong");
//       }

//       setMessage(data?.message || "Password reset link sent to your email");
//       setEmail("");
//     } catch (err) {
//       setError(err.message || "Failed to send reset link");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900/80 to-slate-900 px-3 py-6">
//       <div className="w-full max-w-sm">
//         {/* ========= TEXORAAI.SKILLS BOX (same as Login) ========= */}
//         <div className="text-center mb-3 p-2 bg-gradient-to-r from-slate-800/90 to-emerald-900/90 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-xl shadow-emerald-500/20">
//           <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-xl">
//             TexoraAi.skills
//           </h1>
//           <p className="text-slate-300 text-xs mt-1 font-medium tracking-wide drop-shadow-md">
//             Learning & Skills Platform
//           </p>
//         </div>

//         <div className="bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-black/95 backdrop-blur-2xl border border-slate-700/60 rounded-xl p-4 shadow-2xl shadow-emerald-500/20">
//           <h2 className="text-lg font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent text-center mb-1 drop-shadow-lg">
//             Forgot Password
//           </h2>
//           <p className="text-slate-400 text-xs text-center mb-3">
//             Enter your registered email to receive a password reset link.
//           </p>

//           {error && (
//             <p className="mb-2 text-xs text-red-400 bg-red-900/40 border border-red-800/60 px-2 py-1.5 rounded-md backdrop-blur-sm shadow-lg shadow-red-500/20">
//               {error}
//             </p>
//           )}

//           {message && (
//             <div className="mb-3 text-xs text-emerald-400 bg-emerald-900/40 border border-emerald-800/60 px-2 py-1.5 rounded-md backdrop-blur-sm shadow-lg shadow-emerald-500/20">
//               {message}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-2">
//             <div>
//               <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wide">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 autoComplete="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full rounded-lg bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/70 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/60 focus:border-emerald-500/70 transition-all duration-300 hover:border-slate-500/70 hover:shadow-md hover:shadow-emerald-500/20"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-800 disabled:opacity-60 disabled:cursor-not-allowed text-sm font-bold text-white shadow-xl shadow-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 backdrop-blur-sm border border-emerald-500/50"
//             >
//               {loading ? "Sending..." : "Send Reset Link"}
//             </button>
//           </form>

//           <p className="mt-3 text-xs text-slate-400 text-center leading-tight">
//             Remember your password?{" "}
//             <Link to={`/login?role=${role}`} className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline transition-colors duration-200">
//               Back to Login
//             </Link>
//           </p>

//           <button
//             type="button"
//             onClick={() => window.location.href = "/"}
//             className="mt-3 w-full py-1.5 rounded-md bg-gradient-to-r from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-slate-600/50 text-xs text-slate-400 hover:text-slate-300 hover:from-slate-700/80 hover:to-slate-800/80 font-medium transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-lg shadow-emerald-500/10"
//           >
//             ← Back to Homepage
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import auth from "../../auth"; // agar use ho raha ho

// SAME COLOR SCHEME (Login page jaisa)
const colors = {
  primary: "from-blue-600 to-emerald-600",
  primarySolid: "bg-blue-600",
  muted: "text-gray-600 dark:text-gray-400",
};

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const queryRole = searchParams.get("role") || "student";
  const role = ["student", "trainer", "admin", "business"].includes(queryRole)
    ? queryRole
    : "student";

  const validateEmail = (value) => {
    if (!value) return "Email is required";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) return "Enter valid email";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const allUsers = JSON.parse(localStorage.getItem("lms_users") || "[]");
      const user = allUsers.find((u) => u.email === email);

      if (!user) {
        setError("No account found with this email");
        setLoading(false);
        return;
      }

      setMessage("✅ Password reset successful! Please login again.");
      setEmail("");

      setTimeout(() => navigate(`/login?role=${role}`), 2000);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">

      {/* ✅ SAME HEADER AS LOGIN */}
      <header className="bg-white dark:bg-black shadow-sm border-b dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div
              className={`w-8 h-8 bg-gradient-to-br ${colors.primary} rounded flex items-center justify-center shadow-md`}
            >
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              TexoraAi.skills
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium`}>
              Lightning Lessons
            </button>
            <button className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium`}>
              Apply to teach
            </button>
            <button
              onClick={() => navigate("/login")}
              className={`${colors.primarySolid} hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium`}
            >
              Log In
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-black rounded-lg shadow-md border dark:border-gray-800 p-8">

            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
              Reset Password
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
              Enter your registered email to reset password
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            {message && (
              <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
                <p className="text-sm text-emerald-600 dark:text-emerald-400">{message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${colors.primarySolid} hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors shadow-md disabled:opacity-50`}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => navigate(`/login?role=${role}`)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                ← Back to Login
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
