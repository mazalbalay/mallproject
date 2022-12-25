import React from "react";

const Orders = () => {
  const data = [
    {
        id:1,
      orderNum: 6574,
      date: 22/12/2022,
      total: 500,
      numberOfProducts: 10,
      status: "Deliverd",
    },
  ];
  return (
    <div className="by-cyan-900 flex jusfify-center items-center container mx-auto h-screen">
      <table className="sahdow-2xl font-semibold border-2 border-cyan-200 w-10/12">
        <thead className="text-white text-xl">
          <tr>
            <th className="py-3  bg-cyan-800">Order Number</th>
            <th className="py-3 bg-cyan-800">Date</th>
            <th className="py-3 bg-cyan-800">Number of productsSta</th>
            <th className="py-3 bg-cyan-800">Status</th>
          </tr>
        </thead>
        <tbody className="text-cyan-900 text-center">
          {data.map((item) => {
            return (
              <tr  key={item.id} className="bg-cyan-200 cursor-pointer duration-300 hover:bg-sky-200">
                <td className="py-3 px-6">{item.orderNum}</td>
                <td className="py-3 px-6">{item.date}</td>
                <td className="py-3 px-6">{item.numberOfProducts}</td>
                <td className="py-3 px-6">{item.status}</td>
              </tr>
            );
          })}{" "}
          {data.map((item) => {
            return (
              <tr  key={item.id} className="bg-cyan-200 cursor-pointer duration-300  hover:bg-sky-200">
                <td className="py-3 px-6">{item.orderNum}</td>
                <td className="py-3 px-6">{item.date}</td>
                <td className="py-3 px-6">{item.numberOfProducts}</td>
                <td className="py-3 px-6">{item.status}</td>
              </tr>
            );
          })}
          {data.map((item) => {
            return (
              <tr key={item.id} className="bg-cyan-200 cursor-pointer duration-300  hover:bg-sky-200">
                <td className="py-3 px-6">{item.orderNum}</td>
                <td className="py-3 px-6">{item.date}</td>
                <td className="py-3 px-6">{item.numberOfProducts}</td>
                <td className="py-3 px-6">{item.status}</td>
              </tr>
            );
          })}
          {data.map((item) => {
            return (
              <tr  key={item.id} className="bg-cyan-200 cursor-pointer duration-300  hover:bg-sky-200">
                <td className="py-3 px-6">{item.orderNum}</td>
                <td className="py-3 px-6">{item.date}</td>
                <td className="py-3 px-6">{item.numberOfProducts}</td>
                <td className="py-3 px-6">{item.status}</td>
              </tr>
            );
          })}
          {data.map((item) => {
            return (
              <tr  key={item.id} className="bg-cyan-200 cursor-pointer duration-300  hover:bg-sky-200">
                <td className="py-3 px-6">{item.orderNum}</td>
                <td className="py-3 px-6">{item.date}</td>
                <td className="py-3 px-6">{item.numberOfProducts}</td>
                <td className="py-3 px-6">{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
