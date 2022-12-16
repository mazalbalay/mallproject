import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

export default function PaypalCheckOutButton(props) {
  const { product } = props;
  const [paidFor, setPaidFot] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderID) => {
    setPaidFot(true);
  };

  if (paidFor) {
    alert("thank you for your order");
  }
  if (error) {
    alert(error);
  }
  return (
    <PayPalButtons
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
        height:52,
        // layout: "vertical",
        label: "paypal",
      }}
    />
  );
}
