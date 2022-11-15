import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { GrSubtract, GrAdd } from "react-icons/gr";

import {
  increaseCart,
  decreaseCart,
  deleteCart,
} from "../features/cart/cartSlice";

const CartItem = ({ cart }) => {
  const cartItem = cart.product_data;
  const dispatch = useDispatch();

  const increaseQuantity = async () => {
    if (cart.quantity >= 1) {
      dispatch(increaseCart({ id: cart.id, quantity: cart.quantity }));
    }
  };

  const decreaseQuantity = async () => {
    if (cart.quantity > 1) {
      dispatch(decreaseCart({ id: cart.id, quantity: cart.quantity }));
    } else {
      await dispatch(deleteCart(cart.id));
    }
  };

  const removeItem = async () => {
    await dispatch(deleteCart(cart.id));
  };

  return (
    <tr>
      <td className="product__cart__item">
        <div className="product__cart__item__pic">
          <img src="img/shopping-cart/cart-2.jpg" alt="" />
        </div>
        <div className="product__cart__item__text">
          <h6>{cartItem.name}</h6>
          <h5>${cartItem.price}</h5>
        </div>
      </td>
      <td className="quantity__item">
        <div className="quantity">
          <div className="pro-qty-2">
            <GrSubtract className="qtybtn" onClick={() => decreaseQuantity()} />
            <input
              type="number"
              readOnly
              className="cart-quantity"
              value={cart.quantity}
            />
            <GrAdd className="qtybtn" onClick={() => increaseQuantity()} />
          </div>
        </div>
      </td>
      <td className="cart__price">$ {cartItem.price * cart.quantity}</td>
      <td className="cart__close" onClick={() => removeItem()}>
        <i className="fa fa-close"></i>
      </td>
    </tr>
  );
};

export default CartItem;
