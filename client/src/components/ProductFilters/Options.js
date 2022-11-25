import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFilterOptions } from "../../features/products/productSlice";

const Options = ({ option, name }) => {
  const dispatch = useDispatch();
  console.log("option");
  console.log(option);
  console.log(name);
  return (
    <div className="option">
      <p>{option.name}</p>
      <span onClick={() => dispatch(removeFilterOptions({ name }))}>
        {" "}
        <FaTimes />{" "}
      </span>
    </div>
  );
};

export default Options;
