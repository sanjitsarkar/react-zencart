import React from "react";
import Header from "../../components/Header";
import ToTopButton from "../../components/ToTopButton";
import WishListSection from "./WishListSection";
import "./WishListPage.css";
const WishListPage = () => {
  return (
    <>
      <Header />
      <main className="wishlist-wrapper h-full  l-0 r-0 w-full relative text-light">
        <ToTopButton />
        <WishListSection />
      </main>
    </>
  );
};

export default WishListPage;
