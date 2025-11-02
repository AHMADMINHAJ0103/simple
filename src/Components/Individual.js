import React from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { techData } from "../techData.js";

export default function Individual() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Prefer passed state, otherwise find by id from techData
  const article =
    location.state?.article || techData.find((a) => String(a.id) === String(id));

  if (!article) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 text-center text-white bg-gray-900">
        <p className="text-lg sm:text-xl md:text-2xl">Article not found.</p>
        <div className="mt-4">
          <Link
            to="/"
            className="text-blue-400 underline hover:text-blue-600 transition"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-8 font-display">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6">
          {article.title}
        </h1>

        <label className="text-lg sm:text-xl md:text-2xl block mb-4 text-blue-300">
          {article.author}
        </label>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
          {article.description}
        </p>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 text-white py-2 px-6 sm:px-8 rounded-lg hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
