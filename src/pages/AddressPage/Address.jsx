import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useAddress } from "../../context/AddressContext";

export const Address = ({
  _id,
  isActive,
  address: _address,
  city,
  state,
  pin,
  country,
  name,
  phone,
}) => {
  const [showAddressEditForm, setShowAddressEditForm] = useState(false);
  const [address, setAddress] = useState({
    _id,
    isActive,
    address: _address,
    city,
    state,
    pin,
    country,
    name,
    phone,
  });
  const { updateAddress, setActiveAddress, removeAddress } = useAddress();
  return (
    <div className="w-full br-sm row gap-2 justify-between items-center bg-primary-8 p-2">
      <div className="col gap-1">
        <div className="address">
          <h4 className="text-black-3 text-lg">
            {name}, {phone}
          </h4>
          <p className="text-dark" style={{ wordBreak: "break-all" }}>
            {_address}, {city}, {state}, {country}, {pin}
          </p>
        </div>
      </div>
      <div className="col gap-1">
        <div className="row gap-1 ">
          <button
            onClick={() => setShowAddressEditForm(!showAddressEditForm)}
            className="btn btn-secondary btn-round-sm fa fa-edit"
          ></button>
          <button
            onClick={() => removeAddress(_id)}
            className="btn-error btn btn-round-sm fa fa-trash"
          ></button>
        </div>
        {!isActive ? (
          <button
            onClick={() => setActiveAddress(_id, "active")}
            className="btn w-fit btn-secondary"
          >
            Set as active address
          </button>
        ) : (
          <button
            onClick={() => setActiveAddress(_id, "inactive")}
            className="btn w-fit btn-tertiary"
          >
            Remove from active address
          </button>
        )}
      </div>
      {showAddressEditForm && (
        <div className="w-full row justify-center">
          <form
            className="br-sm col gap-1 bg-light p-3 bx-sh-3"
            onSubmit={(e) => {
              e.preventDefault();
              updateAddress(_id, { ...address, _id: uuid() });
              setShowAddressEditForm(false);
            }}
          >
            <div className="row gap-1  ">
              <div className="col gap-025 w-full">
                <label className="text-black-3 text-lg">Name</label>
                <input
                  value={address.name}
                  onChange={(e) =>
                    setAddress({ ...address, name: e.target.value })
                  }
                  placeholder="Full name"
                  className="text-dark input input-box input-light"
                  type="text"
                  required
                />
              </div>
              <div className="col gap-025 w-full">
                <label className="text-black-3 text-lg">Phone</label>
                <input
                  value={address.phone}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      phone: e.target.value,
                    })
                  }
                  placeholder="Phone number"
                  className="text-dark input input-box input-light"
                  type="phone"
                  required
                />
              </div>
            </div>
            <div className="row gap-1 ">
              <div className="col gap-025 w-full">
                <label className="text-black-3 text-lg">Address</label>
                <textarea
                  value={address.address}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      address: e.target.value,
                    })
                  }
                  placeholder="Address"
                  className="text-dark input input-box input-light"
                  type="text"
                  required
                />
              </div>
              <div className="col gap-025 w-full">
                <label className="text-black-3 text-lg">City</label>
                <input
                  value={address.city}
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                  placeholder="City"
                  className="text-dark input input-box input-light"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="row gap-1 ">
              <div className="col gap-025 w-full">
                <label className="text-black-3 text-lg">State</label>
                <input
                  value={address.state}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      state: e.target.value,
                    })
                  }
                  placeholder="State"
                  className="text-dark input input-box input-light"
                  type="text"
                  required
                />
              </div>
              <div className="col gap-025 w-full">
                <label className="text-black-3 text-lg">Country</label>
                <input
                  value={address.country}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      country: e.target.value,
                    })
                  }
                  placeholder="Country"
                  className="text-dark input input-box input-light"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="col gap-025 w-full">
              <label className="text-black-3 text-lg">Pin</label>
              <input
                value={parseInt(address.pin)}
                minLength="6"
                min={100000}
                onChange={(e) =>
                  setAddress({ ...address, pin: e.target.value })
                }
                placeholder="Pin"
                className="text-dark input input-box input-light"
                type="number"
                required
              />
            </div>

            <div className="row gap-05 mt-2">
              <button className="btn btn-primary">Update</button>
              <button
                onClick={() => setShowAddressEditForm(!showAddressEditForm)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
