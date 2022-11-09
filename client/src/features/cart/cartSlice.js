import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

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

const getNewCart = ({ cartItems, newItem }) => {
  const tempItems = cartItems.map((item) => {
    if (item.id === newItem.id) {
      item = newItem;
    }
    return item;
  });
  return tempItems;
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
      state.cartItems = getNewCart({ cartItems: state.cartItems, newItem });
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
      const newItem = action.payload;
      state.cartItems = getNewCart({ cartItems: state.cartItems, newItem });
      state.totalPrice = getTotal(state.cartItems);
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
      const deletedId = action.payload;
      console.log("previous cart items");
      const tempItems = state.cartItems.filter((item) => {
        return item.id !== deletedId;
      });
      state.cartItems = tempItems;
      state.totalPrice = getTotal(state.cartItems);
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
