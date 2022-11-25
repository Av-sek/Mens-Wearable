import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getFilters } from "../../features/products/productActions";
import { setBrand } from "../../features/products/productSlice";

const Brands = ({ handleFilters }) => {
  const dispatch = useDispatch();
  const { brandItems } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getFilters("brand"));
  }, [dispatch]);

  return (
    <div className="shop__sidebar__brand">
      <ul>
        {brandItems.length > 0 &&
          brandItems.map((brand) => (
            <li
              key={brand.id}
              onClick={() =>
                dispatch(setBrand({ id: brand.id, name: brand.name }))
              }
              // className={`brand ${brand.id === selectedBrand ? "active" : ""}`}
            >
              <p>{brand.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Brands;
