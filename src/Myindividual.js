import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { myspaceData } from "./myspaceData";

export default function Myndividual() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const item = location.state?.item || myspaceData.find((a) => String(a.id) === String(id));

  if (!item) {
    return (
      <div className="w-full p-8 text-center text-white">
        <p className="text-lg">Article not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#9B2A22] to-[#2F0D0A] text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
       
        <h1 className="text-4xl font-bold mb-2">{item.title}</h1>
        <p className="text-lg text-gray-300 mb-8">By {item.author}</p>

        <button
          onClick={() => navigate(-1)}
          className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
}
