import { useState, useEffect } from "react";

const Sizes = ({ handleFilters }) => {
  const [sizes, setSizes] = useState([]);

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

  return (
    <div className="shop__sidebar__size">
      {sizes.map((size) => {
        return (
          <div
            key={size.id}
            onClick={() =>
              handleFilters({ name: "size", id: size.id, label: size.size })
            }
            // className={`size ${size.id === selectedSize ? "active" : ""}`}
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
