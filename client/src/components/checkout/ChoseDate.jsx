import React, { useState } from "react";

export default function ChoseDate({ setOrder, order, callback }) {
  const [date, setDate] = useState([
    {
      value: "ראשון 01/12",
      boolean: false,
    },
    {
      value: "שני 02/12",
      boolean: false,
    },
    {
      value: "שלישי 03/12",
      boolean: false,
    },
    {
      value: "רביעי 04/12",
      boolean: false,
    },
    {
      value: "חמישי 05/12",
      boolean: false,
    },
  ]);
  const updateOrder = (e, v, i) => {
    setOrder({
      ...order,
      shipping: {
        ...order.shipping,
        [e.target.name]: e.target.value,
      },
    });
    date[0].boolean = false;
    date[1].boolean = false;
    date[2].boolean = false;
    date[3].boolean = false;
    date[4].boolean = false;
    v.boolean = !v.boolean;
  };

  return (
    <div className="flex w-full md:w-full justify-between">
      {date.map((v, i) => {
        return (
          <div key={i}>
            {v.boolean ? (
              <input
                className="rounded-md bg-cyan-600 text-white md:w-24 w-20 h-16"
                key={i}
                onClick={(e) => {
                  updateOrder(e, v);
                }}
                type="button"
                name="date"
                value={v.value}
              />
            ) : (
              <input
                className="rounded-md bg-gray-200 text-cyan-600 md:w-24 w-20 h-16 border-2  hover:border-cyan-600 hover:duration-500"
                key={i}
                onClick={(e) => {
                  updateOrder(e, v);
                }}
                type="button"
                name="date"
                value={v.value}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
