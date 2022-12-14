import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import Stars from "../../components/Stars";

const ShopDetails = () => {
  let params = useParams();
  console.log("params");
  console.log(params.id);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `http://localhost:8000/api/product/${params.id}/`
      );
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      {/* <!-- Shop Details Section Begin --> */}
      <section className="shop-details">
        <div className="product__details__pic">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="product__details__breadcrumb">
                  <Link to="/">Home</Link>
                  <Link to="/shop">Shop</Link>
                  <span>Product Details</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      <div
                        className="product__thumb__pic set-bg"
                        data-setbg="img/shop-details/thumb-1.png"
                      ></div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                    >
                      <div
                        className="product__thumb__pic set-bg"
                        data-setbg="img/shop-details/thumb-2.png"
                      ></div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                    >
                      <div
                        className="product__thumb__pic set-bg"
                        data-setbg="img/shop-details/thumb-3.png"
                      ></div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-4"
                      role="tab"
                    >
                      <div
                        className="product__thumb__pic set-bg"
                        data-setbg="img/shop-details/thumb-4.png"
                      >
                        <i className="fa fa-play"></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-9">
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__pic__item">
                      <img src="img/shop-details/product-big-2.png" alt="" />
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__pic__item">
                      <img src="img/shop-details/product-big-3.png" alt="" />
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__pic__item">
                      <img src="img/shop-details/product-big.png" alt="" />
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-4" role="tabpanel">
                    <div className="product__details__pic__item">
                      <img src="img/shop-details/product-big-4.png" alt="" />
                      <a
                        href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
                        className="video-popup"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__details__content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <div className="product__details__text">
                  <h4>{product.name}</h4>
                  <div className="rating">
                    <Stars rating={Math.floor(product.rating / 20)} />
                    <span> - 5 Reviews</span>
                  </div>
                  <h3>
                    ${product.price}
                    {/* <span>70.00</span> */}
                  </h3>
                  <p>{product.description}</p>
                  <div className="product__details__option">
                    <div className="product__details__option__size">
                      <span>Size:</span>
                      <label htmlFor="xxl">
                        xxl
                        <input type="radio" id="xxl" />
                      </label>
                      <label className="active" htmlFor="xl">
                        xl
                        <input type="radio" id="xl" />
                      </label>
                      <label htmlFor="l">
                        l
                        <input type="radio" id="l" />
                      </label>
                      <label htmlFor="sm">
                        s
                        <input type="radio" id="sm" />
                      </label>
                    </div>
                    <div className="product__details__option__color">
                      <span>Color:</span>
                      <label className="c-1" htmlFor="sp-1">
                        <input type="radio" id="sp-1" />
                      </label>
                      <label className="c-2" htmlFor="sp-2">
                        <input type="radio" id="sp-2" />
                      </label>
                      <label className="c-3" htmlFor="sp-3">
                        <input type="radio" id="sp-3" />
                      </label>
                      <label className="c-4" htmlFor="sp-4">
                        <input type="radio" id="sp-4" />
                      </label>
                      <label className="c-9" htmlFor="sp-9">
                        <input type="radio" id="sp-9" />
                      </label>
                    </div>
                  </div>
                  <div className="product__details__cart__option">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input type="text" value="1" />
                      </div>
                    </div>
                    <a href="#" className="primary-btn">
                      add to cart
                    </a>
                  </div>
                  <div className="product__details__btns__option">
                    <a href="#">
                      <i className="fa fa-heart"></i> add to favourites
                    </a>
                  </div>
                  <div className="product__details__last__option">
                    <h5>
                      <span>Guaranteed Safe Checkout</span>
                    </h5>
                    <img src="img/shop-details/details-payment.png" alt="" />
                    <ul>
                      <li>
                        <span>Categories: </span>
                        {product.category_name}
                      </li>
                      <li>
                        <span>Tag: </span>{" "}
                        {product.tags.length === 0 ? (
                          <React.Fragment>
                            <span>no tags</span>
                          </React.Fragment>
                        ) : (
                          product.tags.map((tag, index) => {
                            console.log(index);
                            return (
                              <React.Fragment key={tag.id}>
                                {tag.tag}
                                {index === product.tags.length - 1 ? "" : ","}
                              </React.Fragment>
                            );
                          })
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="product__details__tab">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-5"
                        role="tab"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-6"
                        role="tab"
                      >
                        Customer Previews(5)
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-7"
                        role="tab"
                      >
                        Additional information
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-5"
                      role="tabpanel"
                    >
                      <div className="product__details__tab__content">
                        <p className="note">
                          Nam tempus turpis at metus scelerisque placerat nulla
                          deumantos solicitud felis. Pellentesque diam dolor,
                          elementum etos lobortis des mollis ut risus. Sedcus
                          faucibus an sullamcorper mattis drostique des commodo
                          pharetras loremos.
                        </p>
                        <div className="product__details__tab__content__item">
                          <h5>Products Infomation</h5>
                          <p>
                            A Pocket PC is a handheld computer, which features
                            many of the same capabilities as a modern PC. These
                            handy little devices allow individuals to retrieve
                            and store e-mail messages, create a contact file,
                            coordinate appointments, surf the internet, exchange
                            text messages and more. Every product that is
                            labeled as a Pocket PC must be accompanied with
                            specific software to operate the unit and must
                            feature a touchscreen and touchpad.
                          </p>
                          <p>
                            As is the case with any new technology product, the
                            cost of a Pocket PC was substantial during it???s
                            early release. For approximately $700.00, consumers
                            could purchase one of top-of-the-line Pocket PCs in
                            2003. These days, customers are finding that prices
                            have become much more reasonable now that the
                            newness is wearing off. For approximately $350.00, a
                            new Pocket PC can now be purchased.
                          </p>
                        </div>
                        <div className="product__details__tab__content__item">
                          <h5>Material used</h5>
                          <p>
                            Polyester is deemed lower quality due to its none
                            natural quality???s. Made from synthetic materials,
                            not natural like wool. Polyester suits become
                            creased easily and are known for not being
                            breathable. Polyester suits tend to have a shine to
                            them compared to wool and cotton suits, this can
                            make the suit look cheap. The texture of velvet is
                            luxurious and breathable. Velvet is a great choice
                            for dinner party jacket and can be worn all year
                            round.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-6" role="tabpanel">
                      <div className="product__details__tab__content">
                        <div className="product__details__tab__content__item">
                          <h5>Products Infomation</h5>
                          <p>
                            A Pocket PC is a handheld computer, which features
                            many of the same capabilities as a modern PC. These
                            handy little devices allow individuals to retrieve
                            and store e-mail messages, create a contact file,
                            coordinate appointments, surf the internet, exchange
                            text messages and more. Every product that is
                            labeled as a Pocket PC must be accompanied with
                            specific software to operate the unit and must
                            feature a touchscreen and touchpad.
                          </p>
                          <p>
                            As is the case with any new technology product, the
                            cost of a Pocket PC was substantial during it???s
                            early release. For approximately $700.00, consumers
                            could purchase one of top-of-the-line Pocket PCs in
                            2003. These days, customers are finding that prices
                            have become much more reasonable now that the
                            newness is wearing off. For approximately $350.00, a
                            new Pocket PC can now be purchased.
                          </p>
                        </div>
                        <div className="product__details__tab__content__item">
                          <h5>Material used</h5>
                          <p>
                            Polyester is deemed lower quality due to its none
                            natural quality???s. Made from synthetic materials,
                            not natural like wool. Polyester suits become
                            creased easily and are known for not being
                            breathable. Polyester suits tend to have a shine to
                            them compared to wool and cotton suits, this can
                            make the suit look cheap. The texture of velvet is
                            luxurious and breathable. Velvet is a great choice
                            for dinner party jacket and can be worn all year
                            round.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-7" role="tabpanel">
                      <div className="product__details__tab__content">
                        <p className="note">
                          Nam tempus turpis at metus scelerisque placerat nulla
                          deumantos solicitud felis. Pellentesque diam dolor,
                          elementum etos lobortis des mollis ut risus. Sedcus
                          faucibus an sullamcorper mattis drostique des commodo
                          pharetras loremos.
                        </p>
                        <div className="product__details__tab__content__item">
                          <h5>Products Infomation</h5>
                          <p>
                            A Pocket PC is a handheld computer, which features
                            many of the same capabilities as a modern PC. These
                            handy little devices allow individuals to retrieve
                            and store e-mail messages, create a contact file,
                            coordinate appointments, surf the internet, exchange
                            text messages and more. Every product that is
                            labeled as a Pocket PC must be accompanied with
                            specific software to operate the unit and must
                            feature a touchscreen and touchpad.
                          </p>
                          <p>
                            As is the case with any new technology product, the
                            cost of a Pocket PC was substantial during it???s
                            early release. For approximately $700.00, consumers
                            could purchase one of top-of-the-line Pocket PCs in
                            2003. These days, customers are finding that prices
                            have become much more reasonable now that the
                            newness is wearing off. For approximately $350.00, a
                            new Pocket PC can now be purchased.
                          </p>
                        </div>
                        <div className="product__details__tab__content__item">
                          <h5>Material used</h5>
                          <p>
                            Polyester is deemed lower quality due to its none
                            natural quality???s. Made from synthetic materials,
                            not natural like wool. Polyester suits become
                            creased easily and are known for not being
                            breathable. Polyester suits tend to have a shine to
                            them compared to wool and cotton suits, this can
                            make the suit look cheap. The texture of velvet is
                            luxurious and breathable. Velvet is a great choice
                            for dinner party jacket and can be worn all year
                            round.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shop Details Section End --> */}

      {/* <!-- Related Section Begin --> */}
      <section className="related spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="related-title">Related Product</h3>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </section>
      {/* <!-- Related Section End --> */}
    </>
  );
};

export default ShopDetails;
