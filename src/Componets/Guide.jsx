import React from "react";
import HeaderImage from "./HeaderImage";
import { useLocation } from "react-router-dom";

const Guide = () => {
  const isActive = (path) => location.pathname === path;
  const guides = [
    {
      name: "Full Name 1",
      designation: "Designation 1",
      image: "img/guide-1.jpg",
    },
    {
      name: "Full Name 2",
      designation: "Designation 2",
      image: "img/guide-2.jpg",
    },
    {
      name: "Full Name 3",
      designation: "Designation 3",
      image: "img/guide-3.jpg",
    },
    {
      name: "Full Name 4",
      designation: "Designation 4",
      image: "img/guide-4.jpg",
    },
  ];

  return (
    <>
      {isActive("/") ? "" : <HeaderImage />}
      <div className="container-fluid guide py-5">
        <div className="container mx-auto py-5">
          {/* Title Section with lines */}
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <div className="flex items-center justify-center">
              <div className="border-t-4 rounded-full border-primary w-10 md:w-32 lg:w-48"></div>
              <h5 className="section-title px-3 text-primary text-2xl mx-3">
                Travel Guide
              </h5>
              <div className="border-t-4 rounded-full border-primary w-10 md:w-32 lg:w-48"></div>
            </div>
            <h1 className="mb-0 text-4xl font-semibold text-gray-800">
              Meet Our Guide
            </h1>
          </div>

          {/* Guide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="guide-item transition-transform transform hover:scale-105"
              >
                <div className="guide-img relative">
                  <div className="guide-img-effects">
                    <img
                      src={guide.image}
                      className="img-fluid w-full rounded-t-lg"
                      alt={guide.name}
                    />
                  </div>
                  <div className="guide-icon absolute top-2 right-2 bg-white rounded-full shadow-lg p-2 flex space-x-2">
                    <a
                      className="btn btn-square btn-primary rounded-full"
                      href=""
                    >
                      {/* <i className="fab fa-facebook-f text-blue-600"></i> */}
                      {/* <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" /> */}
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-full"
                      href=""
                    >
                      {/* <i className="fab fa-twitter text-blue-400"></i> */}
                      {/* <FontAwesomeIcon icon={faTwitter} className="text-blue-400" /> */}
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-full"
                      href=""
                    >
                      {/* <i className="fab fa-instagram text-pink-600"></i> */}
                      {/* <FontAwesomeIcon icon={faInstagram} className="text-pink-600" /> */}
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-full"
                      href=""
                    >
                      {/* <i className="fab fa-linkedin-in text-blue-700"></i> */}
                      {/* <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-700" /> */}
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-b-lg bg-white p-4 shadow-lg">
                  <div className="guide-title-inner">
                    <h4 className="mt-3 text-xl font-medium">{guide.name}</h4>
                    <p className="mb-0 text-gray-500 font-light">
                      {guide.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Guide;
