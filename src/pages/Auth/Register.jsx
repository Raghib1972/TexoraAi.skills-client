

// import React, { useState } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import auth from "../../auth";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   const role = searchParams.get("role") || "student";

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     if (form.password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     const signupSuccess = auth.signup({
//       name: form.name,
//       email: form.email,
//       password: form.password,
//       role
//     });

//     if (!signupSuccess) {
//       setError("Email already exists! Please use different email.");
//       return;
//     }

//     const loginSuccess = auth.login({
//       email: form.email,
//       password: form.password,
//       role
//     });
    
//     if (!loginSuccess) {
//       setError("Signup successful but login failed. Please login manually.");
//       return;
//     }

//     setSuccess("Account created successfully! Redirecting...");
//     setTimeout(() => {
//       navigate('/student/enroll');
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
//       <div className="w-full max-w-md">
//         {/* Logo and Title */}
//         <div className="text-center mb-8">
//           <div className="flex items-center justify-center mb-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg mr-2"></div>
//             <h1 className="text-2xl font-bold text-gray-900">TexoraAi.skills</h1>
//           </div>
//         </div>

//         {/* Main Card */}
//         <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
//           <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
//             Create an account
//           </h2>
//           <p className="text-sm text-gray-600 text-center mb-6">
//             Sign up to get started with TexoraAi.skills
//           </p>

//           {/* Google Sign Up Button */}
//           <button
//             type="button"
//             className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center mb-4"
//           >
//             <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
//               <path
//                 fill="#4285F4"
//                 d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//               />
//               <path
//                 fill="#34A853"
//                 d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//               />
//               <path
//                 fill="#FBBC05"
//                 d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//               />
//               <path
//                 fill="#EA4335"
//                 d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//               />
//             </svg>
//             <span className="text-gray-700 font-medium">Sign up with Google</span>
//           </button>

//           <div className="relative flex items-center my-6">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="px-4 text-sm text-gray-500">or use email</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           {error && (
//             <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
//               <p className="text-sm text-red-600">{error}</p>
//             </div>
//           )}
          
//           {success && (
//             <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
//               <p className="text-sm text-green-600">{success}</p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-900 mb-2">
//                 Full Name
//               </label>
//               <input
//                 name="name"
//                 type="text"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="John Doe"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-900 mb-2">
//                 Email address
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="john@example.com"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-900 mb-2">
//                 Password
//               </label>
//               <input
//                 name="password"
//                 type="password"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 minLength="6"
//                 placeholder="At least 6 characters"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-900 mb-2">
//                 Confirm Password
//               </label>
//               <input
//                 name="confirmPassword"
//                 type="password"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
//                 value={form.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 placeholder="Confirm your password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={!form.name || !form.email || !form.password || form.password !== form.confirmPassword}
//               className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
//             >
//               Sign up
//             </button>
//           </form>

//           <p className="text-xs text-gray-600 text-center mt-4">
//             By continuing, you agree to TexoraAi.skills{" "}
//             <Link to="/terms" className="text-blue-600 hover:text-blue-700">
//               Terms
//             </Link>{" "}
//             and{" "}
//             <Link to="/privacy" className="text-blue-600 hover:text-blue-700">
//               Privacy Policy
//             </Link>
//           </p>
//         </div>

//         <p className="text-center text-sm text-gray-600 mt-6">
//           Already have a TexoraAi.skills account?{" "}
//           <Link
//             to={`/login?role=${role}`}
//             className="text-blue-600 hover:text-blue-700 font-medium"
//           >
//             Log in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;









// import React, { useState } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { GoogleLogin } from '@react-oauth/google'; // Add import
// import { jwtDecode } from 'jwt-decode'; // Add import
// import auth from "../../auth";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   const role = searchParams.get("role") || "student";

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Google Success Handler (naya add)
//   const handleGoogleSuccess = (credentialResponse) => {
//     try {
//       const decoded = jwtDecode(credentialResponse.credential);
//       console.log('Google Signup Success:', decoded);
      
//       // Aapke auth system mein Google signup call
//       const googleSignup = auth.googleSignup({
//         email: decoded.email,
//         name: decoded.name || decoded.email.split('@')[0],
//         picture: decoded.picture,
//         role,
//         googleToken: credentialResponse.credential
//       });

//       if (googleSignup) {
//         setSuccess("Google account linked! Redirecting...");
//         setTimeout(() => navigate('/student/enroll'), 1500);
//       } else {
//         setError("Google signup failed. Try email signup.");
//       }
//     } catch (error) {
//       setError("Google signup error. Please try again.");
//       console.error(error);
//     }
//   };

//   const handleGoogleError = () => {
//     setError("Google signup failed");
//   };

//   const handleSubmit = async (e) => {
//     // Aapka existing email signup code same rahega
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     if (form.password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     const signupSuccess = auth.signup({
//       name: form.name,
//       email: form.email,
//       password: form.password,
//       role
//     });

//     if (!signupSuccess) {
//       setError("Email already exists! Please use different email.");
//       return;
//     }

//     const loginSuccess = auth.login({
//       email: form.email,
//       password: form.password,
//       role
//     });
    
//     if (!loginSuccess) {
//       setError("Signup successful but login failed. Please login manually.");
//       return;
//     }

//     setSuccess("Account created successfully! Redirecting...");
//     setTimeout(() => {
//       navigate('/student/enroll');
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
//       <div className="w-full max-w-md">
//         {/* Logo and Title - same */}
//         <div className="text-center mb-8">
//           <div className="flex items-center justify-center mb-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg mr-2"></div>
//             <h1 className="text-2xl font-bold text-gray-900">TexoraAi.skills</h1>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
//           <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Create an account</h2>
//           <p className="text-sm text-gray-600 text-center mb-6">Sign up to get started with TexoraAi.skills</p>

//           {/* ✅ REAL Google Button - Fake SVG hatao */}
//           <div className="mb-4">
//             <GoogleLogin
//               onSuccess={handleGoogleSuccess}
//               onError={handleGoogleError}
//               useOneTap
//               theme="outline"
//               size="large"
//               width="100%"
//               text="signup_with"
//               shape="rectangular"
//             />
//           </div>

//           {/* Divider - same */}
//           <div className="relative flex items-center my-6">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="px-4 text-sm text-gray-500">or use email</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           {/* Error/Success + Form - sab same */}
//           {error && (
//             <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
//               <p className="text-sm text-red-600">{error}</p>
//             </div>
//           )}
          
//           {success && (
//             <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
//               <p className="text-sm text-green-600">{success}</p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Name, Email, Password, Confirm - sab same */}
//             <div>
//               <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
//               <input name="name" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400" value={form.name} onChange={handleChange} required placeholder="John Doe" />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-900 mb-2">Email address</label>
//               <input name="email" type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400" value={form.email} onChange={handleChange} required placeholder="john@example.com" />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
//               <input name="password" type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400" value={form.password} onChange={handleChange} required minLength="6" placeholder="At least 6 characters" />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-900 mb-2">Confirm Password</label>
//               <input name="confirmPassword" type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400" value={form.confirmPassword} onChange={handleChange} required placeholder="Confirm your password" />
//             </div>

//             <button type="submit" disabled={!form.name || !form.email || !form.password || form.password !== form.confirmPassword} className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
//               Sign up
//             </button>
//           </form>

//           {/* Terms + Login link - same */}
//           <p className="text-xs text-gray-600 text-center mt-4">
//             By continuing, you agree to TexoraAi.skills{' '}
//             <Link to="/terms" className="text-blue-600 hover:text-blue-700">Terms</Link>{' '}
//             and{' '}
//             <Link to="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>
//           </p>
//         </div>

//         <p className="text-center text-sm text-gray-600 mt-6">
//           Already have a TexoraAi.skills account?{' '}
//           <Link to={`/login?role=${role}`} className="text-blue-600 hover:text-blue-700 font-medium">
//             Log in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register; new1



import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import auth from "../../auth";

// SAME COLOR SCHEME
const colors = {
  primary: "from-blue-600 to-emerald-600",
  primarySolid: "bg-blue-600",
  muted: "text-gray-600 dark:text-gray-400",
};

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "student";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ✅ GOOGLE SIGNUP FIXED
  const handleGoogleSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);

      auth.googleLogin({
        email: decoded.email,
        name: decoded.name || decoded.email.split("@")[0],
        picture: decoded.picture,
        role,
        googleToken: credentialResponse.credential,
      });

      // ✅ VERY IMPORTANT
      const userData = {
        name: decoded.name || decoded.email.split("@")[0],
        email: decoded.email,
        picture: decoded.picture,
        role,
        method: "google",
      };

      sessionStorage.setItem("user", JSON.stringify(userData));
      // ✅ END

      setSuccess("Google signup success!");
      setTimeout(() => navigate("/student/enroll"), 1200);
    } catch {
      setError("Google signup failed");
    }
  };

  // ✅ EMAIL SIGNUP FIXED
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword || form.password.length < 6) {
      setError("Password mismatch or too short");
      return;
    }

    const signupSuccess = auth.signup({
      name: form.name,
      email: form.email,
      password: form.password,
      role,
    });

    if (!signupSuccess) {
      setError("Email already exists");
      return;
    }

    auth.login({ email: form.email, password: form.password, role });

    // ✅ VERY IMPORTANT
    const userData = {
      name: form.name,
      email: form.email,
      role,
      method: "email",
    };

    sessionStorage.setItem("user", JSON.stringify(userData));
    // ✅ END

    setSuccess("Account created successfully!");
    setTimeout(() => navigate("/student/enroll"), 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">

      {/* HEADER */}
      <header className="bg-white dark:bg-black shadow-sm border-b dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className={`w-8 h-8 bg-gradient-to-br ${colors.primary} rounded flex items-center justify-center shadow-md`}>
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              TexoraAi.skills
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button className={`${colors.muted}`}>Lightning Lessons</button>
            <button className={`${colors.muted}`}>Apply to teach</button>
            <button
              onClick={() => navigate(`/login?role=${role}`)}
              className={`${colors.primarySolid} text-white px-4 py-2 rounded-lg`}
            >
              Log In
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-black rounded-lg shadow-md border dark:border-gray-800 p-8">

            <h2 className="text-3xl font-bold text-center mb-2">
              Create Account
            </h2>
            <p className="text-sm text-center mb-6">Join as {role}</p>

            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError("Google cancelled")}
              width="100%"
            />

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-black">or use email</span>
              </div>
            </div>

            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
            {success && <p className="text-green-600 text-sm mb-3">{success}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" />
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" />
              <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" />
              <input name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" />

              <button type="submit" className={`w-full ${colors.primarySolid} text-white py-3 rounded-lg`}>
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to={`/login?role=${role}`} className="text-sm text-blue-600">
                Already have an account? Sign In
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
