import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  const response = await api.get("/shopping_cart/");
  return response.data;
});

export const addCartItems = createAsyncThunk(
  "cart/addCartItems",
  async (product) => {
    const response = await api.post("shopping_cart/", {
      product: product.id,
    });
    return response.data;
  }
);

export const increaseCart = createAsyncThunk(
  "cart/increaseCart",
  async ({ id, quantity }, _) => {
    const response = await api.put(`/shopping_cart/${id}`, {
      quantity: ++quantity,
    });
    return response.data;
  }
);

export const decreaseCart = createAsyncThunk(
  "cart/decreaseCart",
  async ({ id, quantity }, _) => {
    const response = await api.put(`/shopping_cart/${id}`, {
      quantity: --quantity,
    });
    return response.data;
  }
);

export const deleteCart = createAsyncThunk("cart/deleteCart", async (id, _) => {
  console.log(id);
  const response = await api.delete(`/shopping_cart/${id}`);
  return id;
});
