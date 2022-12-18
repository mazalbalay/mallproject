import React from "react";
import { useState } from "react";
import { MdPlace } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

export default function CheckOut1({ setOrder, order }) {
  const [dropDwon, setDropDwon] = useState(false);
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
    <>
      {dropDwon ? (
        <div className="w-full md:w-2/3 p-5 flex flex-col items-end justify-between bg-white my-1">
          <div className="w-full flex items-end justify-between bg-white my-1">
            <BsChevronDown
              className="md:text-3xl text-2xl"
              onClick={() => setDropDwon(!dropDwon)}
            />
            <div className="flex items-center">
              <h1 className="font-medium text-2xl">הוסף כתובת למשלוח</h1>
              <span>
                <MdPlace className="text-cyan-600 text-4xl ml-4" />
              </span>
            </div>
          </div>
          <div className="md:mr-12 mr-10">
            כתובת:
            <span> {order.addres.city} </span>
            <span> {order.addres.street} </span>
            <span> {order.addres.number} </span>
            <span> {order.addres.postalCode} </span>, שם חברה/לקוח:
            <span> {order.addres.shippingCompanyName} </span>
          </div>
        </div>
      ) : (
        <div className="w-full md:w-2/3 min-h-screen p-10 flex flex-col items-end justify-evenly bg-white my-1">
          <div className="flex items-center">
            <h1 className="font-medium text-2xl">פרטי משלוח</h1>
            <span>
              <MdPlace className="text-cyan-600 text-5xl ml-4" />
            </span>
          </div>
          <form className="w-full flex flex-col items-end" action="">
            <div className="w-full flex flex-col items-end ">
              {inputs.map((v, i) => {
                return (
                  <div key={i} className="md:w-2/3 w-full flex flex-col my-2">
                    <h3>{v.value}</h3>
                    <input
                      onChange={(e) => handleInput(e)}
                      type="text"
                      name={v.valueEnglish}
                      placeholder="טקסט חופשי"
                      className="text-right border-b placeholder:text-right py-2"
                    />
                  </div>
                );
              })}
            </div>
            <div className="w-full md:w-2/3 flex justify-between items-center mt-12">
              <div>
                <button className="border-b-2 border-black font-medium">
                  מחק כתובת זו
                </button>
              </div>
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
                className="bg-cyan-600 rounded-md text-white px-10 py-3"
              >
                שמור
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
