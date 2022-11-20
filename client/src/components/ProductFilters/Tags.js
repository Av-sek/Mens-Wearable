import { useState, useEffect } from "react";

const Tags = ({ handleFilters }) => {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  // get tags from api
  const getTags = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/tags/");
    console.log("check tag response");
    const data = await response.json();
    setTags(data);
  };

  // get tags from api
  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="shop__sidebar__tags">
      {tags.length > 0 &&
        tags.map((tag) => (
          <div
            key={tag.id}
            onClick={() => handleFilters({ name: "tags", id: tag.id })}
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
