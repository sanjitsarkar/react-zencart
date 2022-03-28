import React from "react";
import { useCart } from "../../context/CartContext";

const CartProductCard = ({
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
  quantity,
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
    <div className="card card-horizontal card-dark">
      <div className="card-header">
        {/* <img src={images[0]} alt={name} className="object-contain" /> */}
      </div>
      <div className="card-bottom">
        <div className="card-body ">
          <h1 className="card-title">{name}</h1>
          <p className="card-description">{desc}</p>
        </div>
        <div className="card-footer">
          <div className="row items-center gap-05">
            <h4 className="o-70 font-semibold">Price</h4>
            <h4 className="text-md font-medium">₹ {price}</h4>
          </div>
          <div className="card-actions justify-between">
            <button
              className="btn btn-round-md btn-dark"
              onClick={() =>
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
              <i className="fa fa-add"></i>
            </button>
            {quantity}
            <button
              className=" btn-round-md btn btn-dark"
              onClick={() => decrementQuantity(_id)}
            >
              <i className="fa fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="row gap-1 items-center  p-1">
          <button
            className=" btn btn-round-md  btn-error"
            onClick={() => removeFromCart(_id)}
          >
            <i className="fa fa-trash"></i>
          </button>
          <button className=" btn btn-round-md  bg-pink">
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
