import React from "react";

const BlogItem = ({ blog }) => {
  return (
    <div className="blog__item">
      <div
        className="blog__item__pic set-bg"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/blog/blog-1.jpg") + ")",
        }}
      ></div>
      <div className="blog__item__text">
        <span>
          <img src={require("../assets/img/icon/calendar.png")} alt=""></img> 16
          February 2020
        </span>
        <h5>{blog.title}</h5>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default BlogItem;
