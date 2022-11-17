import { useState, useEffect, useRef } from "react";
import FilterProducts from "../../components/ProductFilters/FilterProducts";
import Pagination from "../../components/Pagination";
import ProductItem from "../../components/ProductItem";

import { motion } from "framer-motion";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [filters, setFilters] = useState({
    brand: null,
    category: null,
    tags: null,
    price: null,
    size: null,
  });

  const fetchProducts = async ({ isFilter }) => {
    // set valid url for filter or all products
    let url = "";
    if (isFilter) {
      let searchParams = "";
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          searchParams += `&${key}=${value}`;
        }
      });
      url = `http://127.0.0.1:8000/api/product/search?${searchParams}`;
    } else {
      url = "http://127.0.0.1:8000/api/product/";
    }
    // get products from api
    const result = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await result.json();
    setProducts(data);
  };

  // set filter value and fetch products
  const filterProducts = async (filterVal) => {
    console.log(filterVal);
    setFilters({ ...filters, ...filterVal });
  };

  // initial fetch products
  useEffect(() => {
    fetchProducts({ isFilter: false });
  }, []);

  // fetch products when filter changes
  useEffect(() => {
    fetchProducts({ isFilter: true });
  }, [
    filters.brand,
    filters.category,
    filters.tags,
    filters.price,
    filters.size,
  ]);

  return (
    <>
      {/* <!-- Breadcrumb Section Begin --> */}
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Shop</h4>
                <div className="breadcrumb__links">
                  <a href="./index.html">Home</a>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Shop Section Begin --> */}
      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <FilterProducts filterProducts={filterProducts} />
            </div>
            <div className="col-lg-9">
              <div className="shop__product__option">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__left">
                      <p>Showing 1–12 of 126 results</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6"></div>
                </div>
              </div>
              <div className="row">
                {products.length > 0 &&
                  products.map((product) => {
                    return (
                      <motion.div
                        layout="true"
                        className="col-lg-4 col-md-6 col-sm-6"
                        key={product.id}
                      >
                        <ProductItem product={product} />
                      </motion.div>
                    );
                  })}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shop Section End --> */}
    </>
  );
};

export default Shop;
