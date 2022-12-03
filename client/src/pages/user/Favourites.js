import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";

const Favourites = () => {
  return (
    <>
      {/* <!-- Breadcrumb Section Begin --> */}
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Shopping Cart</h4>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <Link to="/shop">Shop</Link>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}
    </>
  );
};

export default Favourites;
