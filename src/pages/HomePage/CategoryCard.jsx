import React from "react";
import { Link } from "react-router-dom";
const CategoryCard = ({ img, title, to = "/products" }) => {
  return (
    <div className="card w-48" id="category-card">
      <div className="card-header">
        <img src={img} alt={title} className=" h-40 w-full object-contain" />
      </div>
      <div className="card-bottom ">
        <div className="card-body">
          <div className="card-title text-left">{title}</div>
        </div>
        <div className="card-footer">
          <div className="row gap-1 items-center w-full ">
            <Link
              to={to + "?category=" + title.toLowerCase()}
              id="browse-more-btn"
              className=" btn btn-dark"
            >
              Browse More
            </Link>
            <button className=" btn-round-md bg-pink text-light">
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
