
// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { 
// //   ArrowRight,
// //   ArrowLeft,
// //   Shield, 
// //   Star, 
// //   Users, 
// //   Sparkles, 
// //   TrendingUp
// // } from "lucide-react";

// // const colors = {
// //   primary: "from-blue-600 to-emerald-600",
// //   primarySolid: "bg-blue-600",
// //   accent: "from-yellow-400 to-orange-500",
// //   muted: "text-gray-600 dark:text-gray-400",
// //   surface: "bg-white dark:bg-gray-900",
// // };

// // export default function Welcome() {
// //   const navigate = useNavigate();
// //   const [step, setStep] = useState(0);
// //   const [isAnimating, setIsAnimating] = useState(true);
  
// //   useEffect(() => {
// //     setIsAnimating(true);
// //     const timer = setTimeout(() => setIsAnimating(false), 500);
// //     return () => clearTimeout(timer);
// //   }, [step]);
  
// //   const steps = [
// //     {
// //       title: "Welcome to TexoraAi.skills! 🎉",
// //       description: "Industry experts se Product, Design & Growth skills sikho aur apna career next level pe le jao",
// //       icon: Users,
// //       bg: colors.primary,
// //       features: ["Live Classes", "Expert Mentors", "Flexible Schedule"]
// //     },
// //     {
// //       title: "Live Mentorship + Projects",
// //       description: "1:1 sessions, real case studies aur hands-on projects se job ready ban jao",
// //       icon: Star,
// //       bg: colors.primary,
// //       features: ["1:1 Mentorship", "Real Projects", "Portfolio Building"]
// //     },
// //     {
// //       title: "Trusted by 50K+ Learners",
// //       description: "95% success rate | Top companies like Google, Amazon hire karte hain",
// //       icon: Shield,
// //       bg: colors.primary,
// //       features: ["50K+ Students", "95% Success", "Job Placement"]
// //     }
// //   ];
  
// //   const Icon = steps[step]?.icon;
  
// //   const handleNext = () => {
// //     if (step < 2) {
// //       setStep(step + 1);
// //     } else {
// //       // Completed all steps → Signup
// //       navigate("/signup");
// //     }
// //   };
  
// //   const handleBack = () => {
// //     if (step > 0) {
// //       setStep(step - 1);
// //     } else {
// //       // If on first step, go back to homepage
// //       navigate("/");
// //     }
// //   };
  
// //   const handleSkip = () => {
// //     // Skip onboarding → Signup
// //     navigate("/signup");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900/50 dark:to-emerald-950 flex items-center justify-center p-4 relative overflow-hidden">
      
// //       {/* Background Effects */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
// //         <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
// //         <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
// //       </div>
      
// //       {/* Onboarding Card */}
// //       <div className={`max-w-md w-full ${colors.surface}/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 dark:border-slate-700/50 p-8 text-center space-y-6 relative z-10 transition-all duration-500 ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        
// //         {/* Progress Indicators */}
// //         <div className="space-y-3">
// //           <div className="flex justify-center gap-2">
// //             {[0, 1, 2].map(i => (
// //               <div 
// //                 key={i} 
// //                 className={`h-2 rounded-full transition-all duration-500 ${
// //                   i === step ? `w-8 bg-gradient-to-r ${steps[step].bg}` : 
// //                   i < step ? 'w-2 bg-blue-500' : 
// //                   'w-2 bg-gray-300 dark:bg-slate-600'
// //                 }`} 
// //               />
// //             ))}
// //           </div>
// //           <p className={`text-xs font-medium ${colors.muted}`}>
// //             Step {step + 1} of 3
// //           </p>
// //         </div>
        
// //         {/* Content */}
// //         <div className="space-y-4">
// //           {/* Icon */}
// //           <div className="relative inline-block">
// //             <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${steps[step].bg} rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-6`}>
// //               <Icon className="w-10 h-10 text-white" />
// //             </div>
// //             <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br ${colors.accent} rounded-full flex items-center justify-center animate-bounce">
// //               <Sparkles className="w-3 h-3 text-white" />
// //             </div>
// //           </div>
          
