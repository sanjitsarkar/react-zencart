import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useToast } from "./ToastContext";
const initialState = {
  loading: true,
  data: [],
  error: "",
};
const WishListContext = createContext();
const WishListProvider = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [wishList, setWishList] = useState(initialState);
  const { setToast } = useToast();
  const toggleWishList = (product) => {
    if (!isLoggedIn) {
      setToast({
        show: true,
        content: "Please login to add item to wishlist",
        type: "warning",
      });
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
          setToast({
            show: true,
            content: `Item added to wishlist`,
            type: "info",
          });
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
        setToast({
          show: true,
          content: `Item removed from wishlist`,
          type: "error",
        });
        setWishList({ loading: false, data: res.data.wishlist, error: "" });
      })
      .catch((err) => {
        setWishList({ loading: false, data: [], error: err.message });
      });
  };
  const clearWishList = () => {
    setWishList([]);
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
        clearWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
const useWishList = () => useContext(WishListContext);
export { useWishList, WishListProvider };
