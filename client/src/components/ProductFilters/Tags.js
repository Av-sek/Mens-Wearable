import { useState, useEffect } from "react";

const Tags = ({ filterProducts }) => {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  // get tags from api

  const getTags = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/tags/");
    const data = await response.json();
    setTags(data);
  };

  // get tags from api

  useEffect(() => {
    getTags();
  }, []);

  // filter products by size

  const filterTag = (id) => {
    // set selected size null if already selected

    if (id === selectedTag) {
      setSelectedTag(null);
      filterProducts({ tags: null });
    }
    // set selected size and filter products
    else {
      setSelectedTag(id);
      filterProducts({ tags: id });
    }
  };

  return (
    <div className="shop__sidebar__tags">
      {tags.length > 0 &&
        tags.map((tag) => (
          <a
            key={tag.id}
            href="#/"
            className={`tag ${tag.id === selectedTag ? "active" : ""}`}
            onClick={() => filterTag(tag.id)}
          >
            {tag.tag}
          </a>
        ))}
    </div>
  );
};

export default Tags;
