import { useState } from "react";

export default function Subscriptionform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzJXoSCVVlLdcjR9gg6sGDRuqXaKQ6g6WlFc0TUdVSCfRTGP78uIUTL0BuU8s-TMArq/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill in all fields before subscribing.");
      return;
    }

    try {
      setLoading(true); // show spinner

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // wait 3 seconds before showing thank-you modal
      setTimeout(() => {
        setLoading(false);
        setShowModal(true);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
      setLoading(false);
    }
  };

  const handleOk = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", mobile: "" });
    window.history.back();
  };

  const handleClose = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#9B2A22] to-[#2F0D0A] px-4 py-10 relative">
      <div className="relative bg-[#2B0C09]/70 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center text-white overflow-hidden">
        
        {/* ❌ Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-red-400 transition"
        >
          ×
        </button>

        {/* ✅ Form content (hidden when loading) */}
        {!loading && (
          <>
            <h1 className="text-4xl font-bold mb-2">
              Subscribe to <span className="text-[#E63946]">The Guide</span>
            </h1>
            <p className="font-extralight text-gray-200 mb-6 text-sm md:text-base">
              Stay inspired with our latest issues, articles, and stories — delivered
              straight to your inbox and phone.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none"
              />

              <button
                type="submit"
                className="mt-4 bg-[#BC0E0E] hover:bg-[#a40c0c] transition  font-semibold py-3 rounded-lg shadow-lg"
              >
                Subscribe Now
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-4">
              You’ll receive occasional updates — no spam, just inspiration.
            </p>
          </>
        )}

        {/* ✅ Always-visible Spinner (center of box) */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2B0C09]/80 backdrop-blur-md">
            <div
              className="rounded-full border-4 border-white border-t-transparent"
              style={{
                width: "50px",
                height: "50px",
                animation: "spin 1s linear infinite",
              }}
            ></div>
            <p className="mt-4 text-sm text-gray-200">Submitting...</p>

            {/* Inline CSS for spinner */}
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
          </div>
        )}
      </div>

      {/* ✅ Thank-you Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20">
          <div className="bg-white text-[#2B0C09] rounded-2xl shadow-xl max-w-sm w-full p-8 text-center animate-fadeIn relative">
            
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-[#2B0C09] text-2xl font-bold hover:text-[#BC0E0E] transition"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-3">Thank You,</h2>
            <p className="text-sm mb-6">
              You’ve successfully subscribed to <b>The Guide</b>.<br />
              We’ll contact you soon at <b>{formData.email}</b>
            </p>
            <button
              onClick={handleOk}
              className="bg-[#BC0E0E] hover:bg-[#a40c0c] text-white px-6 py-2 rounded-lg font-semibold shadow-md"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
