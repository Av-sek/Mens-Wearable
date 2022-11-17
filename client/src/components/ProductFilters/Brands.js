import { useState, useEffect } from "react";

const Brands = ({ filterProducts }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

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

  // filter products by size
  const filterBrand = (id) => {
    // set selected size null if already selected
    if (id === selectedBrand) {
      setSelectedBrand(null);
      filterProducts({ brand: null });
    }
    // set selected size and filter products
    else {
      setSelectedBrand(id);
      filterProducts({ brand: id });
    }
  };

  return (
    <div className="shop__sidebar__brand">
      <ul>
        {brands.map((brand) => (
          <li
            key={brand.id}
            className={`brand ${brand.id === selectedBrand ? "active" : ""}`}
          >
            <a href="#/" onClick={() => filterBrand(brand.id)}>
              {brand.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brands;
