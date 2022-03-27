import axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";
import { useProduct } from "./ProductsContext";
const FiltersContext = createContext();
const FiltersProvider = ({ children }) => {
  const [products, setProducts] = useProduct();
  const [filters, setFilters] = useState({
    price: 8000,
    categories: [],
    brands: [],
    rating: 4,
  });

  useEffect(() => {
    console.log("filter", filters);
    const _products = products.data.filter(
      (product) =>
        filters.brands.includes(product.brand) && filters.price <= product.price
    );
    setProducts({
      loading: false,
      data: _products,
      error: "",
    });
  }, [filters]);
  return (
    <FiltersContext.Provider value={[filters, setFilters]}>
      {children}
    </FiltersContext.Provider>
  );
};

const useFilter = () => useContext(FiltersContext);
export { useFilter, FiltersProvider };
