import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getCartItems,
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

const getTotal = (cartItems) => {
  const total = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.product_data.price;
  }, 0);
  return total;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getTotalPrice: (state) => {},
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
    increaseCartQuantity: (state, action) => {},
    decreaseCartQuantity: (state, action) => {},
  },
  extraReducers: {
    // get cart items

    [getCartItems.pending]: (state, action) => {
      console.log("pending get products");
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log("fulfilled get products");
      state.cartItems = action.payload;
      state.totalPrice = getTotal(state.cartItems);
      // let itemsTotal = 0;
      // tempItems.forEach((item) => {
      //   itemsTotal += item.quantity * item.product_data.price;
      // });
      // state.totalPrice = itemsTotal;
    },
    [getCartItems.rejected]: (state, action) => {
      console.log("rejeted get products");
    },

    // add cart items

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

    // increase cart items

    [increaseCart.pending]: (state, action) => {
      console.log("pending increase");
    },
    [increaseCart.fulfilled]: (state, action) => {
      const newItem = action.payload;
      const tempItems = state.cartItems.map((item) => {
        if (item.id === newItem.id) {
          item = newItem;
        }
        return item;
      });
      state.cartItems = tempItems;
      state.totalPrice = getTotal(state.cartItems);
    },
    [increaseCart.rejected]: (state, action) => {
      console.log("rejected increase");
      console.log(action.payload);
    },

    // decrease cart items

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

    // delete cart items

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

export { getCartItems, increaseCart, decreaseCart, deleteCart };

export const cartReducer = cartSlice.reducer;
