import React from "react";
import { HiCreditCard } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
// import PaypalCheckOutButton from "./PaypalCheckOutButton";

export default function CheckOut3({ setOrder, order }) {
  const product = {
    description: "description",
    price: 19,
  };
  return (
    <div className="w-full md:w-2/3 min-h-screen p-10 flex flex-col items-end justify-between bg-white my-4">
      <div className="flex items-center">
        <h1 className="font-medium text-2xl">פרטי תשלום</h1>
        <HiCreditCard className="text-cyan-600 text-4xl ml-4" />
      </div>
      <div>
        {/* <div className="flex items-center">
          <p className="mx-2 font-bold"> ****-****-****-8888</p>
          <input type="radio" className="w-6 h-6" />
        </div>
        <div className="flex items-center">
          <p className="mx-2 font-bold"> ****-****-****-8754</p>
          <input type="radio" className="w-6 h-6" />
        </div> */}
      </div>
      <div className="flex items-center font-medium">
        <p className="border-b border-black">הוסף אמצעי תשלום אחר</p>
        <AiOutlinePlus />
      </div>
      <div className=" w-full md:w-2/3 h-1/2 flex flex-col justify-between items-end">
        <div className="w-full">
          <h3>מספר כרטיס</h3>
          <input
            type="password"
            placeholder="3434-3434-3434-3434"
            className="border-b placeholder:text-right outline-none p-3 w-fit"
          />
        </div>
        <div className="w-full">
          <h3>תוקף</h3>
          <input
            type="text"
            placeholder="34 / 02"
            className=" border-b placeholder:text-right outline-none p-2 my-1 w-16"
          />
        </div>
        <div className="w-full">
          <h3>3 ספרות מאחורי הכרטיס CW</h3>
          <input
            type="text"
            placeholder="321"
            className="border-b placeholder:text-right outline-none p-2 my-1 w-16"
          />
        </div>
      </div>
      <div className="flex flex-col w-2/3 items-end">
        <button className="bg-cyan-600 rounded-md text-white py-4 px-8  m-1 w-2/3">
          אישור קנייה
        </button>
        <button className=" mx-1 py-1 w-2/3">
          {/* <PaypalCheckOutButton product={product}/> */}
        </button>
      </div>
    </div>
  );
}
