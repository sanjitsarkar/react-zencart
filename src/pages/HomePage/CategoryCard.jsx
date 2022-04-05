import React from "react";

const CategoryCard = ({ img, title, to = "/products" }) => {
  return (
    <div className="card w-48" id="category-card">
      <div className="card-header">
        <img src={img} alt={title} className="img h-40 w-full cover" />
      </div>
      <div className="card-bottom ">
        <div className="card-body">
          <div className="card-title text-left">{title}</div>
        </div>
        <div className="card-footer">
          <div className="row gap-1 items-center justify-start w-full ">
            <a href={to} id="browse-more-btn" className=" btn btn-dark">
              Browse More
            </a>
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
