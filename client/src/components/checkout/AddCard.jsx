import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usersUpdate, users } from "../../api/api";

export default function AddCard({ payment, setPayment, order }) {
  const selctor = useSelector((state) => state.orderReducer);
  const user = JSON.parse(localStorage?.getItem("user"))?.data;
  const navigetor = useNavigate();
  

  return (
    <div className="w-full h-screen bg-black bg-opacity-70 z-20 fixed top-0 right-0 flex items-center justify-center">
      <div className="bg-white border-cyan-600 border-4 h-1/4 w-3/5 rounded-lg flex flex-col items-center justify-evenly">
        <p className="text-3xl text-right"> מעונין לשמור פרטי כרטיס אשראי?</p>
        <div className="flex w-1/2 justify-between">
          <button
            onClick={() => {
              navigetor("/ThanksPage");
            }}
            className="flex items-center text-2xl text-cyan-600"
          >
            <MdCancel />
            <span>לא</span>
          </button>
          <button
            onClick={async () => {
              if (user) {
                await usersUpdate(
                  {
                    saveCards: [
                      {
                        cardNumber: order.payment.cardNumber,
                        cardValidity: order.payment.cardValidity,
                        threeDigits: order.payment.threeDigits,
                      },
                    ],
                  },
                  user._id,
                );
                const { data: use } = await users();
                const data = use.find((U) => U._id === user._id);
                localStorage.setItem("user", JSON.stringify({ data }));
                console.log(user);
                navigetor("/ThanksPage");
              } else {
                alert("התחבר/הרשם בבקשה");
              }
            }}
            className="flex items-center text-2xl text-cyan-600"
          >
            <MdDoneAll />
            <span>כן</span>
          </button>
        </div>
      </div>
    </div>
  );
}
