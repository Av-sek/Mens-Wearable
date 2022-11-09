import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../features/cart/cartActions";
import { useEffect } from "react";

const Checkout = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
    console.log("useEffect running on checkout");
  }, [cartItems.length]);

  return (
    <>
      {/* <!-- Breadcrumb Section Begin --> */}
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Check Out</h4>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <Link to="/shop">Shop</Link>
                  <span>Check Out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Checkout Section Begin --> */}
      <section className="checkout spad">
        <div className="container">
          <div className="checkout__form">
            <form action="#">
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <h6 className="coupon__code">
                    <span className="icon_tag_alt"></span> Have a coupon?{" "}
                    <a href="#">Click here</a> to enter your code
                  </h6>
                  <h6 className="checkout__title">Billing Details</h6>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Fist Name<span>*</span>
                        </p>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Last Name<span>*</span>
                        </p>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Country<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Address<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="checkout__input__add"
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suite, unite ect (optinal)"
                    />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Town/City<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Country/State<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Postcode / ZIP<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Phone<span>*</span>
                        </p>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Email<span>*</span>
                        </p>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input__checkbox">
                    <label htmlFor="acc">
                      Create an account?
                      <input type="checkbox" id="acc" />
                      <span className="checkmark"></span>
                    </label>
                    <p>
                      Create an account by entering the information below. If
                      you are a returning customer please login at the top of
                      the page
                    </p>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Account Password<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="checkout__input__checkbox">
                    <label htmlFor="diff-acc">
                      Note about your order, e.g, special noe for delivery
                      <input type="checkbox" id="diff-acc" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Order notes<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h4 className="order__title">Your order</h4>
                    <div className="checkout__order__products">
                      Product <span>Total</span>
                    </div>
                    <ul className="checkout__total__products">
                      {cartItems.length > 0 &&
                        cartItems.map((item, index) => (
                          <li key={item.id}>
                            {index + 1}. {item.product_data.name}{" "}
                            <span>
                              ${item.product_data.price * item.quantity}
                            </span>
                          </li>
                        ))}
                    </ul>
                    <ul className="checkout__total__all">
                      <li>
                        Subtotal <span>${totalPrice}</span>
                      </li>
                      <li>
                        Total <span>${totalPrice}</span>
                      </li>
                    </ul>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="acc-or">
                        Create an account?
                        <input type="checkbox" id="acc-or" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="payment">
                        Check Payment
                        <input type="checkbox" id="payment" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="paypal">
                        Paypal
                        <input type="checkbox" id="paypal" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <button type="submit" className="site-btn">
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- Checkout Section End --> */}
    </>
  );
};

export default Checkout;
