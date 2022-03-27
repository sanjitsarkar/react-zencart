import React from "react";
import Layout from "../../components/Layout";
import ToTopButton from "../../components/ToTopButton";
import BrandSection from "./BrandSection";
import CategorySection from "./CategorySection";
import HeroSection from "./HeroSection";
import "./HomePage.css";
const HomePage = () => {
  return (
    <Layout>
      <main className="h-full t-5 l-0 r-0 w-full relative">
        <ToTopButton />
        <HeroSection />
        <CategorySection />
        <BrandSection />
      </main>
    </Layout>
  );
};

export default HomePage;
