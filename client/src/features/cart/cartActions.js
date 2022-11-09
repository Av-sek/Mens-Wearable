import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  const response = await fetch("http://127.0.0.1:8000/api/shopping_cart/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = await response.json();
  return data;
});

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
  async ({ id, quantity }, _) => {
    console.log(id);
    const response = await fetch(
      `http://127.0.0.1:8000/api/shopping_cart/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          quantity: ++quantity,
        }),
      }
    );
    const data = await response.json();
    return data;
  }
);

export const decreaseCart = createAsyncThunk(
  "cart/decreaseCart",
  async ({ id, quantity }, _) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/shopping_cart/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          quantity: --quantity,
        }),
      }
    );
    const data = await response.json();
    return data;
  }
);

export const deleteCart = createAsyncThunk("cart/deleteCart", async (id, _) => {
  console.log(id);
  const response = await fetch(
    `http://127.0.0.1:8000/api/shopping_cart/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const data = await response.json();
  console.log("function deleteCart");
  console.log(data);
  return id;
});
