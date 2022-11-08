import { useState, useEffect } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  const getBrands = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/brand/");
    const data = await response.json();
    console.log(data);
    setBrands(data);
  };

  useEffect(() => {
    getBrands();
  }, []);
  return (
    <div className="shop__sidebar__brand">
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            <a href="#">{brand.name}</a>
          </li>
        ))}
        <li>
          <a href="#">Chanel</a>
        </li>
        <li>
          <a href="#">Hermes</a>
        </li>
        <li>
          <a href="#">Gucci</a>
        </li>
      </ul>
    </div>
  );
};

export default Brands;
