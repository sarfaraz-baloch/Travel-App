import { createSlice } from "@reduxjs/toolkit";

 export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    name: "",
    email: "",
    bookings: [],
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    cancelBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload.id
      );
    },
  },
});

export const { setUserProfile, addBooking, cancelBooking } = userProfileSlice.actions;
export default userProfileSlice;
