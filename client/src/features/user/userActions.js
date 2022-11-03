import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "user/login",
  async (payload, thunkAPI) => {
    const response = await fetch("http://127.0.0.1:8000/api/users/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log("login data");
    if (response.ok) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (payload, thunkAPI) => {
    const response = await fetch("http://127.0.0.1:8000/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  }
);
