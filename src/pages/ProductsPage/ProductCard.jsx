import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useWishList } from "../../context/WishListContext";
import RatingBar from "./RatingBar";

const ProductCard = ({ product }) => {
  const { cart, addToCart } = useCart();
  const { wishList, toggleWishList } = useWishList();
  const { isLoggedIn } = useAuth();
  const [isInWishList, setIsInWishList] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    wishList.data.forEach((element) => {
      if (element._id == product._id) setIsInWishList(() => true);
    });
    cart.data.forEach((element) => {
      if (element._id == product._id) setIsInCart(() => true);
    });
  }, []);
  return (
    <div className="card  card-dark  bx-sh-light-3" id="product-card">
      {!product.inStock && <h1 className="outofstock">Out Of Stock</h1>}
      <div className="card-header">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-40 w-full object-cover"
        />
      </div>
      <div className="card-bottom">
        <div className="card-body">
          {product.badge != "" && (
            <div className="card-badge  bg-secondary">{product.badge}</div>
          )}

          <div className="card-title">{product.name}</div>
          <p className="card-description">{product.desc}</p>
        </div>
        <div className="card-footer">
          <div className="col">
            <div className="row items-center gap-05">
              <h4 className="o-70 font-semibold">Price</h4>
              <h4 className="text-md font-medium">
                <span className="line-through mr-1 text-sm o-90">
                  ₹ {product.price}
                </span>
                ₹
                {(
                  product.price -
                  product.price * (product.discount / 100)
                ).toFixed(0)}
              </h4>
            </div>
            <div className="row items-center gap-025">
              <RatingBar rating={parseInt(product.rating)} />
              <h4 className="mr-1 text-sm o-90">{product.rating}</h4>
            </div>
          </div>
          <div className="card-actions">
            <button
              className={`btn btn-round-md ${
                isLoggedIn && !isInCart ? "btn-light" : "btn-dark"
              }`}
              onClick={() => {
                isLoggedIn && setIsInCart(true);
                product.inStock &&
                  addToCart({
                    ...product,
                  });
              }}
            >
              <i className="fa fa-shopping-cart"></i>
            </button>
            <button
              className={` btn-round-md btn ${
                isLoggedIn && isInWishList
                  ? "bg-pink text-light"
                  : "bg-light text-pink"
              }`}
              onClick={() => {
                isLoggedIn && setIsInWishList(() => !isInWishList);
                toggleWishList({
                  ...product,
                });
              }}
            >
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
