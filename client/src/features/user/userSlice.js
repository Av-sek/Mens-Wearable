// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  accessToken: null, // for storing the JWT
  refreshToken: null, // for storing the JWT
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const userReducer = userSlice.reducer;
