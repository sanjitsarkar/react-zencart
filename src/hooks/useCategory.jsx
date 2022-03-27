import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState({
    laoding: true,
    data: [],
    error: "",
  });

  useEffect(() => {
    axios
      .get("/api/categories")
      .then((res) => {
        console.log(res.data.categories);
        setCategories({ loading: false, data: res.data.categories, error: "" });
      })
      .catch((err) => {
        console.log(err);
        setCategories({ loading: false, data: [], error: err.message });
      });
  }, []);
  return [categories, setCategories];
};

export default useCategory;
