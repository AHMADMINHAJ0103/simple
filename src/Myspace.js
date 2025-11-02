import { myspaceData } from "./myspaceData";
import { Link, useNavigate } from "react-router-dom";

export default function Myspace() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#9B2A22] to-[#2F0D0A] flex flex-col items-center justify-center px-6 py-10">

      {/* 🟢 Top Buttons */}
      <div className="absolute top-6 left-6 flex items-center gap-4">
        <button
          onClick={() => navigate("/myspaceform")} // redirect to submission form or your preferred route
          className="px-5 py-2 bg-white/10 border border-white/30 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          Share Your Writings
        </button>
      </div>

      <button
        onClick={() => navigate(-1)} // Go back to previous page
        className="absolute top-6 right-6 text-white text-2xl font-bold hover:text-red-400 transition-colors"
      >
        ×
      </button>

      {/* 🔴 Heading */}
      <h1 className="text-5xl font-bold text-white mb-12 border-b-4 border-red-400 pb-2">
        Welcome to My Space
      </h1>

      {/* 🟣 Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl w-full">
        {myspaceData.map((item) => (
          <div
            key={item.id}
            className="relative h-64 bg-[#3B0A07] rounded-2xl overflow-hidden shadow-lg group transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Overlay (hover effect) */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-300 mb-4">By {item.author}</p>
              <Link
                to={`/myindividual/${item.id}`}
                state={{ item }}
                className="inline-block px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                Read
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
