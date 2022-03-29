import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
const initialState = {
  loading: true,
  data: [],
  error: "",
};
const WishListContext = createContext();
const WishListProvider = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [wishList, setWishList] = useState(initialState);
  const toggleWishList = (product) => {
    if (!isLoggedIn) {
      return;
    }
    if (wishList.data.find((item) => item._id === product._id)) {
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
          setWishList({ loading: false, data: res.data.wishlist, error: "" });
        })
        .catch((err) => {
          setWishList({ loading: false, data: [], error: err.message });
        });
    }
  };

  const removeFromWishList = (id) => {
    axios
      .delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setWishList({ loading: false, data: res.data.wishlist, error: "" });
      })
      .catch((err) => {
        setWishList({ loading: false, data: [], error: err.message });
      });
  };
  const clearWishList = () => {
    setWishList([]);
  };
  const isAlreadyInWishList = (id) => {
    wishList.data.forEach((item) => {
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
        setWishList({ loading: false, data: res.data.wishlist, error: "" });
      })
      .catch((err) => {
        setWishList({ loading: false, data: [], error: err.message });
      });
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
