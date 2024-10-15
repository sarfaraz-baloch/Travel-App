import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import HeaderImage from "./HeaderImage";
import { useLocation } from "react-router-dom";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All");
  const isActive = (path) => location.pathname === path;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const galleries = {
    All: [
      { src: "img/gallery-1.jpg", title: "World Tour" },
      { src: "img/gallery-2.jpg", title: "World Tour" },
      { src: "img/gallery-3.jpg", title: "World Tour" },
      { src: "img/gallery-4.jpg", title: "World Tour" },
      { src: "img/gallery-5.jpg", title: "World Tour" },
      { src: "img/gallery-6.jpg", title: "World Tour" },
      { src: "img/gallery-7.jpg", title: "World Tour" },
      { src: "img/gallery-8.jpg", title: "World Tour" },
      { src: "img/gallery-9.jpg", title: "World Tour" },
      { src: "img/gallery-10.jpg", title: "World Tour" },
      { src: "img/gallery-11.jpg", title: "World Tour" },
      { src: "img/gallery-12.jpg", title: "World Tour" },
      // Add more images as needed
    ],
    "World Tour": [
      { src: "img/gallery-1.jpg", title: "World Tour" },
      { src: "img/gallery-2.jpg", title: "World Tour" },
      // Add more World Tour images
    ],
    "Ocean Tour": [
      { src: "img/gallery-3.jpg", title: "Ocean Tour" },
      { src: "img/gallery-4.jpg", title: "Ocean Tour" },
      // Add more Ocean Tour images
    ],
    "Summer Tour": [
      { src: "img/gallery-5.jpg", title: "Summer Tour" },
      { src: "img/gallery-6.jpg", title: "Summer Tour" },
      // Add more Summer Tour images
    ],
    "Sport Tour": [
      { src: "img/gallery-7.jpg", title: "Sport Tour" },
      { src: "img/gallery-8.jpg", title: "Sport Tour" },
      // Add more Sport Tour images
    ],
  };

  return (
    <>
      {isActive("/") ? "" : <HeaderImage path={"Package"} />}
      <div className="container mx-auto py-20 my-20">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-4">
            <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
            <h5 className="text-2xl  text-primary font-semibold mb-2">
              Our Gallery
            </h5>
            <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
          </div>
          <h1 className="text-4xl text-gray-950 font-medium mb-4">
            Tourism & Traveling Gallery.
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="tab-class text-center">
          <ul className="flex justify-center mb-5 space-x-4">
            {[
              "All",
              "World Tour",
              "Ocean Tour",
              "Summer Tour",
              "Sport Tour",
            ].map((item, index) => (
              <li key={index}>
                <button
                  className={`py-2 px-4 border border-primary rounded-full text-dark ${
                    activeTab === item ? "bg-light" : "bg-transparent"
                  }`}
                  onClick={() => handleTabClick(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {galleries[activeTab].map((image, index) => (
                <div key={index} className="gallery-item h-full relative group">
                  <img
                    src={image.src}
                    className="w-full h-full object-cover rounded-lg transition-all duration-300"
                    alt={image.title}
                  />
                  <div className="absolute rounded-lg inset-0 bg-primary bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <h5 className="mb-2">
                        <a href={image.src}>
                          <FontAwesomeIcon
                            fontVariant={"extra-bold"}
                            fontSize={40}
                            icon={faPlus}
                          />
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div className="absolute w-full bottom-4 left-[50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h5 className="mb-2 text-white text-2xl font-bold">
                      {image.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
