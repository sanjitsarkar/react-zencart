import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { AddressProvider } from "./context/AddressContext";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { FiltersProvider } from "./context/FilterContext";
import { ProductsProvider } from "./context/ProductsContext";
import { ToastProvider } from "./context/ToastContext";
import { WishListProvider } from "./context/WishListContext";
import "./index.css";
import { makeServer } from "./server";

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
                  <AddressProvider>
                    <App />
                  </AddressProvider>
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
