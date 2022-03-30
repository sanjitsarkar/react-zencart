import React, { useState } from "react";
import Header from "../../components/Header";
import { FiltersProvider } from "../../context/FilterContext";
import { ProductsProvider } from "../../context/ProductsContext";
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

      <main className="container w-full row h-screen text-light">
        <ToTopButton />
        <ProductsProvider>
          <FiltersProvider>
            <FilterSection showFilter={showFilter} />
            <ProductsGrid toggleFilter={toggleFilter} />
          </FiltersProvider>
        </ProductsProvider>
      </main>
    </>
  );
};

export default ProductsPage;
