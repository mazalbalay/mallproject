import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsTextLeft } from "react-icons/bs";

export default function CheckOut2() {
  return (
    <div className="w-full md:w-2/3 min-h-screen p-10 flex flex-col items-end justify-between bg-white my-1">
      <div className="flex items-center">
        <h1 className="text-2xl items-center">זמן משלוח</h1>
        <BsFillClockFill className="text-cyan-600 text-3xl ml-4" />
      </div>

      <p>בחר שעה למשלוח בחר שעה למשלוח בחר שעה למשלוח</p>

      <a
        href=""
        className="w-fit flex items-center rounded-lg border-cyan-600 border-2 p-1"
      >
        <p className="mx-3">משלוח אקספרס - מגיע לביתך תורך שעה</p>
        <BsFillClockFill className="text-red-700 " />
        <BsTextLeft className="text-red-700 " />
      </a>
      <div className="flex w-full md:w-1/2 justify-between">
        <button className="rounded-md bg-gray-200 text-cyan-600 md:w-20 w-14 h-16 hover:text-white hover:bg-cyan-600 hover:duration-500">
          <div>
            <p>ראשון</p>
            <p>25.12</p>
          </div>
        </button>
        <button className="rounded-md bg-gray-200 text-cyan-600 md:w-20 w-14 h-16 hover:text-white hover:bg-cyan-600 hover:duration-500">
          <div>
            <p>שני</p>
            <p>26.12</p>
          </div>
        </button>
        <button className="rounded-md bg-gray-200 text-cyan-600 md:w-20 w-14 h-16 hover:text-white hover:bg-cyan-600 hover:duration-500">
          <div>
            <p>שלישי</p>
            <p>27.12</p>
          </div>
        </button>
        <button className="rounded-md bg-gray-200 text-cyan-600 md:w-20 w-14 h-16 hover:text-white hover:bg-cyan-600 hover:duration-500">
          <div>
            <p>רביעי</p>
            <p>28.12</p>
          </div>
        </button>
        <button className="rounded-md bg-gray-200 text-cyan-600 md:w-20 w-14 h-16 hover:text-white hover:bg-cyan-600 hover:duration-500">
          <div>
            <p>חמישי</p>
            <p>29.12</p>
          </div>
        </button>
      </div>

      <div className=" w-full md:w-1/2">
        <div className="flex flex-row-reverse justify-between p-1 hover:bg-gray-100 hover:duration-500">
          <div className="flex flex-row-reverse md w-1/2 md:w-1/4 justify-between">
            <input type="radio" className="w-6 h-6" />
            <p>09:00-10:00</p>
          </div>
          <button className="text-cyan-600 border-2 border-cyan-600 px-5 rounded-md">
            בחר
          </button>
        </div>
        <div className="flex flex-row-reverse justify-between p-1 hover:bg-gray-100 hover:duration-500">
          <div className="flex flex-row-reverse w-1/2 md:w-1/4 justify-between">
            <input type="radio" className="w-6 h-6" />
            <p>10:00-11:00</p>
          </div>
          <button className="text-cyan-600 border-2 border-cyan-600 px-5 rounded-md">
            בחר
          </button>
        </div>
        <div className="flex flex-row-reverse justify-between p-1 hover:bg-gray-100 hover:duration-500">
          <div className="flex flex-row-reverse w-1/2 md:w-1/4 justify-between">
            <input type="radio" className="w-6 h-6" />
            <p>11:00-12:00</p>
          </div>
          <button className="text-cyan-600 border-2 border-cyan-600 px-5 rounded-md">
            בחר
          </button>
        </div>
        <div className="flex flex-row-reverse justify-between p-1 hover:bg-gray-100 hover:duration-500">
          <div className="flex flex-row-reverse w-1/2 md:w-1/4 justify-between">
            <input type="radio" className="w-6 h-6" />
            <p>12:00-13:00</p>
          </div>
          <button className="text-cyan-600 border-2 border-cyan-600 px-5 rounded-md">
            בחר
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="flex items-center flex-row-reverse font-medium">
          שעות נוספות <BsChevronDown />
        </button>
      </div>
    </div>
  );
}
