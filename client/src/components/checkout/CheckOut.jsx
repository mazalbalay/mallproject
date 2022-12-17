import React, { useEffect, useState } from "react";
import CheckOut1 from "./CheckOut1";
import CheckOut2 from "./CheckOut2";
import CheckOut3 from "./CheckOut3";
import ThancksPage from "./ThancksPage";

export default function CheckOut() {
  const [order, setOrder] = useState({
    id: "1234567",
    product: [
      {
        productsId: "",
        productsStore: "",
        poductsDepartmen: "",
        productName: "",
        productPrice: "",
        productQuantity: "",
      },
    ],
    user: {
      userId: "",
      userName: "",
      userMail: "",
    },
    addres: {
      city: "",
      street: "",
      number: "",
      postalCode: "",
      shippingCompanyName: "",
    },
    shipping: {
      type: "משלוח רגיל",
      date: "",
      time: "",
    },
    payment: {
      cardNumber: "",
      cardValidity: "",
      threeDigits: "",
    },
  });
  useEffect(() => {
    console.log(order);
  }, []);
  return (
    <div className="w-full bg-gray-200 text-right flex flex-col items-center justify-center">
      <CheckOut1 order={order} setOrder={setOrder} />
      <CheckOut2 order={order} setOrder={setOrder} />
      <CheckOut3 order={order} setOrder={setOrder} />
      <ThancksPage order={order} setOrder={setOrder} />
    </div>
  );
}
