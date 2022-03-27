import React from "react";

const FilterSection = () => {
  return (
    <aside className="sidebar col gap-2 overflow-y-auto ">
      <div className="pr-1 row justify-between">
        <h3 className="text-lg">Filter</h3>
        <h3 className="text-lg pointer">Clear</h3>
      </div>
      <div className="col gap-1">
        <h3 className="sidebar-title text-lg">Price</h3>
        <h3 className="price-range text-lg text-center">5k-20k</h3>
        <div className="silder-contaier  col gap-1 justify-start">
          <input
            type="range"
            min="5000"
            max="20000"
            value="10000"
            className="slider"
            id="slider"
          />
          <span id="price">
            ₹{" "}
            <span id="slider-value" className="slider-value text-light"></span>
          </span>
        </div>
      </div>
      <div className="col gap-1">
        <h3 className="sidebar-title text-lg">Category</h3>

        <label className="checkbox-container">
          Headphone
          <input type="checkbox" checked />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          DJ Kit
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          Keyboard
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          Studio Mic
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          Studio Mic
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          Speaker
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          Midi Keyboard
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="col gap-1">
        <h3 className="sidebar-title  text-lg">Brand</h3>

        <label className="checkbox-container">
          Yamaha
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          Casio
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          Pioneer
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          M-Audio
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          AudioTechnica
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          Sony
          <input type="checkbox" checked />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-container">
          Behringer
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className=" col gap-1">
        <h3 className="sidebar-titletext-lg">Rating</h3>

        <label className="radio-container">
          4 star & above
          <input type="radio" name="rating" checked />
          <span className="checkmark"></span>
        </label>
        <label className="radio-container">
          3 star & above
          <input type="radio" name="rating" />
          <span className="checkmark"></span>
        </label>
        <label className="radio-container">
          2 star & above
          <input type="radio" name="rating" />
          <span className="checkmark"></span>
        </label>
        <label className="radio-container">
          1 star & above
          <input type="radio" name="rating" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className=" col gap-1">
        <h3 className="sidebar-title text-lg">Sort by</h3>

        <label className="radio-container">
          Newest Arrival
          <input type="radio" name="sortby" checked />
          <span className="checkmark"></span>
        </label>
        <label className="radio-container">
          Price - Low to High
          <input type="radio" name="sortby" />
          <span className="checkmark"></span>
        </label>
        <label className="radio-container">
          Price - High to Low
          <input type="radio" name="sortby" />
          <span className="checkmark"></span>
        </label>
      </div>
    </aside>
  );
};

export default FilterSection;
