import React, { useState } from "react";
import { Link } from "react-router-dom";
import NotAvailable from "../../components/NotAvailable";
import { useCart } from "../../context/CartContext";
import CartPriceDetails from "../CartPage/CartPriceDetails";
import { CartProducts } from "../CartPage/CartProducts";

const CheckoutSection = () => {
  const { cart } = useCart();
  const [IsPaymentSuccessfull, setIsPaymentSuccessfull] = useState(false);

  return (
    <>
      <h1 className="text-2xl text-center ">Checkout</h1>
      <section className="cart-section relative w-full h-full  mt-3  mr-0 pr-0 row gap-2 row justify-center">
        {cart.data.length > 0 && !IsPaymentSuccessfull ? (
          <>
            <CartProducts cart={cart} type="checkout" />
            <CartPriceDetails
              cart={cart}
              type="checkout"
              IsPaymentSuccessfull={IsPaymentSuccessfull}
              setIsPaymentSuccessfull={setIsPaymentSuccessfull}
            />
          </>
        ) : (
          <NotAvailable
            title="Checkout is empty"
            children={
              <Link to="/products" className="btn btn-secondary">
                Browse Products
              </Link>
            }
          />
        )}
        {IsPaymentSuccessfull && (
          <div className="col gap-1 items-center">
            <div className="row gap-1 items-center">
              <i className="fa fa-check text-white text-xl bg-primary w-10 h-10 grid place-items-center img-rounded"></i>
              <h3>Your order has been placed successfully</h3>
            </div>
            <Link to="/products" className="btn btn-secondary">
              Shop More
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default CheckoutSection;