// //           {/* Title & Description */}
// //           <div className="space-y-2">
// //             <h1 className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-100 dark:via-slate-200 dark:to-slate-100">
// //               {steps[step].title}
// //             </h1>
// //             <p className={`${colors.muted} leading-relaxed px-2`}>
// //               {steps[step].description}
// //             </p>
// //           </div>
          
// //           {/* Feature Pills */}
// //           <div className="flex flex-wrap justify-center gap-2 pt-2">
// //             {steps[step].features.map((feature, idx) => (
// //               <div 
// //                 key={idx}
// //                 className={`px-4 py-2 bg-gradient-to-r ${steps[step].bg} bg-opacity-10 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 backdrop-blur-sm transform transition-all duration-300 hover:scale-105`}
// //               >
// //                 {feature}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
        
// //         {/* Action Buttons */}
// //         <div className="space-y-3 pt-2">
// //           {/* Back Button */}
// //           <button
// //             onClick={handleBack}
// //             className="w-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
// //           >
// //             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
// //             <span>{step === 0 ? 'Back to Home' : 'Previous'}</span>
// //           </button>

// //           {/* Continue/Get Started Button */}
// //           <button
// //             onClick={handleNext}
// //             className={`w-full ${colors.primarySolid} text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-2xl hover:${colors.primarySolid.replace('bg-', 'bg-')} hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group`}
// //           >
// //             <span>{step < 2 ? 'Continue' : 'Get Started'}</span>
// //             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// //           </button>
          
// //           {/* Skip Button */}
// //           <button
// //             onClick={handleSkip}
// //             className={`w-full text-sm ${colors.muted} hover:text-slate-900 dark:hover:text-slate-200 py-2 transition-all duration-300 hover:scale-105 font-medium`}
// //           >
// //             Skip for now →
// //           </button>
// //         </div>
        
// //         {/* Trust Indicators */}
// //         <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-200 dark:border-slate-700">
// //           <div className="flex items-center gap-1 text-yellow-500">
// //             <Star className="w-4 h-4 fill-current" />
// //             <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">4.9/5</span>
// //           </div>
// //           <div className="flex items-center gap-1 text-emerald-500">
// //             <Users className="w-4 h-4" />
// //             <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">50K+</span>
// //           </div>
// //           <div className="flex items-center gap-1 text-blue-500">
// //             <TrendingUp className="w-4 h-4" />
// //             <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">95%</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   ArrowRight,
//   ArrowLeft,
//   Shield, 
//   Star, 
//   Users, 
//   Sparkles, 
//   TrendingUp
// } from "lucide-react";

// const colors = {
//   primary: "from-blue-600 to-emerald-600",
//   primarySolid: "bg-blue-600",
//   accent: "from-yellow-400 to-orange-500",
//   muted: "text-gray-600 dark:text-gray-400",
//   surface: "bg-white dark:bg-gray-900",
// };

// export default function Welcome() {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(true);
  
//   useEffect(() => {
//     setIsAnimating(true);
//     const timer = setTimeout(() => setIsAnimating(false), 500);
//     return () => clearTimeout(timer);
//   }, [step]);
  
//   const steps = [
//     {
//       title: "Welcome to TexoraAi.skills! 🎉",
//       description: "Industry experts se Product, Design & Growth skills sikho aur apna career next level pe le jao",
//       icon: Users,
//       bg: colors.primary,
//       features: ["Live Classes", "Expert Mentors", "Flexible Schedule"]
//     },
//     {
//       title: "Live Mentorship + Projects",
//       description: "1:1 sessions, real case studies aur hands-on projects se job ready ban jao",
//       icon: Star,
//       bg: colors.primary,
//       features: ["1:1 Mentorship", "Real Projects", "Portfolio Building"]
//     },
//     {
//       title: "Trusted by 50K+ Learners",
//       description: "95% success rate | Top companies like Google, Amazon hire karte hain",
//       icon: Shield,
//       bg: colors.primary,
//       features: ["50K+ Students", "95% Success", "Job Placement"]
//     }
//   ];
  
//   const Icon = steps[step]?.icon;
  
//   const handleNext = () => {
//     if (step < 2) {
//       setStep(step + 1);
//     } else {
//       navigate("/signup");
//     }
//   };
  
