import React from "react";
import { Button } from "@mui/material";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Import Heroicons v2
import { Link, useLocation } from "react-router-dom";
import HeaderImage from "./HeaderImage";

const About = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {isActive("/") ? "" : <HeaderImage path={"about"} />}

      {/* about main content */}
      <div className="container mx-auto about py-5">
        <div className="py-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            <div className="col-span-5">
              <div className="h-full border-8 border-transparent border-t-blue-800 border-b-blue-800">
                <img
                  src="img/about-img.jpg"
                  className="img-fluid w-full h-full"
                  alt=""
                />
              </div>
            </div>

            <div className="col-span-7 relative bg-gradient-to-b from-white/80 to-white/80 h-full rounded-lg p-5">
              <div
                style={{
                  position: "absolute",
                  zIndex: -1,
                  // top: '50%',
                  left: "0",
                  // transform: 'translate(-50%, -50%)',
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url('img/about-img-1.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 20 / 20,
                }}
              ></div>
              <div className="flex items-center gap-5">
                <h5 className="section-about-title font-extrabold text-primary text-2xl pe-3">
                  About Us
                </h5>
                <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
              </div>
              <h1 className="mb-4 text-4xl">
                Welcome to <span className="text-primary">Travela</span>
              </h1>
              <p className="mb-4 font-source-sans-pro">
                Welcome to Simple, your ultimate travel companion! We are
                dedicated to helping you explore the world with ease and
                convenience. Whether you're planning a weekend getaway, a dream
                vacation, or a business trip, our app is designed to provide
                everything you need to make your journey unforgettable.
              </p>
              <p className="mb-4 font-ubuntu">
                At Simple, we believe that travel is more than just moving from
                one place to another—it's about creating lasting memories,
                discovering new cultures, and enjoying seamless experiences.
                That's why we've built a platform that lets you search for
                destinations, book flights, hotels, and activities, all while
                offering personalized recommendations and helpful travel tips.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[
                  "First Class Flights",
                  "Handpicked Hotels",
                  "5 Star Accommodations",
                  "Latest Model Vehicles",
                  "150 Premium City Tours",
                  "24/7 Service",
                ].map((item, index) => (
                  <div key={index} className="flex items-center ">
                    <ArrowRightIcon className="h-5 w-5 text-primary font-bold mr-2" />
                    <p className="mb-0 text-primary font-opensans">{item}</p>
                  </div>
                ))}
              </div>

              {isActive("/") ? (
                ""
              ) : (
                <div>
                  <h1 className="text-2xl leading-7  font-semibold mb-4 font-source-sans-pro">
                    Why Choose Us?
                  </h1>

                  <ul className="list-disc text-sm font-poppins flex flex-col gap-2">
                    <li>
                      Seamless Booking: Effortlessly book flights, hotels, and
                      activities in one place.
                    </li>
                    <li>
                      Personalized Recommendations: Discover unique experiences
                      tailored to your preferences.
                    </li>
                    <li>
                      Trusted by Travelers: Join a community of travelers who
                      rely on us to make their journeys smooth and hassle-free.
                    </li>
                    <li>
                      Simple is Here: Start exploring today and embark on your
                      next great adventure!
                    </li>
                    <li>
                      Curated Experiences: Discover handpicked destinations and
                      travel packages tailored to your interests.
                    </li>
                    <li>
                      24/7 Service: Experience the convenience of our online
                      booking system with our 24/7 customer support.
                    </li>
                    <li>
                      Real-Time Information: Stay updated with the latest travel
                      alerts, weather conditions, and more.
                    </li>
                    <li>
                      User-Friendly Interface: Plan your trips with ease using
                      our intuitive design and powerful features.
                    </li>
                    <li>
                      Whether you're an adventure seeker, a family traveler, or
                      a business professional, Simple is here to make your
                      travel dreams come true. Start exploring today and embark
                      on your next great adventure!
                    </li>
                  </ul>
                </div>
              )}


              {
                isActive('/about') ? (
                  <Link to="/">
                <Button
                  sx={{
                    backgroundColor: "#13357B", // Example background color
                    color: "white", // Optional: set text color
                    "&:hover": {
                      backgroundColor: "#13557B", // Optional: hover effect
                    },
                    fontSize: "16px",
                    fontWeight: "bold",
                    textTransform: "none",
                    fontFamily: "sans-serif",
                    padding: "15px",
                    marginTop: "16px",
                    borderRadius: "30px",
                    width: "150px",
                  }}
                  variant="contained"
                >
                  Back
                </Button>
              </Link>
                ) : (
                  <Link to="/about">
                <Button
                  sx={{
                    backgroundColor: "#13357B", // Example background color
                    color: "white", // Optional: set text color
                    "&:hover": {
                      backgroundColor: "#13557B", // Optional: hover effect
                    },
                    fontSize: "16px",
                    fontWeight: "bold",
                    textTransform: "none",
                    fontFamily: "sans-serif",
                    padding: "15px",
                    marginTop: "16px",
                    borderRadius: "30px",
                    width: "150px",
                  }}
                  variant="contained"
                >
                  Read More
                </Button>
                 </Link>
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
