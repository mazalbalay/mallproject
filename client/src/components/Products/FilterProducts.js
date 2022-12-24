import React from "react";
import { AiFillShop } from "react-icons/ai";
import { FiX } from "react-icons/fi";

const FilterProducts = () => {
  return (
    <div>
      <div className="flex  flex-row-reverse items-center">
        <h1 className="text-2xl">:סנן תוצאות לפי</h1>
        <h5 className="text-cyan-500 underline">
          מודיעין
          <button>
            <FiX className="text-black" />
          </button>
        </h5>
        <h5 className="text-cyan-500 underline">
          נעליים
          <button>
            <FiX className="text-black" />
          </button>
        </h5>
      </div>
      <div className=" flex flex-row-reverse">
        <table className="table-auto flex-auto text-right">
          <thead>
            <tr>
              <th className="underline">סוגי מוצרים</th>
              <th className="underline">סוגי חנויות</th>
              <th className="underline"> יישובים</th>
              <th className="underline">אזורים</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-cyan-500">נעליים</td>
              <td className="text-cyan-500">נייק</td>
              <td className="text-cyan-500">אשדוד(32)</td>
              <td className="text-cyan-500">אזור המרכז(1223)</td>
            </tr>
            <tr>
              <td className="text-cyan-500">נעליים</td>
              <td className="text-cyan-500">נייק</td>
              <td className="text-cyan-500">תל אביב(21)</td>
              <td className="text-cyan-500">אזור השרון(849)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" flex flex-row-reverse">
        <AiFillShop className="text-2xl text-cyan-500 my-2" />
        <h1 className="text-2xl">נמצאו</h1>
        <h1 className="text-2xl text-cyan-500">58</h1>
        <h1 className="text-2xl">מוצרים בחנות זו </h1>
      </div>
    </div>
  );
};

export default FilterProducts;
