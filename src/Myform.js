import React, { useState } from "react";

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    type: "Article",
    title: "",
    mode: "text",
    file: null,
    content: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulated form submission (no backend linked)
    setTimeout(() => {
      setMessage("✅ Form submitted (demo only, no backend linked).");
      setFormData({
        name: "",
        college: "",
        type: "Article",
        title: "",
        mode: "text",
        file: null,
        content: "",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 text-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-black"
      >
        <h2 className="text-xl font-bold text-black mb-4 text-center">
          Submit Your Work
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-md p-2 w-full mb-3 text-black placeholder-black"
          required
        />

        <input
          type="text"
          name="college"
          placeholder="Your College"
          value={formData.college}
          onChange={handleChange}
          className="border rounded-md p-2 w-full mb-3 text-black placeholder-black"
          required
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border rounded-md p-2 w-full mb-3 text-black"
        >
          <option>Poem</option>
          <option>Article</option>
          <option>Story</option>
          <option>Other</option>
        </select>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border rounded-md p-2 w-full mb-3 text-black placeholder-black"
          required
        />

        <div className="mb-3 text-black">
          <label className="block text-black mb-1">Mode:</label>
          <div className="flex gap-4 text-black">
            <label>
              <input
                type="radio"
                name="mode"
                value="text"
                checked={formData.mode === "text"}
                onChange={handleChange}
              />{" "}
              Text
            </label>
            <label>
              <input
                type="radio"
                name="mode"
                value="file"
                checked={formData.mode === "file"}
                onChange={handleChange}
              />{" "}
              File
            </label>
          </div>
        </div>

        {formData.mode === "text" ? (
          <textarea
            name="content"
            placeholder="Write your content here..."
            value={formData.content}
            onChange={handleChange}
            className="border rounded-md p-2 w-full mb-3 h-32 text-black placeholder-black"
          />
        ) : (
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="w-full mb-3 text-black"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full p-2 rounded-md"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {message && (
          <p className="text-center text-sm text-black mt-3">{message}</p>
        )}
      </form>
    </div>
  );
}
