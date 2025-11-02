import React, { useState } from "react";

export default function MySpaceForm() {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    type: "",
    title: "",
    file: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("college", formData.college);
    form.append("type", formData.type);
    form.append("title", formData.title);
    form.append("file", formData.file);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzJpiD5MHiUQVZGNhNakn9Za-SFZ8jG5-lZdimyGC3J-lYT3ahNIrLJ5KZT7SOKrvRP6w/exec", // 🔗 replace with your own Web App URL
        {
          method: "POST",
          body: form, // do NOT add Content-Type manually
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        setMessage("✅ Uploaded successfully!");
        setFormData({ name: "", college: "", type: "", title: "", file: null });
      } else {
        setMessage("⚠️ " + result.message);
      }
    } catch (err) {
      setMessage("❌ Upload failed: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          📝 Submit Your Work
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={formData.college}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Type</option>
          <option value="Poem">Poem</option>
          <option value="Article">Article</option>
          <option value="Story">Story</option>
          <option value="Essay">Essay</option>
        </select>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="file"
          name="file"
          accept=".pdf,.doc,.docx,.txt,.jpg,.png"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-xl p-3 bg-gray-50"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Uploading..." : "Submit"}
        </button>

        {message && (
          <p className="text-center text-gray-700 font-medium">{message}</p>
        )}
      </form>
    </div>
  );
}
