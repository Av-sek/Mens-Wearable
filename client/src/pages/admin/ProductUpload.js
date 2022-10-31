import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductUpload = () => {
  const [description, setDescription] = useState("");

  const [colors, setColors] = useState([]);
  const [tags, setTags] = useState([]);

  const [currentColor, setCurrentColor] = useState("#000000");
  const [tag, setTag] = useState("");

  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [image, setImage] = useState();

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

  const addColor = (e) => {
    e.preventDefault();
    const hasColor = colors.find((color) => color === currentColor);
    if (hasColor) {
      return;
    }
    setColors([...colors, currentColor]);
  };

  const addTag = (tag) => {
    setTag(tag);
    const newTag = tag.slice(-1);
    if (newTag === ",") {
      const newTag = tag.slice(0, -1);
      const hasTag = tags.find((tag) => tag === newTag);
      if (hasTag) {
        return;
      }
      setTags([...tags, newTag]);
      setTag("");
    }
  };

  const addImage = (e) => {
    e.preventDefault();
    let fileUrl = URL.createObjectURL(image);
    setImageUrls([...imageUrls, fileUrl]);
  };

  const removeColor = (color) => {
    const newColors = colors.filter((c) => c !== color);
    setColors(newColors);
  };

  const removeTag = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
  };

  const removeImage = (image) => {
    const newImages = imageUrls.filter((i) => i !== image);
    setImageUrls(newImages);
  };

  return (
    <main className="admin-main">
      <div className="content">
        <div className="col-12">
          <div className="title-box">
            <h5>Product Upload</h5>
            <p className="text">Upload new products</p>
          </div>
        </div>
        <div className="col-12">
          <div className="form-element">
            <form action="#/">
              <div className="form-group">
                <label htmlFor="input-1">Name </label>
                <input type="text" id="input-1" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="input-1">Price </label>
                <input type="number" id="input-1" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="input-1">Size </label>
                <input type="text" id="input-1" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="input-1">Category </label>
                <input type="text" id="input-1" className="form-control" />
              </div>
              <div className="form-group tag-group">
                <label htmlFor="input-1">Tags </label>
                <div className="d-flex">
                  <input
                    placeholder="Enter tags and separate with comma"
                    type="text"
                    id="input-1"
                    className="form-control"
                    value={tag}
                    onChange={(e) => addTag(e.target.value)}
                  />
                </div>
                <div className="tags">
                  {tags.length > 0 &&
                    tags.map((tag, index) => (
                      <span className="tag" key={index}>
                        <i
                          className="fas fa-times"
                          onClick={() => removeTag(tag)}
                        ></i>
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
              <div className="form-group color-group">
                <label htmlFor="input-1">Color </label>
                <div className="d-flex">
                  <input
                    type="color"
                    id="input-1"
                    className="form-control"
                    onChange={(e) => {
                      setCurrentColor(e.target.value);
                    }}
                  />
                  <button className="add-item my-0 ml-3" onClick={addColor}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="colors">
                  {colors.length > 0 &&
                    colors.map((color, index) => (
                      <div
                        className="color"
                        style={{ backgroundColor: color }}
                        key={index}
                      >
                        <i
                          className="fas fa-times"
                          onClick={() => removeColor(color)}
                        ></i>
                      </div>
                    ))}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="input-1">Product Images </label>
                <div className="d-flex">
                  <input
                    type="file"
                    id="input-1"
                    className="form-control"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <button className="add-item my-0 ml-3" onClick={addImage}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="admin-images">
                  {imageUrls.length > 0 &&
                    imageUrls.map((image, index) => (
                      <div className="image" key={index}>
                        <img src={image} alt="" />
                        <i
                          className="fas fa-times"
                          onClick={() => removeImage(image)}
                        ></i>
                      </div>
                    ))}
                </div>
              </div>
              <div className="col-12 editor-column mb-3 px-0">
                <label>Product Description</label>
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={setDescription}
                  modules={modules}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductUpload;
