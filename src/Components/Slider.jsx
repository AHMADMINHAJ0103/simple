import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { techData } from "../techData.js";
import { Link } from "react-router-dom";

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === techData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {techData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-16 gap-10">
            {/* Left side: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-[90%] h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Right side: Text + Button */}
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#2b0d0d] mb-4 w-[90%]">
                {slide.title}
              </h1>

              {/* ✅ Description (50 words only + Read More link) */}
              <p className="text-lg text-gray-700 mb-4 w-[90%] leading-relaxed">
                {slide.description
                  ?.trim()
                  .replace(/\s+/g, " ")
                  .split(" ")
                  .slice(0, 50)
                  .join(" ")}
                {slide.description.split(" ").length > 50 && (
                  <>
                    ...{" "}
                    <Link
                      to={`/individual/${slide.id}`}
                      state={{ article: slide }}
                      className="text-[#2b0d0d] font-semibold underline hover:text-[#451515] transition"
                    >
                      Read More
                    </Link>
                  </>
                )}
              </p>

              <p className="text-lg text-gray-600 mb-6">{slide.author}</p>

              <div className="flex items-center gap-4">
                <button
                  onClick={nextSlide}
                  className="bg-[#2b0d0d] p-3 rounded-full hover:bg-[#451515] transition transform hover:translate-x-1"
                >
                  <ArrowRight className="text-white w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
