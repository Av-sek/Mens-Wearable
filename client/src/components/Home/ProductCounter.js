import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCounter = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countDown = () => {
    const now = new Date().getTime();
    const expiryTimee = new Date("Oct 25, 2022 00:00:00").getTime();
    const distance = expiryTimee - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setRemainingTime({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    setInterval(countDown, 1000);
  }, []);

  return (
    <section className="categories spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="categories__text">
              <h2>
                Clothings Hot <br /> <span>Shoe Collection</span> <br />{" "}
                Accessories
              </h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="categories__hot__deal">
              <img
                src={require("../../assets/img/product-sale.png")}
                alt=""
              ></img>
              <div className="hot__deal__sticker">
                <span>Sale Of</span>
                <h5>$29.99</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="categories__deal__countdown">
              <span>Deal Of The Week</span>
              <h2>Multi-pocket Chest Bag Black</h2>
              <div
                className="categories__deal__countdown__timer"
                id="countdown"
              >
                <div className="cd-item">
                  <span>{remainingTime.days}</span>
                  <p>Days</p>
                </div>
                <div className="cd-item">
                  <span>{remainingTime.hours}</span>
                  <p>Hours</p>
                </div>
                <div className="cd-item">
                  <span>{remainingTime.minutes}</span>
                  <p>Minutes</p>
                </div>
                <div className="cd-item">
                  <span>{remainingTime.seconds}</span>
                  <p>Seconds</p>
                </div>
              </div>
              <Link to="/shop" className="primary-btn">
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCounter;
