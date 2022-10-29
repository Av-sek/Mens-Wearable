// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

import { login, register } from "./userActions";

const initialState = {
  loading: false,
  userInfo: {
    name: "",
    email: "",
    token: "",
    role: "",
  }, // for user object
  accessToken: null, // for storing the JWT
  refreshToken: null, // for storing the JWT
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // login
    [login.pending]: (state, action) => {
      console.log("pending");
    },
    [login.fulfilled]: (state, action) => {
      console.log(action.payload);
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

export const userReducer = userSlice.reducer;
