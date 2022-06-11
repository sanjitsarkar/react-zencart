import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import NotAvailable from "../../components/NotAvailable";
import ProductCard from "../ProductsPage/ProductCard";

export const SingleProductPage = () => {
  const { state: product } = useLocation();
  return (
    <>
      <Header />
      <div className="w-screen text-light h-screen grid place-content-center overflow-hidden ">
        {product ? (
          <div className="container relative t-4 p-4 w-full ">
            <ProductCard product={product} cardType="card-horizontal" />
          </div>
        ) : (
          <NotAvailable title="Product not found" />
        )}
      </div>
    </>
  );
};
