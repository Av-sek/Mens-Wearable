import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { increaseCart, decreaseCart, addCartItems } from "./cartActions";

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
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
} = cartSlice.actions;

export { increaseCart, decreaseCart };

export const cartReducer = cartSlice.reducer;
