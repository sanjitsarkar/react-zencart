import MockmanEs from "mockman-js";
import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Toast from "./components/Toast";
import { useToast } from "./context/ToastContext";

import { CartPage, HomePage, ProductsPage, WishListPage } from "./pages";
import LoginPage from "./pages/AuthPage/LoginPage";
import SignupPage from "./pages/AuthPage/SignupPage";

function App() {
  const { toast } = useToast();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <WishListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route path="/mockman" element={<MockmanEs />} />
      </Routes>
      <Toast content={toast.content} type={toast.type} show={toast.show} />
    </>
  );
}

export { App };
