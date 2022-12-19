import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductUpload = () => {
  const productName = useRef();
  const productPrice = useRef();
  const productSize = useRef();
  const productCategory = useRef();
  const prodcutOverview = useRef();
  const productSale = useRef();

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

  const removeTag = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
  };

  const removeImage = (image) => {
    const newImages = imageUrls.filter((i) => i !== image);
    setImageUrls(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: productName.current?.value,
      price: productPrice.current?.value,
      size: productSize.current?.value,
      category: productCategory.current?.value,
      overview: prodcutOverview.current?.value,
      on_sale: productSale.current?.value,
      description: description,
      tags: tags,
      images: imageUrls,
    };
    console.log(product);
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
            <form>
              <div className="form-group">
                <label htmlFor="input-1">Name </label>
                <input
                  type="text"
                  id="input-1"
                  className="form-control"
                  ref={productName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="input-1">Price </label>
                <input
                  type="number"
                  id="input-1"
                  className="form-control"
                  ref={productPrice}
                />
              </div>
              <div className="form-group">
                <label htmlFor="input-1">Size </label>
                <input
                  type="text"
                  id="input-1"
                  className="form-control"
                  ref={productSize}
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="input-1" className="mr-3">
                  On sale{" "}
                </label>
                <input type="checkbox" id="input-1" ref={productSale} />
              </div>
              <div className="form-group">
                <label htmlFor="input-1">Category </label>
                <input
                  type="text"
                  id="input-1"
                  className="form-control"
                  ref={productCategory}
                />
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
              <div className="form-group">
                <label htmlFor="input-1">Overview </label>
                <textarea
                  id="input-1"
                  className="form-control"
                  ref={prodcutOverview}
                />
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
              <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductUpload;
