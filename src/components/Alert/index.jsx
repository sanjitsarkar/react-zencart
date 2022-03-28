import React from "react";

const Alert = ({ title, type }) => {
    const 
  return (
    <div className={`alert alert-${type.toLowerCase()}`}>
      <svg></svg>
      {title}
      <span className="alert-close" onClick="">
        &times;
      </span>
    </div>
  );
};

export default Alert;
