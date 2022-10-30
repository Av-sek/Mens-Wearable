import React from "react";

const ProductAdmin = () => {
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
                  <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                      <img
                        src="https://thumbs.dreamstime.com/b/working-home-laptop-woman-writing-blog-female-hands-keyboard-65929526.jpg"
                        alt=""
                      />
                      <p className="title">Title - Some title</p>
                      <p>Info - some info</p>
                      <p>Info - some info</p>
                      <p>Info - some info</p>
                      <div className="buttons">
                        <button>Edit</button>
                        <button>Delete</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                      <img src="img/face-1.png" alt="" />
                      <p className="title">Title - Some title</p>
                      <p>Info - some info</p>
                      <p>Info - some info</p>
                      <p>Info - some info</p>
                      <div className="buttons">
                        <button>Edit</button>
                        <button>Delete</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="card">
                      <img src="img/face-1.png" alt="" />
                      <p className="title">Title - Some title</p>
                      <p>Info - some info</p>
                      <p>Info - some info</p>
                      <p>Info - some info</p>
                      <div className="buttons">
                        <button>Edit</button>
                        <button>Delete</button>
                      </div>
                    </div>
                  </div>
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
