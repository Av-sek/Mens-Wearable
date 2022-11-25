import React from "react";
import Brands from "./Brands";
import Categories from "./Categories";
import Price from "./Price";
import Sizes from "./Sizes";
import Tags from "./Tags";

const FilterProducts = () => {
  return (
    <div className="shop__sidebar">
      <div className="shop__sidebar__search">
        <form action="#">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <span className="icon_search"></span>
          </button>
        </form>
      </div>
      <div className="shop__sidebar__accordion">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-heading">
              <a data-toggle="collapse" data-target="#collapseOne">
                Categories
              </a>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <Categories />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-heading">
              <a data-toggle="collapse" data-target="#collapseTwo">
                Branding
              </a>
            </div>
            <div
              id="collapseTwo"
              className="collapse show"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <Brands />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-heading">
              <a data-toggle="collapse" data-target="#collapseThree">
                Filter Price
              </a>
            </div>
            <div
              id="collapseThree"
              className="collapse show"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <Price />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-heading">
              <a data-toggle="collapse" data-target="#collapseFour">
                Size
              </a>
            </div>
            <div
              id="collapseFour"
              className="collapse show"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <Sizes />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-heading">
              <a data-toggle="collapse" data-target="#collapseSix">
                Tags
              </a>
            </div>
            <div
              id="collapseSix"
              className="collapse show"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
