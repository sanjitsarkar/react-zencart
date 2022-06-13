import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LOGO from "../../assets/logo.png";
import { useAddress } from "../../context/AddressContext";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const CartPriceDetails = ({ cart, type, setIsPaymentSuccessfull }) => {
  const [totalMarketPrice, setTotalMarketPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { addresses } = useAddress();
  const { clearCart } = useCart();
  const { user } = useAuth();
  const loadRazorPay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const paymentHandler = async () => {
    if (!addresses.data.filter((address) => address.isActive).length) {
      toast("Please add an active address to proceed", { type: "error" });
      return;
    }
    const response = await loadRazorPay();
    if (!response) return;
    var options = {
      key_id: process.env.REACT_APP_RAZOR_PAY_KEY_ID,
      key: process.env.REACT_APP_RAZOR_PAY_KEY_ID,
      amount: Math.round(totalPrice) * 100,
      currency: "INR",
      name: "ZenCart",
      description:
        "ZenCart is your one stop solution for buying Audio Gears and Musical Instruments.",
      image: LOGO,
      handler: async function (res) {
        await clearCart();
        setIsPaymentSuccessfull(true);
      },
      prefill: {
        name: `${user?.data?.firstName} ${user?.data?.lastName}`,
        email: user?.data?.email,
        contact: "1234567890",
      },
      theme: {
        color: "#4CA559",
      },
    };

    var razorPay = new window.Razorpay(options);
    razorPay.open();
  };
  useEffect(() => {
    if (cart.data.length > 0) {
      let _totalMarketPrice = 0;
      let _totalQuantity = 0;
      let _totalDiscount = 0;
      cart.data.forEach((item) => {
        _totalMarketPrice += item.price * item.qty;
        _totalQuantity += item.qty;
        _totalDiscount += _totalMarketPrice * (item.discount / 100);
      });
      setTotalMarketPrice(_totalMarketPrice);
      setTotalQuantity(_totalQuantity);
      setTotalDiscount(_totalDiscount.toFixed(2));
      setTotalPrice(_totalMarketPrice - _totalDiscount);
    }
  }, [cart]);

  return (
    <div className="cart-price-details bg p-2 bg-black br-sm  ">
      <div className="price-details">
        <h1 className="text-xl mb-1">Price Details</h1>
        <hr />
        <div className="row justify-between items-center mt-2">
          <h4 className=" font-normal">Price</h4>
          <h4 className=" font-normal">₹ {totalMarketPrice}</h4>
        </div>
        <div className="row justify-between items-center">
          <h4 className=" font-normal">Quantity</h4>
          <h4 className=" font-normal">{totalQuantity}</h4>
        </div>
        <div className="row justify-between items-center  mb-2">
          <h4 className=" font-normal">Discount</h4>
          <h4 className=" font-normal">₹ {totalDiscount}</h4>
        </div>
        <hr />
        <div className="row justify-between items-center mt-1 mb-1">
          <h4 className=" font-normal">Total</h4>
          <h4 className=" font-normal">₹ {totalPrice.toFixed(2)}</h4>
        </div>
        <hr />
      </div>

      <div className="coupon-section row items-center justify-between gap-1  mt-2 mb-2 h-fit  content-center">
        <input
          type="text"
          required
          className="input input-dark"
          placeholder="Coupon Code"
        />
        <button className="apply-btn btn btn-primary p-3">Apply</button>
      </div>
      <hr />
      {type === "checkout" ? (
        <div className="col gap-1 mt-3 mb-2">
          <button onClick={paymentHandler} className="btn btn-secondary">
            Proceed to payment
          </button>
        </div>
      ) : (
        <Link to="/checkout" className="col gap-1 mt-3 mb-2">
          <button className="btn btn-secondary">Proceed to checkout</button>
        </Link>
      )}
    </div>
  );
};

export default CartPriceDetails;
