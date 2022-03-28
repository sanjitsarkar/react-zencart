import React, { useState } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import ToTopButton from "../../components/ToTopButton";
import { FiltersProvider } from "../../context/FilterContext";
import { ProductsProvider } from "../../context/ProductsContext";
import FilterSection from "./FilterSection";
import ProductsGrid from "./ProductsGrid";
import "./ProductsPage.css";
const ProductsPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => {
    console.log(showFilter);
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
