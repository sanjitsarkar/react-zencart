import React from "react";
import { ToastContainer } from "react-toastify";
const Toast = () => {
  return (
    <ToastContainer
      theme="colored"
      position="bottom-left"
      autoClose={1500}
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
