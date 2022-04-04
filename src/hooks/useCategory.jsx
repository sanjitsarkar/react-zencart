import axios from "axios";
import { useEffect, useState } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState({
    loading: true,
    data: [],
    error: "",
  });

  useEffect(() => {
    axios
      .get("/api/categories")
      .then((res) => {
        setCategories({ loading: false, data: res.data.categories, error: "" });
      })
      .catch((err) => {
        setCategories({ loading: false, data: [], error: err.message });
      });
  }, []);
  return [categories, setCategories];
};

export default useCategory;
