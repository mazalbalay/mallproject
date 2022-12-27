import React from "react";
import {  useNavigate } from "react-router-dom";


const ProductComp = (props) => {
  

  const navigateTo= useNavigate()


  return (
    <>
      <div className="text-center sm:mr-3 md:mr-7 lg:mr-10" key={props._id}>
        <div className="w-fullbg-slate-50 ring-2 ring-gray-300 shadow-lg mb-10  ">
          <img src={props.image} className="h-60 w-full container mx-auto " alt={props.name}   onClick={() =>
                  navigateTo(`${`/manager/products/edit/${props._id}`}`)
                }  />
          <div>
            <h5 className="lg:pb-2">{props.name.substring(0, 30)}...</h5>
            <p className="lg:pb-2">${props.price}</p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComp;
