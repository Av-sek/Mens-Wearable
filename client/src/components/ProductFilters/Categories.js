import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/product_category/");
    const data = await response.json();
    console.log(data);
    setCategories(data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="shop__sidebar__categories">
      <ul className="nice-scroll">
        {categories.map((category) => (
          <li key={category.id}>
            <a href="#">{category.name} (20)</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
