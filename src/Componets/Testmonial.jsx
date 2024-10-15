import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import HeaderImage from "./HeaderImage";
import { useLocation } from "react-router-dom";
// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Abraham",
    location: "New York, USA",
    img: "img/testimonial-1.jpg",
    message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Connor",
    location: "Los Angeles, USA",
    img: "img/testimonial-2.jpg",
    message: "Eligendi repellendus saepe illum earum architecto dicta.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jane Doe",
    location: "London, UK",
    img: "img/testimonial-3.jpg",
    message: "Vero reiciendis architecto dicta quisquam porro officiis.",
    rating: 5,
  },
  {
    id: 4,
    name: "Alex Smith",
    location: "Toronto, Canada",
    img: "img/testimonial-3.jpg",
    message: "Quis nostrum cupiditate, eligendi repellendus saepe.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Clark",
    location: "Sydney, Australia",
    img: "img/testimonial-2.jpg",
    message: "Porro officiis vero reiciendis, saepe illum earum.",
    rating: 5,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next/previous navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? testimonials.length - 3 : prevIndex - 3
    );
  };

  // Pagination dots
  const totalSlides = Math.ceil(testimonials.length / 3);

  const renderTestimonials = () => {
    return testimonials
      .slice(currentIndex, currentIndex + 3)
      .map((testimonial, index) => {
        const isActive = index === 1; // Middle index is always active
        return (
          <div
            key={testimonial.id}
            className={`text-center p-6 rounded-lg shadow-md w-80 transition-colors duration-500 ${
              isActive ? "bg-primary text-white" : "bg-gray-100 text-gray-800"
            }`}
          >
            <p className="mb-5">{testimonial.message}</p>
            <div className="rounded-full overflow-hidden w-20 h-20 mx-auto mb-3">
              <img
                src={testimonial.img}
                alt={`Client ${testimonial.id}`}
                className="w-full h-full object-cover"
              />
            </div>
            <h5 className="font-bold">{testimonial.name}</h5>
            <p className="text-sm">{testimonial.location}</p>
            <div className="flex justify-center mt-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
          </div>
        );
      });
  };

  const isActive = (path) => location.pathname === path;
  return (
    <>
    {isActive("/") ? "" : <HeaderImage path={"Package"} />}
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-4">
          <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
          <h5 className="text-2xl font-semibold mb-2 text-primary">
            Testimonial
          </h5>
          <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
        </div>
        <h1 className="text-3xl font-bold">Our Clients Say!!!</h1>
      </div>

      <div className="relative">
        {/* Carousel Controls */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="bg-blue-600 text-white p-2 rounded-full"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white p-2 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Testimonial Row */}
        <div className="flex justify-center space-x-4 overflow-hidden">
          {renderTestimonials()}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-5">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 3)}
            className={`w-4 h-4 ${
              currentIndex / 3 === index ? "bg-blue-600" : "bg-gray-300"
            } rounded-full`}
          ></button>
        ))}
      </div>
    </div>
    </>
  );
};

export default Testimonial;
