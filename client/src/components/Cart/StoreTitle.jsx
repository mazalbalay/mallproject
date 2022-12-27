import React from "react";

const StoreTitle = (store) => {
  return (
    <div className="flex justify-end bg-gray-200">
      <div className="name grid  place-content-center ">
        <h1 className="font-bold">{store.name}</h1>
      </div>
      <div className="right-img bg-gray-200 ">
        <img
          className="w-24 rounded-full p-3"
          src={store.image}
          alt={store.name}
        />
      </div>
    </div>
  );
};

export default StoreTitle;
