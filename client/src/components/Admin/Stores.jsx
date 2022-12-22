import React, { useState, useEffect } from "react";
import { getStores } from "../ApiCalls/Store";
import { useNavigate } from "react-router-dom";
import StoreComp from "./StoreComp";

export default function Stores() {
  const [Stores, setStores] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getStoresData = async () => {
      const result = await getStores();
      setStores(result.data);
    };
    getStoresData();
  }, []);
  function navigateTo(route) {
    navigate(`${route}`);
  }
  return (
    <div className="flex-col items-center w-full">
      <div className="w-2/4 m-auto">
        <button
          className=" bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
          type="button"
          onClick={() => navigateTo(`${"/Admin/Store/new"}`)}
        >
          + add Store
        </button>
        <div className=" flex flex-wrap">
          {Stores.map((dep) => (
            <div
              key={dep._id}
              onClick={() =>
                navigateTo(`${`/Admin/Store/edit/${dep._id}`}`)
              }
            >
              <StoreComp img={dep.image} text={dep.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
