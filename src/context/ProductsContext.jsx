import axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";
const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({
    loading: true,
    data: [],
    error: "",
  });

  //   const searchProducts = async (filters) => {
  //     axios
  //       .get("/api/products")
  //       .then((res) => {
  //         // console.log(res.data.products);
  //         setProducts({ loading: false, data: res.data.products, error: "" });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setProducts({ loading: false, data: [], error: err.message });
  //       });
  //   };
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        // console.log(res.data.products);
        setProducts({ loading: false, data: res.data.products, error: "" });
      })
      .catch((err) => {
        console.log(err);
        setProducts({ loading: false, data: [], error: err.message });
      });
  }, []);
  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProduct = () => useContext(ProductsContext);
export { useProduct, ProductsProvider };
