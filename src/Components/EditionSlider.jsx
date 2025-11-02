import { useState } from "react";
import { EditionData } from "../EditionData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EditionSlider() {
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingSlide, setPendingSlide] = useState(null);

  // ✅ Modal Controls
  const openConfirm = (slide) => {
    setPendingSlide(slide);
    setModalOpen(true);
  };

  const closeConfirm = () => {
    setPendingSlide(null);
    setModalOpen(false);
  };

  const confirmDownload = () => {
    if (!pendingSlide) return;
    const link = document.createElement("a");
    link.href = pendingSlide.pdf;
    link.download = pendingSlide.pdf?.split("/").pop() || "The-Guide.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeConfirm();
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        The Guide Editions
      </h1>

      {/* ✅ Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-2xl bg-gray-100 p-4"
      >
        {EditionData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[380px] sm:h-[420px] md:h-[480px] object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg md:text-xl font-bold text-gray-800">
                  {slide.date}
                </h2>
                <button
                  onClick={() => openConfirm(slide)}
                  className="mt-3 bg-[#BC0E0E] text-white font-semibold py-2 px-5 rounded-full shadow hover:bg-[#9b0c0c] transition"
                >
                  Read Issue
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Modal */}
      {modalOpen && pendingSlide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeConfirm}
          />
          <div className="relative w-full max-w-[400px] rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-[#9B2A22] to-[#BC0E0E] p-6">
              <h3 className="text-white text-lg font-bold">Download Issue</h3>
              <p className="text-white/90 mt-2 text-sm">
                Do you want to download this issue?
              </p>
            </div>
            <div className="bg-white p-5">
              <p className="text-gray-700 mb-4 font-semibold">
                {pendingSlide.title || pendingSlide.date}
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={closeConfirm}
                  className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDownload}
                  className="px-4 py-2 rounded-md bg-[#BC0E0E] text-white hover:bg-[#9b0c0c] shadow"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
