import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Sun, Moon, Briefcase } from "lucide-react";

const ApplyBusiness = () => {
const navigate = useNavigate();
const [step, setStep] = useState(1);
const [darkMode, setDarkMode] = useState(false);

  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    businessEmail: "",
    mobile: "",
    businessType: "",
    industry: "",
    cityState: "",
    website: "",
    companySize: "",
    yearsExperience: "",
    lookingFor: [],
    aboutBusiness: "",
    expectedOutcome: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCheckboxGroup = (value) => {
    const current = formData.lookingFor;
    if (current.includes(value)) {
      setFormData({
        ...formData,
        lookingFor: current.filter((item) => item !== value),
      });
    } else {
      setFormData({
        ...formData,
        lookingFor: [...current, value],
      });
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Business Application Submitted:", formData);
    alert(
      " Business Application Submitted!\n\n" +
      "Your business profile is under review.\n" +
      "⏳ Login will be enabled after approval."
    );
  
    // ✅ CORRECT REDIRECT
  navigate("/approval-pending");
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black" 
        : "bg-gradient-to-br from-blue-50 via-white to-emerald-50"
    }`}>
      <header className={`border-b backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${
        darkMode 
          ? "border-gray-700 bg-gray-900/80" 
          : "border-gray-200 bg-white/80 shadow-sm"
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            TexoraAI.skills
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" 
                  : "bg-blue-100 text-blue-600 hover:bg-blue-200"
              } hover:scale-110`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
onClick={() => navigate("/business/login")}
  className="bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-white"
>
  Login
</button>

          </div>
        </div>
      </header>

      <div className={`max-w-3xl mx-auto rounded-2xl shadow-2xl mt-10 overflow-hidden transition-all duration-300 ${
        darkMode 
          ? "bg-gray-800 border border-gray-700" 
          : "bg-white border border-gray-100"
      }`}>
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase size={32} />
            <h2 className="text-3xl font-bold">Apply for Business</h2>
          </div>
          <p className="text-blue-100 mt-1">Complete the process in 4 steps</p>
        </div>

        <div className={`p-8 transition-colors duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}>
          {step === 1 && (
            <div className="space-y-5">
              <h3 className={`text-xl font-bold transition-colors duration-300 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}>Basic Business Details</h3>

              <input
                name="businessName"
                placeholder="Business / Company Name"
                value={formData.businessName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" 
                    : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
                }`}
              />

              <input
                name="ownerName"
                placeholder="Owner / Founder Name"
                value={formData.ownerName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" 
                    : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
                }`}
              />

              <input
                name="businessEmail"
                type="email"
                placeholder="Business Email ID"
                value={formData.businessEmail}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" 
                    : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
                }`}
              />

              <input
                name="mobile"
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" 
                    : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
                }`}
              />

              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white" 
                    : "border-gray-300 bg-white text-gray-800"
                }`}
              >
                <option value="">Select Business Type</option>
                <option value="Startup">Startup</option>
                <option value="SME">SME</option>
                <option value="Enterprise">Enterprise</option>
                <option value="Individual">Individual</option>
              </select>

              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white" 
                    : "border-gray-300 bg-white text-gray-800"
                }`}
              >
                <option value="">Select Industry / Domain</option>
                <option value="IT">IT</option>
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
                <option value="Retail">Retail</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Other">Other</option>
              </select>

              <input
                name="cityState"
                placeholder="City & State"
                value={formData.cityState}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" 
                    : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
                }`}
              />

              <input
                name="website"
                placeholder="Website (optional)"
                value={formData.website}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" 
                    : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
                }`}
              />

              <button 
                onClick={nextStep} 
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Next →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h3 className={`text-xl font-bold transition-colors duration-300 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}>Business Profile & Requirements</h3>

              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white" 
                    : "border-gray-300 bg-white text-gray-800"
                }`}
              >
                <option value="">Select Company Size</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="50+">50+</option>
              </select>

              <input
                name="yearsExperience"
                placeholder="Years of Experience"
                value={formData.yearsExperience}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" 
                    : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
                }`}
              />

              <div>
                <label className={`block text-sm font-medium mb-3 transition-colors duration-300 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}>What are you looking for?</label>
                
                <div className="space-y-2">
                  {["Trainers", "Students", "Courses", "Corporate Training"].map((item) => (
                    <label key={item} className={`flex items-center gap-3 cursor-pointer transition-colors duration-300 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                      <input
                        type="checkbox"
                        checked={formData.lookingFor.includes(item)}
                        onChange={() => handleCheckboxGroup(item)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                name="aboutBusiness"
                placeholder="Short Description / About Business"
                value={formData.aboutBusiness}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 resize-none ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" 
                    : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
                }`}
              />

              <textarea
                name="expectedOutcome"
                placeholder="Expected Outcome (optional)"
                value={formData.expectedOutcome}
                onChange={handleChange}
                rows="3"
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 resize-none ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" 
                    : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
                }`}
              />

              <div className="flex justify-between gap-4">
                <button 
                  onClick={prevStep} 
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    darkMode 
                      ? "bg-gray-700 text-white hover:bg-gray-600" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  ← Back
                </button>
                <button 
                  onClick={nextStep} 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h3 className={`text-xl font-bold transition-colors duration-300 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}>Account Setup (Login Information)</h3>

              <div className={`p-4 rounded-lg border transition-all duration-300 ${
                darkMode 
                  ? "bg-blue-900/30 border-blue-700 text-blue-300" 
                  : "bg-blue-50 border-blue-200 text-blue-800"
              }`}>
                <p className="text-sm">📧 You can log in using this Email ID and Password</p>
              </div>

              <input
                name="businessEmail"
                type="email"
                placeholder="Email ID (Business Email)"
                value={formData.businessEmail}
                disabled
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 opacity-70 cursor-not-allowed ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white" 
                    : "border-gray-300 bg-gray-100 text-gray-800"
                }`}
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" 
                    : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
                }`}
              />

              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" 
                    : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
                }`}
              />

              <div className="flex justify-between gap-4">
                <button 
                  onClick={prevStep} 
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    darkMode 
                      ? "bg-gray-700 text-white hover:bg-gray-600" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  ← Back
                </button>
                <button 
                  onClick={nextStep} 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-5">
              <h3 className={`text-xl font-bold transition-colors duration-300 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}>Review & Submit</h3>

              <div className={`p-4 rounded-lg space-y-2 transition-all duration-300 ${
                darkMode 
                  ? "bg-gray-700 border border-gray-600" 
                  : "bg-blue-50 border border-blue-100"
              }`}>
                <p className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}><strong>Business Name:</strong> {formData.businessName || "—"}</p>
                <p className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}><strong>Owner Name:</strong> {formData.ownerName || "—"}</p>
                <p className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}><strong>Email:</strong> {formData.businessEmail || "—"}</p>
                <p className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}><strong>Mobile:</strong> {formData.mobile || "—"}</p>
                <p className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}><strong>Business Type:</strong> {formData.businessType || "—"}</p>
                <p className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}><strong>Industry:</strong> {formData.industry || "—"}</p>
                <p className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}><strong>Location:</strong> {formData.cityState || "—"}</p>
                <p className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}><strong>Website:</strong> {formData.website || "—"}</p>
                <p className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}><strong>Company Size:</strong> {formData.companySize || "—"}</p>
                <p className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}><strong>Years of Experience:</strong> {formData.yearsExperience || "—"}</p>
                <p className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}><strong>Looking For:</strong> {formData.lookingFor.join(", ") || "—"}</p>
              </div>

              <label className={`flex gap-3 items-start text-sm cursor-pointer transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 cursor-pointer"
                />
                <span>I agree to the Terms & Conditions</span>
              </label>

              <div className="flex justify-between gap-4">
                <button 
                  onClick={prevStep} 
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    darkMode 
                      ? "bg-gray-700 text-white hover:bg-gray-600" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  ← Back
                </button>
                <button
                  disabled={!formData.agreeTerms}
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  ✅ Submit Application
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyBusiness;