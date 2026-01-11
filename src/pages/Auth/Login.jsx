

// import React, { useEffect, useState } from "react";
// import {
//   Link,
//   useNavigate,
//   useSearchParams,
//   useLocation,
// } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
// import auth from "../../auth";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const location = useLocation();

//   /* ========= ROLE DETECTION ========= */
//   const pathRole = location.pathname.split("/")[1] || "";
//   const queryRole = searchParams.get("role") || pathRole;
//   const role = ["student", "trainer", "admin", "business"].includes(queryRole)
//     ? queryRole
//     : "student";

//   /* ========= AUTO REDIRECT ========= */
//   // useEffect(() => {
//   //   if (auth.isAuthenticated()) {
//   //     const userRole = auth.getCurrentRole();
//   //     navigate(`/${userRole}/dashboard`, { replace: true });
//   //   }
//   // }, [navigate]);
//   useEffect(() => {
//     const enrollData = localStorage.getItem('enrollData');
//     if (auth.isAuthenticated() && !enrollData) {  // ← YE CHANGE
//       const userRole = auth.getCurrentRole();
//       navigate(`/${userRole}/dashboard`, { replace: true });
//     }
//   }, [navigate]);

//   /* ========= EMAIL LOGIN ========= */
//   const handleEmailSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const ok = await auth.login({ email, password });
//     if (!ok) {
//       setError("Invalid email or password");
//       return;
//     }

//     navigate(`/${role}/dashboard`, { replace: true });
//   };

//   /* ========= GOOGLE LOGIN ========= */
//   const handleGoogleSuccess = async (credentialResponse) => {
//     try {
//       if (!credentialResponse?.credential) {
//         throw new Error("No Google credential");
//       }

//       const ok = await auth.googleLogin({
//         googleToken: credentialResponse.credential,
//         role,
//       });

//       if (!ok) {
//         setError("Google login failed");
//         return;
//       }

//       navigate(`/${role}/dashboard`, { replace: true });
//     } catch (err) {
//       setError("Google login failed");
//     }
//   };

//   const handleGoogleError = () => {
//     setError("Google login failed");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900/80 to-slate-900 px-3 py-6">
//       <div className="w-full max-w-sm">
//         {/* ========= TEXORAAI.SKILLS BOX ========= */}
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
//             {role.charAt(0).toUpperCase() + role.slice(1)} Login
//           </h2>
//           <p className="text-slate-400 text-xs text-center mb-3">
//             Enter credentials or continue with Google
//           </p>

//           {error && (
//             <p className="mb-2 text-xs text-red-400 bg-red-900/40 border border-red-800/60 px-2 py-1.5 rounded-md backdrop-blur-sm shadow-lg shadow-red-500/20">
//               {error}
//             </p>
//           )}

//           {/* ========= GOOGLE BUTTON ========= */}
//           <div className="mb-4">
//             <GoogleLogin
//               onSuccess={handleGoogleSuccess}
//               onError={handleGoogleError}
//               theme="filled_blue"
//               size="large"
//               text="signin_with"
//               shape="rectangular"
//               width="100%"
//               useOneTap
//             />
//           </div>

//           <div className="relative my-3">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-slate-600/60 bg-gradient-to-r from-transparent via-slate-600/70 to-transparent" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="px-2 bg-gradient-to-r from-slate-900/95 to-black/95 backdrop-blur-sm text-slate-400 font-medium">or</span>
//             </div>
//           </div>

//           {/* ========= EMAIL FORM ========= */}
//           <form onSubmit={handleEmailSubmit} className="space-y-2">
//             <div>
//               <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wide">Email Address</label>
//               <input
//                 type="email"
//                 className="w-full rounded-lg bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/70 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/60 focus:border-emerald-500/70 transition-all duration-300 hover:border-slate-500/70 hover:shadow-md hover:shadow-emerald-500/20"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wide">Password</label>
//               <input
//                 type="password"
//                 className="w-full rounded-lg bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/70 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/60 focus:border-emerald-500/70 transition-all duration-300 hover:border-slate-500/70 hover:shadow-md hover:shadow-emerald-500/20"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-800 text-sm font-bold text-white shadow-xl shadow-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 backdrop-blur-sm border border-emerald-500/50"
//             >
//               Login to {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
//             </button>
//           </form>

//           <p className="mt-3 text-xs text-slate-400 text-center leading-tight">
//             Forgot your password?{" "}
//             <Link to="/forgot-password" className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline transition-colors duration-200">
//               Reset here
//             </Link>
//           </p>

