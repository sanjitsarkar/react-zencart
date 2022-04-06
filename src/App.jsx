import MockmanEs from "mockman-js";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartPage, HomePage, ProductsPage, WishListPage } from "./pages";

function App() {
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
