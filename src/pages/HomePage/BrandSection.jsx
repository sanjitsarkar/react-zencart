import React from "react";

import IMAGES from "../../assets/images";
const BrandSection = () => {
  return (
    <section className="section-brands p-5 m-0 mr-0  mt-0 pt-0 ">
      <h1 className="text-2xl mb-3 section-title">Featured Brands</h1>
      <div className="row gap-2 items-center ">
        <img
          src={IMAGES.PIONEER}
          alt="pioneer"
          className="img w-52 bg-light p-2 br-sm h-18 contain"
        />
        <img
          src={IMAGES.YAMAHA}
          alt="yamaha"
          className="img w-52  p-2 br-sm h-18 bg-light contain"
        />
        <img
          src={IMAGES.CASIO}
          alt="casio"
          className="img w-52 p-2 br-sm bg-light h-18 contain"
        />
        <img
          src={IMAGES.SONY}
          alt="sony"
          className="img w-52 p-2 br-sm h-18 bg-light contain"
        />
        <img
          src={IMAGES.AUDIO_TECHNICA}
          alt="audio-technica"
          className="img w-52 p-2 bg-light br-sm h-18 contain"
        />
      </div>
    </section>
  );
};

export default BrandSection;
