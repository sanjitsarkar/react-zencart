import React, { useEffect } from "react";
import Loader from "../../components/Loader";
import { useProduct } from "../../context/ProductsContext";

import ProductCard from "./ProductCard";

const ProductsGrid = ({ toggleFilter }) => {
  const { products, searchProducts } = useProduct();
  // useEffect(() => {
  //   console.log("pro", products);
  //   // if (products.data !== undefined && products.data.length === 0)
  //   // searchProducts();
  // }, [products]);
  return (
    <section className="products overflow-hidden overflow-y-auto ">
      <div className="row justify-between  mb-3 gap-05 w-full">
        <h1 className="text-xl font-md">Showing All Products</h1>
        <button
          className="filter-btn btn btn-primary w-auto"
          onClick={toggleFilter}
        >
          <i className="fa fa-filter"></i>
          <span>Filter</span>
        </button>
      </div>
      <div className="products-grid gap-1">
        {products.loading && <Loader />}
        {!products.loading &&
          products.data.length > 0 &&
          products.data.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        {!products.loading && !products.data.length && (
          <h4>No Products Available</h4>
        )}
      </div>
    </section>
  );
};

export default ProductsGrid;
