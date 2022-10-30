import React, { useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";
import BlogSection from "../components/Home/BlogSection";

import LandingSlider from "../components/Home/LandingSlider";
import ProductCounter from "../components/Home/ProductCounter";
import ProductGrid from "../components/Home/ProductGrid";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const getProducts = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/product/3");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <LandingSlider />

      {/* <!-- Banner Section Begin --> */}
      <section className="banner spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-4">
              <div className="banner__item">
                <div className="banner__item__pic">
                  <img
                    src={require("../assets/img/banner/banner-1.jpg")}
                    alt=""
                  ></img>
                </div>
                <div className="banner__item__text">
                  <h2>Clothing Collections 2030</h2>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner__item banner__item--middle">
                <div className="banner__item__pic">
                  <img
                    src={require("../assets/img/banner/banner-2.jpg")}
                    alt=""
                  ></img>
                </div>
                <div className="banner__item__text">
                  <h2>Accessories</h2>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner__item banner__item--last">
                <div className="banner__item__pic">
                  <img
                    src={require("../assets/img/banner/banner-3.jpg")}
                    alt=""
                  ></img>
                </div>
                <div className="banner__item__text">
                  <h2>Shoes Spring 2030</h2>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Section End --> */}

      {/* <!-- Product Section Begin --> */}
      <ProductGrid />
      {/* <!-- Product Section End --> */}

      {/* Product Counter Begin*/}
      <ProductCounter />
      {/* Product Counter End*/}

      {/* <!-- Instagram Section Begin --> */}
      <section className="instagram spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="instagram__pic">
                <div
                  className="instagram__pic__item set-bg"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../assets/img/instagram/instagram-1.jpg") +
                      ")",
                  }}
                ></div>
                <div
                  className="instagram__pic__item set-bg"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../assets/img/instagram/instagram-2.jpg") +
                      ")",
                  }}
                ></div>
                <div
                  className="instagram__pic__item set-bg"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../assets/img/instagram/instagram-3.jpg") +
                      ")",
                  }}
                ></div>
                <div
                  className="instagram__pic__item set-bg"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../assets/img/instagram/instagram-4.jpg") +
                      ")",
                  }}
                ></div>
                <div
                  className="instagram__pic__item set-bg"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../assets/img/instagram/instagram-5.jpg") +
                      ")",
                  }}
                ></div>
                <div
                  className="instagram__pic__item set-bg"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../assets/img/instagram/instagram-6.jpg") +
                      ")",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="instagram__text">
                <h2>Instagram</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3>#Male_Fashion</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Instagram Section End --> */}

      {/* <!-- Latest Blog Section Begin --> */}
      <BlogSection />
      {/* <!-- Latest Blog Section End --> */}

      {/* <!-- Search Begin -->  */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            ></input>
          </form>
        </div>
      </div>
      {/* <!-- Search End --> */}
    </>
  );
};

export default Home;
