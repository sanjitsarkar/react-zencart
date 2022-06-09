import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import ProductCard from "../ProductsPage/ProductCard";

export const SingleProductPage = () => {
  const { state: product } = useLocation();
  return (
    <>
      <Header />
      <div className="w-screen h-screen grid place-content-center overflow-hidden ">
        {product ? (
          <div className="container relative t-4 p-4 w-full ">
            <ProductCard product={product} cardType="card-horizontal" />
          </div>
        ) : (
          <h1>Product info is unavailable</h1>
        )}
      </div>
    </>
  );
};
