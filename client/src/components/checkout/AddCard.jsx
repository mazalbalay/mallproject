import React from "react";
import { MdCancel } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddCard({ payment, setPayment, order }) {
  const user = JSON.parse(localStorage.getItem("user")).data.user;

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
            onClick={() => {
              setPayment([
                ...payment,
                {
                  cardNumber: order.payment.cardNumber,
                  threeDigits: order.payment.threeDigits,
                  cardValidity: order.payment.cardValidity,
                },
              ]);
              if (user) {
                navigetor("/ThanksPage");
              } else {
                alert("התחבר/הרשם בבקשה");
              }

              // axios.put(`http://localhost:8000/user/${user.user._id}`, {
              //   ...user,
              //   saveCards: payment,
              // });
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
