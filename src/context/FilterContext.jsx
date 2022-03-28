import axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";
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
  const { products, setProducts, searchProducts, fetchProducts } = useProduct();
  const [filters, setFilters] = useState(initialState);

  const resetFilters = () => {
    searchProducts();
  };
  const handleCategories = (e) => {
    console.log("VALUE", e.target.value);
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
  useEffect(async () => {
    const fetchedProducts = await fetchProducts();
    const _products = fetchedProducts.data.filter(
      (product) =>
        filters.categories.length &&
        filters.categories.includes(product.categoryName)
    );
    setProducts({
      loading: false,
      data: _products,
      error: "",
    });
    // console.log("pro", _products);
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
