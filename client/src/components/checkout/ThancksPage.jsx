import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'

export default function ThancksPage({ setOrder, order }) {
  const navigetor = useNavigate()
  return (
    <div className="bg-white h-screen w-2/3 flex flex-col items-center">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="w-full h-1/3 flex flex-col items-center justify-evenly">
          <BsCheck2Circle className="text-cyan-600 text-5xl" />
          <h1 className="text-4xl">תודה שהזמנת דרכינו!</h1>
          <p className="text-2xl">המשלוח בדרכו אליך</p>
        </div>
        <div className="w-full h-1/3 flex flex-col items-center justify-evenly border-t-2">
          <p>מספר הזמנה :{order.id} </p>
          <button
          onClick={()=>{
            navigetor("/")
          }}
          className="bg-cyan-600 rounded-md text-white py-4 px-8  m-1 w-1/3">
            המשך לאתר
          </button>
        </div>
      </div>
    </div>
  );
}
