import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MySpaceForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    college: "",
    type: "",
    title: "",
    writings: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzJpiD5MHiUQVZGNhNakn9Za-SFZ8jG5-lZdimyGC3J-lYT3ahNIrLJ5KZT7SOKrvRP6w/exec",
        {
          method: "POST",
          body: new URLSearchParams(formData),
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        setMessage("✅ Submitted successfully!");
        setFormData({
          name: "",
          college: "",
          type: "",
          title: "",
          writings: "",
        });
      } else {
        setMessage("❌ Submission failed: " + result.message);
      }
    } catch (error) {
      setMessage("⚠️ Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="relative w-full max-w-lg">
        {/* ❌ Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold transition"
          aria-label="Close form"
        >
          &times;
        </button>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full space-y-4"
        >
          <h1 className="text-xl sm:text-2xl font-bold text-black text-center mb-2">
            MySpace Form
          </h1>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
            required
          />

          <input
            type="text"
            name="college"
            placeholder="College"
            value={formData.college}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
            required
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
            required
          >
            <option value="">Select Type</option>
            <option value="Article">Article</option>
            <option value="Essay">Essay</option>
            <option value="Poem">Poem</option>
          </select>

          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />

          <textarea
            name="writings"
            placeholder="Write your work here..."
            value={formData.writings}
            onChange={handleChange}
            rows="5"
            className="w-full p-2 border rounded text-black"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>

          {message && (
            <p
              className={`text-center mt-2 font-medium ${
                message.includes("Submitting") || message.includes("✅")
                  ? "text-blue-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