//           <p className="mt-2 text-xs text-slate-400 text-center leading-tight">
//             Don't have an account?{" "}
//             <Link to={`/signup?role=${role}`} className="text-teal-400 hover:text-teal-300 font-medium hover:underline transition-colors duration-200">
//               Sign up
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

// export default Login;



// import React, { useState } from 'react';

// // Color scheme
// const colors = {
//   primary: "from-blue-600 to-emerald-600",
//   primarySolid: "bg-blue-600",
//   accent: "from-yellow-400 to-orange-500",
//   muted: "text-gray-600 dark:text-gray-400",
//   surface: "bg-white dark:bg-black",
// };

// // TexoraAi.skills Login Page (Image 1)
// const MavenLogin = ({ onBackToLanding }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login submitted', { email, password });
//     if (onBackToLanding) onBackToLanding();
//   };

//   const handleGoogleLogin = () => {
//     console.log('Google login clicked');
//     if (onBackToLanding) onBackToLanding();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
//       {/* Header */}
//       <header className="bg-white dark:bg-black shadow-sm border-b dark:border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className={`w-8 h-8 bg-gradient-to-br ${colors.primary} rounded flex items-center justify-center shadow-md`}>
//               <span className="text-white font-bold text-lg">T</span>
//             </div>
//             <span className="text-2xl font-bold text-gray-900 dark:text-white">TexoraAi.skills</span>
//           </div>
//           <div className="flex items-center gap-6">
//             <button className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}>
//               Lightning Lessons
//             </button>
//             <button className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}>
//               Apply to teach
//             </button>
//             <button className={`${colors.primarySolid} hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors`}>
//               Log In
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//         <div className="w-full max-w-md">
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
//             Log in to your account
//           </h2>

//           <div className="bg-white dark:bg-black rounded-lg shadow-md border dark:border-gray-800 p-8">
//             {/* Google Login Button */}
//             <button
//               onClick={handleGoogleLogin}
//               className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors mb-6"
//             >
//               <svg className="w-5 h-5" viewBox="0 0 24 24">
//                 <path
//                   fill="#4285F4"
//                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                 />
//                 <path
//                   fill="#34A853"
//                   d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                 />
//                 <path
//                   fill="#FBBC05"
//                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                 />
//                 <path
//                   fill="#EA4335"
//                   d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                 />
//               </svg>
//               <span className="font-medium text-gray-700 dark:text-gray-300">Log in with Google</span>
//             </button>

//             {/* Divider */}
//             <div className="relative mb-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white dark:bg-black text-gray-500 dark:text-gray-400">or use email</span>
//               </div>
//             </div>

//             {/* Email/Password Fields */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                 />
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className={`w-full ${colors.primarySolid} hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors shadow-md hover:shadow-lg`}
//               >
//                 Log in
//               </button>
//             </div>

//             <div className="mt-4 text-center">
//               <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
//                 Forgot password?
//               </button>
//             </div>

//             <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
//               Don't have a TexoraAi.skills account?{' '}
//               <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
//                 Sign up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Minimal Login Page (Image 2)
// const MinimalLogin = ({ onBackToLanding }) => {
//   const handleGoogleLogin = () => {
//     console.log('Google login clicked');
//     if (onBackToLanding) onBackToLanding();
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center">
//       <div className="text-center">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-8">Login</h2>

//         <button
//           onClick={handleGoogleLogin}
//           className="inline-flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors mb-6"
//         >
//           <svg className="w-5 h-5" viewBox="0 0 24 24">
//             <path
//               fill="#4285F4"
//               d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//             />
//             <path
//               fill="#34A853"
//               d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//             />
//             <path
//               fill="#FBBC05"
//               d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//             />
//             <path
//               fill="#EA4335"
//               d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//             />
//           </svg>
//           <span className="font-medium text-gray-700">Sign in with Google</span>
//         </button>

//         <div className="mt-6">
//           <button
//             onClick={onBackToLanding}
//             className="text-sm text-gray-600 hover:text-gray-900"
//           >
//             ← Back to Landing
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Demo Component to Switch Between Styles
// export default function LoginDemo() {
//   const [style, setStyle] = useState('texora');

//   const handleBackToLanding = () => {
//     alert('Navigation to landing page (in your app, use navigate("/"))');
//   };

