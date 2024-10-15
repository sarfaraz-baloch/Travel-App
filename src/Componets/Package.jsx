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
import { addProduct , removeItem } from "../Redux/Travel";
import Car from "./Car";
import Hotels from "./Hotel";
import { toast } from 'react-hot-toast';

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Package = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const isActive = (path) => location.pathname === path;

  const packages = [
    {
      id: 1,
      image: "img/packages-1.jpg",
      title: "Thayland Trip",
      price: "$649.00",
      location: "Thayland",
      duration: "3 days",
      people: "2 Person",
      dec: "Discover the vibrant culture, stunning beaches, and rich history of Thailand on an unforgettable adventure!",
    },
    {
      id: 2,
      image: "img/packages-2.jpg",
      title: "Venice - Italy",
      price: "$349.00",
      location: "Venice - Italy",
      duration: "3 days",
      people: "2 Person",
      dec: "Experience the charm of Venice, Italy, with its iconic canals, historic architecture, and romantic atmosphere.",
    },
    {
      id: 3,
      image: "img/packages-3.jpg",
      title: "The New California",
      price: "$449.00",
      location: "Venice - Italy",
      duration: "3 days",
      people: "2 Person",
      dec: "Explore the dynamic spirit of New California, where innovation, stunning landscapes, and vibrant culture come together for an unforgettable experience.",
    },
    {
      id: 4,
      image: "img/packages-4.jpg",
      title: "Maldives",
      price: "$549.00",
      location: "Maldives",
      duration: "4 days",
      people: "2 Person",
      dec: "Escape to the Maldives, a tropical paradise with pristine beaches, crystal-clear waters, and luxurious overwater bungalows.",
    },
    {
      id: 5,
      image: "img/packages-5.jpg",
      title: "Canada",
      price: "$780.00",
      location: "Canada",
      duration: "3 days",
      people: "2 Person",
      dec: "Experience the charm of Canada with its iconic canals, historic architecture, and romantic atmosphere.",
    },
    {
      id: 6,
      image: "img/packages-6.jpg",
      title: "Spain",
      price: "$987.00",
      location: "Spain",
      duration: "7 days",
      people: "2 Person",
      dec: "its culture, delicious food like paella and tapas, and iconic landmarks such as the Sagrada Familia and Alhambra. ",
    },
    {
      id: 7,
      image: "img/packages-7.jpg",
      title: "Finland",
      price: "$1987.00",
      location: "Finland",
      duration: "12 days",
      people: "1 Person",
      dec: "Finland is a scenic Nordic country known for its beautiful lakes, vast forests, and the magical Northern Lights.",
    },
    {
      id: 8,
      image: "img/packages-8.jpg",
      title: "Greenland",
      price: "$120.87",
      location: "Greenland",
      duration: "7 days",
      people: "1 Person",
      dec: "Greenland is a stunning Arctic destination, famous for its glaciers, Northern Lights, and rich Inuit culture.",
    },
    {
      id: 9,
      image: "img/packages-9.jpg",
      title: "Denmark",
      price: "$1100.00",
      location: "Denmark",
      duration: "5 days",
      people: "1 Person",
      dec: "Denmark is a charming Scandinavian country known for its historic castles, modern design, and a high quality of life.",
    },
    {
      id: 10,
      image: "img/packages-10.jpg",
      title: "Abu DUbai",
      price: "$1200.98",
      location: "Abu Dubai",
      duration: "20 days",
      people: "1 Person",
      dec: "Abu Dhabi is a premier travel destination, offering a blend of rich culture, luxury, and modern attractions, from stunning beaches to iconic landmarks like the Sheikh Zayed Grand Mosque. ",
    },
  ];

  const cartItems = useSelector((state) => state.persistedReducer.Travel.value);
  const { isLogin } = useSelector((state) => state.persistedReducer.onAuth);

  const isProductInCart = (id) => cartItems.some((item) => item.id === id);

  // Track last booking time
  // const handleAddToCart = (pkg) => {
  //   if (!isLogin) {
  //     navigate("/login");
  //   } else {
  //     const existingItem = cartItems.find((item) => item.id === pkg.id);
  //     const currentTime = Date.now();
  
  //     if (existingItem) {
  //       const bookingTime = existingItem.date;
  //       const timeDifference = currentTime - bookingTime;
  
  //       // Check if 24 hours have passed
  //       if (timeDifference < 24 * 60 * 60 * 1000) {
  //         const hoursLeft = Math.ceil((24 * 60 * 60 * 1000 - timeDifference) / (60 * 60 * 1000));
  //         toast.error(`You can book again in ${hoursLeft} hours.`);
  //       } else {
  //         // Allow booking again after 24 hours
  //         dispatch(removeItem(pkg)); // Remove the old item
  //         dispatch(addProduct({ ...pkg, date: currentTime })); // Add the new one with updated date
  //         toast.success("Booking submitted successfully!");
  //       }
  //     } else {
  //       // First time booking
  //       dispatch(addProduct({ ...pkg, date: currentTime }));
  //       toast.success("Booking submitted successfully!");
  //     }
  //   }
  // };
  
  const handleAddToCart = (pkg) => {
    if (!isLogin) {
      navigate("/login");
    } else {
      const existingItem = cartItems.find((item) => item.id === pkg.id);
  
      const currentTime = Date.now();
  
      if (existingItem) {
        const bookingTime = existingItem.date;
        const timeDifference = currentTime - bookingTime;
  
        // Check if 24 hours have passed
        if (timeDifference < 24 * 60 * 60 * 1000) {
          const hoursLeft = Math.ceil((24 * 60 * 60 * 1000 - timeDifference) / (60 * 60 * 1000));
          toast.error(`You can book again in ${hoursLeft} hours.`);
        } else {
          // Allow booking again after 24 hours
          dispatch(removeItem(existingItem.id)); // Use existing item to remove
          dispatch(addProduct({ ...pkg, date: currentTime })); // Add the new one with updated date
          toast.success("Booking submitted successfully!");
        }
      } else {
        // First time booking
        dispatch(addProduct({ ...pkg, date: currentTime }));
        toast.success("Booking submitted successfully!");
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
      {isActive("/") ? "" : <HeaderImage path={"Package"} />}
      <div className="container mx-auto py-5">
        <div className="text-center mb-5 max-w-2xl mx-auto">
          {/* <ToastContainer /> */}
          <div className="flex items-center justify-center gap-4">
            <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
            <h5 className="text-lg text-primary font-semibold">PACKAGES</h5>
            <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
          </div>
          <h1 className="text-3xl font-bold">Awesome Packages</h1>
        </div>

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
                  <p className="mb-4 text-sm font-roboto">{pkg.dec}</p>
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

      {isActive("/") ? "" : <Hotels />}
      {isActive("/") ? "" : <Car />}
    </>
  );
};

export default Package;
