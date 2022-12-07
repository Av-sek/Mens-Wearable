import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  console.log("navbar render check");

  const { loading, error, userInfo } = useSelector((state) => state.user);

  const { totalPrice, cartItems } = useSelector((state) => state.cart);
  //assigning location variable
  const location = useLocation();

  const accesstoken = localStorage.getItem("accesstoken");

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      {/* <!-- Offcanvas Menu Begin --> */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__option">
          <div className="offcanvas__links">
            <a href="/login">Sign in</a>
            <a href="/signup">Sign up</a>
          </div>
          <div className="offcanvas__top__hover">
            <span>
              Usd <i className="arrow_carrot-down"></i>
            </span>
            <ul>
              <li>USD</li>
              <li>EUR</li>
              <li>USD</li>
            </ul>
          </div>
        </div>
        <div className="offcanvas__nav__option">
          <a href="#" className="search-switch">
            <img src={require("../assets/img/icon/search.png")} alt=""></img>
          </a>
          <Link to="/favourites">
            <img src={require("../assets/img/icon/heart.png")} alt=""></img>
          </Link>
          <a href="#">
            <img src={require("../assets/img/icon/cart.png")} alt=""></img>{" "}
            <span>0</span>
          </a>
          <div className="price">$0.00</div>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__text">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
      </div>
      {/* <!-- Offcanvas Menu End --> */}

      {/* <!-- Header Section Begin --> */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    {userInfo === false && <Link to="/login">Sign in</Link>}
                    {userInfo === false && <Link to="/signup">Sign up</Link>}
                    {userInfo === true && (
                      <button onClick={() => dispatch(logout())}>Logout</button>
                    )}
                  </div>
                  <div className="header__top__hover">
                    <span>
                      Usd <i className="arrow_carrot-down"></i>
                    </span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <a href="./index.html">
                  <img src={require("../assets/img/logo.png")} alt=""></img>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={splitLocation[1] === "shop" ? "active" : ""}>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li
                    className={splitLocation[1] === "shop-cart" ? "active" : ""}
                  >
                    <Link to="/shop-cart">Cart</Link>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li
                        className={
                          splitLocation[1] === "shop-details" ? "active" : ""
                        }
                      >
                        <Link to="/shop-details">Shop Details</Link>
                      </li>
                      <li
                        className={
                          splitLocation[1] === "shop-cart" ? "active" : ""
                        }
                      >
                        <Link to="/shop-cart">Shopping Cart</Link>
                      </li>
                      <li
                        className={
                          splitLocation[1] === "checkout" ? "active" : ""
                        }
                      >
                        <Link to="/checkout">Check Out</Link>
                      </li>
                      <li
                        className={
                          splitLocation[1] === "blog-details" ? "active" : ""
                        }
                      >
                        <Link to="/blog-details">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li className={splitLocation[1] === "blogs" ? "active" : ""}>
                    <Link to="/blogs">Blogs</Link>
                  </li> */}
                  <li
                    className={splitLocation[1] === "contact" ? "active" : ""}
                  >
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                <a href="#" className="search-switch">
                  <img
                    src={require("../assets/img/icon/search.png")}
                    alt=""
                  ></img>
                </a>
                <a href="#">
                  <img
                    src={require("../assets/img/icon/heart.png")}
                    alt=""
                  ></img>
                </a>
                <Link to="/shop-cart">
                  <img
                    src={require("../assets/img/icon/cart.png")}
                    alt=""
                  ></img>{" "}
                  <span>0</span>
                </Link>
                <div className="price">${totalPrice}</div>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* <!-- Header Section End --> */}
    </>
  );
};

export default Navbar;
