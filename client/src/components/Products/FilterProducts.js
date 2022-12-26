import React from "react";
import { AiFillShop } from "react-icons/ai";
import { FiX } from "react-icons/fi";

const FilterProducts = ({setInputSearch,prodactLength}) => {
  return (
    <div>
      <div className="flex  flex-row-reverse items-center">
        <div className="flex justify-center w-full">
          <input
            onChange={(e) => setInputSearch(e.target.value)}
            type="text"
            placeholder="חפש לפי שם"
            className="border-2 w-8/12 p-2 rounded-md placeholder:text-center outline-none"
          />
        </div>
      </div>
      <div className=" flex flex-row-reverse">
        <AiFillShop className="text-2xl text-cyan-500 my-2" />
        <h1 className="text-2xl">נמצאו</h1>
        <h1 className="text-2xl text-cyan-500">{prodactLength}</h1>
        <h1 className="text-2xl">מוצרים בחנות זו </h1>
      </div>
    </div>
  );
};

export default FilterProducts;
