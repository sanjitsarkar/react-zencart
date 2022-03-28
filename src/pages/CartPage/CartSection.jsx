import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import CartPriceDetails from "./CartPriceDetails";
import { CartProducts } from "./CartProducts";

const CartSection = () => {
  const { cart } = useCart();

  return (
    <>
      <h1 className="text-2xl text-center pt-2">Shopping Cart</h1>
      <section className="cart-section w-full h-full  mt-3  mr-0 pr-0 row gap-2 row justify-center">
        {!cart.length && <h2>Cart is empty</h2>}
        {cart.length > 0 && (
          <>
            <CartProducts cart={cart} />
            <CartPriceDetails cart={cart} />
          </>
        )}
      </section>
    </>
  );
};

export default CartSection;
