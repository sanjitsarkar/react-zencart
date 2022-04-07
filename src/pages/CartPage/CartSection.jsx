import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import NotAvailable from "../../components/NotAvailable";
import { useCart } from "../../context/CartContext";
import CartPriceDetails from "./CartPriceDetails";
import { CartProducts } from "./CartProducts";

const CartSection = () => {
  const { cart } = useCart();

  return (
    <>
      <h1 className="text-2xl text-center pt-2">Shopping Cart</h1>
      <section className="cart-section w-full h-full  mt-3  mr-0 pr-0 row gap-2 row justify-center">
        {cart.data.length > 0 && (
          <>
            <CartProducts cart={cart} />
            <CartPriceDetails cart={cart} />
          </>
        )}
        {!cart.data.length && (
          <NotAvailable
            title="Cart is empty"
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

export default CartSection;
