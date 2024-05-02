import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/800x400?text=Slide+1",
      caption: "Slide 1",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/800x400?text=Slide+2",
      caption: "Slide 2",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/800x400?text=Slide+3",
      caption: "Slide 3",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Slides */}
      <div className="flex transition-transform duration-300 ease-in-out transform">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full h-64 md:h-96 bg-cover bg-center ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl">
                {slide.caption}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-l-md z-10"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-r-md z-10"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
