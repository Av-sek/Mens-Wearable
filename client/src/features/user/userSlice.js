// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

import { login, register } from "./userActions";

const initialState = {
  loading: false,
  name: "",
  email: "",
  role: "admin",
  accessToken: null, // for storing the JWT
  refreshToken: null, // for storing the JWT
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.role = "something";
      state.name = "";
      state.email = "";
    },
  },
  extraReducers: {
    // login
    [login.pending]: (state, action) => {
      console.log("pending");
    },
    [login.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.role = "user";
      state.name = action.payload.username;
      console.log("fulfilled");
    },
    [login.rejected]: (state, action) => {
      console.log(action.payload);
      console.log("rejected");
    },

    // register
    [register.pending]: (state, action) => {
      console.log("pending");
    },
    [register.fulfilled]: (state, action) => {
      console.log(action.payload);
      console.log("fulfilled");
    },
    [register.rejected]: (state, action) => {
      console.log(action.payload);
      console.log("rejected");
    },
  },
});

export const { logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
