import React from "react";
import { useCart } from "../../context/CartContext";
import RatingBar from "./RatingBar";

const ProductCard = ({
  _id,
  name,
  desc,
  images,
  categoryName,
  brand,
  ratings,
  price,
  discount,
  badge,
  inStock = true,
}) => {
  const {
    cart,
    setCart,
    addToCart,
    decrementQuantity,
    removeFromCart,
    clearCart,
  } = useCart();
  return (
    <div className="card  card-dark  bx-sh-light-3">
      {!inStock && <h1 className="outofstock">Out Of Stock</h1>}
      <div className="card-header">
        <img
          src={images[0]}
          alt={name}
          className="h-40 w-full object-contain"
        />
      </div>
      <div className="card-bottom">
        <div className="card-body">
          {badge != "" && (
            <div className="card-badge  bg-secondary">{badge}</div>
          )}

          <div className="card-title">{name}</div>
          <p className="card-description">{desc}</p>
        </div>
        <div className="card-footer">
          <div className="col">
            <div className="row items-center gap-05">
              <h4 className="o-70 font-semibold">Price</h4>
              <h4 className="text-md font-medium">
                <span className="line-through mr-1 text-sm o-90">
                  ₹ {price}
                </span>
                ₹{(price - price * (discount / 100)).toFixed(0)}
              </h4>
            </div>
            <div className="row items-center gap-025">
              <RatingBar ratings={parseInt(ratings)} />
              <h4 className="mr-1 text-sm o-90">{ratings}</h4>
            </div>
          </div>
          <div className="card-actions">
            <button
              className="btn btn-round-md btn-dark"
              onClick={() =>
                inStock &&
                addToCart({
                  _id,
                  name,
                  desc,
                  images,
                  categoryName,
                  brand,
                  ratings,
                  price,
                  discount,
                  badge,
                })
              }
            >
              <i className="fa fa-shopping-cart"></i>
            </button>
            <button className=" btn-round-md btn bg-light text-pink">
              <i className="fa fa-heart"></i>
            </button>
            <button className="btn btn-round-md  btn-primary">
              <i className="fa fa-share"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
