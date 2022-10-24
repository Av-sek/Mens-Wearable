import React from "react";

const Stars = ({ rating }) => {
  const getStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i className="fa fa-star" key={i}></i>);
      } else {
        stars.push(<i className="fa fa-star-o" key={i}></i>);
      }
    }
    return stars;
  };

  return (
    <>
      {getStars().map((star, index) => {
        return star;
      })}
    </>
  );
};

export default Stars;
