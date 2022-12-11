import React from "react";
import { MdPlace } from "react-icons/md";

export default function CheckOut1() {
  return (
    <div className="w-full md:w-2/3 min-h-screen p-10 flex flex-col items-end justify-between bg-white my-1">
      <div className="flex items-center">
        <h1 className="font-medium text-2xl">פרטי משלוח</h1>
        <span>
          <MdPlace className="text-cyan-600 text-5xl ml-4" />
        </span>
      </div>
      <div className=" w-full md:w-1/2 flex flex-col justify-between">
        <div className="flex flex-col my-2">
          <h3>רחוב</h3>
          <input
            type="text"
            placeholder="טקסט חופשי"
            className="border-b placeholder:text-right py-2"
          />
        </div>

        <div className="flex flex-col my-2">
          <h3>שדה רחוב2</h3>
          <input
            type="text"
            placeholder="טקסט חופשי"
            className="border-b placeholder:text-right py-2"
          />
        </div>
        <div className="flex flex-col my-2">
          <h3>שם החברה למשלוח</h3>
          <input
            type="text"
            placeholder="טקסט חופשי"
            className="border-b placeholder:text-right py-2"
          />
        </div>
        <div className="flex flex-col my-2">
          <h3>מיקוד</h3>
          <input
            type="text"
            placeholder="טקסט חופשי"
            className="border-b placeholder:text-right py-2"
          />
        </div>
        <div className="flex flex-col my-2">
          <h3>קנון מערכת</h3>
          <input
            type="text"
            placeholder="טקסט חופשי"
            className="border-b placeholder:text-right py-2"
          />
        </div>
      </div>
      <div className=" w-full md:w-1/2 flex justify-between items-center">
        <div>
          <a className="border-b-2 border-black font-medium" href="#">
            מחק כתובת זו
          </a>
        </div>

        <button className="bg-cyan-600 rounded-md text-white px-10 py-3 ">
          שמור
        </button>
      </div>
    </div>
  );
}
