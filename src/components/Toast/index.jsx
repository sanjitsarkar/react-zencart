import React from "react";
import { ToastContainer } from "react-toastify";
const Toast = () => {
  return (
    <ToastContainer
      theme="colored"
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      draggable
    />
  );
};

export default Toast;
