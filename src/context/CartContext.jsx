import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useToast } from "./ToastContext";
const CartContext = createContext();
const initialState = {
  loading: true,
  data: [],
  error: "",
};
const CartProvider = ({ children }) => {
  const { setToast } = useToast();
  const { token, isLoggedIn } = useAuth();
  const [cart, setCart] = useState(initialState);
  const addToCart = (product) => {
    if (!isLoggedIn) {
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
          setCart({ loading: false, data: res.data.cart, error: "" });
        })
        .catch((err) => {
          setCart({ loading: false, data: [], error: err.message });
        });
    }
  };
  const incrementQuanity = (id) => {
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
        setCart({ loading: false, data: res.data.cart, error: "" });
      })
      .catch((err) => {
        setCart({ loading: false, data: [], error: err.message });
      });
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
          headers: { authorization: token },
        }
      )
      .then((res) => {
        setCart({ loading: false, data: res.data.cart, error: "" });
      })
      .catch((err) => {
        setCart({ loading: false, data: [], error: err.message });
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
        setCart({ loading: false, data: res.data.cart, error: "" });
      })
      .catch((err) => {
        setCart({ loading: false, data: [], error: err.message });
      });
  };
  const clearCart = () => {
    setCart([]);
  };
  useEffect(() => {
    axios
      .get("/api/user/cart", {
        headers: { authorization: token },
      })
      .then((res) => {
        setCart({ loading: false, data: res.data.cart, error: "" });
      })
      .catch((err) => {
        setCart({ loading: false, data: [], error: err.message });
      });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        incrementQuanity,
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
