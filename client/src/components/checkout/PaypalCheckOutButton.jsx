import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PaypalCheckOutButton() {
  const selctor = useSelector((state) => state.CartReducer);
  
  const calc = () => {
    let total = 0;
    selctor.map((product) => {
      let productTotal = +product.price * +product.qty;
      return (total += productTotal);
    });
    return total;
  };
 
  console.log(selctor);
  const [paidFor, setPaidFot] = useState(false);
  const [error, setError] = useState(null);
  const navigetor = useNavigate();

  const handleApprove = (orderID) => {
    setPaidFot(true);
  };

  if (paidFor) {
    navigetor("/ThancksPage");
  }
  if (error) {
    navigetor("/ErrPage");
  }
  return (
    <PayPalButtons
      className="w-full m-1 z-10"
      createOrder={(data, action) => {
        return action.order.create({
          purchase_units: [
            {
              amount: { value: calc() },
            },
          ],
        });
      }}
      onApprove={async (data, action) => {
        const order = await action.order.capture();
        console.log("order", order);
        handleApprove(data.orderID);
      }}
      onError={(err) => {
        setError(err);
        console.error("paypal checout on error", err);
      }}
      style={{
        color: "white",
        layout: "horizontal",
        tagline: false,
        shape: "rect",
        height: 52,
        label: "paypal",
      }}
    />
  );
}
