import { createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";

export const getProducts = createAsyncThunk(
  "user/getProducts",
  async (payload, thunkAPI) => {
    console.log("getProducts");
    let accessToken = localStorage.getItem("accessToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    const response = await fetch(`http://127.0.0.1:8000/api/product/`, {
      method: "GET",
      ...config,
    });
    const data = await response.json();
    return data;
  }
);

export const addProducts = createAsyncThunk(
  "user/addProducts",
  async (payload, thunkAPI) => {
    console.log("addProducts");
    console.log(payload);
    let accessToken = localStorage.getItem("accessToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log(config);
    const response = await fetch(`http://127.0.0.1:8000/api/product/`, {
      method: "POST",
      ...config,
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  }
);

export const getFilters = createAsyncThunk(
  "user/getFilters",
  async (payload, thunkAPI) => {
    const response = await fetch(`http://127.0.0.1:8000/api/${payload}`);
    const data = await response.json();
    if (response.ok) {
      return { data: data, filter: payload };
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  }
);

export const filterProducts = createAsyncThunk(
  "user/filterProducts",
  async (payload, thunkAPI) => {
    const state = thunkAPI.getState();
    const { searchQuery, firstLoad } = state.products;
    const { category, brand, tags, size } = state.products.filterOptions;
    let tempQuery = "";
    if (category.id) {
      tempQuery += `&category=${category.id}`;
    }
    if (brand.id) {
      tempQuery += `&brand=${brand.id}`;
    }
    if (tags.id) {
      tempQuery += `&tags=${tags.id}`;
    }
    if (size.id) {
      tempQuery += `&size=${size.id}`;
    }
    tempQuery = tempQuery.substring(1);
    if (firstLoad === "true") {
      tempQuery = `${searchQuery}`;
    }
    const response = await fetch(
      `http://127.0.0.1:8000/api/product/search?${tempQuery}`
    );
    const data = await response.json();
    let paramData = [];
    for (const [key, value] of payload.entries()) {
      if (value) {
        paramData.push({ key: key, value: value });
      }
    }
    if (response.ok) {
      return {
        data: data,
        searchQuery: tempQuery,
        firstLoad: firstLoad,
        paramData: paramData,
      };
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  }
);

export const getFavorites = createAsyncThunk(
  "user/getFavorites",
  async (payload, thunkAPI) => {
    const response = await fetch(`http://127.0.0.1:8000/api/fav/`);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  }
);

export const addFavorites = createAsyncThunk(
  "user/addFavorites",
  async (payload, thunkAPI) => {
    console.log("addFavorites id: " + payload);
    const response = await fetch(`http://127.0.0.1:8000/api/fav/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ product: payload }),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  }
);

export const removeFavorites = createAsyncThunk(
  "user/removeFavorites",
  async (payload, thunkAPI) => {
    console.log("removeFavorites id: " + payload);
    const response = await fetch(`http://127.0.0.1:8000/api/fav/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ product: payload }),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  }
);
