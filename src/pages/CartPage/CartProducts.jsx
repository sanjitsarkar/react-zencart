import React from "react";
import { AddressSection } from "../CheckoutPage/AddressSection";
import CartProductCard from "./CartProductCard";

export const CartProducts = ({ cart, type }) => {
  return (
    <>
      <div className="cart-products col gap-1 ">
        {type === "checkout" && <AddressSection />}
        {cart.data.map((product) => (
          <CartProductCard product={product} key={product._id} type={type} />
        ))}
      </div>
    </>
  );
};
