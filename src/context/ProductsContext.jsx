import axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";
const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({
    loading: true,
    data: [],
    error: "",
  });
  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      return { loading: false, data: res.data.products, error: "" };
    } catch (err) {
      console.log(err);
      return { loading: false, data: [], error: err.message };
    }
  };
  const searchProducts = () => {
    axios
      .get("/api/products")
      .then((res) => {
        setProducts({ loading: false, data: res.data.products, error: "" });
      })
      .catch((err) => {
        console.log(err);
        setProducts({ loading: false, data: [], error: err.message });
      });
  };
  useEffect(() => {
    searchProducts();
  }, []);
  return (
    <ProductsContext.Provider
      value={[products, setProducts, searchProducts, fetchProducts]}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProduct = () => useContext(ProductsContext);
export { useProduct, ProductsProvider };
