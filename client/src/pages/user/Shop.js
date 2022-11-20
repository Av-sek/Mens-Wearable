import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";

import FilterProducts from "../../components/ProductFilters/FilterProducts";
import Pagination from "../../components/Pagination";
import ProductItem from "../../components/ProductItem";
import Options from "../../components/ProductFilters/Options";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  // const [filterOptions, setFilterOptions] = useState({
  //   category: {
  //     id: "",
  //     label: "",
  //   },
  //   size: {
  //     id: "",
  //     label: "",
  //   },
  //   tags: {
  //     id: "",
  //     label: "",
  //   },
  //   brand: {
  //     id: "",
  //     label: "",
  //   },
  // });

  const [filterOptions, setFilterOptions] = useState({
    category: "",
    size: "",
    tags: "",
    brand: "",
  });

  const [search, setSearch] = useSearchParams();
  const navigate = useNavigate();

  const getUrl = () => {
    let url = "";
    let searchParams = "";
    console.log("check params");
    for (const [key, value] of search.entries()) {
      if (value) {
        console.log(key, value);
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
    console.log("get url func");
    console.log(url);
    return url;
  };

  const handleFilters = async ({ name, id, label, removeFilter }) => {
    // console.log("name " + name);
    // console.log("id " + id);
    // console.log("label " + label);
    // console.log("removeFilter " + removeFilter);
    if (removeFilter) {
      search.delete(name);
      setSearch(search);
      const url = getUrl();
      console.log(url);
      navigate(`/shop?${url}`);

      setFilterOptions((prev) => ({ ...prev, [name]: "" }));
    } else {
      search.set(name, id);
      const url = getUrl();
      navigate(`/shop?${url}`);
      setSearch(search);
      await getProducts();
      setFilterOptions({ ...filterOptions, [name]: label });
    }
  };

  const getProducts = async () => {
    const url = getUrl();
    const res = await fetch(`http://127.0.0.1:8000/api/product/search?${url}`);
    const data = await res.json();
    for (const [key, value] of search.entries()) {
      if (value) {
        setFilterOptions((prev) => ({ ...prev, [key]: value }));
      }
    }
    console.log(filterOptions);
    setProducts(data);
  };

  // initial fetch products
  useEffect(() => {
    getProducts();
  }, []);

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
              <FilterProducts handleFilters={handleFilters} />
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
                      {Object.keys(filterOptions).map((key) => {
                        if (filterOptions[key]) {
                          return (
                            <Options
                              key={key}
                              option={filterOptions[key]}
                              handleFilters={handleFilters}
                              setFilterOptions={setFilterOptions}
                            />
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
                {products.length === 0 ? (
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
