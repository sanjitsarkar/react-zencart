import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const { user, isLoggedIn, signUp, logIn, logOut } = useAuth();
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    console.log("product", product);
    if (!isLoggedIn) {
      console.log("You need to login to add product to cart");
      return;
    }
    if (cart.find((item) => item._id === product._id)) {
      axios
        .post(
          `/api/user/cart/${product._id}`,
          JSON.stringify({
            action: {
              type: "increment",
            },
          }),
          {
            headers: { authorization: localStorage.getItem("token") },
          }
        )
        .then((res) => {
          setCart(res.data.cart);
        })
        .catch((err) => {});
    } else {
      axios
        .post(
          "/api/user/cart",
          JSON.stringify({
            product,
          }),
          {
            headers: { authorization: localStorage.getItem("token") },
          }
        )
        .then((res) => {
          setCart(res.data.cart);
        })
        .catch((err) => {});
    }
  };
  const decrementQuantity = (id, quantity) => {
    if (quantity === 1) {
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
          headers: { authorization: localStorage.getItem("token") },
        }
      )
      .then((res) => {
        setCart(res.data.cart);
      })
      .catch((err) => {});
  };
  const removeFromCart = (id) => {
    axios
      .delete(`/api/user/cart/${id}`, {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setCart(res.data.cart);
      })
      .catch((err) => {});
  };
  const clearCart = () => {
    setCart([]);
  };
  useEffect(() => {
    axios
      .get("/api/user/cart", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setCart(res.data.cart);
      })
      .catch((err) => {});
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        decrementQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };