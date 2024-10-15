import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react"; // Import useState
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderImage from "./HeaderImage";
import { useLocation } from "react-router-dom";

const Destination = () => {
  const location = useLocation(); // Added location for path checking
  const [selectedCountry, setSelectedCountry] = useState("All"); // State for selected country

  const isActive = (path) => location.pathname === path;

  // Function to handle country selection
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      {isActive("/") ? "" : <HeaderImage path={"Package"} />}
      <div className="container-fluid destination py-5">
        <div className="container mx-auto py-5">
          {/* Title */}
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "500px" }}
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
              <h5 className="section-title text-primary text-2xl font-bold">
                Destination
              </h5>
              <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
            </div>
            <h1 className="mb-0 text-gray-950 text-4xl font-bold">
              Popular Destination
            </h1>
          </div>

          {/* Tabs */}
          <div className="text-center">
            <ul className="flex flex-wrap gap-2 justify-center items-center mb-5">
              {["All", "USA", "Canada", "Europe", "China", "Singapore"].map((country) => (
                <li className="nav-item" key={country}>
                  <Link
                    className={`flex mx-3 py-2 border hover:bg-primary hover:text-white border-blue-500 bg-gray-100 rounded-full ${selectedCountry === country ? "active" : ""}`}
                    to="#"
                    onClick={() => handleCountryClick(country)} // Call handleCountryClick on click
                  >
                    <span className="w-28">{country}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tabs Content */}
          <DestinationGallery selectedCountry={selectedCountry} />
        </div>
      </div>
    </>
  );
};

export default Destination;

export const DestinationGallery = ({ selectedCountry }) => {
  const destinations = [
    {
      id: 1,
      image: "img/destination-1.jpg",
      title: "New York City",
      category: "USA",
      photos: 20,
    },
    {
      id: 2,
      image: "img/destination-2.jpg",
      title: "Las Vegas",
      category: "USA",
      photos: 20,
    },
    {
      id: 3,
      image: "img/destination-7.jpg",
      title: "Toronto",
      category: "Canada",
      photos: 20,
    },
    {
      id: 4,
      image: "img/destination-8.jpg",
      title: "Paris",
      category: "Europe",
      photos: 20,
    },
    {
      id: 5,
      image: "img/destination-9.jpg",
      title: "Beijing",
      category: "China",
      photos: 20,
    },
    {
      id: 6,
      image: "img/destination-4.jpg",
      title: "Singapore",
      category: "Singapore",
      photos: 20,
    },
    // Add more destinations as needed
  ];

  // Filter destinations based on selected country
  const filteredDestinations = selectedCountry === "All"
    ? destinations
    : destinations.filter(destination => destination.category === selectedCountry);

  return (
    <div className="tab-content">
      <div className="tab-pane fade show p-0 active" id="tab-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="relative overflow-hidden group">
              <img
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                src={destination.image}
                alt={destination.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h4 className="font-roboto font-semibold text-white text-lg mb-2">
                  {destination.title}
                </h4>
                <p className="font-roboto font-semibold text-white text-lg mb-2">
                  {destination.photos} Photos
                </p>
                <Link
                  href="#"
                  className="bg-primary text-white font-roboto font-semibold rounded-full py-3 px-4 hover:bg-white hover:text-primary transition"
                >
                  View All Places
                </Link>
              </div>
              <div className="absolute bottom-2 right-2">
                <a href={destination.image} data-lightbox={destination.title}>
                  <FaPlusSquare
                    fontSize={20}
                    fontFamily="font-roboto"
                    color="white"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
