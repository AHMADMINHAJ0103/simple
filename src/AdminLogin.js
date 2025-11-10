import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login"); // ✅ corrected route (should match your AppRoutes)
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Admin Dashboard
        </h1>

        <div className="flex flex-col gap-4">
          {/* ✅ Go to MySpace Form */}
          <button
            onClick={() => navigate("/myspaceform")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition duration-200"
          >
            Go to Submit Form
          </button>

          {/* ✅ AddTechForm Link */}
          <button
            onClick={() => navigate("/admin/add")}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition duration-200"
          >
            Add New Tech Form
          </button>

          {/* ✅ Logout */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
