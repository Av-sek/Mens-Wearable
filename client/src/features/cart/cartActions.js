import { createAsyncThunk } from "@reduxjs/toolkit";

export const addCartItems = createAsyncThunk(
  "cart/addCartItems",
  async (product) => {
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
  }
);

export const increaseCart = createAsyncThunk(
  "cart/increaseCart",
  async (id) => {
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
  }
);

export const decreaseCart = createAsyncThunk(
  "cart/decreaseCart",
  async (id) => {
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
  }
);
