

import { ArrowLeft, Lock, Mail, Moon, Sun } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../auth";
export default function BusinessLogin() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  //  CENTRAL COLOR SYSTEM
  const colors = {
    primary: "from-blue-600 to-emerald-600",
    primarySolid: "bg-blue-600",
    accent: "from-yellow-400 to-orange-500",
    muted: "text-gray-600 dark:text-gray-400",
    surface: "bg-white dark:bg-black",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
const handleLogin = (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const success = auth.login({
    email: formData.email,
    password: formData.password,
    role: "business",
  });

  if (!success) {
    alert("❌ Invalid credentials");
    return;
  }

  navigate("/business/dashboard");
};

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors">

        {/* HEADER */}
        <header className="border-b border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/60 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className={`text-2xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
              TexoraAI.skills
            </h1>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-yellow-500"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>

        {/* LOGIN CARD */}
        <div className="max-w-md mx-auto px-6 py-16">
          <div className={`${colors.surface} border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-xl`}>

            <h2 className="text-2xl font-bold text-black dark:text-white text-center">
              Business Login
            </h2>
            <p className={`text-center text-sm mt-2 mb-8 ${colors.muted}`}>
              Login to access your dashboard
            </p>

            <form onSubmit={handleLogin}>
              {/* EMAIL */}
              <div className="mb-4">
                <label className={`block text-sm mb-2 ${colors.muted}`}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-black dark:text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* PASSWORD */}
              <div className="mb-6">
                <label className={`block text-sm mb-2 ${colors.muted}`}>
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-black dark:text-white focus:border-blue-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg bg-gradient-to-r ${colors.primary} text-white font-semibold hover:opacity-90`}
              >
                Login to Dashboard
              </button>
            </form>

            {/* LINKS */}
            <div className="text-center mt-4 space-y-2">
              <button
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </button>

              <button
                onClick={() => navigate("/")}
                className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white mx-auto"
              >
                <ArrowLeft size={16} />
                Back to Home
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
