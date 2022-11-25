import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getFilters,
  filterProducts,
} from "../../features/products/productActions";
import { setTags } from "../../features/products/productSlice";

const Tags = () => {
  const dispatch = useDispatch();
  const { tagItems } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getFilters("tags"));
  }, [dispatch]);

  return (
    <div className="shop__sidebar__tags">
      {tagItems.length > 0 &&
        tagItems.map((tag) => (
          <div
            key={tag.id}
            onClick={() => dispatch(setTags({ id: tag.id, name: tag.tag }))}
            // className={`tag ${tag.id === selectedTag ? "active" : ""}`}
            className="tag"
          >
            {tag.tag}
          </div>
        ))}
    </div>
  );
};

export default Tags;
