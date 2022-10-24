import React, { useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const data = await fetch(
      "https://dummyjson.com/posts?limit=9&select=title"
    );
    const blogsData = await data.json();
    const blogPosts = blogsData.posts;
    setBlogs(blogPosts);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      {/* <!-- Breadcrumb Section Begin --> */}
      <section
        className="breadcrumb-blog set-bg"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/breadcrumb-bg.jpg") + ")",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Blog Section Begin --> */}
      <section className="blog spad">
        <div className="container">
          <div className="row">
            {blogs.map((blog) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-6" key={blog.id}>
                  <BlogItem blog={blog} key={blog.id} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- Blog Section End --> */}
    </>
  );
};

export default Blogs;
