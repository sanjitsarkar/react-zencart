import React from "react";
import { useCart } from "../../context/CartContext";

const CartProductCard = ({ product }) => {
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
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-contain"
        />
      </div>
      <div className="card-bottom">
        <div className="card-body ">
          <h1 className="card-title">{product.name}</h1>
          <p className="card-description">{product.desc}</p>
        </div>
        <div className="card-footer">
          <div className="row items-center gap-05">
            <h4 className="o-70 font-semibold">Price</h4>
            <h4 className="text-md font-medium">₹ {product.price}</h4>
          </div>
          <div className="card-actions justify-between">
            <button
              className="btn btn-round-md btn-dark"
              onClick={() => addToCart(product)}
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
          </div>
        </div>
        <div className="row gap-1 items-center  p-1">
          <button
            className=" btn btn-round-md  btn-error"
            onClick={() => removeFromCart(product._id)}
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
