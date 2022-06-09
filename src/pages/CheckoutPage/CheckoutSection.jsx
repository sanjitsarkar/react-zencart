import React from "react";
import { Link } from "react-router-dom";
import NotAvailable from "../../components/NotAvailable";
import { useCart } from "../../context/CartContext";
import CartPriceDetails from "../CartPage/CartPriceDetails";
import { CartProducts } from "../CartPage/CartProducts";

const CheckoutSection = () => {
  const { cart } = useCart();

  return (
    <>
      <h1 className="text-2xl text-center pt-2">Checkout</h1>
      <section className="cart-section relative w-full h-full  mt-3  mr-0 pr-0 row gap-2 row justify-center">
        {cart.data.length > 0 && (
          <>
            <CartProducts cart={cart} type="checkout" />
            <CartPriceDetails cart={cart} type="checkout" />
          </>
        )}
        {!cart.data.length && (
          <NotAvailable
            title="Checkout is empty"
            children={
              <Link to="/products" className="btn btn-secondary">
                Browse Products
              </Link>
            }
          />
        )}
      </section>
    </>
  );
};

export default CheckoutSection;
