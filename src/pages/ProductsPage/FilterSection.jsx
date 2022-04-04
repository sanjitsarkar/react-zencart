import React from "react";
import { useFilter } from "../../context/FilterContext";

const FilterSection = ({ showFilter }) => {
  const { filters, setFilters, handleCategories, handleBrands, resetFilters } =
    useFilter();

  return (
    <aside
      className={`sidebar col gap-2 overflow-y-auto ${
        showFilter ? "show" : ""
      }`}
    >
      <form>
        <div className="pr-1 row justify-between">
          <h3 className="text-lg">Filter</h3>
          <button
            className="text-sm pointer btn-secondary w-auto"
            onClick={resetFilters}
            type="reset"
          >
            Clear
          </button>
        </div>
        <div className="col gap-1">
          <h3 className="sidebar-title text-lg">Price</h3>
          <h3 className="price-range text-lg text-center">5k-20k</h3>
          <div className="silder-contaier  col gap-1 justify-start">
            <input
              type="range"
              min="5000"
              max="20000"
              className="slider"
              defaultValue={filters.price}
              id="slider"
              onChange={(e) => {
                setFilters((_filters) => {
                  return {
                    ..._filters,
                    price: parseInt(e.target.value),
                  };
                });
              }}
            />
            <span id="price">₹{filters.price}</span>
          </div>
        </div>
        <div className="col gap-1">
          <h3 className="sidebar-title text-lg">Category</h3>

          <label className="checkbox-container">
            Headphone
            <input
              type="checkbox"
              defaultValue="Headphone"
              onChange={handleCategories}
            />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            DJ Kit
            <input
              type="checkbox"
              defaultValue="DJ Kit"
              onChange={handleCategories}
            />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Keyboard
            <input
              type="checkbox"
              defaultValue="Keyboard"
              onChange={handleCategories}
            />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Studio Mic
            <input
              type="checkbox"
              defaultValue="Studio Mic"
              onChange={handleCategories}
            />
            <span className="checkmark"></span>
          </label>

          <label className="checkbox-container">
            Speaker
            <input
              type="checkbox"
              defaultValue="Speaker"
              onChange={handleCategories}
            />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Midi Keyboard
            <input
              type="checkbox"
              defaultValue="Midi Keyboard"
              onChange={handleCategories}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="col gap-1">
          <h3 className="sidebar-title  text-lg">Brand</h3>

          <label className="checkbox-container">
            Yamaha
            <input
              type="checkbox"
              defaultValue="Yamaha"
              onChange={handleBrands}
            />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Casio
            <input
              type="checkbox"
              defaultValue="Casio"
              onChange={handleBrands}
            />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Pioneer
            <input
              type="checkbox"
              defaultValue="Pioneer"
              onChange={handleBrands}
            />
            <span className="checkmark"></span>
          </label>

          <label className="checkbox-container">
            AudioTechnica
            <input
              type="checkbox"
              defaultValue="AudioTechnica"
              onChange={handleBrands}
            />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Sony
            <input
              type="checkbox"
              defaultValue="Sony"
              onChange={handleBrands}
            />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Beyerdynamic
            <input
              type="checkbox"
              defaultValue="Beyerdynamic"
              onChange={handleBrands}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className=" col gap-1">
          <h3 className="sidebar-titletext-lg">Rating</h3>

          <label className="radio-container">
            4 star & above
            <input
              type="radio"
              name="rating"
              onChange={() =>
                setFilters((_filters) => {
                  return {
                    ..._filters,
                    rating: 4,
                  };
                })
              }
            />
            <span className="checkmark"></span>
          </label>
          <label className="radio-container">
            3 star & above
            <input
              type="radio"
              name="rating"
              onChange={() =>
                setFilters((_filters) => {
                  return {
                    ..._filters,
                    rating: 3,
                  };
                })
              }
            />
            <span className="checkmark"></span>
          </label>
          <label className="radio-container">
            2 star & above
            <input
              type="radio"
              name="rating"
              onChange={() =>
                setFilters((_filters) => {
                  return {
                    ..._filters,
                    rating: 2,
                  };
                })
              }
            />
            <span className="checkmark"></span>
          </label>
          <label className="radio-container">
            1 star & above
            <input
              type="radio"
              name="rating"
              onChange={() =>
                setFilters((_filters) => {
                  return {
                    ..._filters,
                    rating: 1,
                  };
                })
              }
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className=" col gap-1">
          <h3 className="sidebar-title text-lg">Sort by</h3>

          <label className="radio-container">
            Price - Low to High
            <input
              type="radio"
              name="sortby"
              defaultValue="price"
              onChange={(e) => {
                setFilters((_filters) => {
                  return {
                    ..._filters,
                    sortBy: e.target.value,
                  };
                });
              }}
            />
            <span className="checkmark"></span>
          </label>
          <label className="radio-container">
            Price - High to Low
            <input
              type="radio"
              name="sortby"
              defaultValue="-price"
              onChange={(e) => {
                setFilters((_filters) => {
                  return {
                    ..._filters,
                    sortBy: e.target.value,
                  };
                });
              }}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </form>
    </aside>
  );
};

export default FilterSection;
