import React, { useEffect, useState, createContext, useContext } from "react";
import {
  ACTION_TYPE_FAILURE,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "../utils";
import { useProduct } from "./ProductsContext";
const initialState = {
  price: 5000,
  categories: [],
  brands: [],
  rating: 4,
  sortBy: "price",
};
const FiltersContext = createContext();
const FiltersProvider = ({ children }) => {
  const { setProducts, searchProducts, fetchProducts } = useProduct();
  const [filters, setFilters] = useState(initialState);

  const resetFilters = () => {
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
  // useEffect(() => {
  //   setProducts({ type: ACTION_TYPE_LOADING });
  //   let fetchedProducts = [];
  //   fetchProducts()
  //     .then((res) => {
  //       fetchedProducts = res.data.filter((product) => {
  //         if (filters.brands && filters.brands.includes(product.brand))
  //           return true;

  //         if (
  //           filters.categories &&
  //           filters.categories.includes(product.categoryName)
  //         )
  //           return true;
  //         if (filters.price && product.price <= filters.price) return true;
  //         if (filters.rating && product.rating >= filters.price) return true;
  //         return false;
  //       });
  //       if (filters.sortBy === "price") {
  //         fetchedProducts = fetchedProducts.sort((a, b) => a.price - b.price);
  //       } else if (filters.sortBy === "-price") {
  //         fetchedProducts = fetchedProducts.sort((a, b) => b.price - a.price);
  //       }
  //       console.log(fetchedProducts);
  //       setProducts({ type: ACTION_TYPE_SUCCESS, data: fetchedProducts });
  //     })
  //     .catch((err) => {
  //       setProducts({ type: ACTION_TYPE_FAILURE, payload: err.message });
  //     });
  // }, [filters]);
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
