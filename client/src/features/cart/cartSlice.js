import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const addCartItems = createAsyncThunk("cart/addCartItems", async (product) => {
  const response = await fetch("http://localhost:3000/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: product.id,
          quantity: 1,
        },
      ],
    }),
  });
  const data = await response.json();
  return data;
});

const increaseCart = createAsyncThunk("cart/increaseCart", async (id) => {
  const response = await fetch(`https://dummyjson.com/carts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      products: [
        {
          id: id,
          quantity: 4,
        },
      ],
    }),
  });
});

const decreaseCart = createAsyncThunk("cart/decreaseCart", async (id) => {
  const response = await fetch(`https://dummyjson.com/carts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      products: [
        {
          id: id,
          quantity: 4,
        },
      ],
    }),
  });

  const data = await response.json();
  console.log(data);
  return data;
});

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
