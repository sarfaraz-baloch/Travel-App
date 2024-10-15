import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderImage from "./HeaderImage";
import { useLocation } from "react-router-dom";
const Explore = () => {
  const [activeTab, setActiveTab] = useState('NationalTab-1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const isActive = (path) => location.pathname === path;
  return (
    <>
    {isActive("/") ? "" : <HeaderImage path={"Package"} />}
    <div className="container-fluid py-5 bg-gray-100 ">
      <div className="container mx-auto py-5">
        <div className="mx-auto text-center mb-5 max-w-4xl">
          <div className='flex justify-center items-center gap-4'>
          <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>    
          <h5 className="text-3xl font-bold mb-2 text-primary px-3">Explore Tour</h5>
          <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>    
          </div>
          <h1 className="mb-4 text-5xl font-semibold">The World</h1>
          <p className="mb-0 text-gray-600 text-lg font-roboto">
            Unleash your wanderlust with our Explore Tour packages. Discover hidden gems, immerse yourself in diverse cultures, and embark on thrilling adventures in destinations around the world. Whether it's a city escape or a nature retreat, we have the perfect tour to satisfy your curiosity and create unforgettable memories.
          </p>
        </div>
        <div className="text-center">
          <ul className="flex justify-center mb-5 space-x-3">
            <li>
              <button
                className={`py-2 font-roboto font-semibold px-4 border rounded-full transition-colors duration-300 ${activeTab === 'NationalTab-1' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handleTabClick('NationalTab-1')}
              >
                National Tour Category
              </button>
            </li>
            <li>
              <button
                className={`py-2  font-roboto font-semibold px-4 border rounded-full transition-colors duration-300 ${activeTab === 'InternationalTab-2' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handleTabClick('InternationalTab-2')}
              >
                International Tour Category
              </button>
            </li>
          </ul>
          <div className="tab-content">
            {activeTab === 'NationalTab-1' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-500 ease-in-out opacity-100">
                {/* National Tour Items */}
                {['Weekend Tour', 'Holiday Tour', 'Road Trip', 'Historical Trip', 'Family Tour', 'Beach Tour'].map((tour, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
                    <img src={`img/explore-tour-${index + 1}.jpg`} className="w-full h-52 object-cover" alt={tour} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
                      <div className="text-white text-center">
                        <h5 className="text-xl font-roboto ">{tour}</h5>
                        <Link to={''} className="mt-2 inline-block px-3 py-2 font-poppins font-semibold text-sm bg-primary text-white rounded-full">View All Place</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {
            activeTab === 'InternationalTab-2' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-500 ease-in-out opacity-100">
                {/* International Tour Items */}
                {['Australia', 'Germany', 'Spain', 'Japan', 'London'].map((tour, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
                    <img src={`img/explore-tour-${index + 1}.jpg`} className="w-full h-56 object-cover" alt={tour} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
                      <div className="text-white text-center">
                        <h5 className="text-xl font-roboto font-semibold">{tour}</h5>
                        <Link to={''} className="mt-2 inline-block px-4 py-2 bg-primary text-white font-roboto rounded-full">View All Place</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Explore;
