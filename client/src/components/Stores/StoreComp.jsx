import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { useNavigate  } from "react-router-dom";


export default function StoreComp(props) {
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex border-4 md:flex-row flex-col-reverse  w-[90%] md:h-[160px] h-[550px] md:my-2 mb-4 ">
        <div className="md:w-[70%] w-[100%] flex flex-col items-end text-right md:p-2">
          <div className="text-2xl font-medium mb-1">{props.name}</div>
          <div>(33)חוות דעת ***** </div>
          <div className="my-1">{props.desc}</div>
          <div className="flex justify-between w-[90%]">
            <button
                onClick={() => navigate(`/instore/${props.name}`)}
              className="p-3 bg-black text-white font-medium"
            >
              {" "}
              קנה בחנות זו
            </button>
            <div className="flex items-center md:flex-row flex-col ">
              <span>{props.location}</span>
              <FaAddressCard className="ml-3" size={25} />
            </div>
          </div>
        </div>
        <div className="md:w-[30%] w-[100%] ">
          <img
            className="w-[100%] md:w-[200px] h-full"
            src={props.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
