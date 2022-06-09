import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import NotAvailable from "../../components/NotAvailable";
import { useWishList } from "../../context/WishListContext";
import WishListProductCard from "./WishListProductCard";

const WishListSection = () => {
  const { wishList } = useWishList();
  return (
    <>
      <h1 className="text-2xl text-center pt-2">My Wishlist</h1>
      <section className="wishlist-section w-full h-full mt-2  mr-0 pr-0 row gap-2 justify-center ">
        {wishList.loading && <Loader />}
        <div className="wishlist-grid p-3 pt-0" id="center-grid">
          {!wishList.loading &&
            wishList.data.map((product) => (
              <WishListProductCard product={product} key={product._id} />
            ))}
          {!wishList.loading && wishList.data.length == 0 && (
            <NotAvailable
              title="Wishlist is empty"
              children={
                <Link to="/products" className="btn btn-secondary">
                  Browse Products
                </Link>
              }
            />
          )}
        </div>
      </section>
    </>
  );
};

export default WishListSection;
