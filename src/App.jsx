import MockmanEs from "mockman-js";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { CartPage, HomePage, ProductsPage, WishListPage } from "./pages";

function App() {
  // const { cart } = useCart();
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/mockman" element={<MockmanEs />} />
    </Routes>
  );
}

export { App };
