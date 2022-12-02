import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../features/products/productActions";
import AdminProduct from "../../components/Admin/AdminProduct";

const ProductAdmin = () => {
  const { productsItems } = useSelector((state) => state.products);

  console.log("check render here check render here");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <main className="admin-main">
      <div className="content">
        <div className="col-12">
          <div className="title-box">
            <h5>Blogs</h5>
            <p className="text">List of blogs here</p>
          </div>
        </div>
        <div className="col-12">
          <div className="content">
            <div className="blog-view content-box">
              <div className="row blog-header mx-0">
                <div className="add">
                  <button className="button">Add Blog</button>
                </div>
                <form action="#/">
                  <p>Filters:</p>
                  <div className="form-group filter">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>Travel</option>
                      <option>Technology</option>
                      <option>Lifestyle</option>
                      <option>Company</option>
                    </select>
                  </div>
                  <div className="search-bar">
                    <input
                      type="text"
                      className="form-control"
                      id="usr"
                      placeholder="Search Blogs"
                    />
                    <span>
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                </form>
              </div>

              <div className="card-admin">
                <div className="row">
                  {productsItems.map((product) => (
                    <AdminProduct key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductAdmin;
