import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider } from "./context/AuthContext";
import { WishListProvider } from "./context/WishListContext";
import { ToastProvider } from "./context/ToastContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { FiltersProvider } from "./context/FilterContext";
import ScrollToTop from "./components/ScrollToTop";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ToastProvider>
        <ProductsProvider>
          <FiltersProvider>
            <AuthProvider>
              <CartProvider>
                <WishListProvider>
                  <App />
                </WishListProvider>
              </CartProvider>
            </AuthProvider>
          </FiltersProvider>
        </ProductsProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
