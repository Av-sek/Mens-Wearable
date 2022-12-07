import React from "react";

const AdminProduct = ({ product }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card">
        <img src={product.thumbnail} alt="" />
        <p className="title">Title - {product.name}</p>
        <p>Brand - {product.brand_name}</p>
        <p>Category - {product.category_name}</p>
        <p>Price - {product.price}</p>
        <p>Size - {product.product_size}</p>
        <p>Rating - {product.rating}</p>
        <p>
          Tag -
          {product.tags.map((tag) => (
            <span key={tag.id}> {tag.tag} </span>
          ))}
        </p>

        <div className="buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
