import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Price = () => {
  return (
    <div className="shop__sidebar__price">
      <RangeSlider min={0} max={1000} step={100} />
      {/* <ul>
        <li>
          <a href="#">$0.00 - $50.00</a>
        </li>
        <li>
          <a href="#">$50.00 - $100.00</a>
        </li>
        <li>
          <a href="#">$100.00 - $150.00</a>
        </li>
        <li>
          <a href="#">$150.00 - $200.00</a>
        </li>
        <li>
          <a href="#">$200.00 - $250.00</a>
        </li>
        <li>
          <a href="#">250.00+</a>
        </li>
      </ul> */}
    </div>
  );
};

export default Price;
