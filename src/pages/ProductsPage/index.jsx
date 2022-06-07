import React, { useState } from "react";
import Header from "../../components/Header";
import FilterSection from "./FilterSection";
import ProductsGrid from "./ProductsGrid";
import "./ProductsPage.css";
const ProductsPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <>
      <Header />
      <main className="container products-container w-full row  text-light">
        <FilterSection showFilter={showFilter} />
        <ProductsGrid toggleFilter={toggleFilter} />
      </main>
    </>
  );
};

export default ProductsPage;
