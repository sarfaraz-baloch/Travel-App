import React from "react";
import { FaEnvelopeOpen, FaHome, FaMapMarkerAlt, FaPhone, FaPrint, FaShare , FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaAngleRight, FaCcAmex, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcDiscover, FaCcAmazonPay, FaCcApplePay } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-darkPrimary overflow-hidden">
      <div className="">
        <div className="container mx-auto py-10 ">
          <div className="md:flex justify-center items-center gap-10">
            {/* Get In Touch Section */}
            <div className="md:m-0 mb-5">
              <h4 className="text-2xl font-semibold mb-4 text-white">Get In Touch</h4>
              <div className="flex flex-col space-y-2 ">
                <a href="#" className="text-white text-sm flex items-center space-x-2">
                  <FaHome className="mr-2"/> 123 Street, New York, USA
                </a>
                <a href="#" className="text-white text-sm flex items-center space-x-2">
                  <FaEnvelopeOpen className="mr-2"/> info@example.com
                </a>
                <a href="#" className="text-white text-sm flex items-center space-x-2">
                  <FaPhone className="mr-2"/>  +012 345 67890
                </a>
                <a href="#" className="text-white text-sm flex items-center space-x-2">
                  <FaPrint className="mr-2"/> +012 345 67890
                </a>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                {/* <i className="fas fa-share text-white text-2xl"></i> */}
                <FaShare className="text-white text-2xl"/>
                <a
                  href="#"
                  className="text-white p-2 rounded-full bg-primary"
                >
                  {/* <i className="fab fa-facebook-f"></i> */}
                  <FaFacebook className="rounded-full"/>
                </a>
                <a
                  href="#"
                  className="text-white p-2 rounded-full bg-primary"
                >
                  {/* <i className="fab fa-twitter"></i> */}
                  <FaTwitter className="text-white "/>
                </a>
                <a
                  href="#"
                  className="text-white p-2 rounded-full bg-primary"
                >
                  {/* <i className="fab fa-instagram"></i> */}
                  <FaInstagram className="text-white"/>
                </a>
                <a
                  href="#"
                  className="text-white p-2 rounded-full bg-primary"
                >
                  {/* <i className="fab fa-linkedin-in"></i> */}
                  <FaLinkedin className="text-white "/>
                </a>
              </div>
            </div>

            {/* Company Section */}
            <div className="md:m-0 mb-5">
              <h4 className="mb-4 text-white text-2xl font-semibold">Company</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-white flex items-center">
                  <FaAngleRight/> About
                </a>
                <a href="#" className="text-white flex items-center ">
                <FaAngleRight/> Careers
                </a>
                <a href="#" className="text-white flex items-center ">
                <FaAngleRight/> Blog
                </a>
                <a href="#" className="text-white flex items-center ">
                <FaAngleRight/> Press
                </a>
                <a href="#" className="text-white flex items-center ">
                <FaAngleRight/> Gift Cards
                </a>
                <a href="#" className="text-white flex items-center ">
                <FaAngleRight/> Magazine
                </a>
              </div>
            </div>

            {/* Support Section */}
            <div className="md:m-0 mb-5">
              <h4 className="mb-4 text-white text-2xl font-semibold">Support</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-white flex items-center">
                <FaAngleRight/> Contact
                </a>
                <a href="#" className="text-white flex items-center">
                <FaAngleRight/> Legal Notice
                </a>
                <a href="#" className="text-white flex items-center">
                <FaAngleRight/> Privacy Policy
                </a>
                <a href="#" className="text-white flex items-center">
                <FaAngleRight/> Terms and
                  Conditions
                </a>
                <a href="#" className="text-white flex items-center">
                <FaAngleRight/> Sitemap
                </a>
                <a href="#" className="text-white flex items-center">
                <FaAngleRight/> Cookie policy
                </a>
              </div>
            </div>

            {/* Payments and Language Section */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <select className="bg-gray-800 rounded-lg border text-white p-4 w-full">
                    <option>Arabic</option>
                    <option>German</option>
                    <option>Greek</option>
                    <option>New York</option>
                  </select>
                </div>
                <div>
                  <select className="bg-gray-800 rounded-lg border text-white p-4 w-full">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>INR</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
              <h4 className="text-white mb-3 text-2xl font-semibold">Payments</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white ">
                  {/* <i className="fab fa-cc-amex fa-2x"></i> */}
                  <FaCcAmex  fontSize={40}/>
                </a>
                <a href="#" className="text-white">
                  {/* <i className="fab fa-cc-visa fa-2x"></i> */}
                  <FaCcVisa  fontSize={40}/>
                </a>
                <a href="#" className="text-white">
                  {/* <i className="fas fa-credit-card fa-2x"></i> */}
                   
                  <FaCcMastercard fontSize={40}/>
                </a>
                <a href="#" className="text-white">
                  {/* <i className="fab fa-cc-paypal fa-2x"></i> */}
                  <FaCcPaypal  fontSize={40}/>
                </a>
                <a href="#" className="text-white">
                  {/* <i className="fab fa-cc-discover fa-2x"></i> */}
                  <FaCcDiscover  fontSize={40}/>
                </a>
                <a href="#" className="text-white">
                  {/* <i className="fab fa-cc-discover fa-2x"></i> */}
                  <FaCcApplePay  fontSize={40}/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-dark border-t-[1px] border-gray-800 py-4 ">
          <div className="container mx-auto ">
            <div className="flex flex-col  md:flex-row justify-center items-center gap-5">
              <p className="text-white font-semibold text-sm flex items-center space-x-2">
               <span className='text-gray-600 mr-2 text-xl'> &copy;</span> Your Site Name, <span className='text-gray-500'>All rights reserved.</span>
              </p>
              <p className="text-white font-semibold text-sm">
                <span className='text-gray-500'>Designed By</span>{' '}
                <a href="https://htmlcodex.com" className="">
                  Sarfaraz Fida 
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
