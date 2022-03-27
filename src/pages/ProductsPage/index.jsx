import React from "react";
import Layout from "../../components/Layout";
import FilterSection from "./FilterSection";
import ProductsGrid from "./ProductsGrid";
import "./ProductsPage.css";
const ProductsPage = () => {
  return (
    <Layout>
      <main className="container w-full row h-screen ">
        <FilterSection />
        <ProductsGrid />
      </main>
    </Layout>
  );
};

export default ProductsPage;
