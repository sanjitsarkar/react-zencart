import React from "react";
import { useWishList } from "../../context/WishListContext";
import WishListProductCard from "./WishListProductCard";

const WishListSection = () => {
  const { wishList } = useWishList();
  return (
    <>
      <h1 className="text-2xl text-center pt-2">My Wishlist</h1>
      <section className="wishlist-section w-full h-full mt-2  mr-0 pr-0 row gap-2 justify-center ">
        <div className="wishlist-grid  p-3 pt-0">
          {wishList.map((product) => (
            <WishListProductCard product={product} key={product._id} />
          ))}
          {wishList.length == 0 && <h2>Wishlist is empty</h2>}
        </div>
      </section>
    </>
  );
};

export default WishListSection;
