import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuItem, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      toast.success("Sign-out successful.");
      console.log("Sign-out successful");
    })
    .catch((error) => {
      // An error happened.
      console.log("An error happened");
      toast.error(`Your already Signout`);
    });
};
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation(); // Get current route to highlight active link
  const { isLogin } = useSelector((state) => state.persistedReducer.onAuth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to check if the current link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const [isActiveMenu, setIsActive] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    // setAnchorElUser(null);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 border-b-[1px] border-white  transition-all duration-300 ${
        sticky ? "bg-white shadow-md" : "bg-transparent "
      }
      
      `}
    >
      <ToastContainer />
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="/"
          className={`text-4xl font-bold   flex items-center gap-2
        ${sticky ? "text-primary" : "text-white"}
          `}
        >
          {/* <FaMapMarkerAlt
            className={`text-4xl font-bold
          ${sticky ? "text-primary" : "text-white"}
            `}
          /> */}
          <img
            className="w-20 h-20 bg-black rounded-full"
            src="img/images-airplane-3.png"
            alt=""
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="space-x-4 text-2xl justify-between items-center px-2 hidden md:block">
          <div className="flex space-x-4 items-center ">
            {/* Navigation Links */}

            <Link
              to="/"
              className={`nav-item px-4  py-5 afont-semibold text-xl  rounded-s-full  transition-all duration-300 ${
                isActive("/")
                  ? "bg-primary text-white"
                  : "hover:text-white hover:bg-primary"
              }
            ${sticky ? "text-gray-900" : "text-white"}
            `}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-item px-4  py-5 afont-semibold text-xl  rounded-s-full  transition-all duration-300 ${
                isActive("/about")
                  ? "bg-primary text-white"
                  : " hover:text-white hover:bg-primary"
              }
            ${sticky ? "text-gray-900" : "text-white"}
            `}
            >
              About
            </Link>

            <Link
              to="/service"
              className={`nav-item px-4  py-5 afont-semibold text-xl  rounded-s-full  transition-all duration-300 ${
                isActive("/service")
                  ? "bg-primary text-white"
                  : " hover:text-white hover:bg-primary"
              }
            ${sticky ? "text-gray-900" : "text-white"}
            `}
            >
              Services
            </Link>

            <Link
              to="/package"
              className={`nav-item px-4  py-5 afont-semibold text-xl  rounded-s-full  transition-all duration-300 ${
                isActive("/package")
                  ? "bg-primary text-white"
                  : " hover:text-white hover:bg-primary"
              }
            ${sticky ? "text-gray-900" : "text-white"}
            `}
            >
              Package
            </Link>

            <Link
              to="/blog"
              className={`nav-item px-4  py-5 afont-semibold text-xl  rounded-s-full  transition-all duration-300 ${
                isActive("/blog")
                  ? "bg-primary text-white"
                  : " hover:text-white hover:bg-primary"
              }
            ${sticky ? "text-gray-900" : "text-white"}
            `}
            >
              Blog
            </Link>

            <Link
              to="/booking"
              className={`nav-item px-4  py-5 afont-semibold text-xl  rounded-s-full  transition-all duration-300 ${
                isActive("/booking")
                  ? "bg-primary text-white"
                  : " hover:text-white hover:bg-primary"
              }
            ${sticky ? "text-gray-900" : "text-white"}
            `}
            >
              Book
            </Link>

            {/* Dropdown start */}
            <div className="relative nav-item group">
              <button
                to=""
                className={`nav-item px-4  py-5 afont-semibold text-xl  rounded-s-full  transition-all duration-300 flex justify-center items-center${
                  isActive("/page")
                    ? "bg-primary text-white"
                    : " hover:text-white hover:bg-primary"
                }
            ${sticky ? "text-gray-900" : "text-white"}
            `}
              >
                Pages
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg w-56 rounded-lg py-2 mt-1 z-10">
                <Link
                  to="/destination"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Destination
                </Link>
                <Link
                  to="/tour"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Explore Tour
                </Link>
                <Link
                  to="/booking"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Travel Booking
                </Link>
                <Link
                  to="/gallery"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Our Gallery
                </Link>
                <Link
                  to="/guide"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Travel Guides
                </Link>
                <Link
                  to="/testimonial"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Testimonial
                </Link>

                {/* /flight-ticket */}
                <Link
                  to="/flight-ticket"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Flight Ticket
                </Link>

                {/*  */}
              </div>
            </div>

            {/* Dropdown end */}

            {isLogin ? null : (
              <Link
                to="/login"
                className={`nav-item px-4  py-5 afont-semibold text-xl  rounded-s-full  transition-all duration-300 ${
                  isActive("/login")
                    ? "bg-primary text-white"
                    : " hover:text-white hover:bg-primary"
                }
              ${sticky ? "text-gray-900" : "text-white"}
              `}
              >
                Login
              </Link>
            )}

            {isLogin ? (
              <button
                className={`nav-item px-4  py-5 afont-semibold text-xl  rounded-s-full  transition-all duration-300 ${
                  isActive("/login")
                    ? "bg-primary text-white"
                    : " hover:text-white hover:bg-primary"
                }
              ${sticky ? "text-gray-900" : "text-white"}
              `}
                onClick={handleSignOut}
              >
                SignOut
              </button>
            ) : null}
          </div>
        </div>
        {/* Desktop Menu End */}

        {/* Menu Start here */}
        <span
          className={` ${
            isActiveMenu ? "hidden" : "block"
          } text-sm font-extrabold py-2 px-2 text-primary border-4 mt-2 mb-2 border-primary bg-white rounded-md cursor-pointer md:hidden`}
          onClick={() => setIsActive(true)}
        >
          |||
        </span>

        <span
          className={` ${
            isActiveMenu ? "block" : "hidden"
          } text-sm font-extrabold py-2 px-2 text-primary border-4 mt-2 mb-2 border-primary bg-white rounded-md cursor-pointer md:hidden`}
          onClick={() => setIsActive(false)}
        >
          X
        </span>

        {/* Menu end */}
      </div>

      {/* Mobile Menu */}
      {isActiveMenu ? (
        <div className="border-t-[1px]  border-gray-200 py-4 md:hidden">
          <div className="flex flex-col  gap-2 bg-white  py-2 px-2 shadow-lg rounded-lg">
            <Link
              to="/"
              className={`nav-item px-2 py-2 font-roboto text-xl rounded transition-all duration-300 ${
                isActive("/")
                  ? "bg-primary text-white"
                  : "hover:text-white hover:bg-primary"
              }
            ${sticky ? "text-gray-900" : "text-white"}
            `}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-item px-2 font-roboto text-xl py-2 rounded transition-all duration-300 ${
                isActive("/about")
                  ? "bg-primary text-white"
                  : " hover:text-white hover:bg-primary"
              }
            ${sticky ? "text-gray-950" : "text-gray-950"}
            `}
            >
              About
            </Link>

            <Link
              to="/service"
              className={`nav-item px-2 font-roboto text-xl py-2 rounded transition-all duration-300 ${
                isActive("/service")
                  ? "bg-primary text-white"
                  : " hover:text-white hover:bg-primary"
              }
            ${sticky ? "text-gray-950" : "text-gray-950"}
            `}
            >
              Services
            </Link>

            <Link
              to="/package"
              className={`nav-item px-2 font-roboto text-xl py-2 rounded transition-all duration-300 ${
                isActive("/package")
                  ? "bg-primary text-white"
                  : " hover:text-white hover:bg-primary"
              }
            ${sticky ? "text-gray-900" : "text-gray-950"}
            `}
            >
              Package
            </Link>

            <Link
              to="/blog"
              className={`nav-item px-2 font-roboto text-xl py-2 rounded transition-all duration-300 ${
                isActive("/blog")
                  ? "bg-primary text-white"
                  : " hover:text-white hover:bg-primary"
              }
            ${sticky ? "text-gray-900" : "text-gray-950"}
            `}
            >
              Bolg
            </Link>

            <Link
              to="/booking"
              className={`nav-item px-2 font-roboto text-xl py-2 rounded transition-all duration-300 ${
                isActive("/booking")
                  ? "bg-primary text-white"
                  : " hover:text-white hover:bg-primary"
              }
            ${sticky ? "text-gray-900" : "text-gray-950"}
            `}
            >
              Book
            </Link>

            {/* Dropdown start */}
            <div className="relative nav-item group">
              <button
                to=""
                className={`nav-item px-4  py-5 afont-semibold text-xl  rounded-s-full  transition-all duration-300 flex justify-center items-center${
                  isActive("/page")
                    ? "bg-primary text-white"
                    : " hover:text-white hover:bg-primary"
                }
            ${sticky ? "text-gray-900" : "text-white"}
            `}
              >
                Pages
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg w-56 rounded-lg py-2 mt-1 z-10">
                <Link
                  to="/destination"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Destination
                </Link>
                <Link
                  to="/tour"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Explore Tour
                </Link>
                <Link
                  to="/booking"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Travel Booking
                </Link>
                <Link
                  to="/gallery"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Our Gallery
                </Link>
                <Link
                  to="/guide"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Travel Guides
                </Link>
                <Link
                  to="/testimonial"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Testimonial
                </Link>

                <Link
                  to="/flight-ticket"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                >
                  Flight Ticket
                </Link>
              </div>
            </div>

            {/* Dropdown end */}

            {isLogin ? null : (
              <Link
                to="/login"
                className={`nav-item px-4  py-5 afont-semibold text-xl  rounded-s-full  transition-all duration-300 ${
                  isActive("/login")
                    ? "bg-primary text-white"
                    : " hover:text-white hover:bg-primary"
                }
              ${sticky ? "text-gray-900" : "text-white"}
              `}
              >
                Login
              </Link>
            )}

            {isLogin ? (
              <button
                className={`nav-item px-4  py-5 afont-semibold text-xl  rounded-s-full  transition-all duration-300 ${
                  isActive("/login")
                    ? "bg-primary text-white"
                    : " hover:text-white hover:bg-primary"
                }
              ${sticky ? "text-gray-900" : "text-white"}
              `}
                onClick={handleSignOut}
              >
                SignOut
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
      {/* Mobile menu End */}
    </nav>
  );
};

export default Navbar;
