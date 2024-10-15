import { Button } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';

const HeaderImage = ({path}) => {
    const location = useLocation()
    // console.log()
  return (
    <div className="relative">
      <img
        src="img/breadcrumb-bg.jpg"
        alt="First Slide"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0  bg-primary  bg-opacity-60 flex items-center justify-center">
        <div className="text-center mt-5 text-white max-w-2xl">
          <h4 className="text-6xl text-white first-letter:uppercase font-bold font-roboto mb-2 ">
            {location.pathname.slice(1)}
          </h4>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {/* {loca} */}
          </h1>
          <p className="mb-6 text-2xl">
            Explore The World Together
          </p>
          
          
        </div>
      </div>
    </div>
  );
}

export default HeaderImage
