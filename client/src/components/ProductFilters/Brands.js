import { useState, useEffect } from "react";

const Brands = ({ handleFilters }) => {
  const [brands, setBrands] = useState([]);

  // get brands from api
  const getBrands = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/brand/");
    const data = await response.json();
    setBrands(data);
  };

  // get brands from api
  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className="shop__sidebar__brand">
      <ul>
        {brands.map((brand) => (
          <li
            key={brand.id}
            onClick={() => handleFilters({ name: "brand", id: brand.id })}
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
