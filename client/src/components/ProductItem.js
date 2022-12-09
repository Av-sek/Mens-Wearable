import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

import Stars from "./Stars";
import { addCartItems } from "../features/cart/cartActions";

const ProductItem = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(product.is_favourite);
  const dispatch = useDispatch();

  const addFavorites = async () => {
    console.log("check add favs");
    const response = await fetch(`http://127.0.0.1:8000/api/fav`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ product: product.id }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("addfavs");
      setIsFavorite(true);
    }
  };

  const removeFavorites = async () => {
    console.log("check remove favs");
    const response = await fetch(
      `http://127.0.0.1:8000/api/fav/${product.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      console.log("removefavs");
      setIsFavorite(false);
    }
  };

  const rating = Math.floor(product.rating / 20);
  return (
    <motion.div layout="true" className="product__item">
      <div
        className="product__item__pic set-bg"
        style={{
          backgroundImage: "url(" + `${product.thumbnail}` + ")",
        }}
      >
        <span className="label">New</span>
        <ul className="product__hover">
          <li>
            <a
              onClick={() => {
                if (!isFavorite) {
                  addFavorites(product.id);
                } else {
                  removeFavorites(product.id);
                }
              }}
            >
              <img
                src={
                  isFavorite
                    ? require("../assets/img/icon/heart-solid.png")
                    : require("../assets/img/icon/heart.png")
                }
                alt=""
              ></img>
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
        <h6>{product.name}</h6>
        <a
          href="#/"
          className="add-cart"
          onClick={() => dispatch(addCartItems(product))}
        >
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
    </motion.div>
  );
};

export default ProductItem;
