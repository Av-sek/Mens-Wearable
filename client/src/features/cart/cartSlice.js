import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  increaseCart,
  decreaseCart,
  addCartItems,
  deleteCart,
} from "./cartActions";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
    increaseCartQuantity: (state, action) => {},
    decreaseCartQuantity: (state, action) => {},
  },
  extraReducers: {
    [increaseCart.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [addCartItems.pending]: (state, action) => {
      console.log("pending");
    },
    [addCartItems.fulfilled]: (state, action) => {
      console.log(action.payload);
      console.log("fulfilled");
    },
    [addCartItems.rejected]: (state, action) => {
      console.log("rejected");
      console.log(action.payload);
    },
    [increaseCart.pending]: (state, action) => {
      console.log("pending increase");
    },
    [increaseCart.fulfilled]: (state, action) => {
      console.log(action.payload);
      console.log("fulfilled increase");
    },
    [increaseCart.rejected]: (state, action) => {
      console.log("rejected increase");
      console.log(action.payload);
    },
    [decreaseCart.pending]: (state, action) => {
      console.log("pending decrease");
    },
    [decreaseCart.fulfilled]: (state, action) => {
      console.log(action.payload);
      console.log("fulfilled decrease");
    },
    [decreaseCart.rejected]: (state, action) => {
      console.log("rejected decrease");
      console.log(action.payload);
    },
    [deleteCart.pending]: (state, action) => {
      console.log("pending delete");
    },
    [deleteCart.fulfilled]: (state, action) => {
      console.log(action.payload);
      console.log("fulfilled delete");
    },
    [deleteCart.rejected]: (state, action) => {
      console.log("rejected delete");
      console.log(action.payload);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
} = cartSlice.actions;

export { increaseCart, decreaseCart, deleteCart };

export const cartReducer = cartSlice.reducer;
