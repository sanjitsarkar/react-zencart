import React from "react";
import Header from "../../components/Header";
import CartSection from "./CartSection";
import "./CartPage.css";
import ToTopButton from "../../components/ToTopButton";
const CartPage = () => {
  return (
    <>
      <Header />
      <main className="cart-wrapper h-full l-0 r-0 w-full relative text-light">
        <ToTopButton />
        <CartSection />
      </main>
    </>
  );
};

export default CartPage;
