import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: true,
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.isLogin = true;

      console.log('user==>', state.user);
    },
    clearUser: (state) => {
      state.user = null;
      state.loading = false;
      state.isLogin = false;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice;
