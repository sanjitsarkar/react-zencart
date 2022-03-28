import React from "react";

const RatingBar = ({ ratings }) => {
  return (
    <div class="rating-bar">
      {[...Array(5)].map((_, i) => {
        if (i < ratings)
          return <span className="fa fa-star rating-active"></span>;
        else return <span className="fa fa-star rating"></span>;
      })}
    </div>
  );
};

export default RatingBar;
