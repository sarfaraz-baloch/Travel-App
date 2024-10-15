import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from "./Componets/Layout";
import About from "./Componets/About";
import Home from "./Componets/Home";
import Service from "./Componets/Service";
import Package from "./Componets/Package";
import Contact from "./Componets/Contact";
import Blog from "./Componets/Blog";
import './App.css'; // Import the CSS file
import Login from "./Componets/Login";
import Signup from "./Componets/Signup";
import { useEffect } from "react"; // Use effect hook for auth state listener
import { useDispatch } from "react-redux"; // If using Redux
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase"; // Adjust path to Firebase config
import { setUser, clearUser } from "./Redux/Auth"; // Your Redux slice (if using Redux)
import Destination from "./Componets/Destination";
import Gallery from "./Componets/Gallery";
import Booking from "./Componets/Booking";
import Testimonial from "./Componets/Testmonial";
import Guide from "./Componets/Guide";
import Explore from "./Componets/Explore";
import { Toaster } from 'react-hot-toast';
import FlightTicket from "./Componets/FlightTicket";
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS
// import GalleryRoute from "./Componets/GalleryRoute";

function App() {
  const dispatch = useDispatch(); // Redux dispatch (optional)

  // Set up Firebase auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(setUser(user)); // If using Redux, update the state
        console.log('login');
      } else {
        // User is signed out
        dispatch(clearUser()); // Clear the state on logout
        console.log("LogOut", );
      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, [dispatch]);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/package" element={<Package />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/gallery/:id" element={<GalleryRoute />} /> */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/tour" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/flight-ticket" element={<FlightTicket/>} />
      </Route>
    )
  );
  
  return (
    <>
    <Toaster />
    <RouterProvider router={router} />
    </>
  )
}

export default App
