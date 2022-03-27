import React from "react";
import Loader from "../../components/Loader";
import { useProduct } from "../../context/ProductsContext";

import ProductCard from "./ProductCard";

const ProductsGrid = ({ toggleFilter }) => {
  const [products] = useProduct();

  return (
    <section className="products overflow-hidden overflow-y-auto ">
      <div className="row justify-between  mb-3 gap-05 w-full">
        <h1 className="text-xl font-md">Showing All Products</h1>
        <button className="filter-btn btn btn-primary" onClick={toggleFilter}>
          <i className="fa fa-filter"></i>
          <span>Filter</span>
        </button>
      </div>
      <div className="products-grid gap-1">
        {products.loading && <Loader />}
        {products.data.length ? (
          products.data.map((product) => (
            <ProductCard {...product} key={product._id} />
          ))
        ) : (
          <h1>No Products Available</h1>
        )}
      </div>
    </section>
  );
};

export default ProductsGrid;