//   const handleBack = () => {
//     if (step > 0) {
//       setStep(step - 1);
//     } else {
//       navigate("/");
//     }
//   };
  
//   const handleSkip = () => {
//     navigate("/signup");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900/50 dark:to-emerald-950 flex items-center justify-center p-3 relative overflow-hidden">
      
//       {/* Background Effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
//         <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
//       </div>
      
//       {/* Onboarding Card */}
//       <div className={`max-w-md w-full ${colors.surface}/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/50 p-6 text-center space-y-5 relative z-10 transition-all duration-500 ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        
//         {/* Progress Indicators */}
//         <div className="space-y-2.5">
//           <div className="flex justify-center gap-2">
//             {[0, 1, 2].map(i => (
//               <div 
//                 key={i} 
//                 className={`h-1.5 rounded-full transition-all duration-500 ${
//                   i === step ? `w-8 bg-gradient-to-r ${steps[step].bg}` : 
//                   i < step ? 'w-2 bg-blue-500' : 
//                   'w-2 bg-gray-300 dark:bg-slate-600'
//                 }`} 
//               />
//             ))}
//           </div>
//           <p className={`text-xs font-medium ${colors.muted}`}>
//             Step {step + 1} of 3
//           </p>
//         </div>
        
//         {/* Content */}
//         <div className="space-y-4">
//           {/* Icon */}
//           <div className="relative inline-block">
//             <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${steps[step].bg} rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-6`}>
//               <Icon className="w-8 h-8 text-white" />
//             </div>
//             <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br ${colors.accent} rounded-full flex items-center justify-center animate-bounce">
//               <Sparkles className="w-2.5 h-2.5 text-white" />
//             </div>
//           </div>
          
//           {/* Title & Description */}
//           <div className="space-y-2">
//             <h1 className="text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-100 dark:via-slate-200 dark:to-slate-100">
//               {steps[step].title}
//             </h1>
//             <p className={`${colors.muted} text-sm leading-relaxed px-2`}>
//               {steps[step].description}
//             </p>
//           </div>
          
//           {/* Feature Pills */}
//           <div className="flex flex-wrap justify-center gap-2 pt-2">
//             {steps[step].features.map((feature, idx) => (
//               <div 
//                 key={idx}
//                 className={`px-3 py-1.5 bg-gradient-to-r ${steps[step].bg} bg-opacity-10 rounded-full text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 backdrop-blur-sm transform transition-all duration-300 hover:scale-105`}
//               >
//                 {feature}
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Action Buttons */}
//         <div className="space-y-2.5 pt-2">
//           {/* Back Button */}
//           <button
//             onClick={handleBack}
//             className="w-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 py-3 px-4 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
//           >
//             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//             <span>{step === 0 ? 'Back to Home' : 'Previous'}</span>
//           </button>

//           {/* Continue/Get Started Button */}
//           <button
//             onClick={handleNext}
//             className={`w-full ${colors.primarySolid} text-white text-sm py-3 px-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group`}
//           >
//             <span>{step < 2 ? 'Continue' : 'Get Started'}</span>
//             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </button>
          
//           {/* Skip Button */}
//           <button
//             onClick={handleSkip}
//             className={`w-full text-xs ${colors.muted} hover:text-slate-900 dark:hover:text-slate-200 py-1.5 transition-all duration-300 hover:scale-105 font-medium`}
//           >
//             Skip for now →
//           </button>
//         </div>
        
//         {/* Trust Indicators */}
//         <div className="flex items-center justify-center gap-4 pt-3 border-t border-slate-200 dark:border-slate-700">
//           <div className="flex items-center gap-1 text-yellow-500">
//             <Star className="w-3.5 h-3.5 fill-current" />
//             <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">4.9/5</span>
//           </div>
//           <div className="flex items-center gap-1 text-emerald-500">
//             <Users className="w-3.5 h-3.5" />
//             <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">50K+</span>
//           </div>
//           <div className="flex items-center gap-1 text-blue-500">
//             <TrendingUp className="w-3.5 h-3.5" />
//             <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">95%</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
