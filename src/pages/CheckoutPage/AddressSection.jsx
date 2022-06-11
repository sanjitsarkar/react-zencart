import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAddress } from "../../context/AddressContext";

export const AddressSection = () => {
  let { addresses } = useAddress();
  const [activeAddress] = useState(
    addresses.data.filter((address) => address.isActive)
  );

  return (
    <div className="w-full br-sm bg-light p-2 text-dark">
      <div className="row  address-section   gap-1 items-center">
        <h2 className="text-dark-1 font-medium text-xl">Shipping address</h2>
        <Link to="/address" className="btn btn-primary">
          Manage address
        </Link>
      </div>
      {activeAddress.length > 0 &&
        activeAddress.map(
          ({ _id, address, city, state, pin, country, name, phone }) => {
            return (
              <div
                key={_id}
                className="row justify-between items-center bg-primary-8 p-2 mt-2 "
              >
                <div className="col gap-1">
                  <div className="address">
                    <h4 className="text-black-3 text-lg">
                      {name}, {phone}
                    </h4>
                    <p
                      className="text-black-2"
                      style={{ wordBreak: "break-word" }}
                    >
                      {address.length > 200
                        ? address.substr(0, 200) + "...."
                        : address}
                      , {city}, {state}, {country}, {pin}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      {activeAddress.length === 0 && (
        <p className="mt-1 ">You have no any active shipping address.</p>
      )}
    </div>
  );
};
