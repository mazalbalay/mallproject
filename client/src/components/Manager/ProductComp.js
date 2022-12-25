import React from "react";
import { Link } from "react-router-dom";
import {FiEdit} from "react-icons/fi";
import {BsTrash} from "react-icons/bs"

const Product = (props) => {
  const { product } = props;
  return (
    <>
  <div className=" flex justify-center w-72 h-72 m-5" style={{  
        backgroundImage: `url(${props.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
<div className="flex  self-end  h-20 bg-slate-200	w-full opacity-80">
  <p className="m-auto">{props.name}</p>
  <p className="m-auto">{props.desc}</p>
  <p className="m-auto">{props.price}</p>
</div>
    </div>
     
    </>
  );
};

export default Product;
