// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/explore-programs");   // yahi par page change hoga
  };                                // [web:5][web:19]

  return (
    <section className="flex flex-col items-center justify-center py-20">
      <h1 className="text-5xl font-bold mb-6">
        Become the <span className="text-cyan-500">Top 1%</span>
      </h1>

      {/* Explore Programs button */}
      <button
        onClick={handleExploreClick}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold shadow-lg hover:opacity-90"
      >
        Explore Programs
      </button>
    </section>
  );
}

export default Home;
