import React from "react";
import { Link } from "react-router-dom";
import Stars from "./Stars";

const ProductItem = ({ product }) => {
  const rating = Math.floor(product.rating);
  return (
    <div className="product__item">
      <div
        className="product__item__pic set-bg"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/product/product-1.jpg") + ")",
        }}
      >
        <span className="label">New</span>
        <ul className="product__hover">
          <li>
            <a href="#">
              <img src={require("../assets/img/icon/heart.png")} alt=""></img>
            </a>
          </li>
          <li>
            <Link to={`/shop-details/${product.id}`}>
              <img src={require("../assets/img/icon/search.png")} alt=""></img>{" "}
              <span>View More</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="product__item__text">
        <h6>{product.title}</h6>
        <a href="#" className="add-cart">
          + Add To Cart
        </a>
        <div className="rating">
          <Stars rating={rating} />
        </div>
        <h5>${product.price}</h5>
        <div className="product__color__select">
          <label htmlFor="pc-1">
            <input type="radio" id="pc-1"></input>
          </label>
          <label className="active black" htmlFor="pc-2">
            <input type="radio" id="pc-2"></input>
          </label>
          <label className="grey" htmlFor="pc-3">
            <input type="radio" id="pc-3"></input>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
