import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderImage from "./HeaderImage";
import { db, auth } from "../Firebase/Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

// Yup validation schema
const BookingSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.string().required("Date & Time is required"),
  destination: Yup.string().required("Destination is required"),
  persons: Yup.string().required("Number of persons is required"),
  category: Yup.string().required("Category is required"),
  flightNumber: Yup.string().required("Flight Number is required"),
  classType: Yup.string().required("Class Type is required"),
  seatPreference: Yup.string(),
  specialRequest: Yup.string(),
});

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.persistedReducer.onAuth.user);
  const isLoggedIn = !!user;

  const initialValues = {
    name: "",
    email: "",
    date: "",
    destination: "Destination 1",
    persons: "1 Person",
    category: "Adults",
    flightNumber: "",
    classType: "Economy",
    seatPreference: "",
    specialRequest: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    if (!isLoggedIn) {
      alert("Please log in to submit your booking.");
      navigate("/login");
      return;
    }

    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      const bookingRef = doc(db, "users", currentUser.uid);
      const bookingSnapshot = await getDoc(bookingRef);

      if (bookingSnapshot.exists()) {
        alert("You have already made a booking. You cannot book again.");
        return;
      }

      try {
        await setDoc(bookingRef, {
          ...values,
          uid: currentUser.uid,
        });

        // alert("Booking submitted successfully!");
        toast.success("Booking submitted successfully!");
        resetForm();
      } catch (e) {
        // console.error("Error adding booking: ", e);
        // alert("There was an error submitting your booking.");
        toast.error("There was an error submitting your booking.");
      }
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {isActive("/") ? null : <HeaderImage path={"Package"} />}
      <div
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("img/tour-booking-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-primary opacity-80"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h5 className="text-yellow-400 text-lg font-semibold">Booking</h5>
              <h1 className="text-white text-4xl font-bold mb-4">Online Booking</h1>
              <p className="text-white mb-4">Book your adventure trip today!</p>
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-white text-3xl font-bold mb-3">Book A Tour Deal</h1>

              <Formik
                initialValues={initialValues}
                validationSchema={BookingSchema}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Field
                          type="text"
                          name="name"
                          className="form-input w-full bg-white border-0 rounded-md p-2 shadow-sm"
                          placeholder="Your Name"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                      </div>
                      <div>
                        <Field
                          type="email"
                          name="email"
                          className="form-input w-full bg-white border-0 rounded-md p-2 shadow-sm"
                          placeholder="Your Email"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                      </div>
                      <div>
                        <Field
                          type="text"
                          name="date"
                          className="form-input w-full bg-white border-0 rounded-md p-2 shadow-sm"
                          placeholder="Date & Time"
                        />
                        <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
                      </div>
                      <div>
                        <Field
                          as="select"
                          name="destination"
                          className="form-select w-full bg-white border-0 rounded-md p-2 shadow-sm"
                        >
                          <option value="Destination 1">Destination 1</option>
                          <option value="Destination 2">Destination 2</option>
                          <option value="Destination 3">Destination 3</option>
                        </Field>
                        <ErrorMessage name="destination" component="div" className="text-red-500 text-sm" />
                      </div>
                      <div>
                        <Field
                          as="select"
                          name="persons"
                          className="form-select w-full bg-white border-0 rounded-md p-2 shadow-sm"
                        >
                          <option value="1 Person">1 Person</option>
                          <option value="2 Persons">2 Persons</option>
                          <option value="3 Persons">3 Persons</option>
                        </Field>
                        <ErrorMessage name="persons" component="div" className="text-red-500 text-sm" />
                      </div>
                      <div>
                        <Field
                          as="select"
                          name="category"
                          className="form-select w-full bg-white border-0 rounded-md p-2 shadow-sm"
                        >
                          <option value="Adults">Adults</option>
                          <option value="Kids">Kids</option>
                          <option value="Seniors">Seniors</option>
                        </Field>
                        <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
                      </div>
                      {/* New Flight Number Field */}
                      <div>
                        <Field
                          type="text"
                          name="flightNumber"
                          className="form-input w-full bg-white border-0 rounded-md p-2 shadow-sm"
                          placeholder="Flight Number"
                        />
                        <ErrorMessage name="flightNumber" component="div" className="text-red-500 text-sm" />
                      </div>
                      {/* New Class Type Field */}
                      <div>
                        <Field
                          as="select"
                          name="classType"
                          className="form-select w-full bg-white border-0 rounded-md p-2 shadow-sm"
                        >
                          <option value="Economy">Economy</option>
                          <option value="Business">Business</option>
                          <option value="First Class">First Class</option>
                        </Field>
                        <ErrorMessage name="classType" component="div" className="text-red-500 text-sm" />
                      </div>
                      {/* New Seat Preference Field */}
                      <div className="col-span-2">
                        <Field
                          type="text"
                          name="seatPreference"
                          className="form-input w-full bg-white border-0 rounded-md p-2 shadow-sm"
                          placeholder="Seat Preference (e.g., Window, Aisle)"
                        />
                        <ErrorMessage name="seatPreference" component="div" className="text-red-500 text-sm" />
                      </div>
                      <div className="col-span-2">
                        <Field
                          as="textarea"
                          name="specialRequest"
                          className="form-textarea w-full bg-white border-0 rounded-md shadow-sm"
                          rows="3"
                          placeholder="Special Request"
                        />
                        <ErrorMessage name="specialRequest" component="div" className="text-red-500 text-sm" />
                      </div>
                      <div className="col-span-2">
                        <button
                          type="submit"
                          className="w-full py-3 bg-primary text-white font-semibold rounded-md shadow-lg transition duration-300 hover:bg-white hover:text-primary hover:border hover:border-primary"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
