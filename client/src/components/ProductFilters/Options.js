import React from "react";
import { FaTimes } from "react-icons/fa";

const Options = ({ option, setFilterOptions, handleFilters }) => {
  const handleOptions = (option) => {
    console.log("option " + option);
    handleFilters({ name: option, removeFilter: true });
  };

  return (
    <div className="option">
      <p>{option}</p>
      <span onClick={() => handleOptions(option)}>
        {" "}
        <FaTimes />{" "}
      </span>
    </div>
  );
};

export default Options;
