import React, { useEffect, useState } from "react";

import BlogItem from "../BlogItem";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const data = await fetch(
      "https://dummyjson.com/posts?limit=3&select=title"
    );
    const blogsData = await data.json();
    const blogPosts = blogsData.posts;
    setBlogs(blogPosts);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="latest spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Latest News</span>
              <h2>Fashion New Trends</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-6" key={blog.id}>
                <BlogItem blog={blog} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
