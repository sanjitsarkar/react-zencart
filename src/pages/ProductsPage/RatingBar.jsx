import React from "react";

const RatingBar = ({ rating }) => {
  return (
    <div className="rating-bar">
      {[...Array(5)].map((_, i) => {
        if (i < rating)
          return <span className="fa fa-star rating-active" key={i}></span>;
        else return <span className="fa fa-star rating" key={i}></span>;
      })}
    </div>
  );
};

export default RatingBar;
