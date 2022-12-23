import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { AiFillShop, AiOutlinePlusCircle } from "react-icons/ai";
import { allStores } from "../../api/userApi";
import { FaAddressCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const StoreComp = () => {
  const navigate = useNavigate()
  const [stores, setStores] = useState();
  const [location, setvalue] = useState('');
  const [filtered, setFiltered] = useState(); 
 const storesFu = async () => {
    const { data } = await allStores();
    setStores(data);
  };
  
  useEffect(() => {
    storesFu();
  }, []);

  return (
    <div>
      <header className="p-20 bg-[url('https://a7.org/pictures/000/979372.jpg')]">
        <h1 className="text-white  text-2xl text-center">
          קטגוריה ירקות טריים
        </h1>
      </header>
      <div className="flex justify-center p-10">
        <p className=" text-2xl">רשימת חנויות בקטגוריה</p>
      </div>
      <div className="md:w-[45%] m-auto md:m-0 w-[90%]  absolute right-0">
        <div className="flex  flex-row-reverse items-center">
          <h1 className="text-2xl">:סנן תוצאות לפי</h1>
          <span onClick={() => setvalue("")} className="flex items-center">
            {location === "" ? null : <FiX size={10} />}
            {location}
          </span>
        </div>
        <div className="flex justify-end">
          <div className=" flex text-right flex-row-reverse w-[30%]">
            <ul className="text-cyan-500">
              <input
                type={"button"}
                onClick={(e) => setvalue(e.target.value)}
                value={"אזור השרון "}
              />
              <input
                type={"button"}
                onClick={(e) => setvalue(e.target.value)}
                value={"אזור המרכז "}
              />
              <li>אזור השרון</li>
            </ul>
            <ul className="text-cyan-500">
              <li className="underline text-lg">ישוב</li>
              <input
                type={"button"}
                onClick={(e) => {setvalue(e.target.value)}}
                value={"רחובות"}
              />
              <input
                type={"button"}
                onClick={(e) => {setvalue(e.target.value)}}
                value={"אשקלון"}
              />
              <input
                type={"button"}
                onClick={(e) => setvalue(e.target.value)}
                value={"אשדוד"}
              />
            </ul>
          </div>
        </div>
        <div className=" flex flex-row-reverse my-2">
          <AiFillShop className="text-2xl text-cyan-500 my-2" />
          <h1 className="text-2xl">נמצאו</h1>
          <h1 className="text-2xl mx-2 text-cyan-500">{stores?.length}</h1>
          <h1 className="text-2xl">מוצרים בחנות זו </h1>
        </div>

        <div className="  w-[100%] ">
          {stores?.filter((store) =>{
            if(location === '' )
            return store
            else if(store.location === location)
             return store
          
})
  .map((store) => (
            <div
              key={store.id}
              className="flex border-4 md:flex-row flex-col-reverse  w-[90%] md:h-[160px] h-[550px] md:my-2 mb-4 "
            >
              <div className="md:w-[70%] w-[100%] flex flex-col items-end text-right md:p-2">
                <div className="text-2xl font-medium mb-1">{store.name}</div>
                <div>(33)חוות דעת ***** </div>
                <div className="my-1">{store.description}</div>
                <div className="flex justify-between w-[90%]">
                  <button onClick={()=>navigate(`/instore/${store.name}`)} className="p-3 bg-black text-white font-medium">
                    {" "}
                    קנה בחנות זו
                  </button>
                  <div className="flex items-center md:flex-row flex-col ">
                    <span>{store.location}</span>
                    <FaAddressCard className="ml-3" size={25} />
                  </div>
                </div>
              </div>
              <div className="md:w-[30%] w-[100%] ">
                <img
                  className="w-[100%] md:w-[200px] h-full"
                  src={store.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-gray-400 flex justify-center my-3">
          <AiOutlinePlusCircle size={60} />
        </div>
      </div>
    </div>
  );
};

export default StoreComp;
