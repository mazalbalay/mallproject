import React from "react";
import { useState } from "react";
import { MdPlace } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { useEffect } from "react";

export default function CheckOut1() {
  const [dropDwon, setDropDwon] = useState(false);
  const [addres, setAddres] = useState({
    city: "",
    stret: "",
    stret2: "",
    number: "",
    postalCode: "",
    shippingCompanyName: "",
  });

  useEffect(() => {
    console.log(addres);
  }, [dropDwon]);
  return (
    <>
      {dropDwon ? (
        <div className="w-full md:w-2/3 p-10 flex flex-col items-end justify-between bg-white my-1">
          <div className="w-full flex items-end justify-between bg-white my-1">
            <BsChevronDown
              className="md:text-3xl text-2xl"
              onClick={() => setDropDwon(!dropDwon)}
            />
            <div className="flex items-center">
              <h1 className="font-medium text-2xl">הוסף כתובת למשלוח</h1>
              <span>
                <MdPlace className="text-cyan-600 md:text-5xl text-3xl ml-4" />
              </span>
            </div>
          </div>
          <div className="md:mr-16 mr-10">
            <span>{addres.stret}</span>
            <span> {addres.stret2}</span>
            <span>{addres.number}</span>
            <span>{addres.postalCode}</span>
            <span>{addres.shippingCompanyName}</span>
          </div>
        </div>
      ) : (
        <div className="w-full md:w-2/3 min-h-screen p-10 flex flex-col items-end justify-between bg-white my-1">
          <div className="flex items-center">
            <h1 className="font-medium text-2xl">פרטי משלוח</h1>
            <span>
              <MdPlace className="text-cyan-600 text-5xl ml-4" />
            </span>
          </div>
          <div className="md:w-1/2 w-full flex flex-col my-2">
            <h3>עיר</h3>
            <input
              onChange={(e) => setAddres({ ...addres, city: e.target.value })}
              type="text"
              placeholder="טקסט חופשי"
              className="text-right border-b placeholder:text-right py-2"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col my-2">
            <h3>רחוב</h3>
            <input
              onChange={(e) => setAddres({ ...addres, stret: e.target.value })}
              type="text"
              placeholder="טקסט חופשי"
              className="text-right border-b placeholder:text-right py-2"
            />
          </div>

          <div className="md:w-1/2 w-full flex flex-col my-2">
            <h3>שדה רחוב2</h3>
            <input
              onChange={(e) => setAddres({ ...addres, stret2: e.target.value })}
              type="text"
              placeholder="טקסט חופשי"
              className="text-right border-b placeholder:text-right py-2"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col my-2">
            <h3>שם החברה למשלוח</h3>
            <input
              onChange={(e) =>
                setAddres({ ...addres, shippingCompanyName: e.target.value })
              }
              type="text"
              placeholder="טקסט חופשי"
              className="text-right border-b placeholder:text-right py-2"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col my-2">
            <h3>מיקוד</h3>
            <input
              onChange={(e) =>
                setAddres({ ...addres, postalCode: e.target.value })
              }
              type="text"
              placeholder="טקסט חופשי"
              className="text-right border-b placeholder:text-right py-2"
            />
          </div>

          <div className=" w-full md:w-1/2 flex justify-between items-center">
            <div>
              <a
                onClick={() =>
                  {setAddres({
                    city: "",
                    stret: "",
                    stret2: "",
                    number: "",
                    postalCode: "",
                    shippingCompanyName: "",
                  })
                }
                }
                className="border-b-2 border-black font-medium"
                href="#"
              >
                מחק כתובת זו
              </a>
            </div>
            <button
              onClick={() => setDropDwon(!dropDwon)}
              className="bg-cyan-600 rounded-md text-white px-10 py-3 "
            >
              שמור
            </button>
          </div>
        </div>
      )}
    </>
  );
}
