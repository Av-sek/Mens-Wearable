// features/user/userSlice.js
import { createSlice, current } from "@reduxjs/toolkit";
import {
  getProducts,
  filterProducts,
  getFilters,
  getFavorites,
  addFavorites,
  removeFavorites,
} from "./productActions";
import { useDispatch } from "react-redux";

const initialState = {
  productsItems: [],
  brandItems: [],
  categoryItems: [],
  tagItems: [],
  sizeItems: [],
  filterOptions: {
    category: {
      id: "",
      name: "",
    },
    tags: {
      id: "",
      name: "",
    },
    brand: {
      id: "",
      name: "",
    },
    size: {
      id: "",
      name: "",
    },
  },
  searchQuery: "",

  firstLoad: "true",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeFilterOptions: (state, action) => {
      const filterName = action.payload.name;
      if (filterName === "category") {
        state.filterOptions.category = { id: "", name: "" };
      }
      if (filterName === "brand") {
        state.filterOptions.brand = { id: "", name: "" };
      }
      if (filterName === "tags") {
        state.filterOptions.tags = { id: "", name: "" };
      }
      if (filterName === "size") {
        state.filterOptions.size = { id: "", name: "" };
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      const { id, name } = action.payload;
      state.filterOptions.category = { id: id, name: name };
    },
    setSize: (state, action) => {
      const { id, name } = action.payload;
      state.filterOptions.size = { id: id, name: name };
    },
    setTags: (state, action) => {
      const { id, name } = action.payload;
      state.filterOptions.tags = { id: id, name: name };
    },
    setBrand: (state, action) => {
      const { id, name } = action.payload;
      state.filterOptions.brand = { id: id, name: name };
    },
    setFirstLoad: (state, action) => {
      state.firstLoad = action.payload;
    },
    setFilterOptions: (state, action) => {
      const { category, brand, tags, size } = action.payload;

      if (category) {
        const categoryItem = state.categoryItems.find(
          (item) => item.id === Number(category)
        );
        if (categoryItem) {
          state.filterOptions.category = {
            id: categoryItem.id,
            name: categoryItem.name,
          };
        }
      }
      if (brand) {
        const brandItem = state.brandItems.find((item) => {
          return item.id === Number(brand);
        });
        if (brandItem) {
          state.filterOptions.brand = {
            id: brandItem.id,
            name: brandItem.name,
          };
        }
      }
      if (tags) {
        const tagItem = state.tagItems.find((item) => item.id === Number(tags));
        if (tagItem) {
          state.filterOptions.tags = {
            id: tagItem.id,
            name: tagItem.tag,
          };
        }
      }
      if (size) {
        console.log("check filter options");
        console.log(size);
        const sizeItem = state.sizeItems.find(
          (item) => item.id === Number(size)
        );
        if (sizeItem) {
          state.filterOptions.size = {
            id: sizeItem.id,
            name: sizeItem.size,
          };
        }
      }
    },
  },
  extraReducers: {
    // getProducts
    [getProducts.pending]: (state, action) => {
      console.log("getProducts pending");
    },
    [getProducts.fulfilled]: (state, action) => {
      console.log(action.payload);
      if (!action.payload.detail) {
        state.productsItems = action.payload;
      }
      state.firstLoad = "false";
      console.log("getProducts fulfilled");
    },
    [getProducts.rejected]: (state, action) => {
      console.log("getProducts rejected");
    },

    // filterProducts
    [filterProducts.pending]: (state, action) => {
      console.log("filterProducts pending");
    },
    [filterProducts.fulfilled]: (state, action) => {
      if (state.firstLoad === "true") {
        const { paramData } = action.payload;
        // paramData.forEach((element) => {
        //   console.log(element);
        //
        // });
      }
      state.productsItems = action.payload.data;
      state.searchQuery = action.payload.searchQuery;
      state.firstLoad = "false";
      console.log("filterProducts fulfilled");
    },
    [filterProducts.rejected]: (state, action) => {
      console.log("filterProducts rejected");
    },

    // getFilters
    [getFilters.pending]: (state, action) => {
      console.log("getFilters pending");
    },
    [getFilters.fulfilled]: (state, action) => {
      const { data, filter } = action.payload;
      if (filter === "brand") {
        state.brandItems = data;
      }
      if (filter === "product_category") {
        state.categoryItems = data;
      }
      if (filter === "size") {
        state.sizeItems = data;
      }
      if (filter === "tags") {
        state.tagItems = data;
      }
    },
    [getFilters.rejected]: (state, action) => {
      console.log("getFilters rejected");
    },

    // get favorite products
    [getFavorites.pending]: (state, action) => {
      console.log("get favorite products pending");
    },
    [getFavorites.fulfilled]: (state, action) => {
      console.log("get favorite products fulfilled");
    },
    [getFavorites.rejected]: (state, action) => {
      console.log("get favorite products rejected");
    },

    // add favorite products
    [addFavorites.pending]: (state, action) => {
      console.log("add favorite products pending");
    },
    [addFavorites.fulfilled]: (state, action) => {
      console.log("add favorite products fulfilled");
    },
    [addFavorites.rejected]: (state, action) => {
      console.log("add favorite products rejected");
    },

    // remove favorite products

    [removeFavorites.pending]: (state, action) => {
      console.log("remove favorite products pending");
    },
    [removeFavorites.fulfilled]: (state, action) => {
      console.log("remove favorite products fulfilled");
    },
    [removeFavorites.rejected]: (state, action) => {
      console.log("remove favorite products rejected");
    },
  },
});

export const {
  setCategory,
  setSize,
  setTags,
  setBrand,
  setSearchQuery,
  removeFilterOptions,
  setFilterOptions,
} = productSlice.actions;

export const productReducer = productSlice.reducer;
