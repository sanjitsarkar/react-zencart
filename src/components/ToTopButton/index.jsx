import React from "react";

const ToTopButton = () => {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="btn btn-float-right bg-secondary text-light btn-round-md"
    >
      <i className="fa fa-chevron-up"></i>
    </button>
  );
};

export default ToTopButton;
