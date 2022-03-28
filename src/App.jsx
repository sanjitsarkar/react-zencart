import MockmanEs from "mockman-js";
import React, { useEffect } from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./context/AuthContext";
import { useCart } from "./context/CartContext";
import { CartPage, HomePage, ProductsPage, WishListPage } from "./pages";
import LoginPage from "./pages/AuthPage/LoginPage";
import SignupPage from "./pages/AuthPage/SignupPage";

function App() {
  // const { cart } = useCart();
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);
  const { user, isLoggedIn, signUp, logIn, logOut } = useAuth();

  return (
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
  );
}

export { App };
