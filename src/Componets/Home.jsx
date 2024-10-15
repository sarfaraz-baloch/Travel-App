import { Button } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Service from "./Service";
// import Testmonial from './Testmonial';
import About from "./About";
import Destination from "./Destination";
import Explore from "./Explore";
import Package from "./Package";
import Gallery from "./Gallery";
import Booking from "./Booking";
import Guide from "./Guide";
import Blog from "./Blog";
import Testimonial from "./Testmonial";
import SubscribeSection from "./SubscribeSection";
import Hotels from "./Hotel";
import Car from "./Car";
import FlightTicket from "./FlightTicket";
const Home = () => {
  
  return (
    <>
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        {/* Carousel 1 */}
        <div className="relative">
          <img
            src="img/carousel-1.jpg"
            alt="First Slide"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl">
              <h4 className="text-lg uppercase font-bold mb-2 tracking-widest">
                Explore The World
              </h4>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Let's Explore the World Together!
              </h1>
              <p className="mb-6 text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
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
                Discover now
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel 2 */}
        <div className="relative">
          <img
            src="img/carousel-2.jpg"
            alt="Second Slide"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl">
              <h4 className="text-lg uppercase font-bold mb-2 tracking-widest">
                Find Your Perfect Tour
              </h4>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Discover Beautiful Destinations
              </h1>
              <p className="mb-6 text-lg">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
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
                Discover now
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel 3 */}
        <div className="relative">
          <img
            src="img/carousel-3.jpg"
            alt="Third Slide"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl">
              <h4 className="text-lg uppercase font-bold mb-2 tracking-widest">
                You Like To Go?
              </h4>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Plan Your Next Adventure!
              </h1>
              <p className="mb-6 text-lg">
                Explore the beauty of the world with our personalized travel
                experiences.
              </p>
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
                Discover now
              </Button>
            </div>
          </div>
        </div>
      </Carousel>

      {/* About  */}
      <About />

      {/* Servive */}
      <Service />

      {/* destination */}
      <Destination />

      {/* explore  */}
      <Explore />

      
      {/* packages */}
      <Package />

        {/* Hotel  */}
        {/* <Hotels/> */}

        {/* Car */}
        {/* <Car/> */}

      {/* gallery */}

      <Gallery />

      {/* Booking */}
      <Booking />

      {/* Guide */}
      <Guide />

      {/* Blog */}
      <Blog />

      {/* Testimonial */}
      <Testimonial/>

      {/* subscribe */}
      <SubscribeSection/>  

      <FlightTicket/>
    </>
  );
};

export default Home;
