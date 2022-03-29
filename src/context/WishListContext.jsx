import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
const WishListContext = createContext();
const WishListProvider = ({ children }) => {
  const { user, isLoggedIn, signUp, logIn, logOut } = useAuth();
  const [wishList, setWishList] = useState([]);
  const toggleWishList = (product) => {
    console.log("product", product);
    if (!isLoggedIn) {
      console.log("You need to login to add product to WishList");
      return;
    }
    if (wishList.find((item) => item._id === product._id)) {
      removeFromWishList(product._id);
    } else {
      axios
        .post(
          "/api/user/wishlist",
          JSON.stringify({
            product,
          }),
          {
            headers: { authorization: localStorage.getItem("token") },
          }
        )
        .then((res) => {
          setWishList(res.data.wishlist);
        })
        .catch((err) => {});
    }
  };

  const removeFromWishList = (id) => {
    axios
      .delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setWishList(res.data.wishlist);
      })
      .catch((err) => {});
  };
  const clearWishList = () => {
    setWishList([]);
  };
  const isAlreadyInWishList = (id) => {
    wishList.forEach((item) => {
      if (item._id === id) {
        return true;
      }
    });
    return false;
  };
  useEffect(() => {
    axios
      .get("/api/user/wishlist", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setWishList(res.data.wishlist);
      })
      .catch((err) => {});
  }, []);

  return (
    <WishListContext.Provider
      value={{
        wishList,
        setWishList,
        toggleWishList,
        isAlreadyInWishList,
        clearWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
const useWishList = () => useContext(WishListContext);
export { useWishList, WishListProvider };
