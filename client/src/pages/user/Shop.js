import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import FilterProducts from "../../components/ProductFilters/FilterProducts";
import Pagination from "../../components/Pagination";
import ProductItem from "../../components/ProductItem";
import Options from "../../components/ProductFilters/Options";
import {
  getProducts,
  getFilters,
  filterProducts,
} from "../../features/products/productActions";
import {
  setFilterOptions,
  setSearchQuery,
} from "../../features/products/productSlice";

const Shop = () => {
  const {
    productsItems,
    loading,
    firstLoad,
    searchQuery,
    filterOptions,
    brandItems,
    tagItems,
    sizeItems,
    categoryItems,
  } = useSelector((state) => state.products);

  const { tags, brand, size, category } = filterOptions;

  const dispatch = useDispatch();

  const [search, setSearch] = useSearchParams();
  const navigate = useNavigate();

  const getUrl = () => {
    let url = "";
    let searchParams = "";
    for (const [key, value] of search.entries()) {
      if (value) {
        searchParams += `&${key}=${value}`;
      }
    }
    // remove the first & from the search params
    searchParams = searchParams.substring(1);
    if (searchParams) {
      url = `${searchParams}`;
    } else {
      url = "";
    }
    return url;
  };

  useEffect(() => {
    navigate(`/shop?${searchQuery}`);
  }, [searchQuery]);

  useEffect(() => {
    console.log("check page load ");
    let options = {
      tags: "",
      brand: "",
      size: "",
      category: "",
    };
    for (const [key, value] of search.entries()) {
      if (value) {
        options[key] = value;
      }
    }
    dispatch(setFilterOptions(options));
  }, [brandItems, categoryItems, tagItems, sizeItems]);

  // get products on page load
  useEffect(() => {
    const url = getUrl();
    dispatch(setSearchQuery(url));
    if (firstLoad === "true" && url === "") {
      dispatch(getProducts());
    } else {
      dispatch(filterProducts(search));
    }
  }, [category, tags, brand, size]);

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
              <FilterProducts />
            </div>
            <div className="col-lg-9">
              <div className="shop__product__option">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__left">
                      <p>Showing 1–12 of 126 results</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="filter-options">
                      {Object.entries(filterOptions).map(([key, value]) => {
                        if (value?.id) {
                          return (
                            <Options key={key} option={value} name={key} />
                          );
                        }
                      })}
                      {/* {filterOptions.length > 0 &&
                        filterOptions.map((option, index) => {
                          return (
                            <Options key={index} option={option.label} />
                            // <div key={option.id} className="filter-option">
                            //   <span>{option.name}</span>
                            //   <button
                            //     onClick={() => {
                            //       search.delete(option.name);
                            //       const url = getUrl();
                            //       navigate(`/shop?${url}`);
                            //       setSearch(search);
                            //     }}
                            //   >
                            //     x
                            //   </button>
                            // </div>
                          );
                        })} */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {productsItems.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="col-lg-4 col-md-6 col-sm-6"
                  >
                    <h5>No Products Found</h5>
                  </motion.div>
                ) : (
                  productsItems.map((product) => {
                    return (
                      <motion.div
                        layout="true"
                        className="col-lg-4 col-md-6 col-sm-6"
                        key={product.id}
                      >
                        <ProductItem product={product} />
                      </motion.div>
                    );
                  })
                )}
              </div>
              {/* <div className="row">
                <div className="col-lg-12">
                  <Pagination />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shop Section End --> */}
    </>
  );
};

export default Shop;
