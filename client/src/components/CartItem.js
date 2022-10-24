import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { GrSubtract, GrAdd } from "react-icons/gr";

import { increaseCart, decreaseCart } from "../features/cart/cartSlice";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    dispatch(increaseCart(1));
  };

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
    dispatch(decreaseCart(1));
  };

  return (
    <tr>
      <td className="product__cart__item">
        <div className="product__cart__item__pic">
          <img src="img/shopping-cart/cart-2.jpg" alt="" />
        </div>
        <div className="product__cart__item__text">
          <h6>Diagonal Textured Cap</h6>
          <h5>$98.49</h5>
        </div>
      </td>
      <td className="quantity__item">
        <div className="quantity">
          <div className="pro-qty-2">
            <GrSubtract className="qtybtn" onClick={() => decreaseQuantity()} />
            <input
              type="number"
              className="cart-quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(Number(e.target.value));
              }}
            />
            <GrAdd className="qtybtn" onClick={() => increaseQuantity()} />
          </div>
        </div>
      </td>
      <td className="cart__price">$ 32.50</td>
      <td className="cart__close">
        <i className="fa fa-close"></i>
      </td>
    </tr>
  );
};

export default CartItem;
