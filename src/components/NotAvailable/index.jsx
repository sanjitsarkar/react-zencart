import React from "react";
import empty from "./empty.webp";
const NotAvailable = ({ title, img = empty, children }) => {
  return (
    <div className="w-full  grid place-content-center gap-1 place-items-center">
      <img src={img} className="w-80" alt={title} />
      <h2 className="text-center">{title}</h2>
      {children}
    </div>
  );
};

export default NotAvailable;
