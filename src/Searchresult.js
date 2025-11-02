import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { techData } from "./techData";
import { X } from "lucide-react";

export default function SearchResults() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Automatically focus when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const text = query.toLowerCase();

  const filtered = techData.filter(
    (item) =>
      item.title?.toLowerCase().includes(text) ||
      item.author?.toLowerCase().includes(text) ||
      item.category?.toLowerCase().includes(text)
  );

  return (
    <div className="min-h-screen flex flex-col items-center pt-24 bg-gradient-to-r from-[#9B2A22] to-[#2F0D0A] w-full px-6 pb-10 relative">
      {/* ❌ Close Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors"
      >
        <X size={30} />
      </button>

      <div className="w-full max-w-3xl mb-10">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, author, or category..."
          className="w-full px-5 py-3 rounded-xl bg-white text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-red-500 shadow-lg"
        />
      </div>

      <div className="w-full max-w-6xl text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-10 border-b border-red-500 pb-2">
          Search Results
        </h1>
      </div>

      {query && filtered.length === 0 && (
        <p className="text-white text-lg mt-10">No results found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[40px] max-w-[1500px] w-full">
        {filtered.map((article) => (
          <Link
            key={article.id}
            to={`/individual/${article.id}`}
            state={{ article }}
            className="group block bg-[#EBEAEA] rounded-2xl shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative p-3 overflow-hidden rounded-2xl">
              <div className="relative bg-white rounded-2xl overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-60 object-cover transform transition-transform duration-700 group-hover:scale-105 rounded-2xl"
                />
              </div>

              <span className="absolute top-3 left-3 text-white text-xs px-3 py-1 bg-black/40 rounded">
                {article.category}
              </span>

              <h3 className="absolute top-10 left-6 w-[180px] text-md font-semibold mt-1 text-white text-left">
                {article.title}
              </h3>
            </div>

            <div className="p-4">
              <div className="mt-3 text-sm text-gray-600">
                <p className="font-semibold text-xl text-[#8B0D0D]">
                  {article.author}
                </p>
                <p>{article.time}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
