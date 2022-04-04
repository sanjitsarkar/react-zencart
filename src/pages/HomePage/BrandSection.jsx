import React from "react";

import IMAGES from "../../assets/images";
const BrandSection = () => {
  const brands = [
    { image: IMAGES.PIONEER, name: "pioneer" },
    { image: IMAGES.YAMAHA, name: "yamaha" },
    { image: IMAGES.CASIO, name: "casio" },
    { image: IMAGES.SONY, name: "sony" },
    { image: IMAGES.AUDIO_TECHNICA, name: "audio-technica" },
  ];
  return (
    <section className="section-brands p-5 m-0 mr-0  mt-0 pt-0 ">
      <h1 className="text-2xl mb-3 section-title">Featured Brands</h1>
      <div className="row gap-2 items-center ">
        {brands.map((brand, i) => (
          <img
            key={i}
            src={brand.image}
            alt={brand.name}
            className="img w-52 bg-light p-2 br-sm h-18 contain"
          />
        ))}
      </div>
    </section>
  );
};

export default BrandSection;
