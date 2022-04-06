import React from "react";
import CartProductCard from "./CartProductCard";

export const CartProducts = ({ cart }) => {
  return (
    <div className="cart-products col gap-1 items-center">
      {cart.data.map((product) => (
        <CartProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};
