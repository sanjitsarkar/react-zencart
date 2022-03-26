import React from "react";
import { Link } from "react-router-dom";
import IMAGES from "../../assets/images";
const HeroSection = () => {
  return (
    <section className="w-full  mr-0 pr-0">
      <div className="hero-section  w-full ">
        <div className="hero-section-content  col gap-2 ">
          <div className="col">
            <h1 className="hero-section-title text-light text-8xl">ZenCart</h1>
            <p className="hero-section-text text-light text-xl o-90">
              <span className="text-primary">ZenCart</span> is your one stop
              solution for
              <br />
              buying <span className="text-secondary">
                Audio Gears
              </span> and{" "}
              <span className="text-secondary">Musical Instruments</span>.
            </p>
          </div>
          <Link
            to="/products"
            className="hero-section-button btn btn-secondary w-fit p-3 br-sm"
          >
            Explore Products
          </Link>
        </div>
        <div className="hero-image">
          <img src={IMAGES.BEHINGER} alt="headphone" className="img w-3-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
