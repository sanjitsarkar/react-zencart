import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Header from "../../components/Header";
import { useAddress } from "../../context/AddressContext";
import { INITIAL_ADDRESS_STATE } from "../../utils";
import { Address } from "./Address";

export const AddressPage = () => {
  const { addresses, addAddress } = useAddress();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState(INITIAL_ADDRESS_STATE);

  return (
    <>
      <Header />
      <main className="cart-wrapper  h-full l-0 r-0 w-full relative text-light row justify-center">
        <div className="col br-sm justify-center items-center bg-light m-2 w-max p-2 gap-1 ">
          <h2 className="text-dark-1">Manage address</h2>
          <button
            onClick={() => setShowAddressForm(!showAddressForm)}
            className="btn btn-primary w-fit "
          >
            Add a new address
          </button>
          {showAddressForm && (
            <div className="w-full row justify-center">
              <form
                className="col br-sm  gap-1 p-3 bx-sh-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  addAddress({ ...address, _id: uuid() });
                  setAddress(INITIAL_ADDRESS_STATE);
                  setShowAddressForm(false);
                }}
              >
                <div className="row gap-1 ">
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
                        setAddress({ ...address, phone: e.target.value })
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
                        setAddress({ ...address, address: e.target.value })
                      }
                      placeholder="Address"
                      className="text-dark input input-box input-light"
                      type="text"
                      required
                    />
                  </div>
                  <div className="col gap-025 w-full ">
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
                        setAddress({ ...address, state: e.target.value })
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
                        setAddress({ ...address, country: e.target.value })
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
                    value={address.pin}
                    minLength="6"
                    min="100000"
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
                  <button className="btn btn-primary">Add</button>
                  <button
                    onClick={() => setShowAddressForm(!showAddressForm)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
          {addresses.data.length > 0 &&
            addresses.data.map((address) => {
              return <Address {...address} key={address._id} />;
            })}
          {addresses.data.length === 0 && (
            <p className="text-center text-dark">You have no address.</p>
          )}
        </div>
      </main>
    </>
  );
};
