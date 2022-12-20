import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import axios from "axios";

export default function PaypalCheckOutButton({ product, orderS, setOrderS }) {
=======

export default function PaypalCheckOutButton(props) {
  const { product } = props;
>>>>>>> origin
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
      className="w-full md:w-2/3 m-1 z-10"
      createOrder={(data, action) => {
        return action.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: { value: product.price },
            },
          ],
        });
      }}
      onApprove={async (data, action) => {
<<<<<<< HEAD
        const orderPaypal = await action.order.capture();
        console.log("order", orderPaypal);
        handleApprove(data.orderID);
        axios.post("http://localhost:8000/order", orderS);
=======
        const order = await action.order.capture();
        console.log("order", order);
        handleApprove(data.orderID);
>>>>>>> origin
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
