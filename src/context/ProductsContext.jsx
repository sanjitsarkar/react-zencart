import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";
import {
  ACTION_TYPE_FAILURE,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
  shuffle,
} from "../utils";
const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      return { loading: false, data: shuffle(res.data.products), error: "" };
    } catch (err) {
      return { loading: false, data: [], error: err.message };
    }
  };
  const searchProducts = () => {
    dispatch({ type: ACTION_TYPE_LOADING });
    axios
      .get("/api/products")
      .then((res) => {
        dispatch({
          type: ACTION_TYPE_SUCCESS,
          payload: shuffle(res.data.products),
        });
      })
      .catch((err) => {
        dispatch({
          type: ACTION_TYPE_FAILURE,
          payload: err.message,
        });
      });
  };
  useEffect(() => {
    searchProducts();
  }, []);
  return (
    <ProductsContext.Provider
      value={{
        products: state,
        setProducts: dispatch,
        searchProducts,
        fetchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProduct = () => useContext(ProductsContext);
export { useProduct, ProductsProvider };
