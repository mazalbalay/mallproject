import React, { useState, useEffect } from "react";
import { getStores } from "../ApiCalls/Store";
import { useNavigate } from "react-router-dom";
import StoreComp from "../Admin/StoreComp";
import MainPageFooter from "../Footers/MainPageFooter";

export default function Stores() {
    const [Stores, setStores] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getStoresData = async () => {
      const result = await getStores();
    //////פילטר לפי מנהל
      setStores(result.data);
    };
    getStoresData(Stores);
  }, []);
  console.log();
  return (
    <div>

    
    <div className="flex-col text-center w-full p-20">
      <div className="w-2/4 m-auto">
        <div className=" flex flex-wrap">
          {Stores.map((store) => (
            <div
              key={store._id}
              onClick={() =>
                navigate(`${`/manager/stores/${store.name}`}`)
              }
            >
              <StoreComp store={store} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <MainPageFooter/>
    </div>
  )
}
