import React from "react";
import { useState, useEffect } from "react";

const Sizes = () => {
  const [sizes, setSizes] = useState([]);

  const getSizes = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/product_category/");
    const data = await response.json();
    console.log(data);
    setSizes(data);
  };

  useEffect(() => {
    getSizes();
  }, []);

  return (
    <div className="shop__sidebar__size">
      {sizes.map((size) => {
        return (
          <label htmlFor="xs" key={size.id}>
            {size.name}
            <input type="radio" id="xs" />
          </label>
        );
      })}
    </div>
  );
};

export default Sizes;
