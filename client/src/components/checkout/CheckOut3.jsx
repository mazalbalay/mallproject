import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiCreditCard } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import PaypalCheckOutButton from "./PaypalCheckOutButton";
import AddCard from "./AddCard";



export default function CheckOut3({ setOrderS, orderS }) {
  const [addCard, setAddCard] = useState(false);
  const [saveCard, setSaveCard] = useState(false);
  const [input, setInput] = useState(undefined);
  const product = {
    description: "description",
    price: 5,
  };
  const [payment, setPayment] = useState([
    {
      cardNumber: "1234 1234 1234 1234",
      fourNum: "1234",
      cardValidity: "06/26",
      threeDigits: "123",
      allData: true,
    },
  ]);
  const navigetor = useNavigate();

  return (
    <div className="w-full md:w-2/3 min-h-screen p-10 flex flex-col items-end justify-between bg-white my-4">
      <div className="flex items-end">
        <h1 className="font-medium text-2xl">פרטי תשלום</h1>
        <HiCreditCard className="text-cyan-600 text-4xl ml-4" />
      </div>

      <div>
        <p className="my-8 font-medium">בחר אמצעי תשלום:</p>
        {payment.map((v, i) => {
          return (
            <div key={i} className="flex items-center">
              <label className="mx-2 font-bold">
                {" "}
                xxxx xxxx xxxx {v.fourNum}
              </label>
              <input
                onChange={(e) => {
                  setOrderS({
                    ...orderS,
                    payment: {
                      cardNumber: v.cardNumber,
                      fourNum: v.fourNum,
                      cardValidity: v.cardValidity,
                      threeDigits: v.threeDigits,
                    },
                  });
                  setSaveCard(!saveCard);
                  setInput(true);
                }}
                checked={input}
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
            setInput(!input);
            setOrderS({
              ...orderS,
              payment: {
                ...orderS.payment,
                cardNumber: "",
                fourNum: "",
                cardValidity: "",
                threeDigits: "",
              },
            });
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
                setOrderS({
                  ...orderS,
                  payment: {
                    ...orderS.payment,
                    [e.target.name]: e.target.value,
                    fourNum: e.target.value.slice(15),
                  },
                });
              }}
              name="cardNumber"
              type="tel"
              placeholder="3434 3434 3434 3434"
              maxLength={"19"}
              className="borderS-b placeholder:text-right outline-none p-3 w-fit text-right"
            />
          </div>
          <div className="w-full">
            <h3>תוקף</h3>
            <input
              onChange={(e) => {
                setOrderS({
                  ...orderS,
                  payment: {
                    ...orderS.payment,
                    [e.target.name]: e.target.value,
                  },
                });
              }}
              name="cardValidity"
              type="tel"
              placeholder="34/02"
              maxLength={"5"}
              className=" borderS-b placeholder:text-right outline-none p-2 my-1 w-16 text-right"
            />
          </div>
          <div className="w-full">
            <h3>3 ספרות מאחורי הכרטיס CW</h3>
            <input
              onChange={(e) => {
                setOrderS({
                  ...orderS,
                  payment: {
                    ...orderS.payment,
                    [e.target.name]: e.target.value,
                  },
                });
              }}
              name="threeDigits"
              type="tel"
              placeholder="321"
              maxLength={"3"}
              className="borderS-b placeholder:text-right outline-none p-2 my-1 w-16 text-right"
            />
          </div>
        </div>
      )}
      {addCard ? (
        <AddCard payment={payment} setAddCard={setAddCard} orderS={orderS} />
      ) : (
        ""
      )}

      <div className="flex flex-col w-full md:w-2/3 items-end">
        <button
          onClick={async () => {
            if (
              orderS.payment.cardNumber &&
              orderS.payment.threeDigits &&
              orderS.payment.cardValidity &&
              orderS.addres.allData &&
              orderS.shipping.allData &&
              saveCard === false
            ) {
              setAddCard(!addCard);
              axios.post("http://localhost:8000/order", orderS);
            } else if (
              orderS.payment.cardNumber &&
              orderS.payment.threeDigits &&
              orderS.payment.cardValidity &&
              orderS.addres.allData &&
              orderS.shipping.allData &&
              saveCard === true
            ) {
              navigetor("/ThancksPage");
              axios.post("http://localhost:8000/order", orderS);
            } else {
              alert("מלא את כל השדות");
            }
          }}
          className="bg-cyan-600 rounded-md text-white py-4 px-8  m-1 w-full md:w-2/3"
        >
          אישור קנייה
        </button>
        <PaypalCheckOutButton
          product={product}
          orderS={orderS}
          setOrderS={setOrderS}
        />
      </div>
    </div>
  );
}