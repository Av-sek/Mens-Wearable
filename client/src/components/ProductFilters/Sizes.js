import { useState, useEffect } from "react";

const Sizes = ({ filterProducts }) => {
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  // get sizes from API
  const getSizes = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/size/");
    const data = await response.json();
    setSizes(data);
  };

  // get sizes from API
  useEffect(() => {
    getSizes();
  }, []);

  // filter products by size
  const filterSize = (id) => {
    // set selected size null if already selected
    if (id === selectedSize) {
      setSelectedSize(null);
      filterProducts({ size: null });
    }
    // set selected size and filter products
    else {
      setSelectedSize(id);
      filterProducts({ size: id });
    }
  };

  return (
    <div className="shop__sidebar__size">
      {sizes.map((size) => {
        return (
          <div
            key={size.id}
            className={`size ${size.id === selectedSize ? "active" : ""}`}
            onClick={() => filterSize(size.id)}
          >
            <label htmlFor="xs">{size.size}</label>
            <input type="radio" name="size" id={size.size} />
          </div>
        );
      })}
    </div>
  );
};

export default Sizes;
