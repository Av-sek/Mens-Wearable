import { createAsyncThunk } from "@reduxjs/toolkit";

export const addCartItems = createAsyncThunk(
  "cart/addCartItems",
  async (product) => {
    const response = await fetch("http://127.0.0.1:8000/api/shopping_cart/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        product: product.id,
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
