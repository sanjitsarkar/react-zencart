import React from "react";

const NotAvailable = ({
  title,
  img = "https://image1.jdomni.in/jdomni_email/searchProduct2.png",
  children,
}) => {
  return (
    <div className="w-full  grid place-content-center gap-2 place-items-center">
      <img src={img} className="w-80" alt={title} />
      <h2 className="text-center">{title}</h2>
      {children}
    </div>
  );
};

export default NotAvailable;
