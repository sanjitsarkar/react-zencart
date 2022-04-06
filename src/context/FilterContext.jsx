import React, { useEffect, useState, createContext, useContext } from "react";
import {
  ACTION_TYPE_FAILURE,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "../utils";
import { useProduct } from "./ProductsContext";
const initialState = {
  price: 12500,
  categories: [],
  brands: [],
  sortBy: "price",
};
const FiltersContext = createContext();
const FiltersProvider = ({ children }) => {
  const { setProducts, searchProducts, fetchProducts } = useProduct();
  const [filters, setFilters] = useState(initialState);
  const resetFilters = () => {
    setFilters(initialState);
    searchProducts();
  };
  const handleCategories = (e) => {
    !filters.categories.includes(e.target.value)
      ? setFilters((_filters) => {
          return {
            ..._filters,
            categories: [...filters.categories, e.target.value],
          };
        })
      : setFilters((_filters) => {
          return {
            ..._filters,
            categories: filters.categories.filter(
              (category) => category !== e.target.value
            ),
          };
        });
  };
  const handleBrands = (e) => {
    !filters.brands.includes(e.target.value)
      ? setFilters((_filters) => {
          return {
            ..._filters,
            brands: [...filters.brands, e.target.value],
          };
        })
      : setFilters((_filters) => {
          return {
            ..._filters,
            brands: filters.brands.filter(
              (brands) => brands !== e.target.value
            ),
          };
        });
  };
  useEffect(() => {
    setProducts({ type: ACTION_TYPE_LOADING, payload: [] });
    let fetchedProducts = [];
    fetchProducts()
      .then((res) => {
        fetchedProducts = res.data;
        let data = [];
        if (filters.brands.length) {
          data = fetchedProducts.filter(
            (product) =>
              filters.brands && filters.brands.includes(product.brand)
          );
          fetchedProducts = data;
        }
        if (filters.categories.length) {
          data = fetchedProducts.filter((product) => {
            return filters.categories.includes(product.categoryName);
          });
          fetchedProducts = data;
        }
        if (filters.price) {
          data = fetchedProducts.filter((product) => {
            return product.price <= filters.price;
          });
          fetchedProducts = data;
        }
        if (filters.rating) {
          data = fetchedProducts.filter((product) => {
            return product.rating >= filters.rating;
          });
          fetchedProducts = data;
        }

        if (filters.sortBy === "price") {
          fetchedProducts = fetchedProducts.sort((a, b) => a.price - b.price);
        } else if (filters.sortBy === "-price") {
          fetchedProducts = fetchedProducts.sort((a, b) => b.price - a.price);
        }
        setProducts({ type: ACTION_TYPE_SUCCESS, payload: fetchedProducts });
      })
      .catch((err) => {
        setProducts({ type: ACTION_TYPE_FAILURE, payload: err.message });
      });
  }, [filters]);
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        handleCategories,
        handleBrands,
        resetFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

const useFilter = () => useContext(FiltersContext);
export { useFilter, FiltersProvider };