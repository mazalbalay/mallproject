import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function ChoseTime({ setOrder, order, callback }) {
  const [dropDwon, setDropDwon] = useState(false);
  const [number, setNumber] = useState(3);
  const time = [
    {
      value: "08:00-10:00",
      boolean: false,
    },
    {
      value: "10:00-12:00",
      boolean: false,
    },
    {
      value: "12:00-14:00",
      boolean: false,
    },
    {
      value: "14:00-16:00",
      boolean: false,
    },
    {
      value: "16:00-18:00",
      boolean: false,
    },

    {
      value: "18:00-20:00",
      boolean: false,
    },
    {
      value: "20:00-22:00",
      boolean: false,
    },
  ];
  const updateOrder = (e) => {
    setOrder({
      ...order,
      shipping: {
        ...order.shipping,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className=" w-full md:w-2/3">
      {time.splice(0, number).map((v, i) => {
        return (
          <div
            key={i}
            className="flex flex-row-reverse justify-between p-1 hover:bg-gray-100 hover:duration-500"
          >
            <input
              onChange={(e) => {
                updateOrder(e);
              }}
              type="radio"
              id={v.value}
              name="time"
              value={v.value}
              className="w-6 h-6 accent-cyan-600 "
            />
            <label htmlFor={v.value}>{v.value}</label>
          </div>
        );
      })}
      <div className="w-full flex justify-between my-12">
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              setNumber(number + 2);
            }}
            className="flex items-center flex-row-reverse font-medium"
          >
            שעות נוספות <BsChevronDown />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              console.log(order.shipping);
              if (order.shipping.date && order.shipping.time) {
                callback(!dropDwon);
              } else {
                alert("מלא את כל השדות");
              }
            }}
            className="bg-gray-200 text-cyan-600 border-2 border-cyan-600 font-bold rounded-md  px-10 py-3"
          >
            שמור
          </button>
        </div>
      </div>
    </div>
  );
}