//   return (
//     <div>
//       {/* Render Selected Style */}
//       {style === 'texora' ? (
//         <MavenLogin onBackToLanding={handleBackToLanding} />
//       ) : (
//         <MinimalLogin onBackToLanding={handleBackToLanding} />
//       )}
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';

// // Color scheme
// const colors = {
//   primary: "from-blue-600 to-emerald-600",
//   primarySolid: "bg-blue-600",
//   accent: "from-yellow-400 to-orange-500",
//   muted: "text-gray-600 dark:text-gray-400",
//   surface: "bg-white dark:bg-black",
// };

// // Your Google Client ID
// const GOOGLE_CLIENT_ID = "572421778240-akk3kkb4f60ukuv9pcfrpg2ielm09thk.apps.googleusercontent.com";

// // TexoraAi.skills Login Page
// const TexoraLogin = ({ onBackToLanding, onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login submitted', { email, password });
//     if (onLoginSuccess) {
//       onLoginSuccess({ email, method: 'email' });
//     }
//   };

//   const handleGoogleSuccess = (credentialResponse) => {
//     try {
//       const decoded = jwtDecode(credentialResponse.credential);
//       console.log('Google Login Success:', decoded);
      
//       // Store token in memory (not localStorage as per restrictions)
//       if (onLoginSuccess) {
//         onLoginSuccess({
//           email: decoded.email,
//           name: decoded.name,
//           picture: decoded.picture,
//           method: 'google',
//           token: credentialResponse.credential
//         });
//       }
      
//       // Navigate to landing page
//       if (onBackToLanding) {
//         onBackToLanding();
//       }
//     } catch (error) {
//       console.error('Error decoding Google token:', error);
//     }
//   };

//   const handleGoogleError = () => {
//     console.log('Google Login Failed');
//     alert('Google login failed. Please try again.');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
//       {/* Header */}
//       <header className="bg-white dark:bg-black shadow-sm border-b dark:border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className={`w-8 h-8 bg-gradient-to-br ${colors.primary} rounded flex items-center justify-center shadow-md`}>
//               <span className="text-white font-bold text-lg">T</span>
//             </div>
//             <span className="text-2xl font-bold text-gray-900 dark:text-white">TexoraAi.skills</span>
//           </div>
//           <div className="flex items-center gap-6">
//             <button className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}>
//               Lightning Lessons
//             </button>
//             <button className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}>
//               Apply to teach
//             </button>
//             <button className={`${colors.primarySolid} hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors`}>
//               Log In
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//         <div className="w-full max-w-md">
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
//             Log in to your account
//           </h2>

//           <div className="bg-white dark:bg-black rounded-lg shadow-md border dark:border-gray-800 p-8">
//             {/* Google Login Button */}
//             <div className="mb-6">
//               <GoogleLogin
//                 onSuccess={handleGoogleSuccess}
//                 onError={handleGoogleError}
//                 useOneTap
//                 theme="outline"
//                 size="large"
//                 width="100%"
//                 text="signin_with"
//               />
//             </div>

//             {/* Divider */}
//             <div className="relative mb-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white dark:bg-black text-gray-500 dark:text-gray-400">or use email</span>
//               </div>
//             </div>

//             {/* Email/Password Fields */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                 />
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className={`w-full ${colors.primarySolid} hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors shadow-md hover:shadow-lg`}
//               >
//                 Log in
//               </button>
//             </div>

//             <div className="mt-4 text-center">
//               <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
//                 Forgot password?
//               </button>
//             </div>

//             <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
//               Don't have a TexoraAi.skills account?{' '}
//               <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
//                 Sign up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Minimal Login Page
// const MinimalLogin = ({ onBackToLanding, onLoginSuccess }) => {
//   const handleGoogleSuccess = (credentialResponse) => {
//     try {
//       const decoded = jwtDecode(credentialResponse.credential);
//       console.log('Google Login Success:', decoded);
      
//       if (onLoginSuccess) {
//         onLoginSuccess({
//           email: decoded.email,
//           name: decoded.name,
//           picture: decoded.picture,
//           method: 'google',
//           token: credentialResponse.credential
//         });
//       }
      
//       if (onBackToLanding) {
//         onBackToLanding();
//       }
//     } catch (error) {
//       console.error('Error decoding Google token:', error);
//     }
//   };

//   const handleGoogleError = () => {
//     console.log('Google Login Failed');
//     alert('Google login failed. Please try again.');
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center">
//       <div className="text-center">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-8">Login</h2>

