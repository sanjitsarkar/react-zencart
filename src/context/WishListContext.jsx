import axios from "axios";
import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { initialState, reducer } from "../reducers/reducer";
import {
  ACTION_TYPE_FAILURE,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "../utils";
import { useAuth } from "./AuthContext";
import { useToast } from "./ToastContext";

const WishListContext = createContext();
const WishListProvider = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [wishList, dispatchWishList] = useReducer(reducer, initialState);
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
          dispatchWishList({
            type: ACTION_TYPE_SUCCESS,
            payload: res.data.wishlist,
          });
        })
        .catch((err) => {
          dispatchWishList({ type: ACTION_TYPE_FAILURE, payload: err.message });
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
        dispatchWishList({
          type: ACTION_TYPE_SUCCESS,
          payload: res.data.wishlist,
        });
      })
      .catch((err) => {
        dispatchWishList({ type: ACTION_TYPE_FAILURE, payload: err.message });
      });
  };
  const clearWishList = () => {
    dispatchWishList([]);
  };

  useEffect(() => {
    dispatchWishList({ type: ACTION_TYPE_LOADING });

    axios
      .get("/api/user/wishlist", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        dispatchWishList({
          type: ACTION_TYPE_SUCCESS,
          payload: res.data.wishlist,
        });
      })
      .catch((err) => {
        dispatchWishList({ type: ACTION_TYPE_FAILURE, payload: err.message });
      });
  }, []);

  return (
    <WishListContext.Provider
      value={{
        wishList,
        setWishList: dispatchWishList,
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
