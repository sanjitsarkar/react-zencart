import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";
import {
  ACTION_TYPE_FAILURE,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "../utils";
import { useAuth } from "./AuthContext";
import { useToast } from "./ToastContext";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { setToast } = useToast();
  const { token, isLoggedIn } = useAuth();
  const [cart, dispatchCart] = useReducer(reducer, initialState);
  const addToCart = (product) => {
    dispatchCart({ type: ACTION_TYPE_LOADING });
    if (!isLoggedIn) {
      setToast({
        show: true,
        content: "Please login to add item to cart",
        type: "error",
      });
      return;
    }
    if (cart.data.find((item) => item._id === product._id)) {
      setToast({
        show: true,
        content: `Item already added to the cart`,
        type: "info",
      });
    } else {
      axios
        .post(
          "/api/user/cart",
          JSON.stringify({
            product,
          }),
          {
            headers: { authorization: token },
          }
        )
        .then((res) => {
          setToast({
            show: true,
            content: `Item added to cart`,
            type: "info",
          });
          dispatchCart({ type: ACTION_TYPE_SUCCESS, payload: res.data.cart });
        })
        .catch((err) => {
          dispatchCart({ type: ACTION_TYPE_FAILURE, payload: err.message });
        });
    }
  };
  const incrementQuantity = (id) => {
    axios
      .post(
        `/api/user/cart/${id}`,
        JSON.stringify({
          action: {
            type: "increment",
          },
        }),
        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        dispatchCart({ type: ACTION_TYPE_SUCCESS, payload: res.data.cart });
      })
      .catch((err) => {
        dispatchCart({ type: ACTION_TYPE_FAILURE, payload: err.message });
      });
  };
  const decrementQuantity = (id, quantity) => {
    if (quantity <= 1) {
      removeFromCart(id);
      return;
    }
    axios
      .post(
        `/api/user/cart/${id}`,
        JSON.stringify({
          action: {
            type: "decrement",
          },
        }),
        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        dispatchCart({ type: ACTION_TYPE_SUCCESS, payload: res.data.cart });
      })
      .catch((err) => {
        dispatchCart({ type: ACTION_TYPE_FAILURE, payload: err.message });
      });
  };
  const removeFromCart = (id) => {
    axios
      .delete(`/api/user/cart/${id}`, {
        headers: { authorization: token },
      })
      .then((res) => {
        setToast({
          show: true,
          content: `Item removed from cart`,
          type: "error",
        });
        dispatchCart({ type: ACTION_TYPE_SUCCESS, payload: res.data.cart });
      })
      .catch((err) => {
        dispatchCart({ type: ACTION_TYPE_FAILURE, payload: err.message });
      });
  };

  const clearCart = () => {
    cart.data.forEach((item) => {
      axios
        .delete(`/api/user/cart/${item._id}`, {
          headers: { authorization: token },
        })
        .then((res) => {
          setToast({
            show: true,
            content: `Item removed from cart`,
            type: "error",
          });
          dispatchCart({ type: ACTION_TYPE_SUCCESS, payload: res.data.cart });
        })
        .catch((err) => {
          dispatchCart({ type: ACTION_TYPE_FAILURE, payload: err.message });
        });
    });
  };

  useEffect(() => {
    dispatchCart({ type: ACTION_TYPE_LOADING });

    axios
      .get("/api/user/cart", {
        headers: { authorization: token },
      })
      .then((res) => {
        dispatchCart({ type: ACTION_TYPE_SUCCESS, payload: res.data.cart });
      })
      .catch((err) => {
        dispatchCart({ type: ACTION_TYPE_FAILURE, payload: err.message });
      });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart: dispatchCart,
        clearCart,
        addToCart,
        clearCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
