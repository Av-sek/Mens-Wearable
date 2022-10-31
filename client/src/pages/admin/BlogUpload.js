import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogUpload = () => {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["bold", "italic", "underline"], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["image", "video"],
      ["clean"], // remove formatting button
    ],
  };
  return (
    <main className="admin-main">
      <div className="content">
        <div className="col-12">
          <div className="title-box">
            <h5>Blog Create</h5>
            <p className="text">Create a blog for your website</p>
          </div>
        </div>
        <div className="col-12">
          <div className="form-element">
            <form action="">
              <div className="element-title">
                <h5>Full Form</h5>
                <hr />
              </div>
              <div className="form-row">
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="input-1">Title </label>
                    <input
                      type="text"
                      id="input-1"
                      className="form-control"
                      placeholder="Blog Title"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="input-1">Tags </label>
                    <input
                      type="text"
                      id="input-1"
                      className="form-control"
                      placeholder="Separate with commas"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="sel1">Category</label>
                    <select className="form-control" id="sel1">
                      <option>Tech</option>
                      <option>Food</option>
                      <option>Biology</option>
                      <option>Physics</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="input-1">Featured Image</label>
                    <label className="__lk-fileInput">
                      <span data-default="Choose file">Featured Image</span>
                      <input type="file" name="photo" accept=".jpg, .png" />
                    </label>
                  </div>
                </div>

                <div className="col-12 editor-column mb-3">
                  <label>Content</label>
                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    modules={modules}
                  />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogUpload;
