import React from "react";

const ToTopButton = ({ to = "#top" }) => {
  return (
    <a
      href={to}
      className="btn btn-float-right bg-secondary text-light btn-round-md"
    >
      <i className="fa fa-chevron-up"></i>
    </a>
  );
};

export default ToTopButton;
