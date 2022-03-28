import React, { useState, createContext, useContext, useEffect } from "react";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((_cart) => {
      if (!_cart.find((item) => item._id === product._id)) {
        _cart.map(
          (item) =>
            item._id === product._id && { ...item, quantity: item.quantity + 1 }
        );
      } else {
        return { ...product, quantity: 1 };
      }
    });
  };
  const decrementQuantity = (id) => {
    setCart((_cart) =>
      _cart.map((item) => {
        item._id === id && { ...item, quantity: item.quantity - 1 };
      })
    );
  };
  const removeFromCart = (id) => {
    setCart((_cart) => _cart.filter((item) => item._id !== id));
  };
  const clearCart = () => {
    setCart([]);
  };
  useEffect(() => {
    setCart(() =>
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
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
