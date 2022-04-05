import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
<<<<<<< HEAD
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
=======
import { ProductsProvider } from "./context/ProductsContext";
import { FiltersProvider } from "./context/FilterContext";
>>>>>>> pages/products

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <ToastProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ToastProvider>
=======
      <ProductsProvider>
        <FiltersProvider>
          <App />
        </FiltersProvider>
      </ProductsProvider>
>>>>>>> pages/products
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
