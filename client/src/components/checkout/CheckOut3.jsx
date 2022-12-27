import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiCreditCard } from "react-icons/hi";
import PaypalCheckOutButton from "./PaypalCheckOutButton";
import AddCard from "./AddCard";
import { useEffect } from "react";

export default function CheckOut3({ setOrder, order }) {
  const user = JSON.parse(localStorage.getItem("user")).data;
  const [addCard, setAddCard] = useState(false);
  const [saveCard, setSaveCard] = useState(false);


  const [payment, setPayment] = useState([]);
  useEffect(() => {
    setPayment([
      user?.saveCards?.map((v) => ({
        cardNumber: v.cardNumber,
        cardValidity: v.cardValidity,
        threeDigits: v.threeDigits,
      })),
    ]);
    
  }, []);

  const navigetor = useNavigate();
  return (
    <div className="w-full min-h-screen p-10 flex flex-col items-end justify-between bg-white my-4">
      <div className="flex items-end">
        <h1 className="font-medium text-2xl">פרטי תשלום</h1>
        <HiCreditCard className="text-cyan-600 text-4xl ml-4" />
      </div>
      <div>
        <p className="my-8 font-medium">בחר אמצעי תשלום:</p>
        {payment?.map((v, i) => {
          return (
            <div key={i} className="flex items-center">
              <label className="mx-2 font-bold">
                xxxx xxxx xxxx {user?.saveCards[0].cardNumber.slice(15)}
              </label>
              <input
                onChange={(e) => {
                  setOrder({
                    ...order,
                    payment: {
                      cardNumber: user?.saveCards[0].cardNumber,
                      cardValidity: user?.saveCards[0].cardValidity,
                      threeDigits: user?.saveCards[0].threeDigits,
                      
                    },
                  });
                  setSaveCard(!saveCard);
                }}
                type="radio"
                name="cardNum"
                value={v}
                className="w-6 h-6 "
              />
            </div>
          );
        })}
      </div>
      {saveCard ? (
        <button
          onClick={() => {
            setSaveCard(!saveCard);
            window.location.reload();
          }}
          className="text-cyan-600"
        >
          לתשלום רגיל לחצן כאן
        </button>
      ) : (
        <div className="w-3/4 h-1/2 flex flex-col justify-between items-end">
          <div className="w-full">
            <h3>מספר כרטיס</h3>
            <input
              onChange={(e) => {
                setOrder({
                  ...order,
                  payment: {
                    [e.target.name]: e.target.value,
                  },
                });
              }}
              name="cardNumber"
              type="tel"
              placeholder="3434 3434 3434 3434"
              maxLength={"19"}
              className="border-b placeholder:text-right outline-none p-3 w-fit text-right"
            />
          </div>
          <div className="w-full">
            <h3>תוקף</h3>
            <input
              onChange={(e) => {
                setOrder({
                  ...order,
                  payment: {
                    ...order.payment,
                    [e.target.name]: e.target.value,
                  },
                });
              }}
              name="cardValidity"
              type="tel"
              placeholder="34/02"
              maxLength={"5"}
              className=" border-b placeholder:text-right outline-none p-2 my-1 w-16 text-right"
            />
          </div>
          <div className="w-full">
            <h3>3 ספרות מאחורי הכרטיס CW</h3>
            <input
              onChange={(e) => {
                setOrder({
                  ...order,
                  payment: {
                    ...order.payment,
                    [e.target.name]: e.target.value,
                  },
                });
              }}
              name="threeDigits"
              type="tel"
              placeholder="321"
              maxLength={"3"}
              className="border-b placeholder:text-right outline-none p-2 my-1 w-16 text-right"
            />
          </div>
        </div>
      )}
      {addCard ? (
        <AddCard
          payment={payment}
          setPayment={setPayment}
          setAddCard={setAddCard}
          order={order}
        />
      ) : (
        ""
      )}
      <div className="flex flex-col w-full items-end">
        <button
          onClick={async () => {
            if (
              order.payment.cardNumber !== "paypal" && !undefined && !null &&
              order.payment.threeDigits !== "paypal" &&
              !undefined &&
              !null &&
              order.payment.cardValidity !== "paypal" &&
              !undefined &&
              !null &&
              order.addres.allData &&
              order.shipping.allData &&
              saveCard === false
            ) {
              setAddCard(!addCard);
              await axios.post(`http://localhost:8000/order`, order);
              console.log(order);
            } else if (
              order.payment.cardNumber !== "paypal" &&
              !undefined &&
              !null &&
              order.payment.threeDigits !== "paypal" &&
              !undefined &&
              !null &&
              order.payment.cardValidity !== "paypal" &&
              !undefined &&
              !null &&
              order.addres.allData &&
              order.shipping.allData &&
              saveCard === true
            ) {
              navigetor("/ThanksPage");
              await axios.post("http://localhost:8000/order", order);
              console.log(order);
            } else {
              alert("מלא את כל השדות");
            }
          }}
          className="bg-cyan-600 rounded-md text-white py-4 px-8  m-1 w-full"
        >
          אישור קנייה
        </button>
        <PaypalCheckOutButton />
      </div>
    </div>
  );
}
