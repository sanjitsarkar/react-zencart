import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishList } from "../../context/WishListContext";

const CartProductCard = ({ product }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();
  const { wishList, toggleWishList } = useWishList();
  const [isInWishList, setIsInWishList] = useState(false);
  useEffect(() => {
    wishList.data.forEach((element) => {
      if (element._id == product._id) setIsInWishList(() => true);
    });
  }, []);
  return (
    <div className="cart-product-card card card-horizontal card-dark">
      <Link to={`/products/${product._id}`}>
        <div className="card-header">
          <img
            src={product.images[0]}
            alt={product.name}
            id="cart-image"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="card-bottom">
        <Link to={`/products/${product._id}`}>
          <div className="card-body ">
            <h1 className="card-title">{product.name}</h1>
            <p className="card-description">{product.desc}</p>
          </div>
        </Link>

        <div className="card-footer">
          <div className="row items-center gap-05">
            <h4 className="o-70 font-semibold">Price</h4>
            <h4 className="text-md font-medium">₹ {product.price}</h4>
          </div>
          <div className="card-actions justify-between">
            <button
              className="btn btn-round-md btn-dark"
              onClick={() => incrementQuantity(product._id)}
            >
              <i className="fa fa-add"></i>
            </button>
            {product.qty}
            <button
              className=" btn-round-md btn btn-dark"
              onClick={() => decrementQuantity(product._id, product.qty)}
            >
              <i className="fa fa-minus"></i>
            </button>

            <button
              className=" btn btn-round-md  btn-error"
              onClick={() => removeFromCart(product._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
            <button
              className={` btn-round-md btn ${
                isInWishList ? "bg-pink text-light" : "bg-light text-pink"
              }`}
              onClick={() => {
                setIsInWishList(() => !isInWishList);
                toggleWishList({
                  ...product,
                });
              }}
            >
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
