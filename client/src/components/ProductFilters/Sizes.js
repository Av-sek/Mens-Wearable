import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilters } from "../../features/products/productActions";
import { setSize } from "../../features/products/productSlice";

const Sizes = ({ handleFilters }) => {
  const dispatch = useDispatch();
  const { sizeItems } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getFilters("size"));
  }, [dispatch]);

  return (
    <div className="shop__sidebar__size">
      {sizeItems.length > 0 &&
        sizeItems.map((size) => {
          return (
            <div
              key={size.id}
              onClick={() =>
                dispatch(setSize({ id: size.id, name: size.size }))
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
