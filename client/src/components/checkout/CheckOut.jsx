import React, { useEffect, useState } from "react";
import CheckOut1 from "./CheckOut1";
import CheckOut2 from "./CheckOut2";
import CheckOut3 from "./CheckOut3";
<<<<<<< HEAD
=======
import ErrPage from "./ErrPage";
>>>>>>> origin

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
<<<<<<< HEAD
      typeS: "משלוח רגיל",
=======
      type: "משלוח רגיל",
>>>>>>> origin
      date: "",
      time: "",
      allData: false,
    },
    payment: {
      cardNumber: "",
<<<<<<< HEAD
      fourNum:"",
=======
>>>>>>> origin
      cardValidity: "",
      threeDigits: "",
      allData: true,
    },
  });
<<<<<<< HEAD

=======
  useEffect(() => {
    console.log(order);
  }, []);
>>>>>>> origin
  return (
    <div className="w-full bg-gray-200 text-right flex flex-col items-center justify-center">
      <CheckOut1 order={order} setOrder={setOrder} />
      <CheckOut2 order={order} setOrder={setOrder} />
<<<<<<< HEAD
      <CheckOut3 orderS={order} setOrderS={setOrder} />
=======
      <CheckOut3 order={order} setOrder={setOrder} />
>>>>>>> origin
    </div>
  );
}
