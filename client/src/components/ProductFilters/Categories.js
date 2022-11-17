import React, { useEffect, useState } from "react";

const Categories = ({ filterProducts }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // get categories from api
  const getCategory = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/product_category/");
    const data = await response.json();
    setCategories(data);
  };

  // get categories from api
  useEffect(() => {
    getCategory();
  }, []);

  // filter products by size
  const filterCategory = (id) => {
    // set selected size null if already selected
    if (id === selectedCategory) {
      setSelectedCategory(null);
      filterProducts({ brand: null });
    }
    // set selected size and filter products
    else {
      setSelectedCategory(id);
      filterProducts({ brand: id });
    }
  };

  return (
    <div className="shop__sidebar__categories">
      <ul className="nice-scroll">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`category ${
              category.id === selectedCategory ? "active" : ""
            }`}
            onClick={() => filterCategory(category.id)}
          >
            <a href="#/">{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
