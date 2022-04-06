import React, { useEffect, useState } from "react";

const CartPriceDetails = ({ cart }) => {
  const [totalMarketPrice, setTotalMarketPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
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
    <div className="cart-price-details bg p-2 bg-black br-sm">
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
          className="input input-dark"
          placeholder="Coupon Code"
        />
        <button className="apply-btn btn btn-primary p-3">Apply</button>
      </div>
      <hr />
      <div className="col gap-1 mt-3 mb-2">
        <button className="btn btn-outline-secondary">Edit Cart</button>
        <button className="btn btn-secondary">Place Order</button>
      </div>
    </div>
  );
};

export default CartPriceDetails;
