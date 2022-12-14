import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'

export default function ThanksPage({ setOrder, order }) {
  const navigetor = useNavigate()
  return (
    <div className=" w-full p-10 flex flex-col items-center justify-center bg-white my-1">
      <div className="md:w-2/3 w-full text-center h-screen flex flex-col items-center justify-center">
        <div className="w-full h-1/3 flex flex-col items-center justify-evenly">
          <BsCheck2Circle className="text-cyan-600 text-5xl" />
          <h1 className="text-4xl">תודה שהזמנת דרכינו!</h1>
          <p className="text-2xl">המשלוח בדרכו אליך</p>
        </div>
        <div className="w-full h-1/3 flex flex-col items-center justify-evenly border-t-2">
          <p>מספר הזמנה :{order?._id} </p>
          <button
          onClick={()=>{
            navigetor("/")
          }}
          className="bg-cyan-600 rounded-md text-white py-4 px-8  m-1 md:w-1/3 w-full">
            המשך לאתר
          </button>
        </div>
      </div>
    </div>
  );
}
