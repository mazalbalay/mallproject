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
 
  return (
   
    
    <div className="flex-col text-center w-full p-20">
      <div className="w-2/4 m-auto">
        <button
          className="w-full bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
          type="button"
          onClick={() => navigate(`${"/admin/Store/new"}`)}
        >
          + הוסף חנות
        </button>
        <div className="flex flex-wrap justify-around">
          <p className=" m-5 w-full bg-sky-300  text-white font-bold py-2 px-4 rounded ">נא לחץ על חנות כדי לשנות\למחוק</p>
          {Stores.map((dep) => (
            <div
              key={dep._id}
              onClick={() =>
                navigate(`${`/admin/Store/edit/${dep._id}`}`)
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
