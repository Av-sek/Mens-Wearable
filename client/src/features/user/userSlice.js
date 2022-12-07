// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

import { login, register, verify } from "./userActions";

const accessToken = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : null;
const refreshToken = localStorage.getItem("refreshToken")
  ? localStorage.getItem("refreshToken")
  : null;

const initialState = {
  loading: true,
  userInfo: null,
  accessToken: accessToken,
  refreshToken: refreshToken,
  isAdmin: false,
  role: "admin",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.accessToken = null;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: {
    // login
    [login.pending]: (state, action) => {
      console.log("pending");
    },
    [login.fulfilled]: (state, action) => {
      state.userInfo = {
        name: "sth",
        email: "sth@gmail.com",
        accessToken: action.payload.access,
        refreshToken: action.payload.refresh,
        role: "user",
      };
      state.accessToken = action.payload.access;
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

    //verify user
    [verify.pending]: (state, action) => {
      console.log("verify pending");
      state.loading = true;
    },
    [verify.fulfilled]: (state, action) => {
      console.log("check verify fulfilled");
      state.loading = false;
      state.userInfo = true;
    },
    [verify.rejected]: (state, action) => {
      console.log("check verify rejected");
      state.loading = false;
      state.error = true;
    },
  },
});

export const { logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
