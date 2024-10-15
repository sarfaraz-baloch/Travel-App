import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faMapMarkerAlt,
  faCalendarAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderImage from "./HeaderImage";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../Redux/Travel";
// // import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Hotel } from "@mui/icons-material";
import { toast } from 'react-hot-toast';
const Hotels = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const isActive = (path) => location.pathname === path;

  // Sample package data
  const packages = [
    {
        id: 11,
        image: "img/hotel-1.jpeg",
        title: "2x Standard Room",
        price: "$1000.00",
        location: "All",
        duration: "3 days",
        people: "7 Person",
        title2: 'Comfortable Bedding',
        title3: 'Complimentary Wi-Fi',
        title4: 'Complimentary Parking',
        dec: 'Experience a cozy stay in our 2x Standard Room, featuring comfortable bedding and modern amenities. Enjoy complimentary Wi-Fi, parking, breakfast, and dinner. Perfect for groups of up to 7, this room ensures a restful getaway.'
    },

    {
        id: 12,
        image: "img/hotel-2.jpeg",
        title: "4x Standard Room",
        price: "$2001.90",
        location: "All",
        duration: "15 days",
        people: "12 Person",
        title2: 'Comfortable Bedding',
        title3: 'Complimentary Wi-Fi',
        title4: 'Complimentary Parking',
        dec: 'Experience a cozy stay in our 2x Standard Room, featuring comfortable bedding and modern amenities. Enjoy complimentary Wi-Fi, parking, breakfast, and dinner. Perfect for groups of up to 7, this room ensures a restful getaway.'
    },
    
    {
        id: 13,
        image: "img/hotel-3.jpeg",
        title: "2x Standard Room",
        price: "$900.00",
        location: "All",
        duration: "3 days",
        people: "4 Person",
        title2: 'Comfortable Bedding',
        title3: 'Complimentary Wi-Fi',
        title4: 'Complimentary Parking',
        dec: 'Experience a cozy stay in our 2x Standard Room, featuring comfortable bedding and modern amenities. Enjoy complimentary Wi-Fi, parking, breakfast, and dinner. Perfect for groups of up to 7, this room ensures a restful getaway.'
    },

    {
        id: 14,
        image: "img/hotel-4.jpeg",
        title: "2x Standard Room",
        price: "$2100.00",
        location: "All",
        duration: "6 days",
        people: "9 Person",
        title2: 'Comfortable Bedding',
        title3: 'Complimentary Wi-Fi',
        title4: 'Complimentary Parking',
        dec: 'Experience a cozy stay in our 2x Standard Room, featuring comfortable bedding and modern amenities. Enjoy complimentary Wi-Fi, parking, breakfast, and dinner. Perfect for groups of up to 7, this room ensures a restful getaway.'
    },

    {
        id: 15,
        image: "img/hotel-5.jpeg",
        title: "4x Standard Room",
        price: "$3000.00",
        location: "All",
        duration: "4 days",
        people: "4 Person",
        title2: 'Comfortable Bedding',
        title3: 'Complimentary Wi-Fi',
        title4: 'Complimentary Parking',
        dec: 'Experience a cozy stay in our 2x Standard Room, featuring comfortable bedding and modern amenities. Enjoy complimentary Wi-Fi, parking, breakfast, and dinner. Perfect for groups of up to 7, this room ensures a restful getaway.'
    },
    
  ];
  // const notify = () => toast("successfully booked");
  const cartItems = useSelector((state) => state.persistedReducer.Travel.value);
  console.log(cartItems);  
  const { isLogin } = useSelector((state) => state.persistedReducer.onAuth);

  const isProductInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (pkg) => {
    if (!isLogin) {
      navigate("/login");

    } else {
      if (!isProductInCart(pkg.id)) {
        dispatch(addProduct(pkg)); // Ensure the action creator accepts the package object
        toast.success("Booking submitted successfully!"); // Show success notification
        // alert("Booking submitted successfully!");

      } else {
        // console.log("Product is already in the cart");
        toast.error("Product is already in the cart");
        // alert("Product is already in the cart");
      }
    }
  };


  const itemsPerPage = 3;
  const getVisiblePackages = () => {
    const startIndex = currentIndex * itemsPerPage;
    return packages.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(packages.length / itemsPerPage) - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(packages.length / itemsPerPage) - 1
        : prevIndex - 1
    );
  };

  return (
    <>
      {/* {isActive("/") ? "" : <HeaderImage path={"Package"} />} */}
      <div className="container mx-auto py-5">
        <div className="text-center mb-5 max-w-2xl mx-auto">
        {/* <ToastContainer /> */}
          <div className="flex items-center justify-center gap-4">
            <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
            <h5 className="text-lg text-primary font-semibold">ROOM </h5>
            <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
          </div>
          <h1 className="text-3xl font-bold">PACKAGES</h1>
        </div>

        {/* Carousel for the packages */}
        <div className="relative">
          <div className="packages-carousel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisiblePackages().map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={pkg.image}
                    className="w-full h-48 object-cover rounded-t-lg"
                    alt={pkg.title}
                  />
                  <div className="flex border border-x-0 border-b-0 absolute bottom-0 left-0 z-10 w-full bg-white bg-opacity-75">
                    <small className="flex-1 text-center py-2 border-r">
                      <FontAwesomeIcon className="mr-1" icon={faMapMarkerAlt} />
                      {pkg.location}
                    </small>
                    <small className="flex-1 text-center py-2 border-r">
                      <FontAwesomeIcon className="mr-1" icon={faCalendarAlt} />
                      {pkg.duration}
                    </small>
                    <small className="flex-1 text-center py-2">
                      <FontAwesomeIcon icon={faUser} className="mr-1" />
                      {pkg.people}
                    </small>
                  </div>
                  <div className="packages-price py-2 px-4 bg-blue-600 text-white font-bold absolute top-2 left-2 rounded-full">
                    {pkg.price}
                  </div>
                </div>
                <div className="bg-gray-100 p-4">
                  <h5 className="font-semibold">{pkg.title}</h5>
                  <p className="mb-4 mt-4 text-[12px] font-roboto">{pkg.dec}</p>
                  <div className="flex">
                    <Link
                      to="/package"
                      className="btn bg-blue-500 text-white py-2 px-4 mr-2 rounded-lg"
                    >
                      Read More
                    </Link>
                    <Link
                      onClick={() => handleAddToCart(pkg)}
                      className="btn bg-blue-500  text-white py-2 px-4 rounded-lg"
                    >
                      {isProductInCart(pkg.id) ? "Booked" : "Book Now"}
                    </Link>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next and Previous buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-400 text-white p-3 rounded-e-full focus:outline-none"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-400 text-white p-3 rounded-s-full focus:outline-none"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hotels;
