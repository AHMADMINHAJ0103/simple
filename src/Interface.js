import React from "react";
import Navbar from "./Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function Interface() {
  const navigate = useNavigate();

  const handleFocus = () => {
    navigate("/search");
  };

  return (
    <>
      <Navbar />

      {/* Background gradient and main wrapper */}
      <div className="min-h-screen flex flex-col justify-center pt-24 bg-gradient-to-r from-[#9B2A22] to-[#2F0D0A] w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 w-full">

          {/* LEFT SECTION */}
          <div className="flex flex-col gap-6 w-full lg:w-2/3 text-center lg:text-left items-center lg:items-start">
            {/* Subscribe Button */}
            <Link to="/form">
              <button className="bg-[#FF171B] text-white font-bold py-2 px-4 sm:px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-sm sm:text-base md:text-lg">
                Subscribe Now
              </button>
            </Link>

            {/* Main Heading */}
            <h1 className="text-white font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[110px] leading-tight tracking-tight">
              The Guide
            </h1>

            {/* Subtext */}
            <p className="text-white text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl">
              Your Guide to Knowledge, Culture & Inspiration
            </p>

            {/* Search Bar */}
            <div className="relative w-full sm:w-[350px] md:w-[450px] lg:w-[500px] mt-3">
        <input
  type="text"
  placeholder="Search"
  onFocus={handleFocus}
  className="w-full pl-10 pr-4 py-2 sm:py-3 rounded-full text-gray-800 placeholder-gray-500 
             focus:outline-none focus:ring-2 focus:ring-[#FF171B] shadow-md cursor-text"
  readOnly
/>

              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Description Box */}
            <div className="bg-[#2f0d0a29] p-4 sm:p-6 md:p-8 rounded-3xl w-full sm:w-[90%] md:w-[500px] font-thin text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
              <span className="font-semibold">Guide</span> is a bi-monthly
              English magazine published by the Maslac Students’ Union of Malik
              Deenar Islamic Academy, Kasaragod. It serves as a vibrant platform
              for students, writers, and thinkers to share ideas, cultural
              insights, and creative expressions. With a focus on education,
              lifestyle, and contemporary issues, <b>Guide</b> reflects the vision
              and voice of young scholars while connecting tradition with modern
              thought.
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col items-center lg:items-end w-full lg:w-1/3">
            <img
              src="/images/bookcover/1.png"
              alt="Magazine Cover"
              className="w-[200px] sm:w-[250px] md:w-[320px] lg:w-[380px] xl:w-[420px] max-h-[500px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />

            <div className="bg-[#A10E0E] p-3 mt-6 rounded-md w-[200px] sm:w-[250px] md:w-[320px] lg:w-[380px] xl:w-[420px] text-center cursor-pointer hover:bg-[#b91212] transition">
              <label className="text-white font-bold text-sm sm:text-base md:text-lg p-2">
                Read Latest Issues
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
