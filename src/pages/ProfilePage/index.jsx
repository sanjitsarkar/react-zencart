import React from "react";
import Header from "../../components/Header";
import { useAuth } from "../../context/AuthContext";
import { AddressSection } from "../CheckoutPage/AddressSection";

export const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <main className="cart-wrapper h-full l-0 r-0 w-full relative text-dark flex justify-center">
        <div className="bg-light p-2 br-sm  w-max h-max col gap-1">
          <div className="col items-center pl-3 pr-3 pt-3 ">
            <h2>
              {user.data.firstName} {user.data.lastName}
            </h2>
            <p>{user.data.email}</p>
          </div>

          <AddressSection />
          <p></p>
        </div>
      </main>
    </>
  );
};
