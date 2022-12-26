import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsTextLeft } from "react-icons/bs";
import ChoseDate from "./ChoseDate";
import ChoseTime from "./ChoseTime";
import { useSelector ,useDispatch } from "react-redux";

export default function CheckOut2({ setOrder, order }) {
  const [dropDwon, setDropDwon] = useState(false);
  const dispatch =useDispatch()
  const expressShipping = () => {
    setOrder({
      ...order,
      shipping: {
        ...order.shipping,
        time: `${new Date().getHours()}:00-${new Date().getHours() + 1}:00`,
        date: `${new Date().getDate()}/${new Date().getMonth() + 1}`,
        shippingType: "משלוח אקספרס",
        allData:true
      },
    });
  };

  return (
    <>
      {dropDwon ? (
        <div className="w-full p-5 flex flex-col items-end justify-between bg-white my-1 border-b-4">
          <div className="w-full flex items-end justify-between bg-white my-1">
            <BsChevronDown
              className="md:text-3xl text-2xl"
              onClick={() => {
                setDropDwon(!dropDwon);
                setOrder({
                  ...order,
                  shipping: {
                    ...order.shipping,
                    time: "",
                    date: "",
                    allData:false
                  },
                });
              }}
            />
            <div className="flex items-center">
              <h1 className="font-medium text-2xl">זמן משלוח</h1>
              <span>
                <BsFillClockFill className="text-cyan-600 text-4xl ml-4 p-1" />
              </span>
            </div>
          </div>
          <div className="md:mr-12 mr-10">
            <span> {order.shipping.shippingType} </span>
            יגיע ב-
            <span> {order.shipping.date} </span>
            בין השעות
            <span> {order.shipping.time}</span>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen p-5 flex flex-col items-end justify-between bg-white my-1">
          <div className="flex items-center">
            <h1 className="text-2xl font-medium items-center">זמן משלוח</h1>
            <BsFillClockFill className="text-cyan-600 text-3xl ml-4" />
          </div>
          <p>בחר שעה למשלוח בחר שעה למשלוח בחר שעה למשלוח</p>
          <button
            onClick={() => {
              if (order.addres.allData) {
                expressShipping();
                setDropDwon(!dropDwon);
                dispatch({ shippingType: "UPDATEORDER", payload: order })
              } else {
                alert("מלא בבקשה את כתובת המשלוח");
              }
            }}
            // name=""
            className="w-fit flex items-center rounded-lg hover:border-cyan-600 border-2 p-1"
          >
            <p className="mx-3">משלוח אקספרס - מגיע לביתך תורך שעה</p>
            <BsFillClockFill className="text-red-700 " />
            <BsTextLeft className="text-red-700 " />
          </button>
          <div className="flex w-full justify-between">
            <ChoseDate
              order={order}
              setOrder={setOrder}
              callback={(dropDwon) => setDropDwon(dropDwon)}
            />
          </div>
          <ChoseTime
            order={order}
            setOrder={setOrder}
            callback={(dropDwon) => setDropDwon(dropDwon)}
          />
        </div>
      )}
    </>
  );
}
