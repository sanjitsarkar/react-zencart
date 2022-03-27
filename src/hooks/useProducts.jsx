import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState({
    laoding: true,
    data: [],
    error: "",
  });

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts({ loading: false, data: res.data.products, error: "" });
      })
      .catch((err) => {
        console.log(err);
        setProducts({ loading: false, data: [], error: err.message });
      });
  }, []);
  return [products, setProducts];
};

export default useProduct;
