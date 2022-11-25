import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilters,
  filterProducts,
} from "../../features/products/productActions";
import { setCategory } from "../../features/products/productSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { categoryItems } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getFilters("product_category"));
  }, [dispatch]);

  return (
    <div className="shop__sidebar__categories">
      <ul className="nice-scroll">
        {categoryItems.length > 0 &&
          categoryItems.map((category) => (
            <li
              key={category.id}
              onClick={() => {
                dispatch(setCategory({ id: category.id, name: category.name }));
              }}
              // className={`category ${
              //   category.id === selectedCategory ? "active" : ""
              // }`}
            >
              <p>{category.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
