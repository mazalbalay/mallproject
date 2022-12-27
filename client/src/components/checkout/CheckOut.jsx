import React, { useEffect, useState } from "react";
import CheckOut1 from "./CheckOut1";
import CheckOut2 from "./CheckOut2";
import CheckOut3 from "./CheckOut3";
import CartStore from "../Cart/CartStore";
import { useSelector } from "react-redux";

export default function CheckOut() {
  const selctorCart = useSelector((state) => state.CartReducer);
  // const activeUser = JSON.parse(localStorage.getItem("user"))?.data.user;
  // console.log(activeUser);

  const [order, setOrder] = useState({
    product: [
      {
        productsId: "",
        productsStore: "",
        productName: "",
        productPrice: "",
        productQuantity: "",
      },
    ],
    user: {
      userId: "אורח",
      userName: "אורח",
      userMail: "אורח",
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
      shippingType: "משלוח רגיל",
      date: "",
      time: "",
      allData: false,
    },
    payment: [
      {
        cardNumber: "paypal",
        cardValidity: "paypal",
        threeDigits: "paypal",
        fourDigits: "paypal",
        allData: true,
      },
    ],
  });

  useEffect(() => {
    setOrder({
      ...order,
      product: selctorCart.map((v) => ({
        productsId: v._id,
        productsStore: v.storeName,
        productName: v.name,
        productPrice: v.price,
        productQuantity: v.quantity,
      })),
    });
  }, [selctorCart]);
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
