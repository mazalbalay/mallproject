import React from 'react'
import { useState } from "react";
import { MdPlace } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

export default function Address() {
    const [dropDwon, setDropDwon] = useState(false);
    const [addNew, setAddNew] = useState(false);
    const [order, setOrder] = useState(false);
    const inputs = [
      { value: "עיר", valueEnglish: "city" },
      { value: "רחוב", valueEnglish: "street" },
      { value: "מספר", valueEnglish: "number" },
      { value: "מיקוד", valueEnglish: "postalCode" },
      { value: "שם חברה", valueEnglish: "shippingCompanyName" },
    ];
    const handleInput = (e) => {
      setOrder({
        ...order,
        addres: { ...order.addres, [e.target.name]: e.target.value },
      });
    };
  
  return (
    <div className='w-[100%]  md:w-[70%]  pt-10 flex flex-col text-right py-5 px-10  bg-white items-end '>
     <h1 className='text-2xl mb-5'>הכתובת שלי</h1>
   <div  onClick={()=>setAddNew(!addNew)} className='p-3 bg-gray-400 rounded font-medium '>הוסף כתובת חדשה</div>

{addNew ? 
     <div className="w-full  flex flex-col items-end  bg-white my-1">
      
          <div className="flex items-center">
            <h1 className="font-medium text-2xl">פרטי משלוח</h1>
          </div>
          <form className="w-full flex flex-col items-end" action="">
            <div className="w-full flex flex-col items-end ">
              {inputs.map((v, i) => {
                return (
                  <div key={i} className=" w-full items-end flex flex-col">
                    <h3>{v.value}</h3>
                    <input
                      onChange={(e) => handleInput(e)}
                      type="text"
                      name={v.valueEnglish}
                      placeholder="טקסט חופשי"
                      className="w-[100%] md:w-[50%] text-right  p-2 outline-none border-b-2 border-gray-200"
                    />
                  </div>
                );
              })}
            </div>
            <div className="w-full   mt-12">
              
              <button
                onClick={() => {
                  if (
                    order.addres.city &&
                    order.addres.street &&
                    order.addres.number &&
                    order.addres.postalCode &&
                    order.addres.shippingCompanyName
                  ) {
                    setDropDwon(!dropDwon);
                    setOrder({
                      ...order,
                      addres: { ...order.addres, allData: true },
                    });
                  } else {
                    alert("מלא את כל השדות");
                  }
                }}
                className=" rounded-md border-2 border-black px-10 py-3"
              >
                שמור
              </button>
            </div>
          </form>
        </div>: null}
<div className='flex flex-row-reverse justify-between w-[50%]  border-4 p-3 mt-3'>
  <div className='flex flex-col'>
    <span>שם</span>
    <span>רחוב</span>
    <span>עיר</span>
    <span>מיקוד</span>
    <span>מספר טלפון</span>
  </div>
  <div className='flex flex-col'>
    <span>מחק</span> 
    <span>ערוך</span> 
  </div>
</div>
  </div>
  )
}
