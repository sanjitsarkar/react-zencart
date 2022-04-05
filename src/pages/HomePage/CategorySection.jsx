import React from "react";
import Loader from "../../components/Loader";
import useCategory from "../../hooks/useCategory";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  const [categories] = useCategory({});

  return (
    <section className="section-category p-5  mr-0 pr-4 mt-0 pt-0">
      <h1 className="text-2xl mb-3 section-title">Shop By Category</h1>
<<<<<<< HEAD
      <div className="row gap-1 ">
        {categories.loading && <Loader />}
=======
      {categories.loading && <Loader />}
      <div className="category-grid gap-1 ">
>>>>>>> pages/cart
        {!categories.loading &&
          categories.data.length &&
          categories.data
            .slice(0, 6)
            .map((category) => (
              <CategoryCard
                img={category.img[0]}
                title={category.categoryName}
                key={category._id}
              />
            ))}
      </div>
    </section>
  );
};

export default CategorySection;
