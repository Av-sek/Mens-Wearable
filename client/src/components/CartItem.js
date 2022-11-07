import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { GrSubtract, GrAdd } from "react-icons/gr";

import {
  increaseCart,
  decreaseCart,
  deleteCart,
} from "../features/cart/cartSlice";

const CartItem = ({ item, itemQuantity, cart }) => {
  const [quantity, setQuantity] = useState(itemQuantity);
  const dispatch = useDispatch();

  const increaseQuantity = async () => {
    await dispatch(
      increaseCart({ id: item.id, quantity: quantity, cartId: cart.id })
    );
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = async () => {
    await dispatch(decreaseCart({ id: item.id, quantity: quantity }));
    setQuantity(quantity - 1);
  };

  const removeItem = async () => {
    console.log("remove");
    await dispatch(deleteCart(item.id));
  };

  return (
    <tr>
      <td className="product__cart__item">
        <div className="product__cart__item__pic">
          <img src="img/shopping-cart/cart-2.jpg" alt="" />
        </div>
        <div className="product__cart__item__text">
          <h6>{item.name}</h6>
          <h5>${item.price}</h5>
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
      <td className="cart__price">$ {item.price * quantity}</td>
      <td className="cart__close" onClick={() => removeItem()}>
        <i className="fa fa-close"></i>
      </td>
    </tr>
  );
};

export default CartItem;
