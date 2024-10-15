import React from 'react'
import { Button } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons
import { faCircle, faCog, faEarth, faGolfBall } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faShip } from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import {faUsers } from '@fortawesome/free-solid-svg-icons';
import HeaderImage from './HeaderImage';
import { useLocation , Link} from 'react-router-dom';
const Service = () => {
  const location = useLocation()
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
 <>
 {
      isActive("/") ? "" : <HeaderImage path={"Service"}/>
    }
    <div className="bg-gray-200 py-10">
  <div className="container mx-auto py-10">
    <div className="mx-auto text-center mb-10 max-w-3xl">
    <div className='flex justify-center gap-4 items-center'>
    <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
      <h5 className="section-title uppercase text-primary text-2xl font-roboto">Services</h5>
      <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>
      </div>  
      <h1 className="text-4xl  font-semibold text-gray-900">Our Services</h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-8"> 
        {/* Service 1 */}
        <Link className="flex items-center  bg-white border border-primary hover:bg-primary hover:text-white rounded-lg p-6">
          <div className="flex-grow text-right">
            <h5 className="text-xl font-bold mb-4">Worldwide Tours</h5>
            <p className="font-roboto text-sm">
            Embark on an unforgettable journey across the globe with our exclusive World Wide Tour. Join us to create lasting memories and discover the beauty of our world!

            </p>
          </div>
          <div className="p-4">
            {/* <i className="fa fa-globe text-primary text-4xl"></i> */}
            <FontAwesomeIcon  fontSize={60} icon={faEarth} className=''/>
          </div>
        </Link>

        {/* Service 2 */}
        <Link className="flex items-center   bg-white border border-primary hover:bg-primary hover:text-white rounded-lg p-6">
          <div className="flex-grow text-right">
            <h5 className="text-xl font-bold mb-4">Hotel Reservation</h5>
            <p className="font-roboto text-sm">
         Discover exceptional accommodations around the globe with our Worldwide Hotels feature. From luxurious resorts to cozy boutique stays, we offer a curated selection of hotels that cater to every budget and preference.
            </p>
          </div>
          <div className="p-4">
            {/* <i className="fa fa-hotel text-primary text-4xl"></i> */}
            <FontAwesomeIcon fontSize={60} icon={faHotel} className=''/>
          </div>
        </Link>

        {/* Service 3 */}
        <Link className="flex items-center   bg-white border border-primary hover:bg-primary hover:text-white rounded-lg p-6">
          <div className="flex-grow text-right">
            <h5 className="text-xl font-bold mb-4">Travel Guides</h5>
            <p className="font-roboto text-sm">
            Navigate your journey with confidence using our expert Travel Guide. Packed with essential tips, local insights, and must-see recommendations, our guide helps you explore each destination like a pro.
            </p>
          </div>
          <div className="p-4">
            {/* <i className="fa fa-user text-primary text-4xl"></i> */}
            <FontAwesomeIcon fontSize={60}  icon={faUsers} className="" />
          </div>
        </Link>

        {/* Service 4 */}
        <Link className="flex items-center   bg-white border border-primary hover:bg-primary hover:text-white rounded-lg p-6">
          <div className="flex-grow text-right">
            <h5 className="text-xl font-bold mb-4">Event Management</h5>
            <p className="font-roboto text-sm">
            Plan and host unforgettable events with our comprehensive Event Management services. Whether it's a wedding, corporate gathering, or a special celebration, we handle every detail to make your event a success.
            </p>
          </div>
          <div className="p-4">
            {/* <i className="fa fa-cog text-primary text-4xl"></i> */}
            <FontAwesomeIcon fontSize={60} icon={faCog} className="" />
          </div>
        </Link>
      </div>

      {/* Second Column */}
      <div className="space-y-8"> 
        {/* Service 1 */}
        <div className="flex items-center  bg-white border border-primary hover:bg-primary hover:text-white rounded-lg p-6">
          <div className="flex-grow text-right">
            <h5 className="text-xl font-bold mb-4">Worldwide Tours</h5>
            <p className="font-roboto text-sm">
            Embark on an unforgettable journey across the globe with our exclusive World Wide Tour. Join us to create lasting memories and discover the beauty of our world!

            </p>
          </div>
          <div className="p-4">
            {/* <i className="fa fa-globe text-primary text-4xl"></i> */}
            <FontAwesomeIcon  fontSize={60} icon={faEarth} className=''/>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex items-center   bg-white border border-primary hover:bg-primary hover:text-white rounded-lg p-6">
          <div className="flex-grow text-right">
            <h5 className="text-xl font-bold mb-4">Hotel Reservation</h5>
            <p className="font-roboto text-sm">
         Discover exceptional accommodations around the globe with our Worldwide Hotels feature. From luxurious resorts to cozy boutique stays, we offer a curated selection of hotels that cater to every budget and preference.
            </p>
          </div>
          <div className="p-4">
            {/* <i className="fa fa-hotel text-primary text-4xl"></i> */}
            <FontAwesomeIcon fontSize={60} icon={faHotel} className=''/>
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex items-center   bg-white border border-primary hover:bg-primary hover:text-white rounded-lg p-6">
          <div className="flex-grow text-right">
            <h5 className="text-xl font-bold mb-4">Travel Guides</h5>
            <p className="font-roboto text-sm">
            Navigate your journey with confidence using our expert Travel Guide. Packed with essential tips, local insights, and must-see recommendations, our guide helps you explore each destination like a pro.
            </p>
          </div>
          <div className="p-4">
            {/* <i className="fa fa-user text-primary text-4xl"></i> */}
            <FontAwesomeIcon fontSize={60}  icon={faUsers} className="" />
          </div>
        </div>

        {/* Service 4 */}
        <div className="flex items-center   bg-white border border-primary hover:bg-primary hover:text-white rounded-lg p-6">
          <div className="flex-grow text-right">
            <h5 className="text-xl font-bold mb-4">Event Management</h5>
            <p className="font-roboto text-sm">
            Plan and host unforgettable events with our comprehensive Event Management services. Whether it's a wedding, corporate gathering, or a special celebration, we handle every detail to make your event a success.
            </p>
          </div>
          <div className="p-4">
            {/* <i className="fa fa-cog text-primary text-4xl"></i> */}
            <FontAwesomeIcon fontSize={60} icon={faCog} className="" />
          </div>
        </div>
      </div>
    </div>

    
      
    <div className="text-center mt-8">
      {
        isActive('/') ? (
          <Link to="/service" >
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
                      Servive More
         </Button>
         </Link>
        ) : (
          <Link to="/" >
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
                      Home
         </Button>
         </Link>
        )
      }
   
    </div>
  </div>
</div>
 </>

  )
}

export default Service
