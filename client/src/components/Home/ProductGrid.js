import React from "react";
import { useState, useEffect } from "react";

import ProductItem from "../ProductItem";

const ProductGrid = () => {
  const category = {
    bestSeller: "bestSeller",
    newArrival: "newArrival",
    hotSales: "hotSales",
  };
  const [selectedCategory, setSelectedCategory] = useState(category.bestSeller);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let response;
    if (selectedCategory === category.bestSeller) {
      response = await fetch(
        "https://dummyjson.com/products?limit=8&skip=40&select=title,price,rating"
      );
    }
    if (selectedCategory === category.hotSales) {
      response = await fetch(
        "https://dummyjson.com/products?limit=6&skip=20&select=title,price,rating"
      );
    }
    if (selectedCategory === category.newArrival) {
      response = await fetch(
        "https://dummyjson.com/products?limit=7&skip=70&select=title,price,rating"
      );
    }
    const data = await response.json();
    const productsData = data.products;
    console.log(productsData);
    setProducts(productsData);
  };

  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    getProducts();
  }, [selectedCategory]);

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="filter__controls">
              <li
                className={
                  selectedCategory === category.bestSeller ? "active" : ""
                }
                onClick={() => filterProducts("bestSeller")}
              >
                Best Sellers
              </li>
              <li
                className={
                  selectedCategory === category.newArrival ? "active" : ""
                }
                onClick={() => filterProducts("newArrival")}
              >
                New Arrivals
              </li>
              <li
                className={
                  selectedCategory === category.hotSales ? "active" : ""
                }
                onClick={() => filterProducts("hotSales")}
              >
                Hot Sales
              </li>
            </ul>
          </div>
        </div>
        <div className="row product__filter">
          {products.map((product, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix"
                key={product.id}
              >
                <ProductItem product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
