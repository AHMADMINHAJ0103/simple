// ...existing code...
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Individual from "./Components/Individual";
import Slider from "./Components/Slider";
import Mixed from "./Mixed";
import Poempage from "./pages/Poempage";
import Articlepage from "./pages/Articlepage";
import Subscriptionform from "./Components/Subscriptionform";
import Searchresult from "./Searchresult";
import Myspace from "./Myspace";
import Myndividual from "./Myindividual";
import Myform from "./Myform";
import Myspaceform from "./Myspaceform";
import AdminLogin from "./AdminLogin";
import Dashboard from "./pages/Dashboard";
import AddTechForm from "./pages/AddTechForm";

export default function AppRoutes() {
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ check admin login status reactively
  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminStatus);
  }, []);

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Homepage />} />
      <Route path="/slider" element={<Slider />} />
      <Route path="/mixed" element={<Mixed />} />
      <Route path="/poempage" element={<Poempage />} />
      <Route path="/form" element={<Subscriptionform />} />
      <Route path="/articlepage" element={<Articlepage />} />
      <Route path="/myform" element={<Myform />} />
      <Route path="/search" element={<Searchresult />} />
      <Route path="/myspace" element={<Myspace />} />
      <Route path="/myspaceform" element={<Myspaceform />} />
      <Route path="/individual/:id" element={<Individual />} />
      <Route path="/myindividual/:id" element={<Myndividual />} />

      {/* Admin login */}
      <Route path="/login" element={<AdminLogin />} />

      {/* ✅ Protected admin routes */}
      <Route
        path="/admin/dashboard"
        element={isAdmin ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/admin/add"
        element={<AddTechForm /> }
      />

      {/* ✅ Fallback route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
// ...existing code...
