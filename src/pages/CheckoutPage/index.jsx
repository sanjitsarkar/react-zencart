import React from "react";
import Header from "../../components/Header";
import ToTopButton from "../../components/ToTopButton";
import "../CartPage/CartPage.css";
import CheckoutSection from "./CheckoutSection";
export const CheckoutPage = () => {
  return (
    <>
      <Header />
      <main className="cart-wrapper h-full l-0 r-0 w-full relative text-light">
        <ToTopButton />
        <CheckoutSection />
      </main>
    </>
  );
};
