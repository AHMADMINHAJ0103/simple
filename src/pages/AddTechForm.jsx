import React, { useState } from "react";

export default function AddTechForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    writings: "",
  });

  // ✅ Handles input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("🟢 New Data Added:", formData);
    alert("✅ Data added successfully!");

    // Clear form after submit
    setFormData({
      title: "",
      author: "",
      description: "",
      category: "",
      writings: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add New Tech Data
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          required
        ></textarea>

        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Article, Poem, Tech)"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />

        <textarea
          name="writings"
          placeholder="Enter your content here..."
          value={formData.writings}
          onChange={handleChange}
          className="w-full p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition duration-200"
        >
          Add Data
        </button>
      </form>
    </div>
  );
}
