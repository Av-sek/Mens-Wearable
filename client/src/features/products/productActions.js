import { createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";

export const getProducts = createAsyncThunk(
  "user/getProducts",
  async (payload, thunkAPI) => {
    console.log("getProducts");
    const response = await fetch(`http://127.0.0.1:8000/api/product`);
    const data = await response.json();
    console.log(data);
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
