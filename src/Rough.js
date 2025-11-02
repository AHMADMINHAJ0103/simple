import React, { useState } from "react";

export default function FormUpload() {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    type: "",
  });

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzVSosxPeHBE51tPN-AOD-paHVjcGq-M_XKyw5LKUuJxAN94nz9-nz22wQrkAYr1yUG_A/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "No file selected");
  };

  // Convert file to base64
  const uploadFile = (file) =>
    new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = (e) => {
        const data = e.target.result.split(",");
        const obj = {
          fileName: file.name,
          mimeType: data[0].match(/:(\w.+);/)[1],
          data: data[1],
        };
        resolve(obj);
      };
      fr.onerror = reject;
      fr.readAsDataURL(file);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Submitting...");
    setMessageType("info");

    try {
      const formDataObj = { ...formData };

      if (file) {
        const fileObj = await uploadFile(file);
        formDataObj.fileData = fileObj;
      }

      const response = await fetch(scriptURL, {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(formDataObj),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      const data = await response.json();

      if (data.status === "success") {
        setMessage(data.message || "Data submitted successfully!");
        setMessageType("success");
        setFormData({ name: "", college: "", type: "" });
        setFile(null);
        setFileName("No file selected");
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error: " + error.message);
      setMessageType("error");
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 4000);
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", college: "", type: "" });
    setFile(null);
    setFileName("No file selected");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Submit Your Entry
        </h2>

        <label className="font-semibold block mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 mb-3"
        />

        <label className="font-semibold block mb-1">College:</label>
        <input
          type="text"
          name="college"
          value={formData.college}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 mb-3"
        />

        <label className="font-semibold block mb-1">Type:</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 mb-3"
        >
          <option value="">Select Type</option>
          <option value="Poem">Poem</option>
          <option value="Article">Article</option>
          <option value="Story">Story</option>
        </select>

        <label className="font-semibold block mb-1">Upload File:</label>
        <input
          type="file"
          id="fileInput"
          name="theFile"
          accept=".pdf,.docx,.txt"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-md p-2 mb-1"
        />
        <p className="text-sm text-gray-500 mb-3">{fileName}</p>

        <div className="flex justify-between mt-4">
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 rounded-md text-white font-semibold ${
              loading ? "bg-green-400" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600"
          >
            Cancel
          </button>
        </div>

        {message && (
          <div
            className={`mt-4 p-2 rounded-md text-center text-white ${
              messageType === "success"
                ? "bg-green-500"
                : messageType === "error"
                ? "bg-red-500"
                : "bg-yellow-400 text-black"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
