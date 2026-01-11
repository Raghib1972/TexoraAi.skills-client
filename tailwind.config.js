
// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class", // 👈 important line

//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           DEFAULT: "#6366F1",
//           soft: "#4F46E5",
//           subtle: "#EEF2FF",
//         },
//         surface: {
//           DEFAULT: "#020617",
//           card: "#020617",
//           muted: "#0F172A",
//           border: "#1E293B",
//         },
//       },
//       fontFamily: {
//         sans: ["Inter", "system-ui", "sans-serif"],
//       },
//       boxShadow: {
//         card: "0 18px 45px rgba(15, 23, 42, 0.55)",
//       },
//       borderRadius: {
//         xl: "1rem",
//       },
//     },
//   },
//   plugins: [],
// };





/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6366F1",
          soft: "#4F46E5",
          subtle: "#EEF2FF",
        },
        surface: {
          DEFAULT: "#020617",
          card: "#020617",
          muted: "#0F172A",
          border: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 45px rgba(15, 23, 42, 0.55)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),  // ✅ Red error fix
  ],
};

