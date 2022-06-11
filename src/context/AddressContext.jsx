import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import {
  ACTION_TYPE_FAILURE,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "../utils";
import { useAuth } from "./AuthContext";
import { useToast } from "./ToastContext";
const AddressContext = createContext();
export const AddressProvider = ({ children }) => {
  const { setToast } = useToast();
  const { isLoggedIn } = useAuth();
  const initialState = {
    data: [],
    loading: true,
    erorr: "",
  };
  const [addresses, dispatchAddresses] = useReducer(reducer, initialState);
  useEffect(() => {
    if (isLoggedIn) {
      dispatchAddresses({
        type: ACTION_TYPE_SUCCESS,
        payload: JSON.parse(localStorage?.getItem("addresses")) ?? [],
      });
    }
  }, []);
  const addAddress = (address) => {
    dispatchAddresses({ type: ACTION_TYPE_LOADING });
    try {
      if (!isLoggedIn) {
        setToast({
          show: true,
          content: "Please login to add address",
          type: "error",
        });
        return;
      }

      const newAddresses = [...addresses.data, address];
      localStorage.setItem("addresses", JSON.stringify(newAddresses));
      setToast({
        show: true,
        content: `Address added successfully`,
        type: "info",
      });
      dispatchAddresses({ type: ACTION_TYPE_SUCCESS, payload: newAddresses });
    } catch (err) {
      dispatchAddresses({ type: ACTION_TYPE_FAILURE, payload: err.message });
    }
  };
  const updateAddress = (id, address) => {
    dispatchAddresses({ type: ACTION_TYPE_LOADING });
    try {
      if (!isLoggedIn) {
        setToast({
          show: true,
          content: "Please login to update address",
          type: "error",
        });
        return;
      }
      const newAddresses = addresses.data.map((item) => {
        if (item._id === id) {
          return address;
        }
        return item;
      });
      localStorage.setItem("addresses", JSON.stringify(newAddresses));
      setToast({
        show: true,
        content: `Address updated successfully`,
        type: "info",
      });
      dispatchAddresses({ type: ACTION_TYPE_SUCCESS, payload: newAddresses });
    } catch (err) {
      dispatchAddresses({ type: ACTION_TYPE_FAILURE, payload: err.message });
    }
  };

  const removeAddress = (id) => {
    dispatchAddresses({ type: ACTION_TYPE_LOADING });
    try {
      if (!isLoggedIn) {
        setToast({
          show: true,
          content: "Please login to remove address",
          type: "error",
        });
        return;
      }
      const newAddresses = addresses.data.filter((item) => item._id !== id);
      localStorage.setItem("addresses", JSON.stringify(newAddresses));
      setToast({
        show: true,
        content: `Address removed successfully`,
        type: "info",
      });
      dispatchAddresses({ type: ACTION_TYPE_SUCCESS, payload: newAddresses });
    } catch (err) {
      dispatchAddresses({ type: ACTION_TYPE_FAILURE, payload: err.message });
    }
  };

  const setActiveAddress = (id, action) => {
    dispatchAddresses({ type: ACTION_TYPE_LOADING });
    try {
      if (!isLoggedIn) {
        setToast({
          show: true,
          content: "Please login to set active address",
          type: "error",
        });
        return;
      }
      const newAddresses = addresses.data.map((item) => {
        if (item._id === id) {
          if (action === "active") return { ...item, isActive: true };
          return { ...item, isActive: false };
        }
        if (action === "active") return { ...item, isActive: false };
        return { ...item, isActive: true };
      });
      localStorage.setItem("addresses", JSON.stringify(newAddresses));
      setToast({
        show: true,
        content: `Address set as active successfully`,
        type: "info",
      });
      dispatchAddresses({ type: ACTION_TYPE_SUCCESS, payload: newAddresses });
    } catch (err) {
      dispatchAddresses({ type: ACTION_TYPE_FAILURE, payload: err.message });
    }
  };
  return (
    <AddressContext.Provider
      value={{
        addresses,
        addAddress,
        removeAddress,
        updateAddress,
        setActiveAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