//         <div className="mb-6">
//           <GoogleLogin
//             onSuccess={handleGoogleSuccess}
//             onError={handleGoogleError}
//             useOneTap
//             theme="outline"
//             size="large"
//             text="signin_with"
//           />
//         </div>

//         <div className="mt-6">
//           <button
//             onClick={onBackToLanding}
//             className="text-sm text-gray-600 hover:text-gray-900"
//           >
//             ← Back to Landing
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Demo Component with Google OAuth Provider
// export default function LoginDemo() {
//   const [user, setUser] = useState(null);

//   const handleBackToLanding = () => {
//     alert('Navigation to landing page (in your app, use navigate("/"))');
//   };

//   const handleLoginSuccess = (userData) => {
//     setUser(userData);
//     alert(`Welcome ${userData.name || userData.email}!`);
//   };

//   return (
//     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
//       {user ? (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome!</h2>
//             {user.picture && (
//               <img 
//                 src={user.picture} 
//                 alt={user.name}
//                 className="w-20 h-20 rounded-full mx-auto mb-4"
//               />
//             )}
//             <p className="text-lg font-medium text-gray-800">{user.name}</p>
//             <p className="text-sm text-gray-600 mb-6">{user.email}</p>
//             <button
//               onClick={() => setUser(null)}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <TexoraLogin 
//           onBackToLanding={handleBackToLanding}
//           onLoginSuccess={handleLoginSuccess}
//         />
//       )}
//     </GoogleOAuthProvider>
//   );
// }






// import React, { useState } from 'react';
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';

// // Color scheme
// const colors = {
//   primary: "from-blue-600 to-emerald-600",
//   primarySolid: "bg-blue-600",
//   accent: "from-yellow-400 to-orange-500",
//   muted: "text-gray-600 dark:text-gray-400",
//   surface: "bg-white dark:bg-black",
// };

// // Your Google Client ID
// const GOOGLE_CLIENT_ID = "572421778240-akk3kkb4f60ukuv9pcfrpg2ielm09thk.apps.googleusercontent.com";

// // TexoraAi.skills Login Page
// const TexoraLogin = ({ onBackToLanding, onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login submitted', { email, password });
//     if (onLoginSuccess) {
//       onLoginSuccess({ email, method: 'email' });
//     }
//   };

//   const handleGoogleSuccess = (credentialResponse) => {
//     try {
//       const decoded = jwtDecode(credentialResponse.credential);
//       console.log('Google Login Success:', decoded);
      
//       // Store token in memory (not localStorage as per restrictions)
//       if (onLoginSuccess) {
//         onLoginSuccess({
//           email: decoded.email,
//           name: decoded.name,
//           picture: decoded.picture,
//           method: 'google',
//           token: credentialResponse.credential
//         });
//       }
      
//       // Navigate to landing page immediately without alert
//       if (onBackToLanding) {
//         onBackToLanding();
//       }
//     } catch (error) {
//       console.error('Error decoding Google token:', error);
//     }
//   };

//   const handleGoogleError = () => {
//     console.log('Google Login Failed');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
//       {/* Header */}
//       <header className="bg-white dark:bg-black shadow-sm border-b dark:border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className={`w-8 h-8 bg-gradient-to-br ${colors.primary} rounded flex items-center justify-center shadow-md`}>
//               <span className="text-white font-bold text-lg">T</span>
//             </div>
//             <span className="text-2xl font-bold text-gray-900 dark:text-white">TexoraAi.skills</span>
//           </div>
//           <div className="flex items-center gap-6">
//             <button className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}>
//               Lightning Lessons
//             </button>
//             <button className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}>
//               Apply to teach
//             </button>
//             <button className={`${colors.primarySolid} hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors`}>
//               Log In
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//         <div className="w-full max-w-md">
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
//             Log in to your account
//           </h2>

//           <div className="bg-white dark:bg-black rounded-lg shadow-md border dark:border-gray-800 p-8">
//             {/* Google Login Button */}
//             <div className="mb-6">
//               <GoogleLogin
//                 onSuccess={handleGoogleSuccess}
//                 onError={handleGoogleError}
//                 useOneTap
//                 theme="outline"
//                 size="large"
//                 width="100%"
//                 text="signin_with"
//               />
//             </div>

//             {/* Divider */}
//             <div className="relative mb-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white dark:bg-black text-gray-500 dark:text-gray-400">or use email</span>
//               </div>
//             </div>

//             {/* Email/Password Fields */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                 />
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className={`w-full ${colors.primarySolid} hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors shadow-md hover:shadow-lg`}
//               >
//                 Log in
//               </button>
//             </div>

