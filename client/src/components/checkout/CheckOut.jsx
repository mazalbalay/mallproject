import React, { useEffect, useState } from "react";
import CheckOut1 from "./CheckOut1";
import CheckOut2 from "./CheckOut2";
import CheckOut3 from "./CheckOut3";
import CartStore from "../Cart/CartStore";

export default function CheckOut() {
  const [order, setOrder] = useState({
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
      allData: false,
    },
    shipping: {
      type: "משלוח רגיל",
      date: "",
      time: "",
      allData: false,
    },
    payment: {
      cardNumber: "",
      cardValidity: "",
      threeDigits: "",
      allData: true,
    },
  });
  useEffect(() => {
    console.log(order);
  }, []);
  return (
    <div className="bg-slate-200">
      <div className="md:w-3/4 w-full m-auto bg-white text-right flex md:flex-row flex-col items-start justify-start">
        <div className="md:w-3/4 w-full">
          <CartStore />
        </div>
        <div className="w-full bg-white md:border-l-8">
          <CheckOut1 order={order} setOrder={setOrder} />
          <CheckOut2 order={order} setOrder={setOrder} />
          <CheckOut3 order={order} setOrder={setOrder} />
        </div>
      </div>
    </div>
  );
}