//             <div className="mt-4 text-center">
//               <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
//                 Forgot password?
//               </button>
//             </div>

//             <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
//               Don't have a TexoraAi.skills account?{' '}
//               <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
//                 Sign up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Minimal Login Page
// const MinimalLogin = ({ onBackToLanding, onLoginSuccess }) => {
//   const handleGoogleSuccess = (credentialResponse) => {
//     try {
//       const decoded = jwtDecode(credentialResponse.credential);
//       console.log('Google Login Success:', decoded);
      
//       if (onLoginSuccess) {
//         onLoginSuccess({
//           email: decoded.email,
//           name: decoded.name,
//           picture: decoded.picture,
//           method: 'google',
//           token: credentialResponse.credential
//         });
//       }
      
//       if (onBackToLanding) {
//         onBackToLanding();
//       }
//     } catch (error) {
//       console.error('Error decoding Google token:', error);
//     }
//   };

//   const handleGoogleError = () => {
//     console.log('Google Login Failed');
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center">
//       <div className="text-center">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-8">Login</h2>

//         <div className="mb-6">
//           <GoogleLogin
//             onSuccess={handleGoogleSuccess}
//             onError={handleGoogleError}
//             useOneTap
//             theme="outline"
//             size="large"
//             text="signin_with"
//           />
//         </div>

//         <div className="mt-6">
//           <button
//             onClick={onBackToLanding}
//             className="text-sm text-gray-600 hover:text-gray-900"
//           >
//             ← Back to Landing
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Demo Component with Google OAuth Provider
// export default function LoginDemo() {
//   const [user, setUser] = useState(null);

//   const handleBackToLanding = () => {
//     // In your real app, use: navigate('/')
//     console.log('Navigating to home page...');
//   };

//   const handleLoginSuccess = (userData) => {
//     setUser(userData);
//     // Automatically redirect after setting user
//     setTimeout(() => {
//       console.log('User logged in, redirecting to home...');
//     }, 100);
//   };

//   return (
//     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
//       <TexoraLogin 
//         onBackToLanding={handleBackToLanding}
//         onLoginSuccess={handleLoginSuccess}
//       />
//     </GoogleOAuthProvider>
//   );
// }











// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';

// // Color scheme
// const colors = {
//   primary: "from-blue-600 to-emerald-600",
//   primarySolid: "bg-blue-600",
//   accent: "from-yellow-400 to-orange-500",
//   muted: "text-gray-600 dark:text-gray-400",
//   surface: "bg-white dark:bg-black",
// };

// // Your Google Client ID
// const GOOGLE_CLIENT_ID = "572421778240-akk3kkb4f60ukuv9pcfrpg2ielm09thk.apps.googleusercontent.com";

// // TexoraAi.skills Login Page
// const TexoraLogin = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login submitted', { email, password });
    
//     const userData = {
//       email,
//       name: email.split('@')[0], // Use email username as name
//       method: 'email'
//     };
    
//     // Store user data in sessionStorage
//     sessionStorage.setItem('user', JSON.stringify(userData));
    
//     // Navigate to home page
//     navigate('/');
//   };

//   const handleGoogleSuccess = (credentialResponse) => {
//     try {
//       const decoded = jwtDecode(credentialResponse.credential);
//       console.log('Google Login Success:', decoded);
      
//       const userData = {
//         email: decoded.email,
//         name: decoded.name,
//         picture: decoded.picture,
//         method: 'google',
//         token: credentialResponse.credential
//       };
      
//       // Store user data in sessionStorage for persistence
//       sessionStorage.setItem('user', JSON.stringify(userData));
      
//       // Navigate to home page
//       navigate('/');
//     } catch (error) {
//       console.error('Error decoding Google token:', error);
//     }
//   };

//   const handleGoogleError = () => {
//     console.log('Google Login Failed');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
//       {/* Header */}
//       <header className="bg-white dark:bg-black shadow-sm border-b dark:border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           <div 
//             className="flex items-center gap-2 cursor-pointer"
//             onClick={() => navigate('/')}
//           >
//             <div className={`w-8 h-8 bg-gradient-to-br ${colors.primary} rounded flex items-center justify-center shadow-md`}>
//               <span className="text-white font-bold text-lg">T</span>
//             </div>
//             <span className="text-2xl font-bold text-gray-900 dark:text-white">TexoraAi.skills</span>
//           </div>
//           <div className="flex items-center gap-6">
//             <button className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}>
//               Lightning Lessons
//             </button>
//             <button className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}>
//               Apply to teach
//             </button>
//             <button className={`${colors.primarySolid} hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors`}>
//               Log In
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//         <div className="w-full max-w-md">
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
//             Log in to your account
//           </h2>

//           <div className="bg-white dark:bg-black rounded-lg shadow-md border dark:border-gray-800 p-8">
//             {/* Google Login Button */}
//             <div className="mb-6">
//               <GoogleLogin
//                 onSuccess={handleGoogleSuccess}
//                 onError={handleGoogleError}
//                 useOneTap
//                 theme="outline"
//                 size="large"
//                 width="100%"
//                 text="signin_with"
//               />
//             </div>

//             {/* Divider */}
//             <div className="relative mb-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white dark:bg-black text-gray-500 dark:text-gray-400">or use email</span>
//               </div>
//             </div>

//             {/* Email/Password Fields */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className={`w-full ${colors.primarySolid} hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors shadow-md hover:shadow-lg`}
//               >
//                 Log in
//               </button>
//             </form>

//             <div className="mt-4 text-center">
//               <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
//                 Forgot password?
//               </button>
//             </div>

//             <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
//               Don't have a TexoraAi.skills account?{' '}
//               <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
//                 Sign up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Login Component with Google OAuth Provider
// export default function Login() {
//   return (
//     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
//       <TexoraLogin />
//     </GoogleOAuthProvider>
//   );
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

// Color scheme
const colors = {
  primary: "from-blue-600 to-emerald-600",
  primarySolid: "bg-blue-600",
  accent: "from-yellow-400 to-orange-500",
  muted: "text-gray-600 dark:text-gray-400",
  surface: "bg-white dark:bg-black",
};

// Your Google Client ID
const GOOGLE_CLIENT_ID = "572421778240-akk3kkb4f60ukuv9pcfrpg2ielm09thk.apps.googleusercontent.com";

// TexoraAi.skills Login Page
const TexoraLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted', { email, password });
    
    const userData = {
      email,
      name: email.split('@')[0], // Use email username as name
      method: 'email'
    };
    
    // Store user data in sessionStorage
    sessionStorage.setItem('user', JSON.stringify(userData));
    
    // Navigate to home page
    navigate('/');
  };

  const handleGoogleSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Google Login Success:', decoded);
      
      const userData = {
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        method: 'google',
        token: credentialResponse.credential
      };
      
      // Store user data in sessionStorage for persistence
      sessionStorage.setItem('user', JSON.stringify(userData));
      
      // Navigate to home page
      navigate('/');
    } catch (error) {
      console.error('Error decoding Google token:', error);
    }
  };

  const handleGoogleError = () => {
    console.log('Google Login Failed');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-black shadow-sm border-b dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className={`w-8 h-8 bg-gradient-to-br ${colors.primary} rounded flex items-center justify-center shadow-md`}>
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">TexoraAi.skills</span>
          </div>
          <div className="flex items-center gap-6">
          <button 
          className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}
          onClick={() => navigate('/apply-admin')}
          >
              Apply to Admin
            </button>
            <button 
          className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}
          onClick={() => navigate('/apply-business')}
          >
              Apply to Business
            </button>
          <button 
          className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}
          onClick={() => navigate('/apply-trainer')}
          >
          Apply to trainer
          </button>
            
          <button
          onClick={() => navigate('/apply-student')}
          className={`${colors.primarySolid} hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors`}
          >
          Apply to student
          </button>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Log in to your account
          </h2>

          <div className="bg-white dark:bg-black rounded-lg shadow-md border dark:border-gray-800 p-8">
            {/* Google Login Button */}
            <div className="mb-6">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap
                theme="outline"
                size="large"
                width="100%"
                text="signin_with"
              />
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-black text-gray-500 dark:text-gray-400">or use email</span>
              </div>
            </div>

            {/* Email/Password Fields */}
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <button
                type="submit"
                className={`w-full ${colors.primarySolid} hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors shadow-md hover:shadow-lg`}
              >
                Log in
              </button>
            </form>

            <div className="mt-4 text-center">
              <button 
                onClick={() => navigate('/forgot-password')}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have a TexoraAi.skills account?{' '}
              <button 
                onClick={() => navigate('/register')}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Login Component with Google OAuth Provider
export default function Login() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <TexoraLogin />
    </GoogleOAuthProvider>
  );
}